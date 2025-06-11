import React, { useEffect, useState } from "react";
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
  Phone,
  ChevronRight,
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
  Beaker,
  Fuel,
  FileSpreadsheet,
  Hammer,
  Pickaxe,
  UtensilsCrossed,
  Shirt,
  Pill,
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
const smallPumps = gearPumpsComplete?.filter((pump) =>
  ['1/8"', '1/4"', '3/8"', '1/2"', '3/4"'].includes(pump?.diameter),
) || [];

const mediumPumps = gearPumpsComplete?.filter((pump) => pump?.diameter === '1"') || [];

const largePumps = [
  gearPumpsComplete?.find((pump) => pump?.diameter === '1.1/2"'),
  gearPumpsComplete?.find((pump) => pump?.diameter === '2"'),
  gearPumpsComplete?.find((pump) => pump?.diameter === '3"'),
  gearPumpsComplete?.find((pump) => pump?.diameter === '4"'),
].filter(Boolean);

const ProductsPagePremium: React.FC = () => {
  const { t, language } = useLanguage();
  const [location, setLocation] = useLocation();
  
  // Get category from URL hash
  const getInitialCategory = () => {
    const hash = window.location.hash.slice(1); // Remove the #
    if (hash === 'centrifugal' || hash === 'centrifugas') {
      return 'centrifugal';
    }
    return 'gear';
  };
  
  const [activeCategory, setActiveCategory] = useState<"gear" | "centrifugal">(() => getInitialCategory());
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
  
  // Update URL when category changes
  useEffect(() => {
    const hash = activeCategory === 'centrifugal' ? '#centrifugas' : '#engrenagem';
    window.history.replaceState(null, '', window.location.pathname + hash);
  }, [activeCategory]);
  
  // Listen for hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const newCategory = getInitialCategory();
      setActiveCategory(newCategory);
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
  // Auto-rotate carousel images
  useEffect(() => {
    const interval = setInterval(() => {
      setFbcnImage((prev) => (prev + 1) % fbcnImages.length);
      setFbotImage((prev) => (prev + 1) % fbotImages.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [fbcnImages.length, fbotImages.length]);

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

  const handleGearPumpClick = (diameter: string, modelId?: string) => {
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
    
    // If modelId is provided, go to specific model page, otherwise go to variations page
    if (modelId) {
      setLocation(`/produtos/bombas-engrenagem/${urlDiameter}/${modelId}/especificacoes`);
    } else {
      // For pumps with multiple models, go to variations page
      const pump = gearPumpsComplete.find(p => p.diameter === diameter);
      if (pump && pump.models.length > 1) {
        setLocation(`/produtos/bombas-engrenagem/${urlDiameter}`);
      } else {
        // For single model pumps, go directly to specifications
        setLocation(`/produtos/bombas-engrenagem/${urlDiameter}/especificacoes`);
      }
    }
  };

  // Get pump image based on diameter
  const getPumpImage = (diameter: string) => {
    // Map diameter to folder structure
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
    
    const folder = diameterMap[diameter];
    if (folder) {
      return `/src/assets/products/fbe/${folder}/photo.png`;
    }
    
    return '/src/assets/products/generic-pump.png';
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

      <div className="min-h-screen bg-slate-50 dark:bg-slate-800">
        {/* Hero Section with Background Image */}
        <section className="relative pt-16 md:pt-20 pb-0 overflow-hidden">
          {/* Premium Background Effect with Hero Background */}
          <div className="absolute inset-0">
            <img 
              src="/src/assets/backgrounds/benefits-light-products.svg"
              alt=""
              className="w-full h-full object-cover"
              style={{ objectPosition: 'top right' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-900/85 to-slate-800/70" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Content */}
            <div className="py-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-left"
              >
                {/* FB Bombas Text */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-center gap-4 mb-6"
                >
                  <div className="h-px w-16 bg-gradient-to-l from-laranja to-transparent rounded-r-full" />
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
                    className="block text-3xl md:text-4xl lg:text-5xl"
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
                    className="block text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent pb-2"
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
                  className="text-base md:text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed font-light ml-0"
                >
                  {language === "pt"
                    ? <>Há mais de 80 anos desenvolvendo soluções sob medida<br />para os desafios mais exigentes da indústria brasileira.</>
                    : language === "en"
                      ? <>For over 80 years developing custom solutions<br />for the most demanding challenges in Brazilian industry.</>
                      : <>Por más de 80 años desarrollando soluciones a medida<br />para los desafíos más exigentes de la industria brasileña.</>}
                </motion.p>
              </motion.div>
            </div>

            {/* Empresa 100% Brasileira Badge - Bottom Right Corner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
              className="hidden md:block absolute bottom-10 right-12"
            >
              <img 
                src="/src/assets/empresa-100-brasileira.png" 
                alt="Empresa 100% Brasileira"
                className="w-48 md:w-56 lg:w-64 xl:w-72 h-auto object-contain drop-shadow-2xl"
                loading="eager"
              />
            </motion.div>
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

        {/* Category Buttons - Below Wave Divider */}
        <section className="pt-16 pb-6 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative inline-flex gap-4">
                {/* Gear Pumps Button */}
                <button
                  onClick={() => setActiveCategory("gear")}
                  className={cn(
                    "relative group overflow-hidden transition-all duration-300",
                    "px-8 py-4 rounded-2xl",
                    "flex items-center gap-4",
                    activeCategory === "gear"
                      ? "bg-gradient-to-br from-red-900 via-red-800 to-black/90 text-white shadow-lg scale-105"
                      : "bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-laranja dark:hover:border-laranja"
                  )}
                >
                  <div className={cn(
                    "p-3 rounded-xl transition-all duration-300 shadow-lg bg-gradient-to-br from-[#E30613] to-[#ff6b6b]",
                    activeCategory === "gear" && "rotate-3"
                  )}>
                    <Cog className={cn(
                      "w-6 h-6 text-white transition-all duration-300",
                      activeCategory === "gear" && "animate-spin-slow"
                    )} />
                  </div>
                  <div className="text-left">
                    <span className="block font-bold text-lg">
                      {language === "pt" ? "Bombas de Engrenagem" : language === "en" ? "Gear Pumps" : "Bombas de Engranaje"}
                    </span>
                    <span className={cn(
                      "block text-sm",
                      activeCategory === "gear" ? "text-white/80" : "text-slate-500 dark:text-slate-400"
                    )}>
                      Série FBE
                    </span>
                  </div>
                </button>

                {/* Centrifugal Pumps Button */}
                <button
                  onClick={() => setActiveCategory("centrifugal")}
                  className={cn(
                    "relative group overflow-hidden transition-all duration-300",
                    "px-8 py-4 rounded-2xl",
                    "flex items-center gap-4",
                    activeCategory === "centrifugal"
                      ? "bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white shadow-lg scale-105"
                      : "bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-azul-profundo dark:hover:border-azul-profundo"
                  )}
                >
                  <div className={cn(
                    "p-3 rounded-xl transition-all duration-300 shadow-lg",
                    activeCategory === "centrifugal"
                      ? "bg-gradient-to-br from-white/30 to-white/10 rotate-3"
                      : "bg-gradient-to-br from-azul-profundo to-blue-600"
                  )}>
                    <Droplets className="w-6 h-6 text-white transition-all duration-300" />
                  </div>
                  <div className="text-left">
                    <span className="block font-bold text-lg">
                      {language === "pt" ? "Bombas Centrífugas" : language === "en" ? "Centrifugal Pumps" : "Bombas Centrífugas"}
                    </span>
                    <span className={cn(
                      "block text-sm",
                      activeCategory === "centrifugal" ? "text-white/80" : "text-slate-500 dark:text-slate-400"
                    )}>
                      Série FBCN e FBOT
                    </span>
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-800">
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
                          <div className="mb-4">
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal mb-2 bg-gradient-to-r from-[#E30613] to-[#ff6b6b] bg-clip-text text-transparent">
                              {language === "pt" ? "Série" : language === "en" ? "Series" : "Serie"}
                            </h3>
                            <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-[#E30613] to-[#ff6b6b] bg-clip-text text-transparent">
                              FBE
                            </h2>
                          </div>
                          <p className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white">
                            {language === "pt"
                              ? "Bombas de Engrenagem Externa"
                              : language === "en"
                                ? "External Gear Pumps"
                                : "Bombas de Engranaje Externa"}
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
                            <Droplets className="w-6 h-6 text-laranja mx-auto mb-2" />
                            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                              {language === "pt" ? "Vazão Máx." : language === "en" ? "Flow Max." : "Flujo Máx."}
                            </h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300 font-bold">
                              1.350 l/min
                            </p>
                          </div>
                          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-4 rounded-xl border border-red-200 dark:border-red-800">
                            <Gauge className="w-6 h-6 text-laranja mx-auto mb-2" />
                            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                              {language === "pt" ? "Pressão Máx." : language === "en" ? "Pressure Max." : "Presión Máx."}
                            </h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300 font-bold">
                              22 bar
                            </p>
                          </div>
                          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-4 rounded-xl border border-red-200 dark:border-red-800">
                            <Thermometer className="w-6 h-6 text-laranja mx-auto mb-2" />
                            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                              {language === "pt" ? "Temperatura Máx." : language === "en" ? "Temperature Max." : "Temperatura Máx."}
                            </h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300 font-bold">
                              350°C
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
                          >
                            <Card
                              className="group cursor-pointer h-full overflow-hidden bg-gradient-to-br from-white to-red-50 dark:from-slate-800 dark:to-red-950/20 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-laranja rounded-xl"
                              onClick={() =>
                                handleGearPumpClick(
                                  pump.diameter
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
                                    className="w-24 h-24 object-contain"
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
                                <div className="space-y-3 mb-4">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                      <Droplets className="w-4 h-4 text-laranja" />
                                      <span className="text-sm text-slate-600 dark:text-slate-400">{language === "pt" ? "Vazão Máx." : language === "en" ? "Flow Max." : "Flujo Máx."}</span>
                                    </div>
                                    <p className="font-bold text-sm text-slate-900 dark:text-white">
                                      {pump.models[0].specifications.maxFlow}
                                    </p>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                      <Gauge className="w-4 h-4 text-laranja" />
                                      <span className="text-sm text-slate-600 dark:text-slate-400">{language === "pt" ? "Pressão Máx." : language === "en" ? "Pressure Max." : "Presión Máx."}</span>
                                    </div>
                                    <p className="font-bold text-sm text-slate-900 dark:text-white">
                                      {pump.models[0].specifications.maxPressure}
                                    </p>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                      <Settings className="w-4 h-4 text-laranja" />
                                      <span className="text-sm text-slate-600 dark:text-slate-400">RPM Máx.</span>
                                    </div>
                                    <p className="font-bold text-sm text-slate-900 dark:text-white">
                                      {pump.models[0].specifications.maxRPM}
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
                        >
                          <Card
                            className="group cursor-pointer h-full overflow-hidden bg-gradient-to-br from-white to-red-50 dark:from-slate-800 dark:to-red-950/20 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-laranja rounded-xl"
                            onClick={() =>
                              handleGearPumpClick(
                                mediumPumps[0].diameter,
                                model.id
                              )
                            }
                          >
                            {/* Red header like large pumps */}
                            <div className="relative h-20 bg-gradient-to-br from-laranja to-red-700 overflow-hidden">
                              <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:20px_20px]" />
                              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/50 to-transparent" />

                              <div className="relative h-full flex items-center justify-center">
                                <div className="text-center">
                                  <h4 className="text-xl font-bold text-white">
                                    {model.model}
                                  </h4>
                                  <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm text-xs">
                                    {model.code}
                                  </Badge>
                                </div>
                              </div>
                            </div>

                            {/* Photo area with same bg as small pumps */}
                            <div className="p-3 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
                              <div className="flex items-center justify-center">
                                <img 
                                  src={(model.model === '1" D' || model.model === '1" DA' || model.code === 'FBE-1-D' || model.code === 'FBE-1-DA')
                                    ? `/src/assets/products/fbe/1/photo-d-da.png?v=${Date.now()}` 
                                    : '/src/assets/products/fbe/1/photo.png'}
                                  alt={model.model}
                                  className="w-28 h-28 object-contain"
                                  onError={(e) => {
                                    const img = e.target as HTMLImageElement;
                                    console.error('Image error for model:', model.model, 'Code:', model.code);
                                    img.src = '/src/assets/products/generic-pump.png';
                                  }}
                                />
                              </div>
                            </div>

                            <CardContent className="p-3 bg-white dark:bg-slate-800">
                              <div className="grid grid-cols-1 gap-3 mb-3">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <Droplets className="w-4 h-4 text-laranja" />
                                    <span className="text-sm text-slate-600 dark:text-slate-400">{language === "pt" ? "Vazão Máx." : language === "en" ? "Flow Max." : "Flujo Máx."}</span>
                                  </div>
                                  <p className="font-bold text-sm text-slate-900 dark:text-white">
                                    {model.specifications.maxFlow}
                                  </p>
                                </div>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <Gauge className="w-4 h-4 text-laranja" />
                                    <span className="text-sm text-slate-600 dark:text-slate-400">{language === "pt" ? "Pressão Máx." : language === "en" ? "Pressure Max." : "Presión Máx."}</span>
                                  </div>
                                  <p className="font-bold text-sm text-slate-900 dark:text-white">
                                    {model.specifications.maxPressure}
                                  </p>
                                </div>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <Settings className="w-4 h-4 text-laranja" />
                                    <span className="text-sm text-slate-600 dark:text-slate-400">RPM Máx.</span>
                                  </div>
                                  <p className="font-bold text-sm text-slate-900 dark:text-white">
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

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                          {pumpGroup.models.map((model, modelIndex) => (
                            <motion.div
                              key={model.id}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.5,
                                delay: modelIndex * 0.1,
                              }}
                            >
                              <Card
                                className="group cursor-pointer h-full overflow-hidden bg-gradient-to-br from-white to-red-50 dark:from-slate-800 dark:to-red-950/20 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-laranja rounded-xl"
                                onClick={() =>
                                  handleGearPumpClick(
                                    pumpGroup.diameter,
                                    model.id
                                  )
                                }
                              >
                                <div className="relative h-24 bg-gradient-to-br from-laranja to-red-700 overflow-hidden">
                                  <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:20px_20px]" />
                                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent" />

                                  <div className="relative h-full flex items-center justify-center">
                                    <div className="text-center">
                                      <h4 className="text-2xl font-bold text-white">
                                        {model.model}
                                      </h4>
                                      <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm text-xs">
                                        {model.code}
                                      </Badge>
                                    </div>
                                  </div>
                                </div>

                                {/* Photo area with same bg as small pumps */}
                                <div className="p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
                                  <div className="flex items-center justify-center">
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
                                </div>

                                <CardContent className="p-4 bg-white dark:bg-slate-800">

                                  <div className="grid grid-cols-1 gap-3 mb-4">
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-2">
                                        <Droplets className="w-4 h-4 text-laranja" />
                                        <span className="text-sm text-slate-600 dark:text-slate-400">{language === "pt" ? "Vazão Máx." : language === "en" ? "Flow Max." : "Flujo Máx."}</span>
                                      </div>
                                      <p className="font-bold text-sm text-slate-900 dark:text-white">
                                        {model.specifications.maxFlow}
                                      </p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-2">
                                        <Gauge className="w-4 h-4 text-laranja" />
                                        <span className="text-sm text-slate-600 dark:text-slate-400">{language === "pt" ? "Pressão Máx." : language === "en" ? "Pressure Max." : "Presión Máx."}</span>
                                      </div>
                                      <p className="font-bold text-sm text-slate-900 dark:text-white">
                                        {model.specifications.maxPressure}
                                      </p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-2">
                                        <Settings className="w-4 h-4 text-laranja" />
                                        <span className="text-sm text-slate-600 dark:text-slate-400">RPM Máx.</span>
                                      </div>
                                      <p className="font-bold text-sm text-slate-900 dark:text-white">
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
                  <div className="relative border-2 border-blue-600 rounded-3xl p-6 md:p-8 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm mb-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                      {/* Left Side - Title and Content */}
                      <div>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          <div className="mb-4">
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal mb-2 bg-gradient-to-r from-azul-profundo to-blue-600 bg-clip-text text-transparent">
                              {language === "pt" ? "Série" : language === "en" ? "Series" : "Serie"}
                            </h3>
                            <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-azul-profundo to-blue-600 bg-clip-text text-transparent">
                              FBCN
                            </h2>
                          </div>
                          <p className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-6">
                            {language === "pt"
                              ? "Bombas Centrífugas"
                              : language === "en"
                                ? "Centrifugal Pumps"
                                : "Bombas Centrífugas"}
                          </p>
                        </motion.div>

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

                      {/* Right Side - Image */}
                      <div className="relative h-full flex items-center justify-center lg:justify-end">
                        <div className="relative w-full max-w-md lg:max-w-lg h-[400px] lg:h-[500px]">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={fbcnImage}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.8, ease: "easeInOut" }}
                              className="absolute inset-0"
                            >
                              <img 
                                src={fbcnImages[fbcnImage]} 
                                alt="FBCN" 
                                className="w-full h-full object-contain drop-shadow-2xl"
                                onError={(e) => {
                                  const img = e.target as HTMLImageElement;
                                  img.src = '/src/assets/products/fbcn.png';
                                }}
                              />
                            </motion.div>
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>


                    {/* Technical Details - Premium Design */}
                    <div className="mt-4">
                      <div className="bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-3xl p-6 border border-blue-200/50 dark:border-blue-700/30">
                        <div className="grid lg:grid-cols-2 gap-8">
                          {/* Technical Specs Card */}
                          <div>
                            <div className="flex items-center gap-3 mb-4">
                              <div className="p-2.5 bg-gradient-to-br from-azul-profundo to-blue-600 rounded-xl">
                                <Settings className="w-6 h-6 text-white" />
                              </div>
                              <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                                {language === "pt" ? "Características Técnicas" : language === "en" ? "Technical Features" : "Características Técnicas"}
                              </h4>
                            </div>
                            <div className="space-y-3">
                              <div className="flex items-center gap-4 p-4 bg-white/60 dark:bg-slate-800/60 rounded-xl backdrop-blur-sm">
                                <div className="flex-shrink-0 w-12 h-12 bg-azul-profundo/10 dark:bg-blue-600/20 rounded-lg flex items-center justify-center">
                                  <Droplets className="w-6 h-6 text-azul-profundo dark:text-blue-400" />
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm text-slate-600 dark:text-slate-400">{language === "pt" ? "Capacidade" : "Capacity"}</p>
                                  <p className="font-bold text-slate-900 dark:text-white">2.200 m³/h | 135 M</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-4 p-4 bg-white/60 dark:bg-slate-800/60 rounded-xl backdrop-blur-sm">
                                <div className="flex-shrink-0 w-12 h-12 bg-azul-profundo/10 dark:bg-blue-600/20 rounded-lg flex items-center justify-center">
                                  <Factory className="w-6 h-6 text-azul-profundo dark:text-blue-400" />
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm text-slate-600 dark:text-slate-400">{language === "pt" ? "Construção" : "Construction"}</p>
                                  <p className="font-bold text-slate-900 dark:text-white">{language === "pt" ? "Voluta | Back Pull-Out" : "Volute | Back Pull-Out"}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-4 p-4 bg-white/60 dark:bg-slate-800/60 rounded-xl backdrop-blur-sm">
                                <div className="flex-shrink-0 w-12 h-12 bg-azul-profundo/10 dark:bg-blue-600/20 rounded-lg flex items-center justify-center">
                                  <Gauge className="w-6 h-6 text-azul-profundo dark:text-blue-400" />
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm text-slate-600 dark:text-slate-400">{language === "pt" ? "Operação" : "Operation"}</p>
                                  <p className="font-bold text-slate-900 dark:text-white">DN25-300mm | 250°C</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Applications Card */}
                          <div>
                            <div className="flex items-center gap-3 mb-4">
                              <div className="p-2.5 bg-gradient-to-br from-azul-profundo to-blue-600 rounded-xl">
                                <Factory className="w-6 h-6 text-white" />
                              </div>
                              <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                                {language === "pt" ? "Aplicações Industriais" : language === "en" ? "Industrial Applications" : "Aplicaciones Industriales"}
                              </h4>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                              {[
                                { icon: Beaker, name: language === "pt" ? "Química" : "Chemical" },
                                { icon: Fuel, name: language === "pt" ? "Petroquímica" : "Petrochemical" },
                                { icon: FileSpreadsheet, name: language === "pt" ? "Papel e Celulose" : "Paper & Pulp" },
                                { icon: Hammer, name: language === "pt" ? "Siderúrgica" : "Steel" },
                                { icon: Pickaxe, name: language === "pt" ? "Mineração" : "Mining" },
                                { icon: UtensilsCrossed, name: language === "pt" ? "Alimentícia" : "Food" },
                                { icon: Shirt, name: language === "pt" ? "Têxtil" : "Textile" },
                                { icon: Pill, name: language === "pt" ? "Farmacêutica" : "Pharmaceutical" }
                              ].map((app, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3 bg-white/60 dark:bg-slate-800/60 rounded-lg backdrop-blur-sm">
                                  <div className="p-2 bg-gradient-to-br from-azul-profundo to-blue-600 rounded-lg">
                                    <app.icon className="w-5 h-5 text-white" />
                                  </div>
                                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{app.name}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                      <Button
                        onClick={() => window.open('/public/assets/manuals/FB_Manual_Tecnico_FBCN.pdf', '_blank')}
                        className="bg-gradient-to-r from-azul-profundo to-blue-600 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-base font-medium"
                      >
                        <Download className="mr-2 h-5 w-5" />
                        {language === "pt" ? "Baixar Manual Técnico" : language === "en" ? "Download Technical Manual" : "Descargar Manual Técnico"}
                      </Button>
                      <Button
                        onClick={handleWhatsAppClick}
                        variant="outline"
                        className="bg-white border-2 border-azul-profundo text-azul-profundo hover:bg-azul-profundo hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-base font-medium group"
                      >
                        <svg className="mr-2 h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        {language === "pt" ? "Fale com um Especialista" : language === "en" ? "Talk to a Specialist" : "Hable con un Especialista"}
                      </Button>
                    </div>
                  </div>

                  {/* FBOT Series Container with Blue Border */}
                  <div className="relative border-2 border-blue-600 rounded-3xl p-6 md:p-8 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm mb-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                      {/* Left Side - Title and Content */}
                      <div>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          <div className="mb-4">
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal mb-2 bg-gradient-to-r from-azul-profundo to-blue-600 bg-clip-text text-transparent">
                              {language === "pt" ? "Série" : language === "en" ? "Series" : "Serie"}
                            </h3>
                            <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-azul-profundo to-blue-600 bg-clip-text text-transparent">
                              FBOT
                            </h2>
                          </div>
                          <p className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-6">
                            {language === "pt"
                              ? "Bombas para Óleo Térmico"
                              : language === "en"
                                ? "Thermal Oil Pumps"
                                : "Bombas para Aceite Térmico"}
                          </p>
                        </motion.div>

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

                      {/* Right Side - Image */}
                      <div className="relative h-full flex items-center justify-center lg:justify-end">
                        <div className="relative w-full max-w-md lg:max-w-lg h-[400px] lg:h-[500px]">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={fbotImage}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.8, ease: "easeInOut" }}
                              className="absolute inset-0"
                            >
                              <img 
                                src={fbotImages[fbotImage]} 
                                alt="FBOT" 
                                className="w-full h-full object-contain drop-shadow-2xl"
                                onError={(e) => {
                                  const img = e.target as HTMLImageElement;
                                  img.src = '/src/assets/products/fbot.png';
                                }}
                              />
                            </motion.div>
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>


                    {/* Technical Details - Thermal Oil Premium Design */}
                    <div className="mt-4">
                      <div className="bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-3xl p-6 border border-blue-200/50 dark:border-blue-700/30">
                        <div className="grid lg:grid-cols-2 gap-8">
                          {/* Thermal Specs Card */}
                          <div>
                            <div className="flex items-center gap-3 mb-4">
                              <div className="p-2.5 bg-gradient-to-br from-azul-profundo to-blue-600 rounded-xl">
                                <Thermometer className="w-6 h-6 text-white" />
                              </div>
                              <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                                {language === "pt" ? "Especificações Térmicas" : language === "en" ? "Thermal Specifications" : "Especificaciones Térmicas"}
                              </h4>
                            </div>
                            <div className="space-y-4">
                              <div className="flex items-center gap-4 p-4 bg-white/60 dark:bg-slate-800/60 rounded-xl backdrop-blur-sm">
                                <div className="flex-shrink-0 w-12 h-12 bg-azul-profundo/10 rounded-lg flex items-center justify-center">
                                  <Thermometer className="w-6 h-6 text-azul-profundo" />
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm text-slate-600 dark:text-slate-400">{language === "pt" ? "Temperatura Máxima" : "Maximum Temperature"}</p>
                                  <p className="font-bold text-2xl text-azul-profundo">350°C</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-4 p-4 bg-white/60 dark:bg-slate-800/60 rounded-xl backdrop-blur-sm">
                                <div className="flex-shrink-0 w-12 h-12 bg-azul-profundo/10 rounded-lg flex items-center justify-center">
                                  <Droplets className="w-6 h-6 text-azul-profundo" />
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm text-slate-600 dark:text-slate-400">{language === "pt" ? "Fluidos" : "Fluids"}</p>
                                  <p className="font-bold text-slate-900 dark:text-white">{language === "pt" ? "Óleos Térmicos Orgânicos" : "Organic Thermal Oils"}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-4 p-4 bg-white/60 dark:bg-slate-800/60 rounded-xl backdrop-blur-sm">
                                <div className="flex-shrink-0 w-12 h-12 bg-azul-profundo/10 rounded-lg flex items-center justify-center">
                                  <Shield className="w-6 h-6 text-azul-profundo" />
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm text-slate-600 dark:text-slate-400">{language === "pt" ? "Proteção" : "Protection"}</p>
                                  <p className="font-bold text-slate-900 dark:text-white">{language === "pt" ? "Anti-corrosivo" : "Anti-corrosive"}</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Special Applications - Clean Design */}
                          <div>
                            <div className="flex items-center gap-3 mb-4">
                              <div className="p-2.5 bg-gradient-to-br from-azul-profundo to-blue-600 rounded-xl">
                                <Zap className="w-6 h-6 text-white" />
                              </div>
                              <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                                {language === "pt" ? "Aplicações Especiais" : language === "en" ? "Special Applications" : "Aplicaciones Especiales"}
                              </h4>
                            </div>
                            
                            {/* Clean Applications List */}
                            <div className="space-y-3">
                              {[
                                { 
                                  text: language === "pt" 
                                    ? "Sistemas de aquecimento industrial de alta temperatura" 
                                    : "High temperature industrial heating systems" 
                                },
                                { 
                                  text: language === "pt" 
                                    ? "Processos químicos e farmacêuticos com controle térmico" 
                                    : "Chemical and pharmaceutical processes with thermal control" 
                                },
                                { 
                                  text: language === "pt" 
                                    ? "Indústrias alimentícias e têxteis com requisitos especiais" 
                                    : "Food and textile industries with special requirements" 
                                }
                              ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3 bg-white/60 dark:bg-slate-800/60 rounded-lg backdrop-blur-sm">
                                  <div className="w-2 h-2 bg-azul-profundo rounded-full flex-shrink-0" />
                                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.text}</p>
                                </div>
                              ))}
                              
                              {/* Important Notice - Simplified */}
                              <div className="mt-4 flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                                <Info className="w-5 h-5 text-azul-profundo flex-shrink-0" />
                                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                  {language === "pt" ? "Fluidos sem partículas abrasivas" : "Fluids without abrasive particles"}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                      <Button
                        onClick={() => window.open('/public/assets/manuals/FB_Manual_Tecnico_FBOT.pdf', '_blank')}
                        className="bg-gradient-to-r from-azul-profundo to-blue-600 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-base font-medium"
                      >
                        <Download className="mr-2 h-5 w-5" />
                        {language === "pt" ? "Baixar Manual Técnico" : language === "en" ? "Download Technical Manual" : "Descargar Manual Técnico"}
                      </Button>
                      <Button
                        onClick={handleWhatsAppClick}
                        variant="outline"
                        className="bg-white border-2 border-azul-profundo text-azul-profundo hover:bg-azul-profundo hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-base font-medium group"
                      >
                        <svg className="mr-2 h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        {language === "pt" ? "Fale com um Especialista" : language === "en" ? "Talk to a Specialist" : "Hable con un Especialista"}
                      </Button>
                    </div>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Premium CTA Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Single Unified Container */}
              <div className={cn(
                "relative overflow-hidden rounded-3xl p-12 md:p-16",
                "bg-gradient-to-br",
                activeCategory === "gear"
                  ? "from-red-900 via-red-800 to-black/90"
                  : "from-blue-900 via-blue-800 to-slate-900"
              )}>
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

export default ProductsPagePremium;