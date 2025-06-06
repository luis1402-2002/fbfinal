import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useParams } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Helmet } from 'react-helmet';
import { 
  ArrowLeft,
  Download,
  MessageCircle,
  Wrench,
  Thermometer,
  Gauge,
  Droplets,
  Settings,
  Weight,
  ChevronRight,
  FileText,
  Phone,
  Info,
  Shield,
  Award,
  Package,
  Zap,
  Check,
  Star,
  ArrowRight,
  Clock,
  BarChart3,
  Volume2
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { cn } from '../lib/utils';
import { gearPumpsComplete, fbeApplications } from '../data/gearPumpsComplete';

const GearPumpDetailPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [location, setLocation] = useLocation();
  const params = useParams();
  const diameter = params.diameter as string;
  const model = params.model as string;
  
  // Find the pump data
  const pumpData = gearPumpsComplete.find(p => 
    p.diameter.replace(/"/g, '') === diameter
  );
  
  const modelData = model ? 
    pumpData?.models.find(m => m.model.replace(/"/g, '').replace(/ /g, '-') === model) :
    pumpData?.models[0]; // If no model specified, show first model

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!pumpData || !modelData) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-xl">Produto não encontrado</p>
        </div>
        <Footer />
      </>
    );
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      language === 'pt' ? `Olá! Gostaria de mais informações sobre a bomba ${modelData.model}.` :
      language === 'en' ? `Hello! I would like more information about the ${modelData.model} pump.` :
      `¡Hola! Me gustaría más información sobre la bomba ${modelData.model}.`
    );
    window.open(`https://wa.me/5511972874837?text=${message}`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>{modelData.model} - {modelData.code} | FB Bombas</title>
        <meta name="description" content={`Especificações técnicas da bomba de engrenagem ${modelData.model} - ${modelData.code}. Vazão: ${modelData.specifications.flowRate}, Pressão: ${modelData.specifications.pressure}`} />
      </Helmet>

      <Header />
      
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        {/* Premium Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Premium Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-azul-profundo to-slate-900" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-laranja/20 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
            <motion.div
              className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"
              animate={{
                x: [0, 50],
                y: [0, 50],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <Button
                onClick={() => setLocation('/produtos')}
                variant="ghost"
                className="mb-8 text-white hover:text-laranja group"
              >
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                {language === 'pt' ? 'Voltar aos Produtos' :
                 language === 'en' ? 'Back to Products' :
                 'Volver a Productos'}
              </Button>
              
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-block mb-6"
                >
                  <Badge className="bg-gradient-to-r from-laranja to-orange-500 text-white text-lg px-6 py-2 shadow-lg">
                    <Award className="w-5 h-5 mr-2" />
                    {modelData.code}
                  </Badge>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-5xl md:text-7xl lg:text-8xl text-white mb-8 font-light tracking-tight"
                >
                  <span className="block text-3xl md:text-4xl mb-4 text-slate-300">
                    {language === 'pt' ? 'Bomba de Engrenagem' :
                     language === 'en' ? 'Gear Pump' :
                     'Bomba de Engranaje'}
                  </span>
                  <span className="block font-bold bg-gradient-to-r from-laranja via-orange-400 to-amber-500 bg-clip-text text-transparent pb-2">
                    {modelData.model}
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed font-light"
                >
                  {language === 'pt' ? 'Engenharia de precisão projetada para máxima eficiência e durabilidade em aplicações industriais exigentes' :
                   language === 'en' ? 'Precision engineering designed for maximum efficiency and durability in demanding industrial applications' :
                   'Ingeniería de precisión diseñada para máxima eficiencia y durabilidad en aplicaciones industriales exigentes'}
                </motion.p>

                {/* Quick Specs Pills */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-wrap justify-center gap-4"
                >
                  <div className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <Droplets className="w-4 h-4 text-laranja" />
                    <span className="text-sm font-medium text-white">{modelData.specifications.flowRate}</span>
                  </div>
                  <div className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <Gauge className="w-4 h-4 text-laranja" />
                    <span className="text-sm font-medium text-white">{modelData.specifications.pressure}</span>
                  </div>
                  <div className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <Thermometer className="w-4 h-4 text-laranja" />
                    <span className="text-sm font-medium text-white">{modelData.specifications.temperature}</span>
                  </div>
                  <div className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <Settings className="w-4 h-4 text-laranja" />
                    <span className="text-sm font-medium text-white">{modelData.specifications.rpm} RPM</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

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

        {/* Main Content with Premium Layout */}
        <section className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Product Image Gallery Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Product Image */}
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 aspect-square shadow-2xl"
                  >
                    {/* 3D Effect Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-laranja/10 to-transparent" />
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-laranja/20 rounded-full blur-3xl" />
                    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-azul-profundo/20 rounded-full blur-3xl" />
                    
                    {/* Product Image Placeholder */}
                    <div className="relative h-full flex items-center justify-center p-12">
                      <div className="relative">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 bg-gradient-to-r from-laranja/20 to-transparent blur-2xl"
                        />
                        <Package className="w-48 h-48 text-slate-400 dark:text-slate-600" />
                      </div>
                      <Badge className="absolute top-6 right-6 bg-vermelho text-white shadow-lg">
                        FBE Series
                      </Badge>
                    </div>
                  </motion.div>
                  
                  {/* Premium Features */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4">
                    {[
                      { icon: Shield, text: language === 'pt' ? 'Garantia' : 'Warranty' },
                      { icon: Award, text: 'ISO 9001' },
                      { icon: Zap, text: language === 'pt' ? 'Alta Eficiência' : 'High Efficiency' }
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-200 dark:border-slate-700"
                      >
                        <feature.icon className="w-4 h-4 text-laranja" />
                        <span className="text-xs font-medium">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Key Features Grid */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <Badge className="mb-6 bg-azul-profundo/10 text-azul-profundo dark:bg-blue-500/10 dark:text-blue-400 border-0">
                      {language === 'pt' ? 'DESTAQUE DO PRODUTO' : 'PRODUCT HIGHLIGHT'}
                    </Badge>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-azul-profundo dark:text-white mb-6">
                      {language === 'pt' ? 'Engenharia de Excelência' :
                       language === 'en' ? 'Engineering Excellence' :
                       'Excelencia en Ingeniería'}
                    </h2>
                    
                    <p className="text-lg text-cinza-titanio dark:text-prata/90 mb-8 leading-relaxed">
                      {language === 'pt' ? 
                        'Projetada com tecnologia de ponta para garantir máxima performance, confiabilidade e vida útil prolongada em operações industriais críticas.' :
                       language === 'en' ? 
                        'Engineered with cutting-edge technology to ensure maximum performance, reliability and extended service life in critical industrial operations.' :
                        'Diseñada con tecnología de vanguardia para garantizar máximo rendimiento, confiabilidad y vida útil prolongada en operaciones industriales críticas.'}
                    </p>
                    
                    {/* Performance Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <BarChart3 className="w-8 h-8 text-laranja" />
                          <span className="text-3xl font-bold text-azul-profundo dark:text-white">
                            {modelData.performance?.efficiency || '85%'}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {language === 'pt' ? 'Eficiência' : 'Efficiency'}
                        </p>
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <Volume2 className="w-8 h-8 text-azul-profundo" />
                          <span className="text-3xl font-bold text-azul-profundo dark:text-white">
                            {modelData.performance?.noiseLevel || '< 70 dB'}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {language === 'pt' ? 'Nível de Ruído' : 'Noise Level'}
                        </p>
                      </motion.div>
                    </div>
                    
                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        onClick={handleWhatsAppClick}
                        size="lg"
                        className="bg-gradient-to-r from-laranja to-orange-500 hover:from-orange-500 hover:to-laranja text-white shadow-lg"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        {language === 'pt' ? 'Solicitar Orçamento' :
                         language === 'en' ? 'Request Quote' :
                         'Solicitar Presupuesto'}
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-2"
                      >
                        <Download className="mr-2 h-5 w-5" />
                        {language === 'pt' ? 'Baixar Catálogo' :
                         language === 'en' ? 'Download Catalog' :
                         'Descargar Catálogo'}
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Tabs Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Tabs defaultValue="specifications" className="w-full">
                <TabsList className="grid grid-cols-4 w-full max-w-3xl mx-auto mb-8 bg-white dark:bg-slate-800 p-1 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                  <TabsTrigger 
                    value="specifications"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-laranja data-[state=active]:to-orange-500 data-[state=active]:text-white data-[state=active]:shadow-md"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    {language === 'pt' ? 'Especificações' : 'Specifications'}
                  </TabsTrigger>
                  <TabsTrigger 
                    value="technical"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-azul-profundo data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md"
                  >
                    <Info className="w-4 h-4 mr-2" />
                    {language === 'pt' ? 'Dados Técnicos' : 'Technical Data'}
                  </TabsTrigger>
                  <TabsTrigger 
                    value="materials"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-azul-profundo data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md"
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    {language === 'pt' ? 'Materiais' : 'Materials'}
                  </TabsTrigger>
                  <TabsTrigger 
                    value="applications"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-azul-profundo data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md"
                  >
                    <Wrench className="w-4 h-4 mr-2" />
                    {language === 'pt' ? 'Aplicações' : 'Applications'}
                  </TabsTrigger>
                </TabsList>

                {/* Specifications Tab */}
                <TabsContent value="specifications" className="mt-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Specs */}
                    <div className="lg:col-span-2 space-y-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Card className="overflow-hidden border-0 shadow-2xl bg-white dark:bg-slate-800">
                          <div className="bg-gradient-to-r from-laranja to-orange-500 p-6">
                            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                              <Settings className="w-8 h-8" />
                              {language === 'pt' ? 'Especificações Técnicas' :
                               language === 'en' ? 'Technical Specifications' :
                               'Especificaciones Técnicas'}
                            </h3>
                          </div>
                          <CardContent className="p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {/* Flow Rate */}
                              <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-700/50 dark:to-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-600 shadow-lg"
                              >
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="p-3 bg-laranja/10 rounded-lg">
                                    <Droplets className="w-6 h-6 text-laranja" />
                                  </div>
                                  <h4 className="font-semibold text-lg text-azul-profundo dark:text-white">
                                    {language === 'pt' ? 'Vazão Máxima' :
                                     language === 'en' ? 'Maximum Flow' :
                                     'Caudal Máximo'}
                                  </h4>
                                </div>
                                <p className="text-3xl font-bold bg-gradient-to-r from-laranja to-orange-500 bg-clip-text text-transparent">
                                  {modelData.specifications.flowRate}
                                </p>
                              </motion.div>

                              {/* Pressure */}
                              <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-700/50 dark:to-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-600 shadow-lg"
                              >
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="p-3 bg-azul-profundo/10 rounded-lg">
                                    <Gauge className="w-6 h-6 text-azul-profundo dark:text-blue-400" />
                                  </div>
                                  <h4 className="font-semibold text-lg text-azul-profundo dark:text-white">
                                    {language === 'pt' ? 'Pressão Máxima' :
                                     language === 'en' ? 'Maximum Pressure' :
                                     'Presión Máxima'}
                                  </h4>
                                </div>
                                <p className="text-3xl font-bold text-azul-profundo dark:text-blue-400">
                                  {modelData.specifications.pressure}
                                </p>
                              </motion.div>

                              {/* Temperature */}
                              <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-700/50 dark:to-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-600 shadow-lg"
                              >
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="p-3 bg-vermelho/10 rounded-lg">
                                    <Thermometer className="w-6 h-6 text-vermelho" />
                                  </div>
                                  <h4 className="font-semibold text-lg text-azul-profundo dark:text-white">
                                    {language === 'pt' ? 'Temperatura' :
                                     language === 'en' ? 'Temperature' :
                                     'Temperatura'}
                                  </h4>
                                </div>
                                <p className="text-3xl font-bold text-vermelho">
                                  {modelData.specifications.temperature}
                                </p>
                              </motion.div>

                              {/* RPM */}
                              <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-700/50 dark:to-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-600 shadow-lg"
                              >
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="p-3 bg-purple-500/10 rounded-lg">
                                    <Settings className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                  </div>
                                  <h4 className="font-semibold text-lg text-azul-profundo dark:text-white">
                                    {language === 'pt' ? 'Rotação Máxima' :
                                     language === 'en' ? 'Maximum Rotation' :
                                     'Rotación Máxima'}
                                  </h4>
                                </div>
                                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                                  {modelData.specifications.rpm} RPM
                                </p>
                              </motion.div>

                              {/* Viscosity */}
                              <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-700/50 dark:to-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-600 shadow-lg"
                              >
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="p-3 bg-green-500/10 rounded-lg">
                                    <Droplets className="w-6 h-6 text-green-600 dark:text-green-400" />
                                  </div>
                                  <h4 className="font-semibold text-lg text-azul-profundo dark:text-white">
                                    {language === 'pt' ? 'Viscosidade' :
                                     language === 'en' ? 'Viscosity' :
                                     'Viscosidad'}
                                  </h4>
                                </div>
                                <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                                  {modelData.specifications.viscosity}
                                </p>
                              </motion.div>

                              {/* Weight */}
                              <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-700/50 dark:to-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-600 shadow-lg"
                              >
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="p-3 bg-slate-500/10 rounded-lg">
                                    <Weight className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                                  </div>
                                  <h4 className="font-semibold text-lg text-azul-profundo dark:text-white">
                                    {language === 'pt' ? 'Peso' :
                                     language === 'en' ? 'Weight' :
                                     'Peso'}
                                  </h4>
                                </div>
                                <p className="text-3xl font-bold text-slate-600 dark:text-slate-400">
                                  {modelData.specifications.weight}
                                </p>
                              </motion.div>
                            </div>

                            {/* Connections Section */}
                            <div className="mt-8 p-6 bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-700 dark:to-slate-800 rounded-xl">
                              <h4 className="font-bold text-xl text-azul-profundo dark:text-white mb-6 flex items-center gap-3">
                                <Package className="w-6 h-6" />
                                {language === 'pt' ? 'Conexões' :
                                 language === 'en' ? 'Connections' :
                                 'Conexiones'}
                              </h4>
                              <div className="grid grid-cols-2 gap-6">
                                <div className="bg-white dark:bg-slate-900 p-5 rounded-lg shadow-md">
                                  <div className="flex items-center gap-2 mb-2">
                                    <ArrowRight className="w-5 h-5 text-laranja" />
                                    <p className="text-sm font-medium uppercase tracking-wider text-slate-600 dark:text-slate-400">
                                      {language === 'pt' ? 'Entrada' :
                                       language === 'en' ? 'Inlet' :
                                       'Entrada'}
                                    </p>
                                  </div>
                                  <p className="text-xl font-bold text-azul-profundo dark:text-white">
                                    {modelData.specifications.inlet}
                                  </p>
                                </div>
                                <div className="bg-white dark:bg-slate-900 p-5 rounded-lg shadow-md">
                                  <div className="flex items-center gap-2 mb-2">
                                    <ArrowLeft className="w-5 h-5 text-azul-profundo" />
                                    <p className="text-sm font-medium uppercase tracking-wider text-slate-600 dark:text-slate-400">
                                      {language === 'pt' ? 'Saída' :
                                       language === 'en' ? 'Outlet' :
                                       'Salida'}
                                    </p>
                                  </div>
                                  <p className="text-xl font-bold text-azul-profundo dark:text-white">
                                    {modelData.specifications.outlet}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>

                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-laranja to-orange-600 text-white">
                          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />
                          <CardContent className="relative p-8">
                            <div className="text-center mb-6">
                              <div className="w-20 h-20 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                <Phone className="w-10 h-10" />
                              </div>
                              <h3 className="text-2xl font-bold mb-2">
                                {language === 'pt' ? 'Consultoria Especializada' :
                                 language === 'en' ? 'Expert Consulting' :
                                 'Consultoría Especializada'}
                              </h3>
                              <p className="text-white/90">
                                {language === 'pt' ? 'Nossos engenheiros estão prontos para ajudá-lo' :
                                 language === 'en' ? 'Our engineers are ready to help you' :
                                 'Nuestros ingenieros están listos para ayudarlo'}
                              </p>
                            </div>
                            
                            <div className="space-y-3">
                              <Button
                                onClick={handleWhatsAppClick}
                                size="lg"
                                className="w-full bg-white text-laranja hover:bg-slate-100 font-bold shadow-lg"
                              >
                                <MessageCircle className="mr-2 h-5 w-5" />
                                WhatsApp
                              </Button>
                              
                              <Button
                                onClick={() => setLocation('/#contato')}
                                variant="outline"
                                size="lg"
                                className="w-full border-2 border-white text-white hover:bg-white hover:text-laranja font-bold"
                              >
                                <Phone className="mr-2 h-5 w-5" />
                                {language === 'pt' ? 'Formulário de Contato' :
                                 language === 'en' ? 'Contact Form' :
                                 'Formulario de Contacto'}
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>

                      {/* Quick Info Cards */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="grid grid-cols-2 gap-4"
                      >
                        <Card className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border-slate-200 dark:border-slate-700">
                          <CardContent className="p-4 text-center">
                            <Shield className="w-8 h-8 mx-auto mb-2 text-azul-profundo" />
                            <p className="text-2xl font-bold text-azul-profundo dark:text-white">2</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              {language === 'pt' ? 'Anos Garantia' : 'Years Warranty'}
                            </p>
                          </CardContent>
                        </Card>
                        <Card className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border-slate-200 dark:border-slate-700">
                          <CardContent className="p-4 text-center">
                            <Clock className="w-8 h-8 mx-auto mb-2 text-laranja" />
                            <p className="text-2xl font-bold text-laranja">24/7</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              {language === 'pt' ? 'Suporte' : 'Support'}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </div>
                  </div>
                </TabsContent>

                {/* Technical Data Tab */}
                <TabsContent value="technical" className="mt-0">
                  <Card className="overflow-hidden border-0 shadow-2xl">
                    <div className="bg-gradient-to-r from-azul-profundo to-blue-600 p-6">
                      <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                        <Info className="w-8 h-8" />
                        {language === 'pt' ? 'Dados Técnicos Detalhados' :
                         language === 'en' ? 'Detailed Technical Data' :
                         'Datos Técnicos Detallados'}
                      </h3>
                    </div>
                    <CardContent className="p-8">
                      <div className="space-y-4">
                        {modelData.technicalSpecs[language].map((spec, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg"
                          >
                            <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-cinza-titanio dark:text-prata/90">{spec}</span>
                          </motion.div>
                        ))}
                      </div>
                      
                      {modelData.optionals && (
                        <div className="mt-8">
                          <h4 className="font-bold text-xl text-azul-profundo dark:text-white mb-4 flex items-center gap-3">
                            <Star className="w-6 h-6 text-laranja" />
                            {language === 'pt' ? 'Opcionais' :
                             language === 'en' ? 'Optional Features' :
                             'Características Opcionales'}
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {modelData.optionals[language].map((optional, idx) => (
                              <div key={idx} className="flex items-center gap-3 p-3 bg-laranja/10 rounded-lg">
                                <ArrowRight className="w-4 h-4 text-laranja flex-shrink-0" />
                                <span className="text-sm">{optional}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Materials Tab */}
                <TabsContent value="materials" className="mt-0">
                  <Card className="overflow-hidden border-0 shadow-2xl">
                    <div className="bg-gradient-to-r from-azul-profundo to-blue-600 p-6">
                      <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                        <Shield className="w-8 h-8" />
                        {language === 'pt' ? 'Materiais de Construção' :
                         language === 'en' ? 'Construction Materials' :
                         'Materiales de Construcción'}
                      </h3>
                    </div>
                    <CardContent className="p-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {modelData.materials[language].map((material, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg"
                          >
                            <div className="flex items-start gap-4">
                              <div className="p-3 bg-azul-profundo/10 rounded-lg">
                                <Shield className="w-6 h-6 text-azul-profundo dark:text-blue-400" />
                              </div>
                              <p className="text-cinza-titanio dark:text-prata/90 leading-relaxed">{material}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Applications Tab */}
                <TabsContent value="applications" className="mt-0">
                  <Card className="overflow-hidden border-0 shadow-2xl">
                    <div className="bg-gradient-to-r from-azul-profundo to-blue-600 p-6">
                      <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                        <Wrench className="w-8 h-8" />
                        {language === 'pt' ? 'Aplicações Industriais' :
                         language === 'en' ? 'Industrial Applications' :
                         'Aplicaciones Industriales'}
                      </h3>
                    </div>
                    <CardContent className="p-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {fbeApplications[language].map((app, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-xl border-2 border-transparent hover:border-laranja shadow-lg transition-all duration-300 cursor-pointer"
                          >
                            <div className="flex items-start gap-3">
                              <div className="p-2 bg-laranja/10 rounded-lg">
                                <Zap className="w-5 h-5 text-laranja" />
                              </div>
                              <p className="text-cinza-titanio dark:text-prata/90 font-medium">{app}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>

            {/* Related Products Section */}
            {pumpData.models.length > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-20"
              >
                <div className="text-center mb-12">
                  <Badge className="mb-4 bg-azul-profundo/10 text-azul-profundo dark:bg-blue-500/10 dark:text-blue-400 border-0">
                    {language === 'pt' ? 'PRODUTOS RELACIONADOS' : 'RELATED PRODUCTS'}
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-azul-profundo dark:text-white">
                    {language === 'pt' ? 'Outros Modelos' :
                     language === 'en' ? 'Other Models' :
                     'Otros Modelos'} {pumpData.diameter}
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {pumpData.models.filter(m => m.model !== modelData.model).slice(0, 3).map((model, index) => (
                    <motion.div
                      key={model.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <Card 
                        className="cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden h-full"
                        onClick={() => {
                          const cleanModel = model.model.replace(/"/g, '').replace(/ /g, '-');
                          setLocation(`/produtos/bombas-engrenagem/${diameter}/${cleanModel}`);
                        }}
                      >
                        <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Package className="w-24 h-24 text-slate-300 dark:text-slate-600" />
                          </div>
                          <Badge className="absolute top-4 left-4 bg-vermelho text-white">
                            FBE
                          </Badge>
                          <Badge className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 text-azul-profundo dark:text-white">
                            {model.code}
                          </Badge>
                        </div>
                        
                        <CardContent className="p-6">
                          <h3 className="text-2xl font-bold text-azul-profundo dark:text-white mb-4">
                            {model.model}
                          </h3>
                          
                          <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="text-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                              <Droplets className="w-5 h-5 mx-auto mb-1 text-laranja" />
                              <p className="text-sm font-semibold">{model.specifications.maxFlow}</p>
                            </div>
                            <div className="text-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                              <Gauge className="w-5 h-5 mx-auto mb-1 text-azul-profundo" />
                              <p className="text-sm font-semibold">{model.specifications.maxPressure}</p>
                            </div>
                          </div>
                          
                          <Button className="w-full" variant="outline">
                            {language === 'pt' ? 'Ver Detalhes' : 'View Details'}
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Premium Wave Divider for Footer */}
        <div className="relative mt-20">
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

export default GearPumpDetailPage;