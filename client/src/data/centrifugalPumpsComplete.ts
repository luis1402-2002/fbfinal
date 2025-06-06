// Complete centrifugal pumps data for FBOT and FBCN series

export interface CentrifugalPumpModel {
  id: string;
  code: string;
  name: string;
  specs: {
    maxFlow: string;
    maxHead: string;
    maxRPM: string;
    maxTemp: string;
    sizes: string;
  };
}

export interface CentrifugalPumpSeries {
  id: string;
  name: string;
  series: string;
  description: {
    pt: string;
    en: string;
    es: string;
  };
  generalSpecs: {
    maxFlow: string;
    maxHead: string;
    maxRPM: string;
    maxTemp: string;
    sizes: string;
  };
  features: {
    pt: string[];
    en: string[];
    es: string[];
  };
  applications: {
    pt: string;
    en: string;
    es: string;
  };
  models: CentrifugalPumpModel[];
}

export const centrifugalPumpsComplete: CentrifugalPumpSeries[] = [
  {
    id: 'fbot',
    name: 'FBOT',
    series: 'Série FBOT',
    description: {
      pt: 'Desenvolvida para trabalhar no bombeamento de óleos térmicos orgânicos. Pode ser utilizada na indústria farmacêutica, química, alimentícia, têxtil, plástica, etc.',
      en: 'Developed for pumping organic thermal oils. Can be used in pharmaceutical, chemical, food, textile, plastic industries, etc.',
      es: 'Desarrollada para trabajar en el bombeo de aceites térmicos orgánicos. Puede utilizarse en la industria farmacéutica, química, alimentaria, textil, plástica, etc.'
    },
    generalSpecs: {
      maxFlow: 'até 2.200 m³/h',
      maxHead: 'até 135 M',
      maxRPM: '3500 RPM',
      maxTemp: 'até 350°C',
      sizes: 'DN25 até 300 mm'
    },
    features: {
      pt: [
        'Bomba com corpo em voluta',
        'Instalação na horizontal',
        'Construção "back pull-out"',
        'Monoestágio',
        'Temperaturas até 350°C',
        'Selo mecânico imerso em óleo + gaxetas de grafite (dupla vedação)'
      ],
      en: [
        'Volute casing pump',
        'Horizontal installation',
        'Back pull-out construction',
        'Single stage',
        'Temperatures up to 350°C',
        'Oil-immersed mechanical seal + graphite packing (double sealing)'
      ],
      es: [
        'Bomba con cuerpo en voluta',
        'Instalación horizontal',
        'Construcción "back pull-out"',
        'Monoetapa',
        'Temperaturas hasta 350°C',
        'Sello mecánico inmerso en aceite + empaquetaduras de grafito (doble sellado)'
      ]
    },
    applications: {
      pt: 'Desenvolvida para trabalhar no bombeamento de óleos térmicos orgânicos. Pode ser utilizada na indústria farmacêutica, química, alimentícia, têxtil, plástica, etc. O fluído não deve conter partículas abrasivas ou materiais que possam atacar quimicamente os componentes da bomba.',
      en: 'Developed for pumping organic thermal oils. Can be used in pharmaceutical, chemical, food, textile, plastic industries, etc. The fluid must not contain abrasive particles or materials that could chemically attack the pump components.',
      es: 'Desarrollada para trabajar en el bombeo de aceites térmicos orgánicos. Puede utilizarse en la industria farmacéutica, química, alimentaria, textil, plástica, etc. El fluido no debe contener partículas abrasivas o materiales que puedan atacar químicamente los componentes de la bomba.'
    },
    models: [
      {
        id: 'fbot-25-160',
        code: 'FBOT 25-160',
        name: '25-160',
        specs: {
          maxFlow: '3,6 m³/h',
          maxHead: '20 M',
          maxRPM: '3500 RPM',
          maxTemp: '350°C',
          sizes: 'DN25'
        }
      },
      {
        id: 'fbot-32-125',
        code: 'FBOT 32-125',
        name: '32-125',
        specs: {
          maxFlow: '7,2 m³/h',
          maxHead: '12,5 M',
          maxRPM: '3500 RPM',
          maxTemp: '350°C',
          sizes: 'DN32'
        }
      },
      {
        id: 'fbot-50-125',
        code: 'FBOT 50-125',
        name: '50-125',
        specs: {
          maxFlow: '20 m³/h',
          maxHead: '12,5 M',
          maxRPM: '3500 RPM',
          maxTemp: '350°C',
          sizes: 'DN50'
        }
      },
      {
        id: 'fbot-100-315',
        code: 'FBOT 100-315',
        name: '100-315',
        specs: {
          maxFlow: '200 m³/h',
          maxHead: '125 M',
          maxRPM: '3500 RPM',
          maxTemp: '350°C',
          sizes: 'DN100'
        }
      }
    ]
  },
  {
    id: 'fbcn',
    name: 'FBCN',
    series: 'Série FBCN',
    description: {
      pt: 'Desenvolvida para trabalhar com líquidos limpos ou turvos, em inúmeras aplicações, tais como indústrias químicas, petroquímicas, papel, polpa, siderúrgica, mineração, alimentícia, têxtil, farmacêutica, saneamento e combate à incêndio.',
      en: 'Developed to work with clean or turbid liquids in numerous applications such as chemical, petrochemical, paper, pulp, steel, mining, food, textile, pharmaceutical industries, sanitation and firefighting.',
      es: 'Desarrollada para trabajar con líquidos limpios o turbios, en numerosas aplicaciones como industrias químicas, petroquímicas, papel, pulpa, siderúrgica, minería, alimentaria, textil, farmacéutica, saneamiento y combate de incendios.'
    },
    generalSpecs: {
      maxFlow: 'até 2.200 m³/h',
      maxHead: 'até 135 M',
      maxRPM: '3500 RPM',
      maxTemp: 'até 250°C',
      sizes: 'DN25 até 300 mm'
    },
    features: {
      pt: [
        'Bomba com corpo em voluta',
        'Instalação na horizontal',
        'Construção "back pull-out"',
        'Monoestágio',
        'Temperaturas até 250°C',
        'Dimensionalmente conforme ISO 2858',
        'Mecanicamente conforme ASME B73.1'
      ],
      en: [
        'Volute casing pump',
        'Horizontal installation',
        'Back pull-out construction',
        'Single stage',
        'Temperatures up to 250°C',
        'Dimensionally compliant with ISO 2858',
        'Mechanically compliant with ASME B73.1'
      ],
      es: [
        'Bomba con cuerpo en voluta',
        'Instalación horizontal',
        'Construcción "back pull-out"',
        'Monoetapa',
        'Temperaturas hasta 250°C',
        'Dimensionalmente conforme ISO 2858',
        'Mecánicamente conforme ASME B73.1'
      ]
    },
    applications: {
      pt: 'Desenvolvida para trabalhar com líquidos limpos ou turvos, em inúmeras aplicações, tais como indústrias químicas, petroquímicas, papel, polpa, siderúrgica, mineração, alimentícia, têxtil, farmacêutica, saneamento e combate à incêndio.',
      en: 'Developed to work with clean or turbid liquids in numerous applications such as chemical, petrochemical, paper, pulp, steel, mining, food, textile, pharmaceutical industries, sanitation and firefighting.',
      es: 'Desarrollada para trabajar con líquidos limpios o turbios, en numerosas aplicaciones como industrias químicas, petroquímicas, papel, pulpa, siderúrgica, minería, alimentaria, textil, farmacéutica, saneamiento y combate de incendios.'
    },
    models: [
      {
        id: 'fbcn-32-125',
        code: 'FBCN 32-125',
        name: '32-125',
        specs: {
          maxFlow: '7,2 m³/h',
          maxHead: '12,5 M',
          maxRPM: '3500 RPM',
          maxTemp: '250°C',
          sizes: 'DN32'
        }
      },
      {
        id: 'fbcn-40-200',
        code: 'FBCN 40-200',
        name: '40-200',
        specs: {
          maxFlow: '15,5 m³/h',
          maxHead: '50 M',
          maxRPM: '3500 RPM',
          maxTemp: '250°C',
          sizes: 'DN40'
        }
      },
      {
        id: 'fbcn-50-160',
        code: 'FBCN 50-160',
        name: '50-160',
        specs: {
          maxFlow: '25 m³/h',
          maxHead: '32 M',
          maxRPM: '3500 RPM',
          maxTemp: '250°C',
          sizes: 'DN50'
        }
      },
      {
        id: 'fbcn-65-160',
        code: 'FBCN 65-160',
        name: '65-160',
        specs: {
          maxFlow: '50 m³/h',
          maxHead: '32 M',
          maxRPM: '3500 RPM',
          maxTemp: '250°C',
          sizes: 'DN65'
        }
      },
      {
        id: 'fbcn-80-160',
        code: 'FBCN 80-160',
        name: '80-160',
        specs: {
          maxFlow: '100 m³/h',
          maxHead: '32 M',
          maxRPM: '3500 RPM',
          maxTemp: '250°C',
          sizes: 'DN80'
        }
      },
      {
        id: 'fbcn-100-200',
        code: 'FBCN 100-200',
        name: '100-200',
        specs: {
          maxFlow: '200 m³/h',
          maxHead: '50 M',
          maxRPM: '3500 RPM',
          maxTemp: '250°C',
          sizes: 'DN100'
        }
      },
      {
        id: 'fbcn-125-250',
        code: 'FBCN 125-250',
        name: '125-250',
        specs: {
          maxFlow: '400 m³/h',
          maxHead: '80 M',
          maxRPM: '3500 RPM',
          maxTemp: '250°C',
          sizes: 'DN125'
        }
      },
      {
        id: 'fbcn-150-315',
        code: 'FBCN 150-315',
        name: '150-315',
        specs: {
          maxFlow: '700 m³/h',
          maxHead: '125 M',
          maxRPM: '3500 RPM',
          maxTemp: '250°C',
          sizes: 'DN150'
        }
      }
    ]
  }
];