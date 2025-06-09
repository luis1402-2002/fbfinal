import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { useLanguage } from "../contexts/LanguageContext";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Helmet } from "react-helmet";
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
  ArrowUpRight,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { cn } from "../lib/utils";
import {
  gearPumpsComplete,
  fbeSeriesFeatures,
  fbeApplications,
} from "../data/gearPumpsComplete";
import { centrifugalPumpsComplete } from "../data/centrifugalPumpsComplete";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../components/ui/breadcrumb";

// Group pumps by category
const smallPumps = gearPumpsComplete.filter((pump) =>
  ['1/8"', '1/4"', '3/8"', '1/2"', '3/4"'].includes(pump.diameter),
);

const mediumPumps = gearPumpsComplete.filter((pump) => pump.diameter === '1"');

const largePumps = [
  gearPumpsComplete.find((pump) => pump.diameter === '1.1/2"'),
  gearPumpsComplete.find((pump) => pump.diameter === '2"'),
  gearPumpsComplete.find((pump) => pump.diameter === '3"'),
  gearPumpsComplete.find((pump) => pump.diameter === '4"'),
].filter(Boolean);

const ProductsPagePremium: React.FC = () => {
  const { t, language } = useLanguage();
  const [location, setLocation] = useLocation();
  const [activeCategory, setActiveCategory] = useState<"gear" | "centrifugal">("gear");
  const [hoveredPump, setHoveredPump] = useState<string | null>(null);
  const [fbcnImage, setFbcnImage] = useState(0);
  const [fbotImage, setFbotImage] = useState(0);
  
  const fbcnImages = [
    "/src/assets/fotosfb/FBCN/FBCN FRENTE.png",
    "/src/assets/fotosfb/FBCN/FBCN LADO.png",
    "/src/assets/fotosfb/FBCN/FBCN TRÁS.png"
  ];
  
  const fbotImages = [
    "/src/assets/fotosfb/FBOT/FBOT FRENTE.png",
    "/src/assets/fotosfb/FBOT/FBOT LADO.png",
    "/src/assets/fotosfb/FBOT/FBOT TRÁS.png"
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Auto-rotate carousel images
  useEffect(() => {
    const interval = setInterval(() => {
      setFbcnImage((prev) => (prev + 1) % fbcnImages.length);
      setFbotImage((prev) => (prev + 1) % fbotImages.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      language === "pt"
        ? "Olá! Gostaria de mais informações sobre os produtos FB Bombas."
        : language === "en"
          ? "Hello! I would like more information about FB Bombas products."
          : "¡Hola! Me gustaría más información sobre los productos FB Bombas.",
    );
    window.open(`https://wa.me/5511972874837?text=${message}`, "_blank");
  };

  const handleGearPumpClick = (diameter: string, modelCount: number) => {
    // Map diameter for URL
    const diameterMap: Record<string, string> = {
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
    
    const urlDiameter = diameterMap[diameter] || diameter;
    
    // Always go directly to specifications page
    setLocation(`/produtos/bombas-engrenagem/${urlDiameter}/especificacoes`);
  };

  // Get pump image based on diameter
  const getPumpImage = (diameter: string) => {
    // Map for small pumps folder
    const smallPumpMap: Record<string, string> = {
      '1/8"': '1-8',
      '1/4"': '1-4',
      '3/8"': '3-8',
      '1/2"': '1-2',
      '3/4"': '3-4'
    };
    
    // Check if it's a small pump
    if (smallPumpMap[diameter]) {
      return `/src/assets/fotosfb/FBE PEQUENAS/FBE ${smallPumpMap[diameter]}.png`;
    }
    
    // For larger pumps, use their specific folders
    switch (diameter) {
      case '1"':
        return '/src/assets/fotosfb/FBE 1/FBE 1.png';
      case '1.1/2"':
        return '/src/assets/fotosfb/FBE 1.1/FBE 1.1-2.png';
      case '2"':
        return '/src/assets/fotosfb/FBE 2/FBE 2.png';
      case '3"':
        return '/src/assets/fotosfb/FBE 3/FBE 3.png';
      case '4"':
        return '/src/assets/fotosfb/FBE 4/FBE 4.png';
      default:
        return '/src/assets/products/generic-pump.png';
    }
  };

  return (
    <>
      <Helmet>
        <title>
          {language === "pt"
            ? "Produtos - FB Bombas | Bombas Industriais de Alta Qualidade"
            : language === "en"
              ? "Products - FB Bombas | High Quality Industrial Pumps"
              : "Productos - FB Bombas | Bombas Industriales de Alta Calidad"}
        </title>
        <meta
          name="description"
          content={
            language === "pt"
              ? "Conheça nossa linha completa de bombas industriais: bombas de engrenagem FBE e bombas centrífugas FBCN e FBOT para diversas aplicações."
              : language === "en"
                ? "Discover our complete line of industrial pumps: FBE gear pumps and FBCN and FBOT centrifugal pumps for various applications."
                : "Conozca nuestra línea completa de bombas industriales: bombas de engranajes FBE y bombas centrífugas FBCN y FBOT para diversas aplicaciones."
          }
        />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        {/* Hero Section with Background Image */}
        <section className="relative pt-28 md:pt-32 pb-0 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/src/assets/backgrounds/hero-dark.png"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <Breadcrumb className="mb-8">
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
                  <BreadcrumbPage className="text-white">
                    {language === 'pt' ? 'Produtos' : language === 'en' ? 'Products' : 'Productos'}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-left py-8"
            >
              {/* FB Bombas Text */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="h-px w-16 bg-gradient-to-l from-laranja to-transparent" />
                <span className="text-laranja uppercase tracking-[0.2em] font-medium text-sm">
                  FB BOMBAS
                </span>
              </motion.div>

              {/* Main Title */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl text-white mb-6 font-light">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="block"
                >
                  {language === "pt"
                    ? "Nossos"
                    : language === "en"
                      ? "Our"
                      : "Nuestros"}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="block text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-azul-profundo bg-clip-text text-transparent pb-2"
                >
                  {language === "pt"
                    ? "Produtos"
                    : language === "en"
                      ? "Products"
                      : "Productos"}
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-base md:text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed font-light"
              >
                {language === "pt"
                  ? "Soluções especializadas em bombeamento industrial com tecnologia de ponta e qualidade garantida."
                  : language === "en"
                    ? "Specialized industrial pumping solutions with cutting-edge technology and guaranteed quality."
                    : "Soluciones especializadas en bombeo industrial con tecnología de punta y calidad garantizada."}
              </motion.p>
            </motion.div>
          </div>

          {/* Wave Divider */}
          <div className="relative">
            <svg
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
              className="w-full h-[60px] md:h-[80px] lg:h-[120px]"
            >
              <path
                d="M0,60 C360,10 720,90 1080,50 C1260,30 1380,20 1440,40 L1440,120 L0,120 Z"
                className="fill-slate-50 dark:fill-slate-900"
              />
            </svg>
          </div>
        </section>

        {/* Category Buttons - Below Wave Divider */}
        <section className="py-8 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <button
                onClick={() => setActiveCategory("gear")}
                className={cn(
                  "group relative overflow-hidden transition-all duration-300 px-6 sm:px-8 py-4 sm:py-6 min-w-[240px] sm:min-w-[300px] rounded-2xl",
                  "bg-white dark:bg-slate-900 border-2",
                  activeCategory === "gear"
                    ? "border-laranja shadow-2xl shadow-laranja/20 transform scale-105"
                    : "border-slate-200 dark:border-slate-700 hover:border-laranja/50 shadow-lg hover:shadow-xl hover:transform hover:scale-102"
                )}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={cn(
                    "p-3 sm:p-4 rounded-xl transition-all duration-300 shadow-lg",
                    activeCategory === "gear"
                      ? "bg-gradient-to-br from-laranja to-red-600 shadow-laranja/30"
                      : "bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30"
                  )}>
                    <Cog className={cn(
                      "w-6 h-6 sm:w-7 sm:h-7",
                      activeCategory === "gear" ? "text-white" : "text-laranja"
                    )} />
                  </div>
                  <div className="text-left">
                    <span className={cn(
                      "block text-xs sm:text-sm font-medium",
                      activeCategory === "gear"
                        ? "text-laranja"
                        : "text-slate-500 dark:text-slate-400"
                    )}>
                      {language === "pt" ? "Série" : language === "en" ? "Series" : "Serie"}
                    </span>
                    <span className={cn(
                      "block text-base sm:text-lg font-bold",
                      activeCategory === "gear"
                        ? "text-slate-900 dark:text-white"
                        : "text-slate-700 dark:text-slate-300"
                    )}>
                      {language === "pt"
                        ? "Bombas de Engrenagem"
                        : language === "en"
                          ? "Gear Pumps"
                          : "Bombas de Engranaje"}
                    </span>
                  </div>
                </div>
              </button>
              
              <button
                onClick={() => setActiveCategory("centrifugal")}
                className={cn(
                  "group relative overflow-hidden transition-all duration-300 px-6 sm:px-8 py-4 sm:py-6 min-w-[240px] sm:min-w-[300px] rounded-2xl",
                  "bg-white dark:bg-slate-900 border-2",
                  activeCategory === "centrifugal"
                    ? "border-azul-profundo shadow-2xl shadow-azul-profundo/20 transform scale-105"
                    : "border-slate-200 dark:border-slate-700 hover:border-azul-profundo/50 shadow-lg hover:shadow-xl hover:transform hover:scale-102"
                )}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={cn(
                    "p-3 sm:p-4 rounded-xl transition-all duration-300 shadow-lg",
                    activeCategory === "centrifugal"
                      ? "bg-gradient-to-br from-azul-profundo to-blue-600 shadow-azul-profundo/30"
                      : "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30"
                  )}>
                    <Droplets className={cn(
                      "w-6 h-6 sm:w-7 sm:h-7",
                      activeCategory === "centrifugal" ? "text-white" : "text-azul-profundo"
                    )} />
                  </div>
                  <div className="text-left">
                    <span className={cn(
                      "block text-xs sm:text-sm font-medium",
                      activeCategory === "centrifugal"
                        ? "text-azul-profundo"
                        : "text-slate-500 dark:text-slate-400"
                    )}>
                      {language === "pt" ? "Série" : language === "en" ? "Series" : "Serie"}
                    </span>
                    <span className={cn(
                      "block text-base sm:text-lg font-bold",
                      activeCategory === "centrifugal"
                        ? "text-slate-900 dark:text-white"
                        : "text-slate-700 dark:text-slate-300"
                    )}>
                      {language === "pt"
                        ? "Bombas Centrífugas"
                        : language === "en"
                          ? "Centrifugal Pumps"
                          : "Bombas Centrífugas"}
                    </span>
                  </div>
                </div>
              </button>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              {activeCategory === "gear" && (
                <motion.div
                  key="gear"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* FBE Series Container with Red Border */}
                  <div className="relative border-2 border-red-600 rounded-3xl p-8 md:p-12 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
                    <div className="grid lg:grid-cols-2 gap-12">
                      {/* Left Side - Title */}
                      <div className="text-left">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          <h3 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-400 mb-2">
                            {language === "pt" ? "Série" : language === "en" ? "Series" : "Serie"}
                          </h3>
                          <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-laranja to-red-700 mb-4">
                            FBE
                          </h2>
                          <p className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white">
                            {language === "pt"
                              ? "Bombas de Engrenagem"
                              : language === "en"
                                ? "Gear Pumps"
                                : "Bombas de Engranaje"}
                          </p>
                        </motion.div>
                      </div>

                      {/* Right Side - Content */}
                      <div>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                          {language === "pt"
                            ? "Projetadas para aplicações industriais exigentes, nossas bombas de engrenagem oferecem precisão, confiabilidade e performance superior em transferência de fluidos viscosos."
                            : language === "en"
                              ? "Designed for demanding industrial applications, our gear pumps offer precision, reliability and superior performance in viscous fluid transfer."
                              : "Diseñadas para aplicaciones industriales exigentes, nuestras bombas de engranajes ofrecen precisión, confiabilidad y rendimiento superior en la transferencia de fluidos viscosos."}
                        </p>

                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-4 rounded-xl border border-red-200 dark:border-red-800">
                            <Gauge className="w-6 h-6 text-laranja mx-auto mb-2" />
                            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                              {language === "pt" ? "Pressão" : language === "en" ? "Pressure" : "Presión"}
                            </h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300 font-bold">
                              {language === "pt" ? "Até 300 Bar" : language === "en" ? "Up to 300 Bar" : "Hasta 300 Bar"}
                            </p>
                          </div>
                          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-4 rounded-xl border border-red-200 dark:border-red-800">
                            <Thermometer className="w-6 h-6 text-laranja mx-auto mb-2" />
                            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                              {language === "pt" ? "Temperatura" : language === "en" ? "Temperature" : "Temperatura"}
                            </h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300 font-bold">
                              {language === "pt" ? "Até 350°C" : language === "en" ? "Up to 350°C" : "Hasta 350°C"}
                            </p>
                          </div>
                          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-4 rounded-xl border border-red-200 dark:border-red-800">
                            <Droplets className="w-6 h-6 text-laranja mx-auto mb-2" />
                            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                              {language === "pt" ? "Vazão" : language === "en" ? "Flow" : "Flujo"}
                            </h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300 font-bold">
                              {language === "pt" ? "Até 460 L/min" : language === "en" ? "Up to 460 L/min" : "Hasta 460 L/min"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div> {/* Close FBE Container */}
                  
                  {/* Small Pumps Grid - Outside container */}
                  <div className="mt-16 mb-16">
                      <div className="text-center mb-10">
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
                          {language === "pt"
                            ? "Bombas de Pequeno Porte"
                            : language === "en"
                              ? "Small Size Pumps"
                              : "Bombas de Pequeño Porte"}
                        </h3>
                        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                          {language === "pt"
                            ? "Soluções compactas para aplicações de precisão"
                            : language === "en"
                              ? "Compact solutions for precision applications"
                              : "Soluciones compactas para aplicaciones de precisión"}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {smallPumps.map((pump, index) => (
                          <motion.div
                            key={pump.diameter}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                          >
                            <Card
                              className="group cursor-pointer h-full overflow-hidden bg-gradient-to-br from-white to-red-50 dark:from-slate-800 dark:to-red-950/20 hover:shadow-2xl transition-all duration-300 border-2 hover:border-laranja"
                              onClick={() =>
                                handleGearPumpClick(
                                  pump.diameter,
                                  pump.models.length,
                                )
                              }
                            >
                              {/* Header with pump image */}
                              <div className="relative p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
                                <Badge className="absolute top-2 right-2 text-xs bg-gradient-to-r from-laranja to-red-600 text-white">
                                  {pump.models[0].code}
                                </Badge>

                                <div className="flex items-center justify-center mb-2">
                                  <img 
                                    src={getPumpImage(pump.diameter)}
                                    alt={`Bomba FBE ${pump.diameter}`}
                                    className="w-16 h-16 object-contain"
                                    onError={(e) => {
                                      const img = e.target as HTMLImageElement;
                                      img.src = '/src/assets/products/generic-pump.png';
                                    }}
                                  />
                                </div>

                                <h4 className="text-lg font-bold text-slate-900 dark:text-white text-center">
                                  FBE {pump.diameter}
                                </h4>
                              </div>

                              <CardContent className="p-4">
                                <div className="space-y-2 mb-4">
                                  <div>
                                    <div className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400">
                                      <Droplets className="w-3 h-3 text-laranja" />
                                      {language === "pt" ? "Vazão" : "Flow"}
                                    </div>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                                      {pump.models[0].specifications.maxFlow}
                                    </p>
                                  </div>
                                  <div>
                                    <div className="flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400">
                                      <Gauge className="w-3 h-3 text-laranja" />
                                      {language === "pt" ? "Pressão" : "Pressure"}
                                    </div>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                                      {pump.models[0].specifications.maxPressure}
                                    </p>
                                  </div>
                                </div>

                                <Button className="w-full text-xs py-2 bg-gradient-to-r from-laranja to-red-600 hover:from-red-600 hover:to-red-700 text-white group-hover:shadow-lg transition-all duration-300">
                                  <span>
                                    {language === "pt"
                                      ? "Ver Detalhes"
                                      : language === "en"
                                        ? "View Details"
                                        : "Ver Detalles"}
                                  </span>
                                  <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                                </Button>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                  {/* Pumps 1" - Standardized like large pumps */}
                  <div className="mb-16">
                    <div className="text-center mb-10">
                      <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
                        {language === "pt"
                          ? 'Bombas Diâmetro 1"'
                          : language === "en"
                            ? '1" Diameter Pumps'
                            : 'Bombas Diámetro 1"'}
                      </h3>
                      <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        {mediumPumps[0]?.models.length}{" "}
                        {language === "pt"
                          ? "modelos disponíveis para diferentes aplicações"
                          : language === "en"
                            ? "models available for different applications"
                            : "modelos disponibles para diferentes aplicaciones"}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {mediumPumps[0]?.models.map((model, modelIndex) => (
                        <motion.div
                          key={model.id}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: modelIndex * 0.1,
                          }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <Card
                            className="group cursor-pointer h-full overflow-hidden bg-gradient-to-br from-white to-red-50 dark:from-slate-800 dark:to-red-950/20 hover:shadow-2xl transition-all duration-300 border-2 hover:border-laranja"
                            onClick={() =>
                              handleGearPumpClick(
                                mediumPumps[0].diameter,
                                mediumPumps[0].models.length,
                              )
                            }
                          >
                            {/* Header with pump image */}
                            <div className="relative p-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
                              <Badge className="absolute top-4 right-4 bg-gradient-to-r from-laranja to-red-600 text-white">
                                {model.code}
                              </Badge>

                              <div className="flex items-center justify-center mb-4">
                                <img 
                                  src={modelIndex === 0 ? '/src/assets/fotosfb/FBE 1/FBE 1.png' : 
                                       modelIndex === 1 ? '/src/assets/fotosfb/FBE 1/FBE 1 A.png' :
                                       modelIndex === 2 ? '/src/assets/fotosfb/FBE 1/FBE 1 D.png' :
                                       '/src/assets/fotosfb/FBE 1/FBE 1 DA.png'}
                                  alt={model.model}
                                  className="w-24 h-24 object-contain"
                                  onError={(e) => {
                                    const img = e.target as HTMLImageElement;
                                    img.src = '/src/assets/fotosfb/FBE 1/FBE 1.png';
                                  }}
                                />
                              </div>

                              <h4 className="text-2xl font-bold text-slate-900 dark:text-white text-center">
                                {model.model}
                              </h4>
                            </div>

                            <CardContent className="p-6">
                              <div className="grid grid-cols-2 gap-4 mb-6">
                                <div>
                                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-1">
                                    <Droplets className="w-4 h-4 text-laranja" />
                                    {language === "pt"
                                      ? "Vazão"
                                      : language === "en"
                                        ? "Flow"
                                        : "Flujo"}
                                  </div>
                                  <p className="font-bold text-slate-900 dark:text-white">
                                    {model.specifications.maxFlow}
                                  </p>
                                </div>
                                <div>
                                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-1">
                                    <Gauge className="w-4 h-4 text-laranja" />
                                    {language === "pt"
                                      ? "Pressão"
                                      : language === "en"
                                        ? "Pressure"
                                        : "Presión"}
                                  </div>
                                  <p className="font-bold text-slate-900 dark:text-white">
                                    {model.specifications.maxPressure}
                                  </p>
                                </div>
                                <div>
                                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-1">
                                    <Thermometer className="w-4 h-4 text-laranja" />
                                    {language === "pt" ? "Temp." : "Temp."}
                                  </div>
                                  <p className="font-bold text-slate-900 dark:text-white">
                                    até 350°C
                                  </p>
                                </div>
                                <div>
                                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-1">
                                    <Settings className="w-4 h-4 text-laranja" />
                                    RPM
                                  </div>
                                  <p className="font-bold text-slate-900 dark:text-white">
                                    {model.specifications.maxRPM}
                                  </p>
                                </div>
                              </div>

                              <Button className="w-full bg-gradient-to-r from-laranja to-red-600 hover:from-red-600 hover:to-red-700 text-white group-hover:shadow-lg transition-all duration-300">
                                <span>
                                  {language === "pt"
                                    ? "Especificações"
                                    : language === "en"
                                      ? "Specifications"
                                      : "Especificaciones"}
                                </span>
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                              </Button>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Large Pumps - Individual sections - RED THEME */}
                  {largePumps.map((pumpGroup, groupIndex) => {
                    const diameterText =
                      pumpGroup.diameter === '1.1/2"'
                        ? "1.1/2"
                        : pumpGroup.diameter.replace('"', "");
                    return (
                      <div key={pumpGroup.diameter} className="mb-16">
                        <div className="text-center mb-10">
                          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
                            {language === "pt"
                              ? `Bombas Diâmetro ${pumpGroup.diameter}`
                              : language === "en"
                                ? `${pumpGroup.diameter} Diameter Pumps`
                                : `Bombas Diámetro ${pumpGroup.diameter}`}
                          </h3>
                          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                            {pumpGroup.models.length}{" "}
                            {language === "pt"
                              ? "modelos disponíveis para diferentes aplicações"
                              : language === "en"
                                ? "models available for different applications"
                                : "modelos disponibles para diferentes aplicaciones"}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                          {pumpGroup.models.map((model, modelIndex) => (
                            <motion.div
                              key={model.id}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.5,
                                delay: modelIndex * 0.1,
                              }}
                              whileHover={{ scale: 1.02 }}
                            >
                              <Card
                                className="group cursor-pointer h-full overflow-hidden bg-gradient-to-br from-white to-red-50 dark:from-slate-800 dark:to-red-950/20 hover:shadow-2xl transition-all duration-300 border-2 hover:border-laranja"
                                onClick={() =>
                                  handleGearPumpClick(
                                    pumpGroup.diameter,
                                    pumpGroup.models.length,
                                  )
                                }
                              >
                                <div className="relative h-32 bg-gradient-to-br from-laranja to-red-700 overflow-hidden">
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
                                  <div className="flex items-center justify-center mb-4">
                                    <img 
                                      src={getPumpImage(pumpGroup.diameter)}
                                      alt={model.model}
                                      className="w-32 h-32 object-contain"
                                      onError={(e) => {
                                        const img = e.target as HTMLImageElement;
                                        img.src = '/src/assets/products/generic-pump.png';
                                      }}
                                    />
                                  </div>

                                  <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div>
                                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-1">
                                        <Droplets className="w-4 h-4 text-laranja" />
                                        {language === "pt"
                                          ? "Vazão"
                                          : language === "en"
                                            ? "Flow"
                                            : "Flujo"}
                                      </div>
                                      <p className="font-bold text-slate-900 dark:text-white">
                                        {model.specifications.maxFlow}
                                      </p>
                                    </div>
                                    <div>
                                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-1">
                                        <Gauge className="w-4 h-4 text-laranja" />
                                        {language === "pt"
                                          ? "Pressão"
                                          : language === "en"
                                            ? "Pressure"
                                            : "Presión"}
                                      </div>
                                      <p className="font-bold text-slate-900 dark:text-white">
                                        {model.specifications.maxPressure}
                                      </p>
                                    </div>
                                    <div>
                                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-1">
                                        <Thermometer className="w-4 h-4 text-laranja" />
                                        {language === "pt"
                                          ? "Temp."
                                          : "Temp."}
                                      </div>
                                      <p className="font-bold text-slate-900 dark:text-white">
                                        até 350°C
                                      </p>
                                    </div>
                                    <div>
                                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-1">
                                        <Settings className="w-4 h-4 text-laranja" />
                                        RPM
                                      </div>
                                      <p className="font-bold text-slate-900 dark:text-white">
                                        {model.specifications.maxRPM}
                                      </p>
                                    </div>
                                  </div>

                                  <Button className="w-full bg-gradient-to-r from-laranja to-red-600 hover:from-red-600 hover:to-red-700 text-white group-hover:shadow-lg transition-all duration-300">
                                    <span>
                                      {language === "pt"
                                        ? "Especificações"
                                        : language === "en"
                                          ? "Specifications"
                                          : "Especificaciones"}
                                    </span>
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

                    {/* Features Section - Inside FBE Container */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="mt-16"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Technical Excellence Card */}
                      <Card className="overflow-hidden border-0 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
                        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />
                        <CardContent className="relative p-10">
                          <div className="flex items-start justify-between mb-6">
                            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                              <Info className="w-8 h-8" />
                            </div>
                            <Badge className="bg-laranja text-white border-0">
                              {language === "pt"
                                ? "TECNOLOGIA"
                                : language === "en"
                                  ? "TECHNOLOGY"
                                  : "TECNOLOGÍA"}
                            </Badge>
                          </div>

                          <h3 className="text-3xl font-bold mb-6">
                            {language === "pt"
                              ? "Excelência Técnica"
                              : language === "en"
                                ? "Technical Excellence"
                                : "Excelencia Técnica"}
                          </h3>

                          <ul className="space-y-4">
                            {fbeSeriesFeatures[language].map(
                              (feature, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-3"
                                >
                                  <div className="mt-1.5 w-1.5 h-1.5 bg-laranja rounded-full flex-shrink-0" />
                                  <span className="text-white/90 leading-relaxed">
                                    {feature}
                                  </span>
                                </li>
                              ),
                            )}
                          </ul>
                        </CardContent>
                      </Card>

                      {/* Applications Card */}
                      <Card className="overflow-hidden border-0 bg-gradient-to-br from-laranja to-red-700 text-white">
                        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />
                        <CardContent className="relative p-10">
                          <div className="flex items-start justify-between mb-6">
                            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                              <Wrench className="w-8 h-8" />
                            </div>
                            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                              {language === "pt"
                                ? "APLICAÇÕES"
                                : language === "en"
                                  ? "APPLICATIONS"
                                  : "APLICACIONES"}
                            </Badge>
                          </div>

                          <h3 className="text-3xl font-bold mb-6">
                            {language === "pt"
                              ? "Soluções Industriais"
                              : language === "en"
                                ? "Industrial Solutions"
                                : "Soluciones Industriales"}
                          </h3>

                          <ul className="space-y-4">
                            {fbeApplications[language].map((app, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-3"
                              >
                                <div className="mt-1.5 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                                <span className="text-white/90 leading-relaxed">
                                  {app}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {activeCategory === "centrifugal" && (
                <motion.div
                  key="centrifugal"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* FBCN Series Container with Blue Border */}
                  <div className="relative border-2 border-blue-600 rounded-3xl p-8 md:p-12 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm mb-16">
                    <div className="grid lg:grid-cols-2 gap-12">
                      {/* Left Side - Title */}
                      <div className="text-left">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          <h3 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-400 mb-2">
                            {language === "pt" ? "Série" : language === "en" ? "Series" : "Serie"}
                          </h3>
                          <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-azul-profundo to-blue-600 mb-4">
                            FBCN
                          </h2>
                          <p className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white">
                            {language === "pt"
                              ? "Bombas Centrífugas"
                              : language === "en"
                                ? "Centrifugal Pumps"
                                : "Bombas Centrífugas"}
                          </p>
                        </motion.div>
                      </div>

                      {/* Right Side - Content */}
                      <div>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                          {language === "pt"
                            ? "Bombas centrífugas normalizadas para aplicações industriais diversas, oferecendo alta eficiência e confiabilidade."
                            : language === "en"
                              ? "Standardized centrifugal pumps for various industrial applications, offering high efficiency and reliability."
                              : "Bombas centrífugas normalizadas para diversas aplicaciones industriales, ofreciendo alta eficiencia y confiabilidad."}
                        </p>

                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
                            <Droplets className="w-6 h-6 text-azul-profundo mx-auto mb-2" />
                            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                              {language === "pt" ? "Vazão" : language === "en" ? "Flow" : "Flujo"}
                            </h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300 font-bold">
                              {language === "pt" ? "Até 2.200 m³/h" : language === "en" ? "Up to 2.200 m³/h" : "Hasta 2.200 m³/h"}
                            </p>
                          </div>
                          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
                            <Gauge className="w-6 h-6 text-azul-profundo mx-auto mb-2" />
                            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                              {language === "pt" ? "Pressão" : language === "en" ? "Pressure" : "Presión"}
                            </h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300 font-bold">
                              {language === "pt" ? "Até 135 M" : language === "en" ? "Up to 135 M" : "Hasta 135 M"}
                            </p>
                          </div>
                          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
                            <Settings className="w-6 h-6 text-azul-profundo mx-auto mb-2" />
                            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                              {language === "pt" ? "Rotação" : language === "en" ? "Rotation" : "Rotación"}
                            </h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300 font-bold">
                              {language === "pt" ? "Até 3500 RPM" : language === "en" ? "Up to 3500 RPM" : "Hasta 3500 RPM"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Image Carousel - FBCN */}
                    <div className="mt-12 relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 p-8">
                      <div className="flex justify-center items-center">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={fbcnImage}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                          >
                            <img 
                              src={fbcnImages[fbcnImage]} 
                              alt="FBCN" 
                              className="w-96 h-96 object-contain"
                              onError={(e) => {
                                const img = e.target as HTMLImageElement;
                                img.src = '/src/assets/products/fbcn.png';
                              }}
                            />
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Technical Details */}
                    <div className="mt-12 grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-azul-profundo dark:text-white mb-4">
                          {language === "pt" ? "Características Técnicas" : language === "en" ? "Technical Features" : "Características Técnicas"}
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-5 h-5 text-azul-profundo mt-0.5 flex-shrink-0" />
                            <span className="text-slate-600 dark:text-slate-300">
                              {language === "pt" ? "Tamanhos DN25 até 300 mm" : "Sizes DN25 to 300 mm"}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-5 h-5 text-azul-profundo mt-0.5 flex-shrink-0" />
                            <span className="text-slate-600 dark:text-slate-300">
                              {language === "pt" ? "Bomba com corpo em voluta" : "Volute casing pump"}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-5 h-5 text-azul-profundo mt-0.5 flex-shrink-0" />
                            <span className="text-slate-600 dark:text-slate-300">
                              {language === "pt" ? "Instalação na horizontal" : "Horizontal installation"}
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-azul-profundo dark:text-white mb-4">
                          {language === "pt" ? "Aplicações" : language === "en" ? "Applications" : "Aplicaciones"}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {language === "pt"
                            ? "Indústrias químicas, petroquímicas, papel, siderúrgica, mineração, alimentícia, têxtil e farmacêutica."
                            : language === "en"
                              ? "Chemical, petrochemical, paper, steel, mining, food, textile and pharmaceutical industries."
                              : "Industrias químicas, petroquímicas, papel, siderúrgica, minería, alimenticia, textil y farmacéutica."}
                        </p>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                      <Button
                        onClick={() => window.open('/public/assets/manuals/FB_Manual_Tecnico_FBCN.pdf', '_blank')}
                        className="bg-gradient-to-r from-azul-profundo to-blue-600 hover:from-blue-600 hover:to-azul-profundo text-white"
                      >
                        <Download className="mr-2 h-5 w-5" />
                        {language === "pt" ? "Manual Técnico" : language === "en" ? "Technical Manual" : "Manual Técnico"}
                      </Button>
                      <Button
                        onClick={handleWhatsAppClick}
                        variant="outline"
                        className="border-azul-profundo text-azul-profundo hover:bg-azul-profundo hover:text-white"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        {language === "pt" ? "Solicitar Orçamento" : language === "en" ? "Request Quote" : "Solicitar Presupuesto"}
                      </Button>
                    </div>
                  </div>

                  {/* FBOT Series Container with Blue Border */}
                  <div className="relative border-2 border-blue-600 rounded-3xl p-8 md:p-12 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm mb-16">
                    <div className="grid lg:grid-cols-2 gap-12">
                      {/* Left Side - Title */}
                      <div className="text-left">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          <h3 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-400 mb-2">
                            {language === "pt" ? "Série" : language === "en" ? "Series" : "Serie"}
                          </h3>
                          <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-azul-profundo to-blue-600 mb-4">
                            FBOT
                          </h2>
                          <p className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white">
                            {language === "pt"
                              ? "Bombas para Óleo Térmico"
                              : language === "en"
                                ? "Thermal Oil Pumps"
                                : "Bombas para Aceite Térmico"}
                          </p>
                        </motion.div>
                      </div>

                      {/* Right Side - Content */}
                      <div>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                          {language === "pt"
                            ? "Bombas especializadas para circulação de óleo térmico em sistemas de aquecimento industrial."
                            : language === "en"
                              ? "Specialized pumps for thermal oil circulation in industrial heating systems."
                              : "Bombas especializadas para circulación de aceite térmico en sistemas de calentamiento industrial."}
                        </p>

                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
                            <Thermometer className="w-6 h-6 text-azul-profundo mx-auto mb-2" />
                            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                              {language === "pt" ? "Temperatura" : language === "en" ? "Temperature" : "Temperatura"}
                            </h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300 font-bold">
                              {language === "pt" ? "Até 350°C" : language === "en" ? "Up to 350°C" : "Hasta 350°C"}
                            </p>
                          </div>
                          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
                            <Droplets className="w-6 h-6 text-azul-profundo mx-auto mb-2" />
                            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                              {language === "pt" ? "Vazão" : language === "en" ? "Flow" : "Flujo"}
                            </h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300 font-bold">
                              {language === "pt" ? "Até 2.200 m³/h" : language === "en" ? "Up to 2.200 m³/h" : "Hasta 2.200 m³/h"}
                            </p>
                          </div>
                          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
                            <Gauge className="w-6 h-6 text-azul-profundo mx-auto mb-2" />
                            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                              {language === "pt" ? "Pressão" : language === "en" ? "Pressure" : "Presión"}
                            </h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300 font-bold">
                              {language === "pt" ? "Até 135 M" : language === "en" ? "Up to 135 M" : "Hasta 135 M"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Image Carousel - FBOT */}
                    <div className="mt-12 relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 p-8">
                      <div className="flex justify-center items-center">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={fbotImage}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                          >
                            <img 
                              src={fbotImages[fbotImage]} 
                              alt="FBOT" 
                              className="w-96 h-96 object-contain"
                              onError={(e) => {
                                const img = e.target as HTMLImageElement;
                                img.src = '/src/assets/products/fbot.png';
                              }}
                            />
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Technical Details */}
                    <div className="mt-12 grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-azul-profundo dark:text-white mb-4">
                          {language === "pt" ? "Características Técnicas" : language === "en" ? "Technical Features" : "Características Técnicas"}
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-5 h-5 text-azul-profundo mt-0.5 flex-shrink-0" />
                            <span className="text-slate-600 dark:text-slate-300">
                              {language === "pt" ? "Construção back pull-out" : "Back pull-out construction"}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-5 h-5 text-azul-profundo mt-0.5 flex-shrink-0" />
                            <span className="text-slate-600 dark:text-slate-300">
                              {language === "pt" ? "Monoestágio" : "Single stage"}
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="w-5 h-5 text-azul-profundo mt-0.5 flex-shrink-0" />
                            <span className="text-slate-600 dark:text-slate-300">
                              {language === "pt" ? "Temperaturas até 350°C" : "Temperatures up to 350°C"}
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-azul-profundo dark:text-white mb-4">
                          {language === "pt" ? "Aplicações" : language === "en" ? "Applications" : "Aplicaciones"}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {language === "pt"
                            ? "Sistemas de aquecimento com óleo térmico, indústrias farmacêutica, química, alimentícia, têxtil e plástica."
                            : language === "en"
                              ? "Thermal oil heating systems, pharmaceutical, chemical, food, textile and plastic industries."
                              : "Sistemas de calentamiento con aceite térmico, industrias farmacéutica, química, alimentaria, textil y plástica."}
                        </p>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                      <Button
                        onClick={() => window.open('/public/assets/manuals/FB_Manual_Tecnico_FBOT.pdf', '_blank')}
                        className="bg-gradient-to-r from-azul-profundo to-blue-600 hover:from-blue-600 hover:to-azul-profundo text-white"
                      >
                        <Download className="mr-2 h-5 w-5" />
                        {language === "pt" ? "Manual Técnico" : language === "en" ? "Technical Manual" : "Manual Técnico"}
                      </Button>
                      <Button
                        onClick={handleWhatsAppClick}
                        variant="outline"
                        className="border-azul-profundo text-azul-profundo hover:bg-azul-profundo hover:text-white"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        {language === "pt" ? "Solicitar Orçamento" : language === "en" ? "Request Quote" : "Solicitar Presupuesto"}
                      </Button>
                    </div>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Premium CTA Section */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                {language === "pt"
                  ? "Precisa de Ajuda para Escolher?"
                  : language === "en"
                    ? "Need Help Choosing?"
                    : "¿Necesita Ayuda para Elegir?"}
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto">
                {language === "pt"
                  ? "Nossa equipe técnica está pronta para ajudá-lo a encontrar a solução perfeita para sua aplicação"
                  : language === "en"
                    ? "Our technical team is ready to help you find the perfect solution for your application"
                    : "Nuestro equipo técnico está listo para ayudarlo a encontrar la solución perfecta para su aplicación"}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                {/* CTA for Gear Pumps */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-laranja to-red-700 p-8 text-white shadow-2xl shadow-red-600/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
                  <div className="relative z-10">
                    <div className="inline-flex p-4 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                      <Cog className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">
                      {language === "pt" ? "Bombas de Engrenagem" : language === "en" ? "Gear Pumps" : "Bombas de Engranaje"}
                    </h3>
                    <p className="mb-6 text-white/90">
                      {language === "pt"
                        ? "Soluções para fluidos viscosos e alta pressão"
                        : language === "en"
                          ? "Solutions for viscous fluids and high pressure"
                          : "Soluciones para fluidos viscosos y alta presión"}
                    </p>
                    <Button
                      onClick={handleWhatsAppClick}
                      className="bg-white text-laranja hover:bg-white/90 font-semibold px-6 py-3"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      {language === "pt" ? "Falar com Especialista" : language === "en" ? "Talk to Expert" : "Hablar con Experto"}
                    </Button>
                  </div>
                </motion.div>

                {/* CTA for Centrifugal Pumps */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-azul-profundo via-blue-600 to-blue-800 p-8 text-white shadow-2xl shadow-blue-600/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
                  <div className="relative z-10">
                    <div className="inline-flex p-4 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                      <Droplets className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">
                      {language === "pt" ? "Bombas Centrífugas" : language === "en" ? "Centrifugal Pumps" : "Bombas Centrífugas"}
                    </h3>
                    <p className="mb-6 text-white/90">
                      {language === "pt"
                        ? "Ideais para grandes vazões e fluídos limpos"
                        : language === "en"
                          ? "Ideal for high flow rates and clean fluids"
                          : "Ideales para grandes caudales y fluidos limpios"}
                    </p>
                    <Button
                      onClick={handleWhatsAppClick}
                      className="bg-white text-azul-profundo hover:bg-white/90 font-semibold px-6 py-3"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      {language === "pt" ? "Solicitar Consultoria" : language === "en" ? "Request Consultation" : "Solicitar Consultoría"}
                    </Button>
                  </div>
                </motion.div>
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
              className="fill-slate-900 dark:fill-slate-950"
            />
          </svg>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductsPagePremium;