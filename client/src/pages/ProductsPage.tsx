import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Helmet } from 'react-helmet';
import { 
  Cog,
  Droplets,
  ArrowRight,
  MessageCircle,
  Thermometer,
  Gauge,
  Settings,
  ChevronRight,
  Phone,
  Info,
  FileText,
  Download,
  Wrench,
  Mail
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { cn } from '../lib/utils';
import { gearPumpsComplete, fbeSeriesFeatures, fbeApplications } from '../data/gearPumpsComplete';
import { centrifugalPumpsComplete } from '../data/centrifugalPumpsComplete';

// Group pumps by category
const smallPumps = gearPumpsComplete.filter(pump => 
  ['1/8"', '1/4"', '3/8"', '1/2"', '3/4"'].includes(pump.diameter)
);

const largePumps = gearPumpsComplete.filter(pump => 
  ['1"', '2"', '3"', '4"'].includes(pump.diameter)
);


const ProductsPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [location, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState('gear');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      language === 'pt' ? 'Olá! Gostaria de mais informações sobre os produtos FB Bombas.' :
      language === 'en' ? 'Hello! I would like more information about FB Bombas products.' :
      '¡Hola! Me gustaría más información sobre los productos FB Bombas.'
    );
    window.open(`https://wa.me/5511972874837?text=${message}`, '_blank');
  };

  const handleGearPumpClick = (diameter: string, modelCount: number) => {
    const cleanDiameter = diameter.replace(/"/g, '');
    if (modelCount === 1) {
      // Single model - go directly to specifications
      setLocation(`/produtos/bombas-engrenagem/${cleanDiameter}/especificacoes`);
    } else {
      // Multiple models - go to selection page
      setLocation(`/produtos/bombas-engrenagem/${cleanDiameter}`);
    }
  };

  return (
    <>
      <Helmet>
        <title>Produtos - FB Bombas | Bombas Industriais de Alta Qualidade</title>
        <meta name="description" content="Conheça nossa linha completa de bombas industriais: bombas de engrenagem FBE e bombas centrífugas FBCN e FBOT para diversas aplicações." />
      </Helmet>

      <Header />
      
      <div className="min-h-screen bg-white dark:bg-slate-900">
        {/* Hero Section - Matching homepage style */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-slate-900 dark:from-slate-950 via-slate-800 dark:via-slate-900 to-slate-700 dark:to-slate-800">
          <div className="absolute inset-0 z-1">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/15 via-transparent to-red-950/15" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-laranja" />
                <span className="text-laranja uppercase tracking-[0.2em] font-medium text-sm sm:text-base">
                  {language === 'pt' ? 'PRODUTOS FB BOMBAS' :
                   language === 'en' ? 'FB BOMBAS PRODUCTS' :
                   'PRODUCTOS FB BOMBAS'}
                </span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-laranja" />
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-relaxed font-light">
                <span className="block">
                  {language === 'pt' ? 'Nossa Linha Completa' :
                   language === 'en' ? 'Our Complete Line' :
                   'Nuestra Línea Completa'}
                </span>
                <span className="block font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent pb-2">
                  {language === 'pt' ? 'de Produtos' :
                   language === 'en' ? 'of Products' :
                   'de Productos'}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                {language === 'pt' ? 'Soluções especializadas em bombeamento industrial com tecnologia de ponta e qualidade garantida para os mais exigentes processos.' :
                 language === 'en' ? 'Specialized industrial pumping solutions with cutting-edge technology and guaranteed quality for the most demanding processes.' :
                 'Soluciones especializadas en bombeo industrial con tecnología de punta y calidad garantizada para los procesos más exigentes.'}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content with Tabs */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 mb-12 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                  <TabsTrigger 
                    value="gear" 
                    className="flex items-center gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:shadow-lg transition-all duration-300"
                  >
                    <Cog className="w-5 h-5" />
                    <span className="font-semibold">
                      {language === 'pt' ? 'Bombas de Engrenagem' :
                       language === 'en' ? 'Gear Pumps' :
                       'Bombas de Engranaje'}
                    </span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="centrifugal" 
                    className="flex items-center gap-2 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:shadow-lg transition-all duration-300"
                  >
                    <Droplets className="w-5 h-5" />
                    <span className="font-semibold">
                      {language === 'pt' ? 'Bombas Centrífugas' :
                       language === 'en' ? 'Centrifugal Pumps' :
                       'Bombas Centrífugas'}
                    </span>
                  </TabsTrigger>
                </TabsList>

                {/* Gear Pumps Tab */}
                <TabsContent value="gear" className="mt-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key="gear"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* FBE Series Header */}
                      <div className="text-center mb-12">
                        <Badge className="mb-4 bg-azul-profundo text-white">
                          {language === 'pt' ? 'SÉRIE FBE' :
                           language === 'en' ? 'FBE SERIES' :
                           'SERIE FBE'}
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-azul-profundo dark:text-white mb-4">
                          {language === 'pt' ? 'Bombas de Engrenagem Externa' :
                           language === 'en' ? 'External Gear Pumps' :
                           'Bombas de Engranaje Externo'}
                        </h2>
                        <p className="text-lg text-cinza-titanio dark:text-prata/90 max-w-3xl mx-auto">
                          {language === 'pt' ? 'Soluções de alta precisão para transferência de fluidos viscosos, óleos e aplicações que exigem vazão constante.' :
                           language === 'en' ? 'High precision solutions for viscous fluid transfer, oils and applications requiring constant flow.' :
                           'Soluciones de alta precisión para transferencia de fluidos viscosos, aceites y aplicaciones que requieren flujo constante.'}
                        </p>
                      </div>

                      {/* Premium Small Pumps Section */}
                      <div className="mb-16">
                        <div className="text-center mb-10">
                          <h3 className="text-3xl font-bold text-azul-profundo dark:text-white mb-3">
                            {language === 'pt' ? 'Bombas de Pequeno Porte' :
                             language === 'en' ? 'Small Size Pumps' :
                             'Bombas de Pequeño Porte'}
                          </h3>
                          <p className="text-lg text-cinza-titanio dark:text-prata/80 max-w-2xl mx-auto">
                            {language === 'pt' ? 'Soluções compactas para aplicações de precisão' :
                             language === 'en' ? 'Compact solutions for precision applications' :
                             'Soluciones compactas para aplicaciones de precisión'}
                          </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                          {smallPumps.map((pump, index) => (
                            <motion.div
                              key={pump.diameter}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              whileHover={{ y: -5 }}
                            >
                              <Card 
                                className="group cursor-pointer hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 overflow-hidden h-full"
                                onClick={() => handleGearPumpClick(pump.diameter, pump.models.length)}
                              >
                                {/* Premium gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-laranja/0 via-laranja/5 to-vermelho/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                {/* Image placeholder with gear icon */}
                                <div className="relative h-40 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800">
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <Cog className="w-20 h-20 text-slate-300 dark:text-slate-600 group-hover:text-laranja/30 transition-all duration-300 group-hover:rotate-90" />
                                  </div>
                                  <Badge className="absolute top-3 right-3 bg-vermelho text-white">
                                    FBE
                                  </Badge>
                                </div>
                                
                                <CardContent className="relative p-5">
                                  {/* Diameter Display */}
                                  <div className="text-center mb-3">
                                    <h4 className="text-2xl font-bold text-azul-profundo dark:text-white group-hover:text-laranja transition-colors duration-300">
                                      {pump.diameter}
                                    </h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                                      {pump.models[0].code}
                                    </p>
                                  </div>

                                  {/* Quick specs */}
                                  <div className="space-y-2 mb-4">
                                    <div className="flex items-center justify-between text-xs">
                                      <span className="text-slate-600 dark:text-slate-400">
                                        {language === 'pt' ? 'Vazão' : 'Flow'}
                                      </span>
                                      <span className="font-semibold text-azul-profundo dark:text-white">
                                        {pump.models[0].specifications.maxFlow}
                                      </span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs">
                                      <span className="text-slate-600 dark:text-slate-400">
                                        {language === 'pt' ? 'Pressão' : 'Pressure'}
                                      </span>
                                      <span className="font-semibold text-azul-profundo dark:text-white">
                                        {pump.models[0].specifications.maxPressure}
                                      </span>
                                    </div>
                                  </div>

                                  {/* CTA */}
                                  <div className="flex items-center justify-center text-laranja group-hover:text-vermelho transition-colors duration-300">
                                    <span className="text-sm font-medium mr-2">
                                      {language === 'pt' ? 'Detalhes' : 'Details'}
                                    </span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                  </div>
                                </CardContent>
                              </Card>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Premium Large Pumps Section */}
                      {['1"', '1.1/2"', '2"', '3"', '4"'].map((diameter) => {
                        const pumpsForDiameter = largePumps.filter(p => p.diameter === diameter);
                        if (pumpsForDiameter.length === 0) return null;
                        
                        const totalMaxFlow = pumpsForDiameter[0].models.reduce((max, model) => {
                          const flow = parseFloat(model.specifications.maxFlow.replace(/[^\d,]/g, '').replace(',', '.'));
                          return flow > max ? flow : max;
                        }, 0);
                        
                        return (
                          <div key={diameter} className="mb-16">
                            <div className="flex items-center justify-between mb-8">
                              <div>
                                <h3 className="text-3xl font-bold text-azul-profundo dark:text-white">
                                  {language === 'pt' ? `Diâmetro ${diameter}` :
                                   language === 'en' ? `Diameter ${diameter}` :
                                   `Diámetro ${diameter}`}
                                </h3>
                                <p className="text-lg text-cinza-titanio dark:text-prata/80 mt-2">
                                  {language === 'pt' ? `${pumpsForDiameter[0].models.length} modelos disponíveis • Vazão até ${totalMaxFlow.toFixed(0)} L/min` :
                                   language === 'en' ? `${pumpsForDiameter[0].models.length} models available • Flow up to ${totalMaxFlow.toFixed(0)} L/min` :
                                   `${pumpsForDiameter[0].models.length} modelos disponibles • Caudal hasta ${totalMaxFlow.toFixed(0)} L/min`}
                                </p>
                              </div>
                              <Badge className="bg-gradient-to-r from-azul-profundo to-azul-profundo/80 text-white text-lg px-4 py-2">
                                {pumpsForDiameter[0].models.length === 1 ? 'Único' : 'Múltiplos'}
                              </Badge>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                              {pumpsForDiameter[0].models.map((model, index) => (
                              <motion.div
                                key={model.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                              >
                                <Card 
                                  className="group cursor-pointer hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white via-white to-slate-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 overflow-hidden h-full"
                                  onClick={() => setLocation(`/produtos/bombas-engrenagem/${diameter.replace(/"/g, '')}/${model.id}/especificacoes`)}
                                >
                                  {/* Premium overlay */}
                                  <div className="absolute inset-0 bg-gradient-to-br from-azul-profundo/0 via-azul-profundo/5 to-laranja/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                  
                                  {/* Image section */}
                                  <div className="relative h-48 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 dark:from-slate-700 dark:via-slate-800 dark:to-slate-700">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                      <Cog className="w-24 h-24 text-slate-300 dark:text-slate-600 group-hover:text-laranja/40 transition-all duration-300 group-hover:rotate-180" style={{ transitionDuration: '1s' }} />
                                    </div>
                                    <Badge className="absolute top-4 left-4 bg-vermelho text-white">
                                      FBE
                                    </Badge>
                                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full px-3 py-1">
                                      <span className="text-xs font-semibold text-azul-profundo dark:text-white">
                                        {model.code}
                                      </span>
                                    </div>
                                  </div>
                                  
                                  <CardContent className="relative p-6 h-full flex flex-col">
                                    {/* Model Name */}
                                    <div className="text-center mb-4">
                                      <h4 className="text-2xl font-bold text-azul-profundo dark:text-white group-hover:text-laranja transition-colors duration-300">
                                        {model.model}
                                      </h4>
                                    </div>

                                    {/* Specifications Grid */}
                                    <div className="grid grid-cols-2 gap-3 mb-4 flex-grow">
                                      <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3">
                                        <div className="flex items-center gap-2 mb-1">
                                          <Droplets className="w-4 h-4 text-laranja" />
                                          <span className="text-xs text-slate-600 dark:text-slate-400">
                                            {language === 'pt' ? 'Vazão' : 'Flow'}
                                          </span>
                                        </div>
                                        <p className="text-sm font-semibold text-azul-profundo dark:text-white">
                                          {model.specifications.maxFlow}
                                        </p>
                                      </div>
                                      
                                      <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3">
                                        <div className="flex items-center gap-2 mb-1">
                                          <Gauge className="w-4 h-4 text-laranja" />
                                          <span className="text-xs text-slate-600 dark:text-slate-400">
                                            {language === 'pt' ? 'Pressão' : 'Pressure'}
                                          </span>
                                        </div>
                                        <p className="text-sm font-semibold text-azul-profundo dark:text-white">
                                          {model.specifications.maxPressure}
                                        </p>
                                      </div>
                                    </div>

                                    {/* CTA Button */}
                                    <Button 
                                      variant="ghost"
                                      className="w-full mt-2 group-hover:bg-laranja group-hover:text-white transition-all duration-300"
                                    >
                                      <span className="mr-2">{language === 'pt' ? 'Especificações' : 'Specifications'}</span>
                                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Button>
                                  </CardContent>
                                </Card>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      );
                    })}

                      {/* Additional Info */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-16"
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                          {/* Features Card */}
                          <Card className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800/50 dark:to-slate-900/50 border-slate-200 dark:border-slate-700 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-laranja/5 to-transparent opacity-50" />
                            <CardContent className="relative p-8">
                              <Info className="w-10 h-10 text-laranja mb-4" />
                              <h3 className="text-2xl font-bold text-azul-profundo dark:text-white mb-4">
                                {language === 'pt' ? 'Características da Série FBE' :
                                 language === 'en' ? 'FBE Series Features' :
                                 'Características de la Serie FBE'}
                              </h3>
                              <ul className="space-y-3 text-cinza-titanio dark:text-prata/90">
                                {fbeSeriesFeatures[language].map((feature, idx) => (
                                  <li key={idx} className="flex items-start gap-3">
                                    <ChevronRight className="w-5 h-5 text-laranja mt-0.5 flex-shrink-0" />
                                    <span className="leading-relaxed">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>

                          {/* Applications Card */}
                          <Card className="bg-gradient-to-br from-azul-profundo to-azul-profundo/90 text-white border-0 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                            <CardContent className="relative p-8">
                              <Wrench className="w-10 h-10 mb-4" />
                              <h3 className="text-2xl font-bold mb-4">
                                {language === 'pt' ? 'Aplicações Industriais' :
                                 language === 'en' ? 'Industrial Applications' :
                                 'Aplicaciones Industriales'}
                              </h3>
                              <ul className="space-y-3 opacity-90">
                                {fbeApplications[language].map((app, idx) => (
                                  <li key={idx} className="flex items-start gap-3">
                                    <ChevronRight className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                    <span className="leading-relaxed">{app}</span>
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        </div>
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>
                </TabsContent>

                {/* Centrifugal Pumps Tab */}
                <TabsContent value="centrifugal" className="mt-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key="centrifugal"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {centrifugalPumpsComplete.map((pump, index) => (
                          <motion.div
                            key={pump.id}
                            initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                          >
                            <Card className="h-full hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 overflow-hidden group">
                              <div className="absolute inset-0 bg-gradient-to-br from-azul-profundo/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              
                              <CardContent className="relative p-8 h-full flex flex-col">
                                {/* Header */}
                                <div className="mb-6">
                                  <Badge className="mb-3 bg-azul-profundo text-white">
                                    {pump.series}
                                  </Badge>
                                  <h3 className="text-2xl md:text-3xl font-bold text-azul-profundo dark:text-white mb-4">
                                    {language === 'pt' ? `Bomba Centrífuga ${pump.name}` :
                                     language === 'en' ? `${pump.name} Centrifugal Pump` :
                                     `Bomba Centrífuga ${pump.name}`}
                                  </h3>
                                  <p className="text-cinza-titanio dark:text-prata/90 leading-relaxed">
                                    {pump.description[language]}
                                  </p>
                                </div>

                                {/* Specifications */}
                                <div className="space-y-4 mb-6 flex-grow">
                                  <h4 className="font-semibold text-azul-profundo dark:text-white flex items-center gap-2">
                                    <Settings className="w-5 h-5" />
                                    {language === 'pt' ? 'Especificações Principais' :
                                     language === 'en' ? 'Main Specifications' :
                                     'Especificaciones Principales'}
                                  </h4>
                                  
                                  <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-lg">
                                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-1">
                                        <Droplets className="w-4 h-4" />
                                        {language === 'pt' ? 'Vazão máxima' :
                                         language === 'en' ? 'Max flow' :
                                         'Caudal máximo'}
                                      </div>
                                      <div className="font-semibold text-azul-profundo dark:text-white">
                                        {pump.generalSpecs.maxFlow}
                                      </div>
                                    </div>
                                    
                                    <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-lg">
                                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-1">
                                        <Gauge className="w-4 h-4" />
                                        {language === 'pt' ? 'Altura manométrica' :
                                         language === 'en' ? 'Max head' :
                                         'Altura manométrica'}
                                      </div>
                                      <div className="font-semibold text-azul-profundo dark:text-white">
                                        {pump.generalSpecs.maxHead}
                                      </div>
                                    </div>
                                    
                                    <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-lg">
                                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-1">
                                        <Thermometer className="w-4 h-4" />
                                        {language === 'pt' ? 'Temperatura' :
                                         language === 'en' ? 'Temperature' :
                                         'Temperatura'}
                                      </div>
                                      <div className="font-semibold text-azul-profundo dark:text-white">
                                        {pump.generalSpecs.maxTemp}
                                      </div>
                                    </div>
                                    
                                    <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-lg">
                                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-1">
                                        <Settings className="w-4 h-4" />
                                        {language === 'pt' ? 'Rotação máxima' :
                                         language === 'en' ? 'Max rotation' :
                                         'Rotación máxima'}
                                      </div>
                                      <div className="font-semibold text-azul-profundo dark:text-white">
                                        {pump.generalSpecs.maxRPM}
                                      </div>
                                    </div>
                                  </div>

                                  {/* Features List */}
                                  <div className="mt-4">
                                    <h5 className="font-medium text-sm text-slate-600 dark:text-slate-400 mb-2">
                                      {language === 'pt' ? 'Características:' :
                                       language === 'en' ? 'Features:' :
                                       'Características:'}
                                    </h5>
                                    <ul className="space-y-1">
                                      {pump.features[language].slice(0, 4).map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-cinza-titanio dark:text-prata/90">
                                          <ChevronRight className="w-4 h-4 text-azul-profundo dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                          <span>{feature}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>

                                {/* CTA Button */}
                                <Button
                                  onClick={handleWhatsAppClick}
                                  className="w-full bg-gradient-to-r from-[#E30613] to-[#c60411] hover:from-[#c60411] hover:to-[#a50310] text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                                >
                                  <MessageCircle className="mr-2 h-5 w-5" />
                                  {language === 'pt' ? 'Contatar Consultor' :
                                   language === 'en' ? 'Contact Consultant' :
                                   'Contactar Consultor'}
                                </Button>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>

                      {/* Info Section */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-12"
                      >
                        <Card className="max-w-4xl mx-auto bg-gradient-to-br from-azul-profundo to-azul-profundo/90 text-white border-0">
                          <CardContent className="p-8 text-center">
                            <Phone className="w-12 h-12 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-3">
                              {language === 'pt' ? 'Precisa de Mais Informações?' :
                               language === 'en' ? 'Need More Information?' :
                               '¿Necesita Más Información?'}
                            </h3>
                            <p className="mb-6 text-lg opacity-90">
                              {language === 'pt' ? 'Nossa equipe técnica está pronta para ajudá-lo a escolher a bomba ideal para sua aplicação.' :
                               language === 'en' ? 'Our technical team is ready to help you choose the ideal pump for your application.' :
                               'Nuestro equipo técnico está listo para ayudarlo a elegir la bomba ideal para su aplicación.'}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                              <Button
                                onClick={handleWhatsAppClick}
                                className="bg-white text-azul-profundo hover:bg-slate-100 font-semibold shadow-lg"
                              >
                                <MessageCircle className="mr-2 h-5 w-5" />
                                WhatsApp
                              </Button>
                              <Button
                                onClick={() => setLocation('/#contato')}
                                variant="outline"
                                className="border-white text-white hover:bg-white hover:text-azul-profundo"
                              >
                                <Mail className="mr-2 h-5 w-5" />
                                {language === 'pt' ? 'Formulário de Contato' :
                                 language === 'en' ? 'Contact Form' :
                                 'Formulario de Contacto'}
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </section>

        {/* Premium Wave Divider with spacing */}
        <div className="relative mt-20 pb-20">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-slate-900 dark:to-slate-950" />
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="relative w-full h-[80px] md:h-[100px] lg:h-[120px]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,40 C240,100 480,20 720,60 C960,100 1200,20 1440,40 L1440,120 L0,120 Z"
              className="fill-slate-900 dark:fill-slate-950"
            />
          </svg>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductsPage;