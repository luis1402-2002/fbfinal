import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import { nanoid } from "nanoid";

const viteLogger = createLogger();

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        // Log the error but don't exit the process
        viteLogger.error(msg, options);
        // Only exit on critical errors that prevent server startup
        if (msg.includes('Failed to resolve') || msg.includes('EADDRINUSE')) {
          console.error('Critical error, exiting...');
          process.exit(1);
        }
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html",
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      const error = e as Error;
      console.error('Vite transformation error:', error.message);
      
      // Don't crash the server, send an error page instead
      if (!res.headersSent) {
        res.status(500).send(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>Development Error</title>
              <style>
                body { font-family: sans-serif; padding: 20px; }
                pre { background: #f4f4f4; padding: 20px; overflow: auto; }
                h1 { color: #e74c3c; }
              </style>
            </head>
            <body>
              <h1>Development Server Error</h1>
              <p>An error occurred while processing your request:</p>
              <pre>${error.stack || error.message}</pre>
              <p>Please fix the error and the page will automatically reload.</p>
            </body>
          </html>
        `);
      }
    }
  });
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(import.meta.dirname, "public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
