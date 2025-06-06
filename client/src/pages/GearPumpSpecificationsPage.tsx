import React, { useEffect } from 'react';
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
  Package
} from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

// Dados de especificações mock
const specificationsData: Record<string, any> = {
  'fbe-18': {
    name: '1/8"',
    code: 'FBE-1/8',
    maxFlow: '5,15 L/min',
    maxPressure: '22 bar',
    maxTemp: '350°C',
    maxRPM: '1750 RPM',
    viscosity: '2.000.000 SSU',
    suction: '1/2" NPT',
    discharge: '1/2" NPT',
    construction: 'Ferro fundido',
    sealing: 'Gaxeta teflonada ou selo mecânico',
    bearings: 'Bronze ou carvão'
  }
  // Adicionar mais especificações conforme necessário
};

const GearPumpSpecificationsPage: React.FC = () => {
  const { language } = useLanguage();
  const params = useParams();
  const [location, setLocation] = useLocation();
  const diameter = params.diameter || '';
  const modelId = params.modelId || `fbe-${diameter}`;

  const specs = specificationsData[modelId] || specificationsData['fbe-18'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      language === 'pt' ? `Olá! Gostaria de mais informações sobre a bomba ${specs.name} (${specs.code}).` :
      language === 'en' ? `Hello! I would like more information about the ${specs.name} pump (${specs.code}).` :
      `¡Hola! Me gustaría más información sobre la bomba ${specs.name} (${specs.code}).`
    );
    window.open(`https://wa.me/5511972874837?text=${message}`, '_blank');
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-br from-azul-profundo/5 via-transparent to-vermelho/5 dark:from-azul-profundo/10 dark:to-vermelho/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Badge className="mb-4 bg-vermelho text-white">
                {specs.code}
              </Badge>
              <h1 className="font-garamond text-4xl md:text-5xl lg:text-6xl text-azul-profundo dark:text-white mb-6">
                {language === 'pt' ? `Bomba de Engrenagem ${specs.name}` :
                 language === 'en' ? `${specs.name} Gear Pump` :
                 `Bomba de Engranaje ${specs.name}`}
              </h1>
              <p className="text-lg md:text-xl text-cinza-titanio dark:text-prata/90 max-w-3xl mx-auto">
                {language === 'pt' ? 'Especificações técnicas completas e informações detalhadas' :
                 language === 'en' ? 'Complete technical specifications and detailed information' :
                 'Especificaciones técnicas completas e información detallada'}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Specifications Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button
              onClick={() => setLocation('/produtos')}
              variant="ghost"
              className="mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === 'pt' ? 'Voltar aos produtos' : 'Back to products'}
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Specifications */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-azul-profundo dark:text-white mb-6">
                      {language === 'pt' ? 'Especificações Técnicas' : 'Technical Specifications'}
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Droplets className="w-5 h-5 text-vermelho mt-0.5" />
                          <div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              {language === 'pt' ? 'Vazão Máxima' : 'Maximum Flow'}
                            </p>
                            <p className="font-semibold text-azul-profundo dark:text-white">
                              {specs.maxFlow}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Gauge className="w-5 h-5 text-vermelho mt-0.5" />
                          <div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              {language === 'pt' ? 'Pressão Máxima' : 'Maximum Pressure'}
                            </p>
                            <p className="font-semibold text-azul-profundo dark:text-white">
                              {specs.maxPressure}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Thermometer className="w-5 h-5 text-vermelho mt-0.5" />
                          <div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              {language === 'pt' ? 'Temperatura Máxima' : 'Maximum Temperature'}
                            </p>
                            <p className="font-semibold text-azul-profundo dark:text-white">
                              {specs.maxTemp}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Activity className="w-5 h-5 text-vermelho mt-0.5" />
                          <div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              {language === 'pt' ? 'Rotação Máxima' : 'Maximum RPM'}
                            </p>
                            <p className="font-semibold text-azul-profundo dark:text-white">
                              {specs.maxRPM}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Settings className="w-5 h-5 text-vermelho mt-0.5" />
                          <div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              {language === 'pt' ? 'Viscosidade' : 'Viscosity'}
                            </p>
                            <p className="font-semibold text-azul-profundo dark:text-white">
                              {specs.viscosity}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Package className="w-5 h-5 text-vermelho mt-0.5" />
                          <div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              {language === 'pt' ? 'Construção' : 'Construction'}
                            </p>
                            <p className="font-semibold text-azul-profundo dark:text-white">
                              {specs.construction}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Additional Info Tabs */}
                <Tabs defaultValue="construction" className="mt-8">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="construction">
                      {language === 'pt' ? 'Construção' : 'Construction'}
                    </TabsTrigger>
                    <TabsTrigger value="applications">
                      {language === 'pt' ? 'Aplicações' : 'Applications'}
                    </TabsTrigger>
                    <TabsTrigger value="options">
                      {language === 'pt' ? 'Opcionais' : 'Options'}
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="construction" className="mt-6">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-bold text-lg text-azul-profundo dark:text-white mb-4">
                          {language === 'pt' ? 'Detalhes de Construção' : 'Construction Details'}
                        </h3>
                        <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                          <li>• {language === 'pt' ? 'Vedação: ' : 'Sealing: '}{specs.sealing}</li>
                          <li>• {language === 'pt' ? 'Mancais: ' : 'Bearings: '}{specs.bearings}</li>
                          <li>• {language === 'pt' ? 'Sucção: ' : 'Suction: '}{specs.suction}</li>
                          <li>• {language === 'pt' ? 'Descarga: ' : 'Discharge: '}{specs.discharge}</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="applications" className="mt-6">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-bold text-lg text-azul-profundo dark:text-white mb-4">
                          {language === 'pt' ? 'Aplicações Típicas' : 'Typical Applications'}
                        </h3>
                        <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                          <li>• {language === 'pt' ? 'Transferência de óleos lubrificantes' : 'Lubricating oil transfer'}</li>
                          <li>• {language === 'pt' ? 'Bombeamento de fluidos viscosos' : 'Viscous fluid pumping'}</li>
                          <li>• {language === 'pt' ? 'Sistemas hidráulicos' : 'Hydraulic systems'}</li>
                          <li>• {language === 'pt' ? 'Processos industriais' : 'Industrial processes'}</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="options" className="mt-6">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-bold text-lg text-azul-profundo dark:text-white mb-4">
                          {language === 'pt' ? 'Opcionais Disponíveis' : 'Available Options'}
                        </h3>
                        <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                          <li>• {language === 'pt' ? 'Válvula de alívio integrada' : 'Integrated relief valve'}</li>
                          <li>• {language === 'pt' ? 'Aquecimento por vapor' : 'Steam heating'}</li>
                          <li>• {language === 'pt' ? 'Materiais especiais' : 'Special materials'}</li>
                          <li>• {language === 'pt' ? 'Vedações especiais' : 'Special seals'}</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Product Image */}
                <Card>
                  <div className="aspect-square bg-slate-100 dark:bg-slate-800 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Cog className="w-32 h-32 text-slate-300 dark:text-slate-600" />
                    </div>
                  </div>
                </Card>

                {/* CTA Buttons */}
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <Button 
                      className="w-full bg-vermelho hover:bg-vermelho/90 text-white"
                      onClick={handleWhatsAppClick}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      {language === 'pt' ? 'Solicitar Orçamento' : 'Request Quote'}
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.open('/assets/manuals/FB_Manual_Tecnico_FBE.pdf', '_blank')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      {language === 'pt' ? 'Baixar Manual' : 'Download Manual'}
                    </Button>
                  </CardContent>
                </Card>

                {/* Quick Info */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-azul-profundo dark:text-white mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-vermelho" />
                      {language === 'pt' ? 'Garantia' : 'Warranty'}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {language === 'pt' ? 
                        'Todas as bombas FB possuem garantia de 12 meses contra defeitos de fabricação.' :
                        'All FB pumps come with a 12-month warranty against manufacturing defects.'}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GearPumpSpecificationsPage;