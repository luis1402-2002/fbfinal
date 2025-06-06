import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useParams } from 'wouter';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { 
  Cog,
  ArrowRight,
  ArrowLeft,
  Gauge,
  Droplets,
  Thermometer,
  Activity
} from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { gearPumpsComplete } from '../data/gearPumpsComplete';


const GearPumpVariationsPage: React.FC = () => {
  const { language } = useLanguage();
  const params = useParams();
  const [location, setLocation] = useLocation();
  const diameter = params.diameter || '';
  
  // Find pump data from complete dataset
  const pumpData = gearPumpsComplete.find(p => 
    p.diameter.replace(/"/g, '') === diameter
  );
  
  const variations = pumpData?.models || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleModelClick = (model: any) => {
    const cleanModel = model.model.replace(/"/g, '').replace(/ /g, '-');
    setLocation(`/produtos/bombas-engrenagem/${diameter}/${cleanModel}`);
  };

  if (!variations.length) {
    setLocation('/produtos');
    return null;
  }

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
                {language === 'pt' ? 'SÉRIE FBE' : 'FBE SERIES'}
              </Badge>
              <h1 className="font-garamond text-4xl md:text-5xl lg:text-6xl text-azul-profundo dark:text-white mb-6">
                {language === 'pt' ? `Bombas de Engrenagem ${diameter}"` :
                 language === 'en' ? `${diameter}" Gear Pumps` :
                 `Bombas de Engranaje ${diameter}"`}
              </h1>
              <p className="text-lg md:text-xl text-cinza-titanio dark:text-prata/90 max-w-3xl mx-auto">
                {language === 'pt' ? 'Selecione o modelo desejado para ver as especificações completas' :
                 language === 'en' ? 'Select the desired model to see complete specifications' :
                 'Seleccione el modelo deseado para ver las especificaciones completas'}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Models Grid */}
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {variations.map((model, index) => {
                // Extract flow rate value from specification
                const flowRate = model.specifications.flowRate.split(' ').pop() || '';
                
                return (
                <motion.div
                  key={model.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card 
                    className="cursor-pointer hover:shadow-xl transition-all"
                    onClick={() => handleModelClick(model)}
                  >
                    <div className="aspect-[4/3] bg-slate-100 dark:bg-slate-800 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Cog className="w-32 h-32 text-slate-300 dark:text-slate-600" />
                      </div>
                      <Badge className="absolute top-4 right-4 bg-vermelho text-white">
                        FBE
                      </Badge>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-azul-profundo dark:text-white mb-2">
                        {model.model}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        {model.code}
                      </p>
                      
                      <div className="text-xs text-slate-500 dark:text-slate-500 mb-3">
                        {language === 'pt' ? 'Rotação:' : 'Rotation:'} {model.specifications.rpm} RPM
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                            <Droplets className="w-4 h-4" />
                            <span className="text-sm">
                              {language === 'pt' ? 'Vazão máxima' : 'Max flow'}
                            </span>
                          </div>
                          <span className="font-semibold text-azul-profundo dark:text-white">
                            {flowRate}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                            <Gauge className="w-4 h-4" />
                            <span className="text-sm">
                              {language === 'pt' ? 'Pressão máxima' : 'Max pressure'}
                            </span>
                          </div>
                          <span className="font-semibold text-azul-profundo dark:text-white">
                            {model.specifications.pressure}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-vermelho dark:text-blue-400">
                        <span className="text-sm font-medium">
                          {language === 'pt' ? 'Ver especificações' : 'View specifications'}
                        </span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GearPumpVariationsPage;