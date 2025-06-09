import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useParams } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { 
  Cog,
  ArrowLeft,
  Download,
  MessageCircle,
  Gauge,
  Droplets,
  Thermometer,
  Activity,
  Settings,
  Shield,
  Package,
  Wrench,
  Factory,
  ArrowRight,
  Settings2,
  Check
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../components/ui/breadcrumb';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { cn } from '../lib/utils';
import { useTheme } from '../components/layout/ThemeProvider';
import { gearPumpsComplete } from '../data/gearPumpsComplete';
import { fbeDetailedSpecs } from '../data/fbeDetailedSpecs';
import performanceData from '../data/fbe-pump-performance-data.json';

const GearPumpSpecificationsPage: React.FC = () => {
  const { language, t } = useLanguage();
  const { theme } = useTheme();
  const params = useParams();
  const [location, setLocation] = useLocation();
  const diameter = params.diameter || '';
  const modelId = params.modelId || '';
  const [selectedModel, setSelectedModel] = useState<number>(0);
  
  // Get RPM from URL query params
  const urlParams = new URLSearchParams(window.location.search);
  const rpmFromUrl = urlParams.get('rpm');
  const [selectedRPM, setSelectedRPM] = useState<number>(rpmFromUrl ? parseInt(rpmFromUrl) : 1150);

  // Map diameter for correct lookup
  const diameterMap: Record<string, string> = {
    '18': '1/8"',
    '14': '1/4"',
    '38': '3/8"',
    '12': '1/2"',
    '34': '3/4"',
    '1': '1"',
    '112': '1.1/2"',
    '2': '2"',
    '3': '3"',
    '4': '4"'
  };

  const mappedDiameter = diameterMap[diameter] || diameter;
  
  // Get pump data from gearPumpsComplete
  const pumpData = gearPumpsComplete.find(p => p.diameter === mappedDiameter);
  
  // Get specifications from fbeDetailedSpecs
  const detailedSpecs = fbeDetailedSpecs[mappedDiameter];
  const specs = detailedSpecs?.[selectedModel] || detailedSpecs?.[0];

  // Similar models (other diameters)
  const similarModels = gearPumpsComplete
    .filter(p => p.diameter !== mappedDiameter)
    .slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [diameter, modelId]);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      language === 'pt' ? `Olá! Gostaria de mais informações sobre a bomba ${specs.model}.` :
      language === 'en' ? `Hello! I would like more information about the ${specs.model} pump.` :
      `¡Hola! Me gustaría más información sobre la bomba ${specs.model}.`
    );
    window.open(`https://wa.me/5511972874837?text=${message}`, '_blank');
  };

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/assets/manuals/FB_Manual_Tecnico_FBE.pdf';
    link.download = 'FB_Manual_Tecnico_FBE.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!pumpData || !specs) {
    setLocation('/produtos');
    return null;
  }

  // Get drawing and product images
  const drawingImage = theme === 'dark' 
    ? `/src/assets/products/fbe/${diameter}/drawing-white.png`
    : `/src/assets/products/fbe/${diameter}/drawing-black.png`;

  // Product image map for different sizes
  const productImageMap: Record<string, string> = {
    '1': '/src/assets/products/fbe/1/photo.png',
    '112': '/src/assets/products/fbe/112/photo.png',
    '2': '/src/assets/products/fbe/2/photo.png',
    '3': '/src/assets/products/fbe/3/photo.png',
    '4': '/src/assets/products/fbe/4/photo.png',
    '18': '/src/assets/products/fbe/18/photo.png',
    '14': '/src/assets/products/fbe/14/photo.png',
    '38': '/src/assets/products/fbe/38/photo.png',
    '12': '/src/assets/products/fbe/12/photo.png',
    '34': '/src/assets/products/fbe/34/photo.png'
  };

  const productImage = productImageMap[diameter] || `/src/assets/products/fbe/${diameter}/photo.png`;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-slate-900">
        {/* Hero Section with Red Header */}
        <section className="relative bg-gradient-to-b from-red-800 to-red-900 text-white pb-0">
          {/* Background Image with Red Overlay */}
          <div className="absolute inset-0">
            <img 
              src="/src/assets/backgrounds/benefits-dark.svg"
              alt=""
              className="w-full h-full object-cover object-top opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-red-600/70 via-red-700/85 to-red-800/95" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
            {/* Breadcrumb */}
            <Breadcrumb className="mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink 
                    onClick={() => setLocation('/')}
                    className="text-white/70 hover:text-white cursor-pointer"
                  >
                    {language === 'pt' ? 'Início' : language === 'en' ? 'Home' : 'Inicio'}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/50" />
                <BreadcrumbItem>
                  <BreadcrumbLink 
                    onClick={() => setLocation('/produtos')}
                    className="text-white/70 hover:text-white cursor-pointer"
                  >
                    {language === 'pt' ? 'Produtos' : language === 'en' ? 'Products' : 'Productos'}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/50" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white">
                    {language === 'pt' ? 'Bombas de Engrenagem' : language === 'en' ? 'Gear Pumps' : 'Bombas de Engranaje'}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            {/* Model Navigation */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <div className="flex flex-wrap gap-2">
                {gearPumpsComplete
                  .filter(pump => {
                    // Group by size category
                    const smallPumps = ['1/8"', '1/4"', '3/8"', '1/2"', '3/4"'];
                    const currentIsSmall = smallPumps.includes(mappedDiameter);
                    return currentIsSmall ? smallPumps.includes(pump.diameter) : pump.diameter === mappedDiameter;
                  })
                  .map((pump) => {
                    const reverseDiameterMap: Record<string, string> = {
                      '1/8"': '18',
                      '1/4"': '14',
                      '3/8"': '38',
                      '1/2"': '12',
                      '3/4"': '34',
                      '1"': '1',
                      '1.1/2"': '112',
                      '2"': '2',
                      '3"': '3',
                      '4"': '4'
                    };
                    const urlDiameter = reverseDiameterMap[pump.diameter] || pump.diameter;
                    const isActive = pump.diameter === mappedDiameter;

                    return (
                      <Button
                        key={pump.diameter}
                        onClick={() => setLocation(`/produtos/bombas-engrenagem/${urlDiameter}/especificacoes`)}
                        variant={isActive ? "default" : "outline"}
                        className={cn(
                          "px-4 py-2 text-sm font-medium transition-all",
                          isActive 
                            ? "bg-white text-red-700 hover:bg-white/90" 
                            : "bg-white/10 text-white border-white/30 hover:bg-white/20"
                        )}
                      >
                        {pump.diameter}
                      </Button>
                    );
                  })}
              </div>
            </motion.div>

            {/* Title - Left aligned, 2 lines */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white/90">
                {language === 'pt' ? 'Especificações Técnicas' :
                 language === 'en' ? 'Technical Specifications' :
                 'Especificaciones Técnicas'}
              </h1>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-2">
                {specs.model}
              </h2>
              <p className="text-xl text-white/80 mt-4 max-w-2xl">
                {language === 'pt' ? 'Especificações técnicas completas e informações detalhadas' :
                 language === 'en' ? 'Complete technical specifications and detailed information' :
                 'Especificaciones técnicas completas e información detallada'}
              </p>
            </motion.div>
          </div>

          {/* Wave Divider - Transparent top */}
          <div className="relative">
            <svg 
              viewBox="0 0 1440 120" 
              preserveAspectRatio="none" 
              className="w-full h-[60px] md:h-[80px] lg:h-[120px]"
            >
              <path 
                d="M0,40 C360,90 720,10 1080,50 C1260,70 1380,80 1440,60 L1440,0 L0,0 Z" 
                className="fill-transparent"
              />
              <path 
                d="M0,40 C360,90 720,10 1080,50 C1260,70 1380,80 1440,60 L1440,120 L0,120 Z" 
                className="fill-white dark:fill-slate-900"
              />
            </svg>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Column - Product Info and Image */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="sticky top-24 space-y-6"
                >
                  {/* Product Image */}
                  <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 shadow-xl">
                    <img 
                      src={productImage}
                      alt={specs.model}
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  {/* Main Specifications - Premium Design */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Flow */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                      <div className="p-2 bg-gradient-to-br from-laranja to-red-700 rounded-lg w-fit mb-3">
                        <Droplets className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                        {language === 'pt' ? 'VAZÃO (MAX)' : language === 'en' ? 'FLOW (MAX)' : 'FLUJO (MAX)'}
                      </h4>
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">
                        {specs.maxFlow}
                      </p>
                    </div>

                    {/* Pressure */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                      <div className="p-2 bg-gradient-to-br from-laranja to-red-700 rounded-lg w-fit mb-3">
                        <Gauge className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                        {language === 'pt' ? 'PRESSÃO (MAX)' : language === 'en' ? 'PRESSURE (MAX)' : 'PRESIÓN (MAX)'}
                      </h4>
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">
                        {specs.maxPressure}
                      </p>
                    </div>

                    {/* Temperature */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                      <div className="p-2 bg-gradient-to-br from-laranja to-red-700 rounded-lg w-fit mb-3">
                        <Thermometer className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                        {language === 'pt' ? 'TEMPERATURA (MAX)' : language === 'en' ? 'TEMPERATURE (MAX)' : 'TEMPERATURA (MAX)'}
                      </h4>
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">
                        350°C
                      </p>
                    </div>

                    {/* RPM */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                      <div className="p-2 bg-gradient-to-br from-laranja to-red-700 rounded-lg w-fit mb-3">
                        <Activity className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                        {language === 'pt' ? 'ROTAÇÕES' : language === 'en' ? 'ROTATIONS' : 'ROTACIONES'}
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-laranja rounded-full"></div>
                          <p className="text-lg font-bold text-slate-900 dark:text-white">1150 RPM</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-laranja rounded-full"></div>
                          <p className="text-lg font-bold text-slate-900 dark:text-white">1750 RPM</p>
                        </div>
                      </div>
                    </div>

                    {/* Viscosity */}
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                      <div className="p-2 bg-gradient-to-br from-laranja to-red-700 rounded-lg w-fit mb-3">
                        <Droplets className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                        {language === 'pt' ? 'VISCOSIDADE' : language === 'en' ? 'VISCOSITY' : 'VISCOSIDAD'}
                      </h4>
                      <p className="text-xl font-bold text-slate-900 dark:text-white">
                        {specs.maxViscosity}
                      </p>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col gap-3">
                    <Button
                      onClick={handleDownloadPDF}
                      size="lg"
                      className="group relative bg-gradient-to-r from-laranja to-red-700 text-white font-bold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 px-8 py-4"
                    >
                      <span className="flex items-center">
                        <Download className="mr-3 h-5 w-5 group-hover:animate-bounce" />
                        {language === 'pt' ? 'Manual Técnico' : language === 'en' ? 'Technical Manual' : 'Manual Técnico'}
                      </span>
                    </Button>
                    <Button
                      onClick={handleWhatsAppClick}
                      size="lg"
                      className="group relative bg-gradient-to-r from-green-600 to-green-700 text-white font-bold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 px-8 py-4"
                    >
                      <span className="flex items-center">
                        <MessageCircle className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
                        {language === 'pt' ? 'Falar com Especialista' : language === 'en' ? 'Talk to Expert' : 'Hablar con Experto'}
                      </span>
                    </Button>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Detailed Specifications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="lg:col-span-2 space-y-16"
              >
                {/* Technical Specifications - Full Width Premium Design */}
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/50 dark:to-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-gradient-to-br from-laranja to-red-700 rounded-xl">
                      <Settings className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                      {language === 'pt' ? 'ESPECIFICAÇÕES TÉCNICAS' :
                       language === 'en' ? 'TECHNICAL SPECIFICATIONS' :
                       'ESPECIFICACIONES TÉCNICAS'}
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Main Specifications */}
                    <div className="space-y-4">
                      {[
                        { icon: Package, text: specs.specifications?.[language]?.connections || `Bocais de sucção e recalque de Ø ${specs.diameter} com rosca "BSP"` },
                        { icon: Cog, text: specs.specifications?.[language]?.gears || 'Engrenagens de dentes helicoidais' },
                        { icon: Shield, text: specs.specifications?.[language]?.sealing || 'Vedação por gaxeta teflonada ou selo mecânico' },
                        { icon: Settings2, text: specs.specifications?.[language]?.bearings || 'Mancais deslizantes em buchas de bronze TM23 autolubrificantes' },
                        { icon: Factory, text: specs.specifications?.[language]?.construction || 'Construção em ferro fundido, aço inox ou aço carbono' }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-4 group">
                          <div className="p-2 bg-gradient-to-br from-laranja to-red-700 rounded-lg shadow-sm group-hover:shadow-md transition-all">
                            <item.icon className="w-5 h-5 text-white" />
                          </div>
                          <p className="text-slate-700 dark:text-slate-300 leading-relaxed flex-1">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Optionals */}
                    {specs.optionals?.[language] && specs.optionals[language].length > 0 && (
                      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                        <h4 className="font-bold text-xl text-laranja mb-6 flex items-center gap-2">
                          <Wrench className="w-6 h-6" />
                          {language === 'pt' ? 'OPCIONAIS' :
                           language === 'en' ? 'OPTIONALS' :
                           'OPCIONALES'}
                        </h4>
                        <div className="space-y-3">
                          {specs.optionals[language].map((option: string, index: number) => (
                            <div key={index} className="flex items-start gap-3">
                              <div className="mt-2 w-2 h-2 bg-laranja rounded-full flex-shrink-0" />
                              <p className="text-slate-700 dark:text-slate-300">{option}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Technical Drawing */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                    {language === 'pt' ? 'Desenho Técnico' :
                     language === 'en' ? 'Technical Drawing' :
                     'Dibujo Técnico'}
                  </h3>
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
                    <img 
                      src={drawingImage}
                      alt={`${specs.model} - Technical Drawing`}
                      className="w-full h-auto object-contain"
                      style={{ maxHeight: '600px' }}
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        // Try the generic drawing as fallback
                        img.src = `/src/assets/products/fbe/${diameter}/drawing.png`;
                      }}
                    />
                  </div>
                </motion.div>

                {/* Performance Data */}
                <div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {language === 'pt' ? 'TABELA DE VAZÃO' :
                       language === 'en' ? 'FLOW TABLE' :
                       'TABLA DE FLUJO'}
                    </h3>

                    {/* RPM Selector */}
                    <div className="flex gap-2">
                      {(() => {
                        const performanceKeyMap: Record<string, string> = {
                          '1/8"': 'FBE_1/8',
                          '1/4"': 'FBE_1/4',
                          '3/8"': 'FBE_3/8',
                          '1/2"': 'FBE_1/2',
                          '3/4"': 'FBE_3/4',
                          '1"': 'FBE_1',
                          '1.1/2"': 'FBE_1.1/2',
                          '2"': 'FBE_2',
                          '3"': 'FBE_3',
                          '4"': 'FBE_4'
                        };

                        const performanceKey = performanceKeyMap[specs.diameter] || performanceKeyMap[mappedDiameter];
                        const pumpPerformanceData = (performanceData as any).bombas_engrenagem_externa_FBE?.[performanceKey];
                        
                        // Get available RPMs for this specific model
                        const availableRPMs = pumpPerformanceData?.configuracoes?.map((config: any) => config.rpm) || [1150, 1750];
                        
                        return availableRPMs.map((rpm: number) => (
                          <Button
                            key={rpm}
                            variant={selectedRPM === rpm ? "default" : "outline"}
                            size="sm"
                            onClick={() => {
                              setSelectedRPM(rpm);
                              // Update URL with RPM parameter
                              const newUrl = new URL(window.location.href);
                              newUrl.searchParams.set('rpm', rpm.toString());
                              window.history.pushState({}, '', newUrl.toString());
                            }}
                            className={cn(
                              "px-4 py-2",
                              selectedRPM === rpm
                                ? "bg-laranja text-white hover:bg-red-700"
                                : "bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600"
                            )}
                          >
                            {rpm} RPM
                          </Button>
                        ));
                      })()}
                    </div>
                  </div>

                  {(() => {
                    const performanceKeyMap: Record<string, string> = {
                      '1/8"': 'FBE_1/8',
                      '1/4"': 'FBE_1/4',
                      '3/8"': 'FBE_3/8',
                      '1/2"': 'FBE_1/2',
                      '3/4"': 'FBE_3/4',
                      '1"': 'FBE_1',
                      '1.1/2"': 'FBE_1.1/2',
                      '2"': 'FBE_2',
                      '3"': 'FBE_3',
                      '4"': 'FBE_4'
                    };

                    const performanceKey = performanceKeyMap[specs.diameter] || performanceKeyMap[mappedDiameter];
                    let pumpPerformanceData = (performanceData as any).bombas_engrenagem_externa_FBE?.[performanceKey];

                    // For models with variations, try to find specific model data
                    if (!pumpPerformanceData && specs.model) {
                      const modelKey = specs.model.replace(/\s+/g, '_').replace(/"/g, '');
                      pumpPerformanceData = (performanceData as any).bombas_engrenagem_externa_FBE?.[modelKey];
                    }

                    // For specific variations (like FBE 1" A, FBE 1" D, etc)
                    if (specs.model && specs.model.includes(' ')) {
                      const modelParts = specs.model.split(' ');
                      if (modelParts.length > 2) {
                        const variantKey = modelParts.join('_').replace(/"/g, '');
                        const variantData = (performanceData as any).bombas_engrenagem_externa_FBE?.[variantKey];
                        if (variantData) {
                          pumpPerformanceData = variantData;
                        }
                      }
                    }

                    if (!pumpPerformanceData) {
                      return (
                        <div className="text-center py-12">
                          <p className="text-slate-500 dark:text-slate-400 text-lg">
                            {language === 'pt' ? 'Dados de performance não disponíveis para este modelo.' :
                             language === 'en' ? 'Performance data not available for this model.' :
                             'Datos de rendimiento no disponibles para este modelo.'}
                          </p>
                        </div>
                      );
                    }

                    // Find configuration for selected RPM
                    const selectedConfig = pumpPerformanceData.configuracoes?.find((config: any) => config.rpm === selectedRPM);

                    if (!selectedConfig) {
                      return (
                        <div className="text-center py-12">
                          <p className="text-slate-500 dark:text-slate-400 text-lg">
                            {language === 'pt' ? 'Dados não disponíveis para esta rotação.' :
                             language === 'en' ? 'Data not available for this rotation.' :
                             'Datos no disponibles para esta rotación.'}
                          </p>
                        </div>
                      );
                    }

                    return (
                      <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
                        <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 px-6 py-4">
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-semibold text-slate-900 dark:text-white">
                              {specs.model}
                            </span>
                            <Badge className="text-base px-4 py-1 bg-laranja text-white">
                              {selectedRPM} RPM
                            </Badge>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="overflow-x-auto">
                            <Table className="w-full">
                              <TableHeader>
                                <TableRow className="border-b-2">
                                  <TableHead className="text-center font-bold text-base">
                                    {language === 'pt' ? 'Pressão (bar)' :
                                     language === 'en' ? 'Pressure (bar)' :
                                     'Presión (bar)'}
                                  </TableHead>
                                  <TableHead className="text-center font-bold text-base">
                                    {language === 'pt' ? 'Vazão (L/min)' :
                                     language === 'en' ? 'Flow (L/min)' :
                                     'Flujo (L/min)'}
                                  </TableHead>
                                  <TableHead className="text-center font-bold text-base">
                                    {language === 'pt' ? 'Potência (CV)' :
                                     language === 'en' ? 'Power (HP)' :
                                     'Potencia (CV)'}
                                  </TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {selectedConfig.dados_operacionais?.map((row: any, idx: number) => (
                                  <TableRow key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800">
                                    <TableCell className="text-center font-medium">
                                      {row.pressao_bar?.toFixed(2) || '-'}
                                    </TableCell>
                                    <TableCell className="text-center">
                                      {row.vazao_l_min?.toFixed(2) || '-'}
                                    </TableCell>
                                    <TableCell className="text-center">
                                      {row.potencia_cv !== null && row.potencia_cv !== undefined ? row.potencia_cv.toFixed(2) : '-'}
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </div>

                {/* Similar Models Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-16"
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-laranja mb-4">
                      {language === 'pt' ? 'Modelos Semelhantes' :
                       language === 'en' ? 'Similar Models' :
                       'Modelos Similares'}
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                      {language === 'pt' ? 'Explore outras opções de bombas de engrenagem' :
                       language === 'en' ? 'Explore other gear pump options' :
                       'Explore otras opciones de bombas de engranaje'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {similarModels.map((pump, index) => {
                      // Reverse map the diameter for URL
                      const reverseDiameterMap: Record<string, string> = {
                        '1/8"': '18',
                        '1/4"': '14',
                        '3/8"': '38',
                        '1/2"': '12',
                        '3/4"': '34',
                        '1"': '1',
                        '1.1/2"': '112',
                        '2"': '2',
                        '3"': '3',
                        '4"': '4'
                      };

                      const urlDiameter = reverseDiameterMap[pump.diameter] || pump.diameter;
                      const pumpImage = `/src/assets/products/fbe/${urlDiameter}/photo.png`;

                      return (
                        <motion.div
                          key={pump.diameter}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        >
                          <Card
                            className="group cursor-pointer h-full bg-white dark:bg-slate-800 hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-laranja/30"
                            onClick={() => {
                              setLocation(`/produtos/bombas-engrenagem/${urlDiameter}/especificacoes`);
                            }}
                          >
                            <div className="aspect-[4/3] bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
                              <div className="absolute inset-0 flex items-center justify-center p-6">
                                <img 
                                  src={pumpImage}
                                  alt={`Bomba FBE ${pump.diameter}`}
                                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                                  onError={(e) => {
                                    const img = e.target as HTMLImageElement;
                                    img.src = '/src/assets/products/generic-pump.png';
                                  }}
                                />
                              </div>
                              <Badge className="absolute top-4 right-4 bg-laranja text-white">
                                FBE
                              </Badge>
                            </div>
                            <CardContent className="p-6">
                              <h4 className="text-xl font-bold text-azul-profundo dark:text-white mb-2">
                                FBE {pump.diameter}
                              </h4>
                              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                                {pump.models[0].maxFlow} {language === 'pt' ? 'máx' : 'max'}
                              </p>
                              <div className="flex items-center text-laranja dark:text-orange-400 font-medium">
                                <span className="text-sm">
                                  {language === 'pt' ? 'Ver especificações' : 'View specifications'}
                                </span>
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Wave Divider before Footer - Same color as footer */}
        <div className="relative bg-white dark:bg-slate-900">
          <svg 
            viewBox="0 0 1440 120" 
            preserveAspectRatio="none" 
            className="w-full h-[60px] md:h-[80px] lg:h-[120px]"
          >
            <path 
              d="M0,40 C360,90 720,10 1080,50 C1260,70 1380,80 1440,60 L1440,120 L0,120 Z" 
              className="fill-primary"
            />
          </svg>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default GearPumpSpecificationsPage;