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
  Check,
  Phone,
  Mail,
  Info
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
  const [selectedRPM, setSelectedRPM] = useState<number>(1750);

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
  
  // Reverse map for URL generation
  const reverseMap: Record<string, string> = {
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
  
  // Get pump data from gearPumpsComplete
  const pumpData = gearPumpsComplete.find(p => p.diameter === mappedDiameter);
  
  // Get current model
  const currentModel = modelId 
    ? pumpData?.models.find(m => m.id === modelId) || pumpData?.models[0]
    : pumpData?.models[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [diameter, modelId]);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      language === 'pt' ? `Olá! Gostaria de mais informações sobre a bomba FBE ${currentModel?.model}.` :
      language === 'en' ? `Hello! I would like more information about the FBE ${currentModel?.model} pump.` :
      `¡Hola! Me gustaría más información sobre la bomba FBE ${currentModel?.model}.`
    );
    window.open(`https://wa.me/5511972874837?text=${message}`, '_blank');
  };

  const handleDownloadPDF = () => {
    window.open('/public/assets/manuals/FB_Manual_Tecnico_FBE.pdf', '_blank');
  };

  if (!pumpData || !currentModel) {
    setLocation('/produtos');
    return null;
  }

  // Determine pump category
  const smallPumps = ['1/8"', '1/4"', '3/8"', '1/2"', '3/4"'];
  const isSmallPump = smallPumps.includes(mappedDiameter);
  const pumpCategory = isSmallPump 
    ? (language === 'pt' ? 'Bombas Pequenas' : language === 'en' ? 'Small Pumps' : 'Bombas Pequeñas')
    : mappedDiameter === '1"' 
      ? (language === 'pt' ? 'Bombas Diâmetro 1"' : language === 'en' ? '1" Diameter Pumps' : 'Bombas Diámetro 1"')
      : (language === 'pt' ? `Bombas Diâmetro ${mappedDiameter}` : language === 'en' ? `${mappedDiameter} Diameter Pumps` : `Bombas Diámetro ${mappedDiameter}`);

  // Get drawing and product images
  const drawingImage = theme === 'dark' 
    ? `/src/assets/products/fbe/${diameter}/drawing-white.png`
    : `/src/assets/products/fbe/${diameter}/drawing-black.png`;

  const productImage = (currentModel?.model === '1" D' || currentModel?.model === '1" DA' || currentModel?.code === 'FBE-1-D' || currentModel?.code === 'FBE-1-DA') 
    ? `/src/assets/products/fbe/${diameter}/photo-d-da.png?v=${Date.now()}`
    : `/src/assets/products/fbe/${diameter}/photo.png`;

  // Get performance data for current model
  const getPerformanceData = () => {
    // Map model names to performance data keys
    const modelKeyMap: Record<string, string> = {
      '1/8"': 'FBE_1/8',
      '1/4"': 'FBE_1/4',
      '3/8"': 'FBE_3/8',
      '1/2"': 'FBE_1/2',
      '3/4"': 'FBE_3/4',
      '1"': 'FBE_1',
      '1" A': 'FBE_1_A',
      '1" D': 'FBE_1_D',
      '1" DA': 'FBE_1_DA',
      '1.1/2"': 'FBE_1.1/2',
      '1.1/2" A': 'FBE_1.1/2_A',
      '2"': 'FBE_2',
      '2" A': 'FBE_2_A',
      '3"': 'FBE_3',
      '3" M9': 'FBE_3_M9',
      '4" M6': 'FBE_4_M6',
      '4" M8': 'FBE_4_M8',
      '4" M12': 'FBE_4_M12'
    };
    
    const modelKey = modelKeyMap[currentModel.model];
    const pumpData = performanceData.bombas_engrenagem_externa_FBE?.[modelKey];
    
    if (!pumpData) return { availableRPMs: [], data: {} };
    
    // Get all available RPMs
    const availableRPMs = pumpData.configuracoes.map((config: any) => config.rpm);
    
    // Organize data by RPM
    const dataByRPM: Record<number, any[]> = {};
    
    pumpData.configuracoes.forEach((config: any) => {
      dataByRPM[config.rpm] = config.dados_operacionais.map((item: any) => ({
        pressure: item.pressao_bar.toFixed(1),
        flow: item.vazao_l_min.toFixed(2),
        power: (item.potencia_cv * 0.7355).toFixed(2) // Convert CV to kW
      }));
    });
    
    return { availableRPMs, data: dataByRPM };
  };
  
  const performanceInfo = getPerformanceData();
  
  // Set initial RPM based on available options
  useEffect(() => {
    if (performanceInfo.availableRPMs.length > 0 && !performanceInfo.availableRPMs.includes(selectedRPM)) {
      setSelectedRPM(performanceInfo.availableRPMs[0]);
    }
  }, [performanceInfo.availableRPMs, currentModel]);

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-slate-50 dark:bg-slate-800">
        {/* Hero Section with Red Header */}
        <section className="relative bg-gradient-to-b from-red-800 to-red-900 text-white pb-0">
          {/* Background Image with Red Overlay */}
          <div className="absolute inset-0">
            <img 
              src="/src/assets/backgrounds/benefits-dark.svg"
              alt=""
              className="w-full h-full object-cover object-top opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-red-600/50 via-red-700/65 to-red-800/80" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* FB Bombas Text at Top */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 pt-8 pb-4"
            >
              <div className="h-px w-16 bg-gradient-to-l from-white to-transparent rounded-r-full" />
              <span className="text-white uppercase tracking-[0.2em] font-medium text-sm">
                FB BOMBAS
              </span>
            </motion.div>

            {/* Header with Empresa Brasileira badge */}
            <div className="flex justify-between items-start pb-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-left flex-1"
              >
                {/* Breadcrumb */}
                <Breadcrumb className="mb-6">
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink 
                        onClick={() => setLocation('/produtos#engrenagem')}
                        className="text-white/70 hover:text-white cursor-pointer transition-colors"
                      >
                        {language === 'pt' ? 'Bombas de Engrenagem' : language === 'en' ? 'Gear Pumps' : 'Bombas de Engranaje'}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="text-white/50" />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="text-white">
                        {pumpCategory}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>

                {/* Model Navigation Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-6"
                >
                  <div className="flex flex-wrap gap-2">
                    {(() => {
                      // Get related models based on category
                      let relatedModels: any[] = [];
                      
                      if (isSmallPump) {
                        // Show all small pumps
                        relatedModels = gearPumpsComplete.filter(p => smallPumps.includes(p.diameter));
                      } else if (mappedDiameter === '1"') {
                        // Show all 1" variants
                        relatedModels = gearPumpsComplete.filter(p => p.diameter === '1"');
                      } else if (mappedDiameter === '1.1/2"') {
                        // Show all 1.1/2" variants
                        relatedModels = gearPumpsComplete.filter(p => p.diameter === '1.1/2"');
                      } else if (mappedDiameter === '2"') {
                        // Show all 2" variants
                        relatedModels = gearPumpsComplete.filter(p => p.diameter === '2"');
                      } else if (mappedDiameter === '3"') {
                        // Show all 3" variants
                        relatedModels = gearPumpsComplete.filter(p => p.diameter === '3"');
                      } else if (mappedDiameter === '4"') {
                        // Show all 4" variants
                        relatedModels = gearPumpsComplete.filter(p => p.diameter === '4"');
                      }
                      
                      // Create flat list of all models with their diameter info
                      const allModels = relatedModels.flatMap(pump => 
                        pump.models.map(model => ({
                          ...model,
                          diameter: pump.diameter,
                          urlDiameter: reverseMap[pump.diameter] || pump.diameter
                        }))
                      );
                      
                      return allModels.map((model) => {
                        const isActive = model.id === currentModel.id;
                        const diameterUrl = model.urlDiameter;
                        
                        // Handle navigation with proper URL construction
                        const handleModelClick = () => {
                          // Check if this pump has only one model
                          const pumpInfo = gearPumpsComplete.find(p => p.diameter === model.diameter);
                          const hasMultipleModels = pumpInfo && pumpInfo.models.length > 1;
                          
                          if (hasMultipleModels) {
                            // For pumps with multiple models, include the model ID
                            setLocation(`/produtos/bombas-engrenagem/${diameterUrl}/${model.id}/especificacoes`);
                          } else {
                            // For single model pumps, go directly to specifications without model ID
                            setLocation(`/produtos/bombas-engrenagem/${diameterUrl}/especificacoes`);
                          }
                        };
                        
                        return (
                          <motion.button
                            key={model.id}
                            onClick={handleModelClick}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={cn(
                              "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                              isActive
                                ? "bg-white text-red-800 shadow-lg"
                                : "bg-white/10 text-white/90 hover:bg-white/20 backdrop-blur-sm border border-white/20"
                            )}
                          >
                            {model.model}
                          </motion.button>
                        );
                      });
                    })()}
                  </div>
                </motion.div>

                {/* Main Title */}
                <h1 className="text-3xl md:text-5xl lg:text-6xl text-white mb-6 font-light">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="block text-3xl md:text-4xl lg:text-5xl"
                  >
                    {language === "pt"
                      ? "Especificações"
                      : language === "en"
                        ? "Specifications"
                        : "Especificaciones"}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="block text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent pb-2"
                  >
                    FBE {currentModel.model}
                  </motion.span>
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-base md:text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed font-light"
                >
                  {language === "pt"
                    ? "Dados técnicos completos e informações detalhadas para sua aplicação industrial."
                    : language === "en"
                      ? "Complete technical data and detailed information for your industrial application."
                      : "Datos técnicos completos e información detallada para su aplicación industrial."}
                </motion.p>
              </motion.div>
              
              {/* Empresa Brasileira Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="hidden md:block ml-8 mt-auto mb-0"
              >
                <img 
                  src="/src/assets/empresa-100-brasileira.png" 
                  alt="Empresa 100% Brasileira"
                  className="w-48 md:w-56 lg:w-64 xl:w-72 h-auto object-contain drop-shadow-2xl"
                  loading="eager"
                />
              </motion.div>
            </div>
          </div>

          {/* Wave Divider - 3 layers without gradients */}
          <div className="relative w-full -mt-px">
            <svg
              className="w-full h-16 sm:h-20 md:h-24"
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background wave layer */}
              <path
                d="M0,20 C480,100 960,100 1440,20 L1440,120 L0,120 Z"
                fill="#f8fafc"
                className="dark:fill-slate-800"
                opacity="0.4"
              />
              
              {/* Middle wave layer */}
              <path
                d="M0,40 C360,90 720,90 1080,40 S1440,0 1440,0 L1440,120 L0,120 Z"
                fill="#f8fafc"
                className="dark:fill-slate-800"
                opacity="0.7"
              />
              
              {/* Front wave layer */}
              <path
                d="M0,60 C240,95 480,95 720,60 C960,25 1200,25 1440,60 L1440,120 L0,120 Z"
                fill="#f8fafc"
                className="dark:fill-slate-800"
              />
            </svg>
            {/* Bottom cover to hide any lines */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-slate-50 dark:bg-slate-800" />
          </div>
        </section>

        {/* Main Content - Clean and High-end */}
        <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Product Overview Section - Red Theme */}
            <div className="relative border-2 border-red-600 rounded-3xl p-8 md:p-12 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm mb-12">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left Side - Product Image and Gallery */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                  >
                    <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl p-8">
                      <img 
                        src={productImage}
                        alt={`FBE ${currentModel.model}`}
                        className="w-full h-auto object-contain max-h-[400px]"
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          img.src = '/src/assets/products/generic-pump.png';
                        }}
                      />
                    </div>
                    
                    {/* Product Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge className="text-lg px-4 py-2 bg-gradient-to-r from-laranja to-red-600 text-white">
                        {currentModel.code}
                      </Badge>
                    </div>
                  </motion.div>
                  
                  {/* Produto Nacional Badge - Below Product Image */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-6"
                  >
                    <img 
                      src={theme === 'dark' 
                        ? "/src/assets/produto-nacional-badge-dark.png"
                        : "/src/assets/produto-nacional-badge-light.png"
                      }
                      alt="Produto 100% Nacional"
                      className="w-full h-auto object-contain"
                      loading="eager"
                    />
                  </motion.div>
                </div>

                {/* Right Side - Key Specifications */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                      {language === "pt" ? "Características Principais" : language === "en" ? "Key Features" : "Características Principales"}
                    </h2>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <Card className="bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-gradient-to-br from-laranja to-red-600 rounded-lg">
                              <Gauge className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                                {language === "pt" ? "Pressão (MÁX)" : language === "en" ? "Pressure (MAX)" : "Presión (MÁX)"}
                              </h4>
                              <p className="text-lg font-bold text-laranja">
                                {currentModel.specifications.maxPressure}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-gradient-to-br from-laranja to-red-600 rounded-lg">
                              <Droplets className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                                {language === "pt" ? "Vazão (MÁX)" : language === "en" ? "Flow (MAX)" : "Flujo (MÁX)"}
                              </h4>
                              <p className="text-lg font-bold text-laranja">
                                {currentModel.specifications.maxFlow}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-gradient-to-br from-laranja to-red-600 rounded-lg">
                              <Thermometer className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                                {language === "pt" ? "Temperatura" : language === "en" ? "Temperature" : "Temperatura"}
                              </h4>
                              <p className="text-lg font-bold text-laranja">
                                {currentModel.specifications.temperature}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-gradient-to-br from-laranja to-red-600 rounded-lg">
                              <Settings className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                                {language === "pt" ? "RPM Disponíveis" : language === "en" ? "Available RPM" : "RPM Disponibles"}
                              </h4>
                              <p className="text-lg font-bold text-laranja">
                                {performanceInfo.availableRPMs.length > 0 
                                  ? performanceInfo.availableRPMs.join(', ')
                                  : currentModel.specifications.maxRPM}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Technical Details List */}
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                        {language === "pt" ? "Especificações Técnicas" : language === "en" ? "Technical Specifications" : "Especificaciones Técnicas"}
                      </h3>
                      {currentModel.technicalSpecs[language].map((spec, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-laranja flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-slate-700 dark:text-slate-300">{spec}</p>
                        </div>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                      <Button
                        onClick={handleDownloadPDF}
                        className="bg-gradient-to-r from-laranja to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        {language === "pt" ? "Baixar Manual Técnico" : language === "en" ? "Download Technical Manual" : "Descargar Manual Técnico"}
                      </Button>
                      <Button
                        onClick={handleWhatsAppClick}
                        variant="outline"
                        className="bg-white border-2 border-laranja text-laranja hover:bg-laranja hover:text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <svg className="mr-2 h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        {language === "pt" ? "Fale com um Especialista" : language === "en" ? "Talk to a Specialist" : "Hable con un Especialista"}
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Detailed Specifications Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <Tabs defaultValue="performance" className="w-full">
                <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 bg-white dark:bg-slate-900 shadow-lg">
                  <TabsTrigger value="performance" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-laranja data-[state=active]:to-red-600 data-[state=active]:text-white">
                    <Activity className="mr-2 h-4 w-4" />
                    {language === "pt" ? "Tabela de Vazão" : language === "en" ? "Flow Table" : "Tabla de Flujo"}
                  </TabsTrigger>
                  <TabsTrigger value="materials" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-laranja data-[state=active]:to-red-600 data-[state=active]:text-white">
                    <Package className="mr-2 h-4 w-4" />
                    {language === "pt" ? "Materiais" : language === "en" ? "Materials" : "Materiales"}
                  </TabsTrigger>
                  <TabsTrigger value="optionals" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-laranja data-[state=active]:to-red-600 data-[state=active]:text-white">
                    <Wrench className="mr-2 h-4 w-4" />
                    {language === "pt" ? "Opcionais" : language === "en" ? "Options" : "Opcionales"}
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="performance" className="mt-6">
                  <Card className="bg-white dark:bg-slate-900 shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-slate-900 dark:text-white text-center">
                        {language === "pt" ? `TABELA DE VAZÃO E PRESSÃO PARA BOMBA DE ENGRENAGEM EXTERNA MODELO FBE ${currentModel.model}` : language === "en" ? `FLOW AND PRESSURE TABLE FOR EXTERNAL GEAR PUMP MODEL FBE ${currentModel.model}` : `TABLA DE FLUJO Y PRESIÓN PARA BOMBA DE ENGRANAJE EXTERNA MODELO FBE ${currentModel.model}`}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {performanceInfo.availableRPMs.length > 0 ? (
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr>
                                <th className="border border-slate-300 dark:border-slate-600 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-2 text-sm font-bold">
                                  {language === "pt" ? "Modelo" : "Model"}
                                </th>
                                <th className="border border-slate-300 dark:border-slate-600 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-2 text-sm font-bold">
                                  RPM
                                </th>
                                <th className="border border-slate-300 dark:border-slate-600 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-2 text-sm font-bold">
                                  {language === "pt" ? "Pressão" : "Pressure"}
                                </th>
                                {performanceInfo.data[performanceInfo.availableRPMs[0]] && performanceInfo.data[performanceInfo.availableRPMs[0]].map((item: any, idx: number) => (
                                  <th key={idx} className="border border-slate-300 dark:border-slate-600 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-2 text-sm font-bold">
                                    {parseFloat(item.pressure).toFixed(2)}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {performanceInfo.availableRPMs.map((rpm: number, rpmIdx: number) => {
                                // Define alternating colors for each RPM
                                const colorClasses = [
                                  'bg-blue-50 dark:bg-blue-900/20',
                                  'bg-emerald-50 dark:bg-emerald-900/20',
                                  'bg-purple-50 dark:bg-purple-900/20',
                                  'bg-amber-50 dark:bg-amber-900/20',
                                  'bg-rose-50 dark:bg-rose-900/20',
                                  'bg-cyan-50 dark:bg-cyan-900/20'
                                ];
                                const rowColor = colorClasses[rpmIdx % colorClasses.length];
                                
                                return (
                                  <React.Fragment key={rpm}>
                                    <tr>
                                      <td rowSpan={2} className={`border border-slate-300 dark:border-slate-600 p-2 text-center font-bold ${rowColor}`}>
                                        FBE {currentModel.model}
                                      </td>
                                      <td rowSpan={2} className={`border border-slate-300 dark:border-slate-600 p-2 text-center font-bold ${rowColor}`}>
                                        {rpm}
                                      </td>
                                      <td className="border border-slate-300 dark:border-slate-600 p-2 text-center bg-blue-100 dark:bg-blue-800/30 font-medium">
                                        L/min
                                      </td>
                                      {performanceInfo.data[rpm] && performanceInfo.data[rpm].map((item: any, idx: number) => (
                                        <td key={idx} className={`border border-slate-300 dark:border-slate-600 p-2 text-center ${rowColor}`}>
                                          {item.flow}
                                        </td>
                                      ))}
                                    </tr>
                                    <tr>
                                      <td className="border border-slate-300 dark:border-slate-600 p-2 text-center bg-green-100 dark:bg-green-800/30 font-medium">
                                        {language === "pt" ? "CV" : "HP"}
                                      </td>
                                      {performanceInfo.data[rpm] && performanceInfo.data[rpm].map((item: any, idx: number) => (
                                        <td key={idx} className={`border border-slate-300 dark:border-slate-600 p-2 text-center ${rowColor}`}>
                                          {(parseFloat(item.power) / 0.7355).toFixed(2)}
                                        </td>
                                      ))}
                                    </tr>
                                  </React.Fragment>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <div className="text-center text-slate-500 py-8">
                          <Activity className="h-8 w-8 text-slate-300 mx-auto mb-2" />
                          <p>{language === "pt" ? "Dados de performance não disponíveis para este modelo" : language === "en" ? "Performance data not available for this model" : "Datos de rendimiento no disponibles para este modelo"}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="materials" className="mt-6">
                  <Card className="bg-white dark:bg-slate-900 shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <Package className="h-5 w-5 text-laranja" />
                        {language === "pt" ? "Materiais de Construção" : language === "en" ? "Construction Materials" : "Materiales de Construcción"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {currentModel.materials[language].map((material, index) => (
                          <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg">
                            <Check className="w-5 h-5 text-laranja flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-slate-700 dark:text-slate-300">{material}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="optionals" className="mt-6">
                  <Card className="bg-white dark:bg-slate-900 shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <Wrench className="h-5 w-5 text-laranja" />
                        {language === "pt" ? "Opcionais Disponíveis" : language === "en" ? "Available Options" : "Opcionales Disponibles"}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {currentModel.optionals[language].map((optional, index) => (
                          <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg">
                            <Settings2 className="w-5 h-5 text-laranja flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-slate-700 dark:text-slate-300">{optional}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>

            {/* Technical Drawing Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12"
            >
              <Card className="bg-white dark:bg-slate-900 shadow-xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-laranja to-red-600 text-white">
                  <CardTitle className="text-xl font-bold flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    {language === "pt" ? "Desenho Técnico" : language === "en" ? "Technical Drawing" : "Dibujo Técnico"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl p-8">
                    <img 
                      src={drawingImage}
                      alt={`Technical drawing FBE ${currentModel.model}`}
                      className="w-full h-auto object-contain max-h-[500px]"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.src = '/src/assets/products/generic-drawing.png';
                      }}
                    />
                  </div>
                  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <p className="text-sm text-slate-600 dark:text-slate-400">{language === "pt" ? "Entrada" : "Inlet"}</p>
                      <p className="font-bold text-slate-900 dark:text-white">{currentModel.specifications.inlet}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-slate-600 dark:text-slate-400">{language === "pt" ? "Saída" : "Outlet"}</p>
                      <p className="font-bold text-slate-900 dark:text-white">{currentModel.specifications.outlet}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-slate-600 dark:text-slate-400">{language === "pt" ? "Peso" : "Weight"}</p>
                      <p className="font-bold text-slate-900 dark:text-white">{currentModel.specifications.weight}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-slate-600 dark:text-slate-400">{language === "pt" ? "Viscosidade (MÁX)" : "Viscosity (MAX)"}</p>
                      <p className="font-bold text-slate-900 dark:text-white">{currentModel.specifications.maxViscosity}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Premium CTA Section - IDENTICAL TO PRODUCTS PAGE */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Single Unified Container */}
              <div className="relative overflow-hidden rounded-3xl p-12 md:p-16 bg-gradient-to-br from-red-900 via-red-800 to-black/90">
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                <div className="relative z-10 text-center max-w-4xl mx-auto">
                  {/* Excellence Badge */}
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="h-px w-24 bg-gradient-to-r from-transparent to-white/50" />
                    <span className="text-white/80 uppercase tracking-[0.3em] font-light text-xs">
                      {language === "pt" ? "EXCELÊNCIA EM ATENDIMENTO" : language === "en" ? "EXCELLENCE IN SERVICE" : "EXCELENCIA EN SERVICIO"}
                    </span>
                    <div className="h-px w-24 bg-gradient-to-l from-transparent to-white/50" />
                  </div>

                  {/* Main Title */}
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                    {language === "pt"
                      ? "Precisa de Ajuda para Escolher?"
                      : language === "en"
                        ? "Need Help Choosing?"
                        : "¿Necesita Ayuda para Elegir?"}
                  </h2>
                  
                  {/* Description */}
                  <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                    {language === "pt"
                      ? "Nossa equipe técnica especializada está pronta para oferecer consultoria personalizada, dimensionamento correto e a solução ideal para sua aplicação. Com mais de 80 anos de experiência, garantimos qualidade e confiabilidade em cada projeto."
                      : language === "en"
                        ? "Our specialized technical team is ready to offer personalized consulting, correct sizing and the ideal solution for your application. With over 80 years of experience, we guarantee quality and reliability in every project."
                        : "Nuestro equipo técnico especializado está listo para ofrecer consultoría personalizada, dimensionamiento correcto y la solución ideal para su aplicación. Con más de 80 años de experiencia, garantizamos calidad y confiabilidad en cada proyecto."}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={handleWhatsAppClick}
                      size="lg"
                      className="bg-white hover:bg-white/90 text-slate-900 font-semibold px-10 py-6 text-lg shadow-2xl transition-all duration-300"
                    >
                      {language === "pt" ? "Falar com Especialista" : language === "en" ? "Talk to Expert" : "Hablar con Experto"}
                    </Button>
                    <Button
                      onClick={() => setLocation('/contato')}
                      size="lg"
                      className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-10 py-6 text-lg transition-all duration-300"
                    >
                      {language === "pt" ? "Preencher Formulário" : language === "en" ? "Fill Out Form" : "Completar Formulario"}
                    </Button>
                  </div>
                </div>
              </div>
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
              className="fill-primary"
            />
          </svg>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default GearPumpSpecificationsPage;