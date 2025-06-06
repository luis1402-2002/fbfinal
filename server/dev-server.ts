#!/usr/bin/env tsx
import { spawn } from 'child_process';
import { watch } from 'fs';
import path from 'path';

let serverProcess: any = null;
let isRestarting = false;

const startServer = () => {
  if (isRestarting) return;
  isRestarting = true;

  // Kill existing server if running
  if (serverProcess) {
    console.log('🔄 Stopping server...');
    serverProcess.kill('SIGTERM');
  }

  // Start new server process
  console.log('🚀 Starting development server...');
  serverProcess = spawn('tsx', ['server/index.ts'], {
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'development' },
    shell: true
  });

  serverProcess.on('exit', (code: number) => {
    if (code !== 0 && !isRestarting) {
      console.error(`❌ Server crashed with code ${code}`);
      console.log('🔄 Restarting in 2 seconds...');
      setTimeout(() => {
        isRestarting = false;
        startServer();
      }, 2000);
    }
  });

  serverProcess.on('error', (error: Error) => {
    console.error('❌ Failed to start server:', error);
    console.log('🔄 Retrying in 2 seconds...');
    setTimeout(() => {
      isRestarting = false;
      startServer();
    }, 2000);
  });

  isRestarting = false;
};

// Watch server files for changes
const watchPaths = [
  path.join(process.cwd(), 'server'),
  path.join(process.cwd(), 'shared'),
];

const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const restartServer = debounce(() => {
  console.log('📝 File changed, restarting server...');
  startServer();
}, 500);

// Set up file watchers
watchPaths.forEach(watchPath => {
  watch(watchPath, { recursive: true }, (eventType, filename) => {
    if (filename && (filename.endsWith('.ts') || filename.endsWith('.js'))) {
      restartServer();
    }
  });
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('\n👋 Shutting down development server...');
  if (serverProcess) {
    serverProcess.kill('SIGTERM');
  }
  process.exit(0);
});

process.on('SIGTERM', () => {
  if (serverProcess) {
    serverProcess.kill('SIGTERM');
  }
  process.exit(0);
});

// Start the server
startServer();
console.log('👀 Watching for file changes...');