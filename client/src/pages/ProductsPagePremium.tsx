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
  Mail,
  Factory,
  Zap,
  Shield,
  Award,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { cn } from '../lib/utils';
import { gearPumpsComplete, fbeSeriesFeatures, fbeApplications } from '../data/gearPumpsComplete';
import { centrifugalPumpsComplete } from '../data/centrifugalPumpsComplete';

// Group pumps by category
const smallPumps = gearPumpsComplete.filter(pump => 
  ['1/8"', '1/4"', '3/8"', '1/2"', '3/4"'].includes(pump.diameter)
);

const mediumPumps = gearPumpsComplete.filter(pump => 
  pump.diameter === '1"'
);

const largePumps = [
  gearPumpsComplete.find(pump => pump.diameter === '1.1/2"'),
  gearPumpsComplete.find(pump => pump.diameter === '2"'),
  gearPumpsComplete.find(pump => pump.diameter === '3"'),
  gearPumpsComplete.find(pump => pump.diameter === '4"')
].filter(Boolean);

const ProductsPagePremium: React.FC = () => {
  const { t, language } = useLanguage();
  const [location, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState('gear');
  const [hoveredPump, setHoveredPump] = useState<string | null>(null);

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
      setLocation(`/produtos/bombas-engrenagem/${cleanDiameter}/especificacoes`);
    } else {
      setLocation(`/produtos/bombas-engrenagem/${cleanDiameter}`);
    }
  };

  return (
    <>
      <Helmet>
        <title>{language === 'pt' ? 'Produtos - FB Bombas | Bombas Industriais de Alta Qualidade' :
                language === 'en' ? 'Products - FB Bombas | High Quality Industrial Pumps' :
                'Productos - FB Bombas | Bombas Industriales de Alta Calidad'}</title>
        <meta name="description" content={
          language === 'pt' ? 'Conheça nossa linha completa de bombas industriais: bombas de engrenagem FBE e bombas centrífugas FBCN e FBOT para diversas aplicações.' :
          language === 'en' ? 'Discover our complete line of industrial pumps: FBE gear pumps and FBCN and FBOT centrifugal pumps for various applications.' :
          'Conozca nuestra línea completa de bombas industriales: bombas de engranajes FBE y bombas centrífugas FBCN y FBOT para diversas aplicaciones.'
        } />
      </Helmet>

      <Header />
      
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        {/* Hero Section - Similar to HomePage */}
        <section className="relative pt-28 md:pt-32 pb-20 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-900 dark:from-slate-950 via-slate-800 dark:via-slate-900 to-slate-700 dark:to-slate-800">
          {/* Gradiente tecnológico high-end */}
          <div className="absolute inset-0 z-1">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/15 via-transparent to-red-950/15" />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/30" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center"
            >
              {/* Text Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-3 mb-6"
              >
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-laranja" />
                <span className="text-laranja uppercase tracking-[0.2em] font-medium text-sm sm:text-base">
                  {language === 'pt' ? 'PRODUTOS FB BOMBAS' :
                   language === 'en' ? 'FB BOMBAS PRODUCTS' :
                   'PRODUCTOS FB BOMBAS'}
                </span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-laranja" />
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-relaxed font-light">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="block"
                >
                  {language === 'pt' ? 'Nossa Linha Completa' :
                   language === 'en' ? 'Our Complete Line' :
                   'Nuestra Línea Completa'}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="block font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent pb-2"
                >
                  {language === 'pt' ? 'de Produtos' :
                   language === 'en' ? 'of Products' :
                   'de Productos'}
                </motion.span>
              </h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
              >
                {language === 'pt' ? 'Soluções especializadas em bombeamento industrial com tecnologia de ponta e qualidade garantida para os mais exigentes processos.' :
                 language === 'en' ? 'Specialized industrial pumping solutions with cutting-edge technology and guaranteed quality for the most demanding processes.' :
                 'Soluciones especializadas en bombeo industrial con tecnología de punta y calidad garantizada para los procesos más exigentes.'}
              </motion.p>
            </motion.div>
          </div>

          {/* Gradiente sutil para conexão natural com o divisor */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-slate-700/50 dark:via-slate-800/50 to-slate-700 dark:to-slate-800 pointer-events-none" />
          
          {/* Premium Wave Divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1440 120"
              className="w-full h-[60px] md:h-[80px] lg:h-[120px]"
              preserveAspectRatio="none"
            >
              <path
                d="M0,40 C480,120 960,0 1440,80 L1440,120 L0,120 Z"
                className="fill-slate-50 dark:fill-slate-900"
              />
            </svg>
          </div>
        </section>

        {/* Main Content with Tabs */}
        <section className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-2 mb-16 bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 p-2 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700">
                  <TabsTrigger 
                    value="gear" 
                    className="group relative flex items-center gap-3 py-5 px-6 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-laranja/0 to-laranja/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Cog className="w-6 h-6 text-azul-profundo dark:text-blue-400 relative z-10" />
                    <div className="text-left relative z-10">
                      <span className="block font-bold text-lg text-azul-profundo dark:text-white">
                        {language === 'pt' ? 'Bombas de Engrenagem' :
                         language === 'en' ? 'Gear Pumps' :
                         'Bombas de Engranaje'}
                      </span>
                      <span className="block text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                        {language === 'pt' ? 'Série FBE' :
                         language === 'en' ? 'FBE Series' :
                         'Serie FBE'}
                      </span>
                    </div>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="centrifugal" 
                    className="group relative flex items-center gap-3 py-5 px-6 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Droplets className="w-6 h-6 text-azul-profundo dark:text-blue-400 relative z-10" />
                    <div className="text-left relative z-10">
                      <span className="block font-bold text-lg text-azul-profundo dark:text-white">
                        {language === 'pt' ? 'Bombas Centrífugas' :
                         language === 'en' ? 'Centrifugal Pumps' :
                         'Bombas Centrífugas'}
                      </span>
                      <span className="block text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                        {language === 'pt' ? 'FBCN & FBOT' :
                         language === 'en' ? 'FBCN & FBOT' :
                         'FBCN & FBOT'}
                      </span>
                    </div>
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
                      <div className="text-center mb-16">
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          <h2 className="text-5xl md:text-6xl font-bold text-azul-profundo dark:text-white mb-4">
                            {language === 'pt' ? 'SÉRIE FBE' :
                             language === 'en' ? 'FBE SERIES' :
                             'SERIE FBE'}
                          </h2>
                          <div className="h-1 w-24 bg-laranja mx-auto mb-8" />
                        </motion.div>
                        
                        <h3 className="text-3xl md:text-4xl font-semibold text-azul-profundo dark:text-white mb-6">
                          {language === 'pt' ? 'Bombas de Engrenagem Externa' :
                           language === 'en' ? 'External Gear Pumps' :
                           'Bombas de Engranaje Externo'}
                        </h3>
                        
                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
                          {language === 'pt' ? 'Projetadas para aplicações industriais exigentes, nossas bombas de engrenagem oferecem precisão, confiabilidade e performance superior em transferência de fluidos viscosos.' :
                           language === 'en' ? 'Designed for demanding industrial applications, our gear pumps offer precision, reliability and superior performance in viscous fluid transfer.' :
                           'Diseñadas para aplicaciones industriales exigentes, nuestras bombas de engranajes ofrecen precisión, confiabilidad y rendimiento superior en la transferencia de fluidos viscosos.'}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                          <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
                            <Gauge className="w-8 h-8 text-laranja mx-auto mb-3" />
                            <h4 className="font-semibold text-azul-profundo dark:text-white mb-2">
                              {language === 'pt' ? 'Pressão' : language === 'en' ? 'Pressure' : 'Presión'}
                            </h4>
                            <p className="text-slate-600 dark:text-slate-300">
                              {language === 'pt' ? 'Até 300 Bar' : language === 'en' ? 'Up to 300 Bar' : 'Hasta 300 Bar'}
                            </p>
                          </div>
                          <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
                            <Thermometer className="w-8 h-8 text-laranja mx-auto mb-3" />
                            <h4 className="font-semibold text-azul-profundo dark:text-white mb-2">
                              {language === 'pt' ? 'Temperatura' : language === 'en' ? 'Temperature' : 'Temperatura'}
                            </h4>
                            <p className="text-slate-600 dark:text-slate-300">
                              {language === 'pt' ? 'Até 350°C' : language === 'en' ? 'Up to 350°C' : 'Hasta 350°C'}
                            </p>
                          </div>
                          <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
                            <Droplets className="w-8 h-8 text-laranja mx-auto mb-3" />
                            <h4 className="font-semibold text-azul-profundo dark:text-white mb-2">
                              {language === 'pt' ? 'Vazão' : language === 'en' ? 'Flow' : 'Flujo'}
                            </h4>
                            <p className="text-slate-600 dark:text-slate-300">
                              {language === 'pt' ? 'Até 460 L/min' : language === 'en' ? 'Up to 460 L/min' : 'Hasta 460 L/min'}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Small Pumps Grid */}
                      <div className="mb-16">
                        <div className="text-center mb-10">
                          <h3 className="text-3xl font-bold text-azul-profundo dark:text-white mb-3">
                            {language === 'pt' ? 'Bombas de Pequeno Porte' :
                             language === 'en' ? 'Small Size Pumps' :
                             'Bombas de Pequeño Porte'}
                          </h3>
                          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                            {language === 'pt' ? 'Soluções compactas para aplicações de precisão' :
                             language === 'en' ? 'Compact solutions for precision applications' :
                             'Soluciones compactas para aplicaciones de precisión'}
                          </p>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                          {smallPumps.map((pump, index) => (
                            <motion.div
                              key={pump.diameter}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              whileHover={{ y: -5 }}
                              onHoverStart={() => setHoveredPump(pump.diameter)}
                              onHoverEnd={() => setHoveredPump(null)}
                            >
                              <Card 
                                className={cn(
                                  "group cursor-pointer transition-all duration-300 overflow-hidden h-full",
                                  "bg-white dark:bg-slate-800 hover:shadow-2xl",
                                  "border-2 hover:border-laranja dark:hover:border-laranja",
                                  hoveredPump === pump.diameter && "ring-4 ring-laranja/20"
                                )}
                                onClick={() => handleGearPumpClick(pump.diameter, pump.models.length)}
                              >
                                <div className="absolute inset-0 bg-gradient-to-br from-laranja/0 via-laranja/5 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                <CardContent className="relative p-6 h-full flex flex-col">
                                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-laranja/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                                  
                                  <Badge className="mb-4 bg-azul-profundo/10 text-azul-profundo dark:bg-blue-500/10 dark:text-blue-400 border-0">
                                    {pump.models[0].code}
                                  </Badge>
                                  
                                  {/* Placeholder for pump image */}
                                  <div className="flex-grow flex items-center justify-center mb-4">
                                    <div className="w-32 h-32 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                                      <Cog className="w-16 h-16 text-slate-300 dark:text-slate-600" />
                                    </div>
                                  </div>
                                  
                                  <h4 className="text-2xl font-bold text-azul-profundo dark:text-white text-center mb-2">
                                    {pump.diameter}
                                  </h4>
                                  
                                  <div className="mt-4 space-y-1">
                                    <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400">
                                      <span>{language === 'pt' ? 'Vazão' : language === 'en' ? 'Flow' : 'Flujo'}</span>
                                      <span className="font-semibold text-azul-profundo dark:text-blue-400">
                                        {pump.models[0].specifications.maxFlow}
                                      </span>
                                    </div>
                                    <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400">
                                      <span>{language === 'pt' ? 'Pressão' : language === 'en' ? 'Pressure' : 'Presión'}</span>
                                      <span className="font-semibold text-azul-profundo dark:text-blue-400">
                                        {pump.models[0].specifications.maxPressure}
                                      </span>
                                    </div>
                                  </div>
                                  
                                  <div className="mt-4 flex items-center justify-center text-laranja opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-sm font-medium mr-2">
                                      {language === 'pt' ? 'Ver detalhes' : language === 'en' ? 'View details' : 'Ver detalles'}
                                    </span>
                                    <ArrowUpRight className="w-4 h-4" />
                                  </div>
                                </CardContent>
                              </Card>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Pumps 1" */}
                      <div className="mb-16">
                        <div className="text-center mb-10">
                          <h3 className="text-3xl font-bold text-azul-profundo dark:text-white mb-3">
                            {language === 'pt' ? 'Bombas Diâmetro 1"' :
                             language === 'en' ? '1" Diameter Pumps' :
                             'Bombas Diámetro 1"'}
                          </h3>
                          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                            {mediumPumps[0]?.models.length} {language === 'pt' ? 'modelos disponíveis para diferentes aplicações' : 
                             language === 'en' ? 'models available for different applications' : 
                             'modelos disponibles para diferentes aplicaciones'}
                          </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                          {mediumPumps[0]?.models.map((model, modelIndex) => (
                            <motion.div
                              key={model.id}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: modelIndex * 0.1 }}
                              whileHover={{ scale: 1.02 }}
                            >
                              <Card 
                                className="group cursor-pointer h-full overflow-hidden bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 hover:shadow-2xl transition-all duration-300 border-2 hover:border-laranja"
                                onClick={() => handleGearPumpClick(mediumPumps[0].diameter, mediumPumps[0].models.length)}
                              >
                                {/* Header with pump placeholder */}
                                <div className="relative p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
                                  <Badge className="absolute top-4 right-4 bg-azul-profundo text-white">
                                    {model.code}
                                  </Badge>
                                  
                                  <div className="flex items-center justify-center mb-4">
                                    <div className="w-24 h-24 bg-white dark:bg-slate-700 rounded-lg flex items-center justify-center shadow-inner">
                                      <Cog className="w-12 h-12 text-slate-300 dark:text-slate-600" />
                                    </div>
                                  </div>
                                  
                                  <h4 className="text-2xl font-bold text-azul-profundo dark:text-white text-center">
                                    {model.model}
                                  </h4>
                                </div>
                                
                                <CardContent className="p-6">
                                  <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div>
                                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-1">
                                        <Droplets className="w-4 h-4" />
                                        {language === 'pt' ? 'Vazão' : language === 'en' ? 'Flow' : 'Flujo'}
                                      </div>
                                      <p className="font-bold text-azul-profundo dark:text-white">
                                        {model.specifications.maxFlow}
                                      </p>
                                    </div>
                                    <div>
                                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-1">
                                        <Gauge className="w-4 h-4" />
                                        {language === 'pt' ? 'Pressão' : language === 'en' ? 'Pressure' : 'Presión'}
                                      </div>
                                      <p className="font-bold text-azul-profundo dark:text-white">
                                        {model.specifications.maxPressure}
                                      </p>
                                    </div>
                                    <div>
                                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-1">
                                        <Thermometer className="w-4 h-4" />
                                        {language === 'pt' ? 'Temp.' : 'Temp.'}
                                      </div>
                                      <p className="font-bold text-azul-profundo dark:text-white">
                                        até 350°C
                                      </p>
                                    </div>
                                    <div>
                                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-1">
                                        <Settings className="w-4 h-4" />
                                        RPM
                                      </div>
                                      <p className="font-bold text-azul-profundo dark:text-white">
                                        {model.specifications.maxRPM}
                                      </p>
                                    </div>
                                  </div>
                                  
                                  <Button className="w-full bg-gradient-to-r from-laranja to-orange-500 hover:from-orange-500 hover:to-laranja text-white group-hover:shadow-lg transition-all duration-300">
                                    <span>{language === 'pt' ? 'Especificações' : language === 'en' ? 'Specifications' : 'Especificaciones'}</span>
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                  </Button>
                                </CardContent>
                              </Card>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Large Pumps - Individual sections */}
                      {largePumps.map((pumpGroup, groupIndex) => {
                        const diameterText = pumpGroup.diameter === '1.1/2"' ? '1.1' : pumpGroup.diameter.replace('"', '');
                        return (
                          <div key={pumpGroup.diameter} className="mb-16">
                            <div className="text-center mb-10">
                              <h3 className="text-3xl font-bold text-azul-profundo dark:text-white mb-3">
                                {language === 'pt' ? `Bombas Diâmetro ${diameterText}` :
                                 language === 'en' ? `${diameterText} Diameter Pumps` :
                                 `Bombas Diámetro ${diameterText}`}
                              </h3>
                              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                                {pumpGroup.models.length} {language === 'pt' ? 'modelos disponíveis para diferentes aplicações' : 
                                 language === 'en' ? 'models available for different applications' : 
                                 'modelos disponibles para diferentes aplicaciones'}
                              </p>
                            </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {pumpGroup.models.map((model, modelIndex) => (
                              <motion.div
                                key={model.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: modelIndex * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                              >
                                <Card 
                                  className="group cursor-pointer h-full overflow-hidden bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 hover:shadow-2xl transition-all duration-300 border-2 hover:border-laranja"
                                  onClick={() => handleGearPumpClick(pumpGroup.diameter, pumpGroup.models.length)}
                                >
                                  <div className="relative h-32 bg-gradient-to-br from-azul-profundo to-blue-600 overflow-hidden">
                                    <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:20px_20px]" />
                                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
                                    
                                    <div className="relative h-full flex items-center justify-center">
                                      <div className="text-center">
                                        <h4 className="text-3xl font-bold text-white mb-1">
                                          {model.model}
                                        </h4>
                                        <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                                          {model.code}
                                        </Badge>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <CardContent className="p-6">
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                      <div>
                                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-1">
                                          <Droplets className="w-4 h-4" />
                                          {language === 'pt' ? 'Vazão' : language === 'en' ? 'Flow' : 'Flujo'}
                                        </div>
                                        <p className="font-bold text-azul-profundo dark:text-white">
                                          {model.specifications.maxFlow}
                                        </p>
                                      </div>
                                      <div>
                                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-1">
                                          <Gauge className="w-4 h-4" />
                                          {language === 'pt' ? 'Pressão' : language === 'en' ? 'Pressure' : 'Presión'}
                                        </div>
                                        <p className="font-bold text-azul-profundo dark:text-white">
                                          {model.specifications.maxPressure}
                                        </p>
                                      </div>
                                      <div>
                                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-1">
                                          <Thermometer className="w-4 h-4" />
                                          {language === 'pt' ? 'Temp.' : 'Temp.'}
                                        </div>
                                        <p className="font-bold text-azul-profundo dark:text-white">
                                          até 350°C
                                        </p>
                                      </div>
                                      <div>
                                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-1">
                                          <Settings className="w-4 h-4" />
                                          RPM
                                        </div>
                                        <p className="font-bold text-azul-profundo dark:text-white">
                                          {model.specifications.maxRPM}
                                        </p>
                                      </div>
                                    </div>
                                    
                                    <Button className="w-full bg-gradient-to-r from-laranja to-orange-500 hover:from-orange-500 hover:to-laranja text-white group-hover:shadow-lg transition-all duration-300">
                                      <span>{language === 'pt' ? 'Especificações' : language === 'en' ? 'Specifications' : 'Especificaciones'}</span>
                                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Button>
                                  </CardContent>
                                </Card>
                              </motion.div>
                            ))}
                          </div>
                          </div>
                        );
                      })}

                      {/* Features Section */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mt-24"
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                          {/* Technical Excellence Card */}
                          <Card className="overflow-hidden border-0 bg-gradient-to-br from-slate-900 to-azul-profundo text-white">
                            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />
                            <CardContent className="relative p-10">
                              <div className="flex items-start justify-between mb-6">
                                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                                  <Info className="w-8 h-8" />
                                </div>
                                <Badge className="bg-laranja text-white border-0">
                                  {language === 'pt' ? 'TECNOLOGIA' : language === 'en' ? 'TECHNOLOGY' : 'TECNOLOGÍA'}
                                </Badge>
                              </div>
                              
                              <h3 className="text-3xl font-bold mb-6">
                                {language === 'pt' ? 'Excelência Técnica' :
                                 language === 'en' ? 'Technical Excellence' :
                                 'Excelencia Técnica'}
                              </h3>
                              
                              <ul className="space-y-4">
                                {fbeSeriesFeatures[language].map((feature, idx) => (
                                  <li key={idx} className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 bg-laranja rounded-full flex-shrink-0" />
                                    <span className="text-white/90 leading-relaxed">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>

                          {/* Applications Card */}
                          <Card className="overflow-hidden border-0 bg-gradient-to-br from-laranja to-orange-600 text-white">
                            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />
                            <CardContent className="relative p-10">
                              <div className="flex items-start justify-between mb-6">
                                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                                  <Wrench className="w-8 h-8" />
                                </div>
                                <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                                  {language === 'pt' ? 'APLICAÇÕES' : language === 'en' ? 'APPLICATIONS' : 'APLICACIONES'}
                                </Badge>
                              </div>
                              
                              <h3 className="text-3xl font-bold mb-6">
                                {language === 'pt' ? 'Soluções Industriais' :
                                 language === 'en' ? 'Industrial Solutions' :
                                 'Soluciones Industriales'}
                              </h3>
                              
                              <ul className="space-y-4">
                                {fbeApplications[language].map((app, idx) => (
                                  <li key={idx} className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                                    <span className="text-white/90 leading-relaxed">{app}</span>
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
                      {/* FBCN Series */}
                      <div className="mb-24">
                        <div className="text-center mb-16">
                          <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                          >
                            <h2 className="text-5xl md:text-6xl font-bold text-azul-profundo dark:text-white mb-4">
                              {language === 'pt' ? 'SÉRIE FBCN' :
                               language === 'en' ? 'FBCN SERIES' :
                               'SERIE FBCN'}
                            </h2>
                            <div className="h-1 w-24 bg-azul-profundo dark:bg-blue-400 mx-auto mb-8" />
                          </motion.div>
                        </div>

                        <Card className="overflow-hidden bg-white dark:bg-slate-800 shadow-2xl border-2 border-slate-200 dark:border-slate-700">
                          <div className="grid lg:grid-cols-2">
                            {/* Image Section */}
                            <div className="relative aspect-square bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center p-12">
                              <picture>
                                <source type="image/webp" srcSet="https://www.dropbox.com/scl/fi/np2hqjuyglb5rdlzzs2hl/Design-sem-nome-2025-06-06T184926.972.png?rlkey=axbm454vpx58c3md68o00kslv&st=7s5bm882&raw=1" />
                                <img 
                                  src="https://www.dropbox.com/scl/fi/np2hqjuyglb5rdlzzs2hl/Design-sem-nome-2025-06-06T184926.972.png?rlkey=axbm454vpx58c3md68o00kslv&st=7s5bm882&raw=1"
                                  alt="Bomba FBCN"
                                  className="w-full h-full object-contain max-w-md mx-auto"
                                  loading="lazy"
                                />
                              </picture>
                            </div>
                            
                            {/* Content Section */}
                            <div className="p-8 lg:p-12">
                              <h3 className="text-3xl font-bold text-azul-profundo dark:text-white mb-6">
                                {language === 'pt' ? 'Bombas Centrífugas Normalizadas' :
                                 language === 'en' ? 'Standardized Centrifugal Pumps' :
                                 'Bombas Centrífugas Normalizadas'}
                              </h3>
                              
                              {/* Main Specs */}
                              <div className="mb-8">
                                <h4 className="text-lg font-semibold text-azul-profundo dark:text-white mb-4 uppercase tracking-wider">
                                  {language === 'pt' ? 'Especificações Principais' : language === 'en' ? 'Main Specifications' : 'Especificaciones Principales'}
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                  <div className="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                                    <Droplets className="w-6 h-6 text-azul-profundo dark:text-blue-400 mx-auto mb-2" />
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">{language === 'pt' ? 'Vazão máxima' : 'Max flow'}</p>
                                    <p className="text-lg font-bold text-azul-profundo dark:text-white">2.200 m³/h</p>
                                  </div>
                                  <div className="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                                    <Gauge className="w-6 h-6 text-azul-profundo dark:text-blue-400 mx-auto mb-2" />
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">{language === 'pt' ? 'Pressão máxima' : 'Max pressure'}</p>
                                    <p className="text-lg font-bold text-azul-profundo dark:text-white">135 M</p>
                                  </div>
                                  <div className="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                                    <Settings className="w-6 h-6 text-azul-profundo dark:text-blue-400 mx-auto mb-2" />
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">{language === 'pt' ? 'Rotação máxima' : 'Max RPM'}</p>
                                    <p className="text-lg font-bold text-azul-profundo dark:text-white">3500 RPM</p>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Detailed Specs */}
                              <div className="mb-8">
                                <h4 className="text-lg font-semibold text-azul-profundo dark:text-white mb-4 uppercase tracking-wider">
                                  {language === 'pt' ? 'Especificações Técnicas' : language === 'en' ? 'Technical Specifications' : 'Especificaciones Técnicas'}
                                </h4>
                                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                                  <li className="flex items-start">
                                    <ChevronRight className="w-5 h-5 text-azul-profundo dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>{language === 'pt' ? 'Tamanhos DN25 até 300 mm' : 'Sizes DN25 to 300 mm'}</span>
                                  </li>
                                  <li className="flex items-start">
                                    <ChevronRight className="w-5 h-5 text-azul-profundo dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>{language === 'pt' ? 'Bomba com corpo em voluta' : 'Volute casing pump'}</span>
                                  </li>
                                  <li className="flex items-start">
                                    <ChevronRight className="w-5 h-5 text-azul-profundo dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>{language === 'pt' ? 'Instalação na horizontal' : 'Horizontal installation'}</span>
                                  </li>
                                  <li className="flex items-start">
                                    <ChevronRight className="w-5 h-5 text-azul-profundo dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>{language === 'pt' ? 'Construção "back pull-out"' : '"Back pull-out" construction'}</span>
                                  </li>
                                  <li className="flex items-start">
                                    <ChevronRight className="w-5 h-5 text-azul-profundo dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>{language === 'pt' ? 'Monoestágio' : 'Single stage'}</span>
                                  </li>
                                  <li className="flex items-start">
                                    <ChevronRight className="w-5 h-5 text-azul-profundo dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>{language === 'pt' ? 'Temperaturas até 250°C' : 'Temperatures up to 250°C'}</span>
                                  </li>
                                </ul>
                              </div>
                              
                              {/* Applications */}
                              <div className="mb-8">
                                <h4 className="text-lg font-semibold text-azul-profundo dark:text-white mb-4 uppercase tracking-wider">
                                  {language === 'pt' ? 'Aplicações' : language === 'en' ? 'Applications' : 'Aplicaciones'}
                                </h4>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                  {language === 'pt' ? 'Desenvolvida para trabalhar com líquidos limpos ou turvos, em inúmeras aplicações, tais como indústrias químicas, petroquímicas, papel, polpa, siderúrgica, mineração, alimentícia, têxtil, farmacêutica, saneamento e combate à incêndio.' :
                                   language === 'en' ? 'Designed to work with clean or turbid liquids in numerous applications such as chemical, petrochemical, paper, pulp, steel, mining, food, textile, pharmaceutical industries, sanitation and fire fighting.' :
                                   'Diseñada para trabajar con líquidos limpios o turbios, en numerosas aplicaciones, tales como industrias químicas, petroquímicas, papel, pulpa, siderúrgica, minería, alimenticia, textil, farmacéutica, saneamiento y combate contra incendios.'}
                                </p>
                              </div>
                              
                              <Button
                                onClick={handleWhatsAppClick}
                                className="w-full bg-gradient-to-r from-azul-profundo to-blue-600 hover:from-blue-600 hover:to-azul-profundo text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                              >
                                <MessageCircle className="mr-2 h-5 w-5" />
                                {language === 'pt' ? 'Solicitar Orçamento' :
                                 language === 'en' ? 'Request Quote' :
                                 'Solicitar Presupuesto'}
                                <ArrowRight className="ml-2 w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </Card>
                      </div>

                      {/* FBOT Series */}
                      <div className="mb-24">
                        <div className="text-center mb-16">
                          <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                          >
                            <h2 className="text-5xl md:text-6xl font-bold text-azul-profundo dark:text-white mb-4">
                              {language === 'pt' ? 'SÉRIE FBOT' :
                               language === 'en' ? 'FBOT SERIES' :
                               'SERIE FBOT'}
                            </h2>
                            <div className="h-1 w-24 bg-laranja mx-auto mb-8" />
                          </motion.div>
                        </div>

                        <Card className="overflow-hidden bg-white dark:bg-slate-800 shadow-2xl border-2 border-slate-200 dark:border-slate-700">
                          <div className="grid lg:grid-cols-2">
                            {/* Image Section */}
                            <div className="relative aspect-square bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center p-12 lg:order-2">
                              <picture>
                                <source type="image/webp" srcSet="https://www.dropbox.com/scl/fi/ua10nd19olylakzi2qsh9/Design-sem-nome-100.png?rlkey=ypljtek5gdao1ixqrm0t7xt2p&st=lk7sqr3a&raw=1" />
                                <img 
                                  src="https://www.dropbox.com/scl/fi/ua10nd19olylakzi2qsh9/Design-sem-nome-100.png?rlkey=ypljtek5gdao1ixqrm0t7xt2p&st=lk7sqr3a&raw=1"
                                  alt="Bomba FBOT"
                                  className="w-full h-full object-contain max-w-md mx-auto"
                                  loading="lazy"
                                />
                              </picture>
                            </div>
                            
                            {/* Content Section */}
                            <div className="p-8 lg:p-12 lg:order-1">
                              <h3 className="text-3xl font-bold text-azul-profundo dark:text-white mb-6">
                                {language === 'pt' ? 'Bombas para Óleo Térmico' :
                                 language === 'en' ? 'Thermal Oil Pumps' :
                                 'Bombas para Aceite Térmico'}
                              </h3>
                              
                              {/* Main Specs */}
                              <div className="mb-8">
                                <h4 className="text-lg font-semibold text-azul-profundo dark:text-white mb-4 uppercase tracking-wider">
                                  {language === 'pt' ? 'Especificações Principais' : language === 'en' ? 'Main Specifications' : 'Especificaciones Principales'}
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                  <div className="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                                    <Droplets className="w-6 h-6 text-laranja dark:text-orange-400 mx-auto mb-2" />
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">{language === 'pt' ? 'Vazão máxima' : 'Max flow'}</p>
                                    <p className="text-lg font-bold text-azul-profundo dark:text-white">2.200 m³/h</p>
                                  </div>
                                  <div className="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                                    <Gauge className="w-6 h-6 text-laranja dark:text-orange-400 mx-auto mb-2" />
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">{language === 'pt' ? 'Pressão máxima' : 'Max pressure'}</p>
                                    <p className="text-lg font-bold text-azul-profundo dark:text-white">135 M</p>
                                  </div>
                                  <div className="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                                    <Settings className="w-6 h-6 text-laranja dark:text-orange-400 mx-auto mb-2" />
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">{language === 'pt' ? 'Rotação máxima' : 'Max RPM'}</p>
                                    <p className="text-lg font-bold text-azul-profundo dark:text-white">3500 RPM</p>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Detailed Specs */}
                              <div className="mb-8">
                                <h4 className="text-lg font-semibold text-azul-profundo dark:text-white mb-4 uppercase tracking-wider">
                                  {language === 'pt' ? 'Especificações Técnicas' : language === 'en' ? 'Technical Specifications' : 'Especificaciones Técnicas'}
                                </h4>
                                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                                  <li className="flex items-start">
                                    <ChevronRight className="w-5 h-5 text-laranja dark:text-orange-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>{language === 'pt' ? 'Tamanhos DN25 até 300 mm' : 'Sizes DN25 to 300 mm'}</span>
                                  </li>
                                  <li className="flex items-start">
                                    <ChevronRight className="w-5 h-5 text-laranja dark:text-orange-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>{language === 'pt' ? 'Bomba com corpo em voluta' : 'Volute casing pump'}</span>
                                  </li>
                                  <li className="flex items-start">
                                    <ChevronRight className="w-5 h-5 text-laranja dark:text-orange-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>{language === 'pt' ? 'Instalação na horizontal' : 'Horizontal installation'}</span>
                                  </li>
                                  <li className="flex items-start">
                                    <ChevronRight className="w-5 h-5 text-laranja dark:text-orange-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>{language === 'pt' ? 'Construção "back pull-out"' : '"Back pull-out" construction'}</span>
                                  </li>
                                  <li className="flex items-start">
                                    <ChevronRight className="w-5 h-5 text-laranja dark:text-orange-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>{language === 'pt' ? 'Monoestágio' : 'Single stage'}</span>
                                  </li>
                                  <li className="flex items-start">
                                    <ChevronRight className="w-5 h-5 text-laranja dark:text-orange-400 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>{language === 'pt' ? 'Temperaturas até 350°C' : 'Temperatures up to 350°C'}</span>
                                  </li>
                                </ul>
                              </div>
                              
                              {/* Applications */}
                              <div className="mb-8">
                                <h4 className="text-lg font-semibold text-azul-profundo dark:text-white mb-4 uppercase tracking-wider">
                                  {language === 'pt' ? 'Aplicações' : language === 'en' ? 'Applications' : 'Aplicaciones'}
                                </h4>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                  {language === 'pt' ? 'Desenvolvida para trabalhar no bombeamento de óleos térmicos orgânicos. Pode ser utilizada na indústria farmacêutica, química, alimentícia, têxtil, plástica, etc. O fluído não deve conter partículas abrasivas ou materiais que possam atacar quimicamente os componentes da bomba.' :
                                   language === 'en' ? 'Designed for pumping organic thermal oils. Can be used in pharmaceutical, chemical, food, textile, plastic industries, etc. The fluid must not contain abrasive particles or materials that could chemically attack the pump components.' :
                                   'Diseñada para el bombeo de aceites térmicos orgánicos. Puede utilizarse en la industria farmacéutica, química, alimentaria, textil, plástica, etc. El fluido no debe contener partículas abrasivas o materiales que puedan atacar químicamente los componentes de la bomba.'}
                                </p>
                              </div>
                              
                              <Button
                                onClick={handleWhatsAppClick}
                                className="w-full bg-gradient-to-r from-laranja to-orange-500 hover:from-orange-500 hover:to-laranja text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                              >
                                <MessageCircle className="mr-2 h-5 w-5" />
                                {language === 'pt' ? 'Solicitar Orçamento' :
                                 language === 'en' ? 'Request Quote' :
                                 'Solicitar Presupuesto'}
                                <ArrowRight className="ml-2 w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </Card>
                      </div>

                      {/* CTA Section */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-16"
                      >
                        <Card className="overflow-hidden border-0 bg-gradient-to-r from-slate-900 via-azul-profundo to-slate-900">
                          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
                          <CardContent className="relative p-12 text-center">
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.5, delay: 0.8 }}
                              className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-laranja to-orange-500 rounded-full flex items-center justify-center shadow-2xl"
                            >
                              <Phone className="w-10 h-10 text-white" />
                            </motion.div>
                            
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                              {language === 'pt' ? 'Consultoria Especializada' :
                               language === 'en' ? 'Expert Consulting' :
                               'Consultoría Especializada'}
                            </h3>
                            
                            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                              {language === 'pt' ? 'Nossa equipe de engenheiros está pronta para ajudá-lo a selecionar a solução ideal para sua aplicação específica.' :
                               language === 'en' ? 'Our team of engineers is ready to help you select the ideal solution for your specific application.' :
                               'Nuestro equipo de ingenieros está listo para ayudarlo a seleccionar la solución ideal para su aplicación específica.'}
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                              <Button
                                onClick={handleWhatsAppClick}
                                size="lg"
                                className="bg-white text-azul-profundo hover:bg-slate-100 font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                              >
                                <MessageCircle className="mr-2 h-5 w-5" />
                                WhatsApp
                              </Button>
                              <Button
                                onClick={() => setLocation('/#contato')}
                                size="lg"
                                variant="outline"
                                className="border-2 border-white text-white hover:bg-white hover:text-azul-profundo font-bold transition-all duration-300"
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

        {/* Wave Divider for Footer */}
        <div className="relative">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="w-full h-[60px] md:h-[80px] lg:h-[120px]"
          >
            <path
              d="M0,60 C360,10 720,90 1080,50 C1260,30 1380,20 1440,40 L1440,120 L0,120 Z"
              className="fill-slate-900 dark:fill-[#0f172a]"
            />
          </svg>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductsPagePremium;