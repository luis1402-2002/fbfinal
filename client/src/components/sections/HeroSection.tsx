import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Award, Shield, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  const [scrollIndicator, setScrollIndicator] = useState(true);

  // Efeito para ocultar o indicador de scroll após o usuário rolar a página
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollIndicator(false);
      } else {
        setScrollIndicator(true);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dados destacados com animação
  const highlightData = [
    { 
      icon: <Clock className="h-6 w-6 text-laranja" />,
      title: "80+", 
      description: t('hero.years', 'Anos de Experiência')
    },
    { 
      icon: <Award className="h-6 w-6 text-laranja" />,
      title: "API 610", 
      description: t('hero.certified', 'Padrão Internacional')
    },
    { 
      icon: <Shield className="h-6 w-6 text-laranja" />,
      title: "100%", 
      description: t('hero.guarantee', 'Garantia nos produtos')
    }
  ];

  return (
    <section id="inicio" className="relative bg-gradient-to-b from-slate-800 to-slate-900 text-white pb-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/images/BACKGROUNDHERO.png"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80" />
      </div>
      
      {/* Empresa 100% Brasileira Badge - Top Right */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 z-20"
      >
        <img 
          src="/images/empresa-100-brasileira.png" 
          alt="Empresa 100% Brasileira"
          className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 h-auto object-contain"
          loading="eager"
        />
      </motion.div>
      

      {/* Hero content com animações escalonadas */}
      <div className="relative z-10 max-w-container mx-auto px-4 md:px-8 min-h-[95vh] flex items-center pb-16">
        {/* Logo 3D na metade direita - alinhada com o texto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.8, type: "spring", stiffness: 80 }}
          className="absolute right-8 md:right-16 lg:right-24 xl:right-32 top-[35%] md:top-[30%] -translate-y-1/2 hidden md:block"
        >
          <img 
            src="/images/logofb3dHERO.png" 
            alt="FB Bombas 3D Logo"
            className="w-48 md:w-64 lg:w-80 xl:w-96 h-auto object-contain filter drop-shadow-2xl"
            loading="eager"
          />
        </motion.div>
        
        <div className="flex flex-col justify-center w-full md:w-1/2">
        <motion.div 
          className="max-w-4xl relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Elemento gráfico decorativo */}
          <motion.div 
            className="absolute -left-8 top-1/2 w-1 h-24 bg-laranja rounded-full hidden md:block"
            initial={{ height: 0 }}
            animate={{ height: 120 }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
          
          <motion.div
            className="inline-flex items-center gap-3 mt-8 sm:mt-10 md:mt-12 lg:mt-16 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-laranja" />
            <span className="text-laranja uppercase tracking-[0.2em] font-medium text-sm sm:text-base">
              {t('hero.since', 'Desde 1944')}
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="block">{t('hero.title_line1', 'Há mais de 80 anos')}</span>
            <span className="block font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent pb-2">{t('hero.title_line2', 'bombeando soluções.')}</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t('hero.subtitle', 'Tecnologia de bombeamento e soluções para indústrias que não podem parar. Qualidade e alta performance para os mais exigentes processos industriais.')}
          </motion.p>
          
          {/* Botões com interação avançada */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a 
              href="#contato" 
              className="group relative bg-gradient-to-r from-laranja to-red-600 text-white font-medium py-4 px-8 rounded-lg transition-all flex items-center justify-center overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-laranja opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">{t('hero.get_quote', 'Solicitar Orçamento')}</span>
              <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a 
              href="#produtos" 
              className="group relative bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium py-4 px-8 rounded-lg transition-all flex items-center justify-center overflow-hidden hover:bg-white/20"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{t('hero.explore_products', 'Explorar Produtos')}</span>
            </motion.a>
          </motion.div>
          
          {/* Destaques com animação - Responsivo e Otimizado */}
          <motion.div 
            className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 mt-8 md:mt-4 mb-6 md:mb-8 lg:mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {highlightData.map((item, index) => (
              <motion.div 
                key={index}
                className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + (index * 0.2) }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="flex items-center justify-center mb-2">
                    {item.icon}
                  </div>
                  <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold">{item.title}</h3>
                  <p className="text-slate-300 text-xs sm:text-sm mt-1 leading-tight">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        </div>
      </div>
      
      {/* Indicador de scroll */}
      {scrollIndicator && (
        <motion.div 
          className="absolute bottom-10 md:bottom-12 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          exit={{ opacity: 0 }}
        >
          <span className="text-white text-sm mb-2">{t('hero.scroll_down', 'Role para explorar')}</span>
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full p-1 flex justify-center"
            animate={{ 
              y: [0, 5, 0],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatType: "loop" 
            }}
          >
            <motion.div 
              className="w-1 h-3 bg-white rounded-full"
              animate={{ 
                y: [0, 12, 0],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "loop" 
              }}
            />
          </motion.div>
        </motion.div>
      )}
      
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
  );
};

export default HeroSection;