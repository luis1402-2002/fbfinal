import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import ProductsPagePremium from "@/pages/ProductsPagePremium";
import GearPumpVariationsPage from "@/pages/GearPumpVariationsPage";
import GearPumpSpecificationsPage from "@/pages/GearPumpSpecificationsPage";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { useEffect } from "react";
import { initScrollProgress } from "@/lib/scroll-progress";

function Router() {
  const [location, setLocation] = useLocation();
  
  useEffect(() => {
    // Redirecionamento para seções específicas com hash no URL
    if (location.startsWith('/empresa') || 
        location.startsWith('/calculadora') || 
        location.startsWith('/downloads') || 
        location.startsWith('/contato')) {
      
      // Extrair a seção da URL
      const section = location.slice(1);
      // Redirecionar para a home com o hash
      setLocation(`/#${section}`);
      
      // Aguardar a renderização e rolar para a seção correspondente
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location, setLocation]);

  return (
    <Switch>
      {/* Home page */}
      <Route path="/" component={HomePage} />
      
      {/* Página de produtos */}
      <Route path="/produtos" component={ProductsPagePremium} />
      
      {/* Rotas para bombas de engrenagem */}
      <Route path="/produtos/bombas-engrenagem/:diameter" component={GearPumpVariationsPage} />
      <Route path="/produtos/bombas-engrenagem/:diameter/especificacoes" component={GearPumpSpecificationsPage} />
      <Route path="/produtos/bombas-engrenagem/:diameter/:modelId/especificacoes" component={GearPumpSpecificationsPage} />
      
      {/* Redireciona rota antiga de produtos */}
      <Route path="/produtos/fbe/:id">
        {() => {
          window.location.href = '/produtos#engrenagem';
          return null;
        }}
      </Route>
      
      {/* Compatibilidade com rotas antigas - redireciona para produtos */}
      <Route path="/bombas-de-engrenagem">
        {() => {
          window.location.href = '/produtos';
          return null;
        }}
      </Route>
      <Route path="/bombas-centrifugas">
        {() => {
          window.location.href = '/produtos';
          return null;
        }}
      </Route>
      
      {/* Rotas para seções específicas - serão redirecionadas para a home com hash */}
      <Route path="/empresa" component={HomePage} />
      <Route path="/calculadora" component={HomePage} />
      <Route path="/downloads" component={HomePage} />
      <Route path="/contato" component={HomePage} />
      
      {/* Fallback para 404 */}
      <Route>
        {() => <NotFound />}
      </Route>
    </Switch>
  );
}

function App() {
  useEffect(() => {
    // Initialize scroll progress and clean up on unmount
    const cleanup = initScrollProgress();
    return cleanup;
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
