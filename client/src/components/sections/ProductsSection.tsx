import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronRight, Droplets, ArrowUp, Thermometer, Gauge, Settings, Cog, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ProductsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { t, language } = useLanguage();
  const [fbcnImage, setFbcnImage] = useState(0);
  const [fbotImage, setFbotImage] = useState(0);
  
  const fbcnImages = [
    "/images/fotosfb/FBCN/FBCN FRENTE.png",
    "/images/fotosfb/FBCN/FBCN LADO.png",
    "/images/fotosfb/FBCN/FBCN TRÁS.png"
  ];
  
  const fbotImages = [
    "/images/fotosfb/FBOT/FBOT FRENTE.png",
    "/images/fotosfb/FBOT/FBOT LADO.png",
    "/images/fotosfb/FBOT/FBOT TRÁS.png"
  ];
  
  // Auto-rotate carousel images
  useEffect(() => {
    const interval = setInterval(() => {
      setFbcnImage((prev) => (prev + 1) % fbcnImages.length);
      setFbotImage((prev) => (prev + 1) % fbotImages.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="produtos" className="relative pt-4 pb-8 sm:pt-6 sm:pb-10 md:pt-8 md:pb-12 bg-white dark:bg-slate-800 overflow-hidden">
      {/* Subtle wave pattern */}
      <div className="absolute inset-0 opacity-[0.01] dark:opacity-[0.025]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(227,6,19,0.05) 50px, rgba(227,6,19,0.05) 52px)`,
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />
        
        {/* Product Cards - High-end Design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          
          {/* Gear Pumps Card */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <Card 
              className="h-full overflow-hidden bg-gradient-to-br from-white to-red-50 dark:from-slate-800 dark:to-red-950/20 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-laranja cursor-pointer rounded-2xl"
              onClick={() => window.location.href = '/produtos#engrenagem'}
            >
              {/* Red Header */}
              <div className="relative h-40 bg-gradient-to-br from-laranja to-red-700 overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:20px_20px]" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
                
                <div className="relative h-full flex items-center justify-between px-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={cn(
                        "p-3 rounded-xl transition-all duration-300 shadow-lg bg-gradient-to-br from-white/30 to-white/10",
                      )}>
                        <Cog className={cn(
                          "w-6 h-6 text-white transition-all duration-300 animate-spin-slow"
                        )} />
                      </div>
                      <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm text-xs">
                        Série FBE
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {language === "pt" ? "Bombas de Engrenagem" : language === "en" ? "Gear Pumps" : "Bombas de Engranaje"}
                    </h3>
                  </div>
                </div>
              </div>
              
              {/* Product Image */}
              <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
                <div className="flex items-center justify-center">
                  <img 
                    src="/images/products/fbe/4/photo.png"
                    alt="FBE 4" 
                    className="w-48 h-48 object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {language === "pt" 
                    ? "Bombas de engrenagens externas com deslocamento positivo, ideais para transferência precisa de fluidos viscosos."
                    : language === "en"
                      ? "External gear pumps with positive displacement, ideal for precise transfer of viscous fluids."
                      : "Bombas de engranajes externos con desplazamiento positivo, ideales para transferencia precisa de fluidos viscosos."}
                </p>
                
                {/* Specifications */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-3 rounded-xl border border-red-200 dark:border-red-800">
                    <Droplets className="w-5 h-5 text-laranja mx-auto mb-1" />
                    <h4 className="text-xs font-semibold text-slate-900 dark:text-white mb-1 text-center">
                      {language === "pt" ? "Vazão Máx." : "Max Flow"}
                    </h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 font-bold text-center">
                      1.350 l/min
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-3 rounded-xl border border-red-200 dark:border-red-800">
                    <Gauge className="w-5 h-5 text-laranja mx-auto mb-1" />
                    <h4 className="text-xs font-semibold text-slate-900 dark:text-white mb-1 text-center">
                      {language === "pt" ? "Pressão Máx." : "Max Pressure"}
                    </h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 font-bold text-center">
                      22 bar
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-3 rounded-xl border border-red-200 dark:border-red-800">
                    <Thermometer className="w-5 h-5 text-laranja mx-auto mb-1" />
                    <h4 className="text-xs font-semibold text-slate-900 dark:text-white mb-1 text-center">
                      {language === "pt" ? "Temp. Máx." : "Max Temp."}
                    </h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 font-bold text-center">
                      350°C
                    </p>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-laranja to-red-600 hover:from-red-600 hover:to-red-700 text-white group-hover:shadow-lg transition-all duration-300">
                  <span>
                    {language === "pt" ? "Explorar Bombas de Engrenagem" : language === "en" ? "Explore Gear Pumps" : "Explorar Bombas de Engranaje"}
                  </span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Centrifugal Pumps Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group"
          >
            <Card 
              className="h-full overflow-hidden bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-blue-950/20 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-azul-profundo cursor-pointer rounded-2xl"
              onClick={() => window.location.href = '/produtos#centrifugas'}
            >
              {/* Blue Header */}
              <div className="relative h-40 bg-gradient-to-br from-azul-profundo to-blue-700 overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:20px_20px]" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
                
                <div className="relative h-full flex items-center justify-between px-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 rounded-xl transition-all duration-300 shadow-lg bg-gradient-to-br from-white/30 to-white/10">
                        <Droplets className="w-6 h-6 text-white transition-all duration-300" />
                      </div>
                      <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm text-xs">
                        Séries FBCN e FBOT
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {language === "pt" ? "Bombas Centrífugas" : language === "en" ? "Centrifugal Pumps" : "Bombas Centrífugas"}
                    </h3>
                  </div>
                </div>
              </div>
              
              {/* Product Image Carousel */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
                <div className="flex items-center justify-center relative h-48 w-48 mx-auto">
                  {/* Show current image based on carousel state */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={fbcnImage % 2 === 0 ? `fbcn-${fbcnImage}` : `fbot-${fbotImage}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <img 
                        src={fbcnImage % 2 === 0 ? fbcnImages[fbcnImage] : fbotImages[fbotImage]} 
                        alt={fbcnImage % 2 === 0 ? "FBCN" : "FBOT"}
                        className="w-full h-full object-contain drop-shadow-2xl"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {language === "pt" 
                    ? "Bombas centrífugas normalizadas FBCN e FBOT para aplicações industriais com alta eficiência e confiabilidade."
                    : language === "en"
                      ? "FBCN and FBOT standardized centrifugal pumps for industrial applications with high efficiency and reliability."
                      : "Bombas centrífugas normalizadas FBCN y FBOT para aplicaciones industriales con alta eficiencia y confiabilidad."}
                </p>
                
                {/* Specifications */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-3 rounded-xl border border-blue-200 dark:border-blue-800">
                    <Droplets className="w-5 h-5 text-azul-profundo mx-auto mb-1" />
                    <h4 className="text-xs font-semibold text-slate-900 dark:text-white mb-1 text-center">
                      {language === "pt" ? "Vazão Máx." : "Max Flow"}
                    </h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 font-bold text-center">
                      2.200 m³/hr
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-3 rounded-xl border border-blue-200 dark:border-blue-800">
                    <ArrowUp className="w-5 h-5 text-azul-profundo mx-auto mb-1" />
                    <h4 className="text-xs font-semibold text-slate-900 dark:text-white mb-1 text-center">
                      {language === "pt" ? "Altura Máx." : "Max Head"}
                    </h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 font-bold text-center">
                      até 135 m
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-3 rounded-xl border border-blue-200 dark:border-blue-800">
                    <Thermometer className="w-5 h-5 text-azul-profundo mx-auto mb-1" />
                    <h4 className="text-xs font-semibold text-slate-900 dark:text-white mb-1 text-center">
                      {language === "pt" ? "Temp. Máx." : "Max Temp."}
                    </h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 font-bold text-center">
                      até 350°C
                    </p>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-azul-profundo to-blue-600 hover:from-blue-700 hover:to-blue-800 text-white group-hover:shadow-lg transition-all duration-300">
                  <span>
                    {language === "pt" ? "Explorar Bombas Centrífugas" : language === "en" ? "Explore Centrifugal Pumps" : "Explorar Bombas Centrífugas"}
                  </span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product, index }: { product: any, index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { t } = useLanguage();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onClick={() => {
        window.location.href = product.link;
      }}
      className="group bg-white dark:bg-slate-800/60 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700/50 overflow-hidden flex flex-col h-full cursor-pointer"
    >
      
      {/* Image Section - optimized for 1x1 images with white background */}
      <div className="relative h-56 sm:h-60 md:h-64 overflow-hidden bg-white dark:bg-white">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-contain p-6 sm:p-8 transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>
        <div className="absolute bottom-4 left-4 right-4 z-20">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
            {product.title}
          </h3>
          {product.subtitle && (
            <p className="text-sm sm:text-base text-blue-100 font-semibold drop-shadow-md">
              {product.subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow">
        <p className="text-gray-600 dark:text-gray-300 mb-6 sm:mb-7 leading-relaxed text-sm sm:text-base flex-grow">
          {product.description}
        </p>

        {/* Specifications Grid */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-7">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700/50 dark:to-slate-600/30 p-3 sm:p-4 rounded-xl text-center border border-slate-200/50 dark:border-slate-600/20">
            <Droplets className="h-4 w-4 sm:h-5 sm:w-5 text-[#E30613] mx-auto mb-2" />
            <span className="text-xs sm:text-xs text-slate-500 dark:text-slate-400 block mb-1 font-medium">{t('products.max_flow', 'Vazão Máx.')}</span>
            <span className="text-xs sm:text-sm font-bold text-azul-profundo dark:text-white leading-tight">
              {product.specs.flow}
            </span>
          </div>
          
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700/50 dark:to-slate-600/30 p-3 sm:p-4 rounded-xl text-center border border-slate-200/50 dark:border-slate-600/20">
            <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5 text-[#E30613] mx-auto mb-2" />
            <span className="text-xs sm:text-xs text-slate-500 dark:text-slate-400 block mb-1 font-medium">{t('products.max_height', 'Altura Máx.')}</span>
            <span className="text-xs sm:text-sm font-bold text-azul-profundo dark:text-white leading-tight">
              {product.specs.head}
            </span>
          </div>
          
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700/50 dark:to-slate-600/30 p-3 sm:p-4 rounded-xl text-center border border-slate-200/50 dark:border-slate-600/20">
            <Thermometer className="h-4 w-4 sm:h-5 sm:w-5 text-[#E30613] mx-auto mb-2" />
            <span className="text-xs sm:text-xs text-slate-500 dark:text-slate-400 block mb-1 font-medium">{t('products.max_temp', 'Temp. Máx.')}</span>
            <span className="text-xs sm:text-sm font-bold text-azul-profundo dark:text-white leading-tight">
              {product.specs.temp}
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            window.location.href = product.link;
          }}
          className="inline-flex items-center justify-center bg-gradient-to-r from-[#E30613] to-[#c60411] hover:from-[#c60411] hover:to-[#a50310] text-white font-semibold py-3 sm:py-3.5 px-6 sm:px-8 rounded-xl transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105 w-full"
        >
          {product.id === 'centrifugas' 
            ? t('products.explore_centrifugal', 'Explorar Bombas Centrífugas')
            : t('products.explore_gear', 'Explorar Bombas de Engrenagem')}
          <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
    </motion.div>
  );
};

const SectionHeader = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const { t } = useLanguage();

  return (
    <motion.div 
      ref={ref}
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-20 h-1 bg-[#E30613] mx-auto mb-8"></div>
      <h2 className="font-garamond text-4xl md:text-5xl text-azul-profundo dark:text-white mb-6 leading-tight">
        {t('products.title', 'Nossa Linha de Produtos')}
      </h2>
      <p className="text-lg text-cinza-titanio dark:text-prata/90 max-w-3xl mx-auto leading-relaxed">
        {t('products.subtitle', 'Soluções completas em bombeamento para todas as necessidades industriais')}
      </p>
    </motion.div>
  );
};

export default ProductsSection;