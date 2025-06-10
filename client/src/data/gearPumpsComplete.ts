// Complete gear pumps data with all specifications

export interface GearPumpModel {
  id: string;
  model: string;
  code: string;
  image?: string;
  specifications: {
    flowRate: string;
    maxFlow: string;
    maxRPM: string;
    rpm: string;
    maxPressure: string;
    pressure: string;
    maxViscosity: string;
    viscosity: string;
    temperature: string;
    weight: string;
    inlet: string;
    outlet: string;
  };
  technicalSpecs: {
    pt: string[];
    en: string[];
    es: string[];
  };
  optionals: {
    pt: string[];
    en: string[];
    es: string[];
  };
  materials: {
    pt: string[];
    en: string[];
    es: string[];
  };
  performance: {
    efficiency: string;
    noiseLevel: string;
    npshRequired: string;
  };
}

export interface GearPumpDiameter {
  diameter: string;
  models: GearPumpModel[];
}

export const gearPumpsComplete: GearPumpDiameter[] = [
  // Small pumps - single models
  {
    diameter: '1/8"',
    models: [{
      id: 'fbe-1-8',
      model: '1/8"',
      code: 'FBE-1/8',
      image: '/images/products/fbe-1-8.jpg',
      specifications: {
        flowRate: '5.15 L/min',
        maxFlow: '5.15 L/min',
        maxRPM: '1750 RPM',
        rpm: '1750',
        maxPressure: '22 bar',
        pressure: 'até 22 bar',
        maxViscosity: '100.000 SSU',
        viscosity: 'até 100.000 SSU',
        temperature: 'até 350°C',
        weight: '3.5 kg',
        inlet: 'Ø 1/8" BSP',
        outlet: 'Ø 1/8" BSP'
      },
      materials: {
        pt: [
          'Corpo em ferro fundido nodular',
          'Engrenagens em aço liga tratado termicamente',
          'Eixos em aço inox 304/316',
          'Buchas em bronze TM23 autolubrificante'
        ],
        en: [
          'Nodular cast iron body',
          'Heat-treated alloy steel gears',
          '304/316 stainless steel shafts',
          'TM23 self-lubricating bronze bushings'
        ],
        es: [
          'Cuerpo en hierro fundido nodular',
          'Engranajes en acero aleado tratado térmicamente',
          'Ejes en acero inoxidable 304/316',
          'Casquillos en bronce TM23 autolubricante'
        ]
      },
      performance: {
        efficiency: '85%',
        noiseLevel: '< 70 dB',
        npshRequired: '2,5 m'
      },
      technicalSpecs: {
        pt: [
          'Bocais de sucção e recalque de Ø 1/8" com rosca "BSP"',
          'Engrenagens de dentes helicoidais',
          'Vedação por gaxeta teflonada ou selo mecânico',
          'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
          'Construção em ferro fundido, aço inox ou aço carbono'
        ],
        en: [
          'Suction and discharge nozzles Ø 1/8" with BSP thread',
          'Helical gear teeth',
          'PTFE packing or mechanical seal',
          'TM23 self-lubricating bronze bushing bearings',
          'Cast iron, stainless steel or carbon steel construction'
        ],
        es: [
          'Boquillas de succión y descarga Ø 1/8" con rosca BSP',
          'Engranajes de dientes helicoidales',
          'Sellado por empaquetadura de PTFE o sello mecánico',
          'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
          'Construcción en hierro fundido, acero inoxidable o acero al carbono'
        ]
      },
      optionals: {
        pt: [
          'Válvula de alívio incorporada (retorna até 30% do produto)',
          'Conjunto moto-bomba completo'
        ],
        en: [
          'Built-in relief valve (returns up to 30% of product)',
          'Complete motor-pump assembly'
        ],
        es: [
          'Válvula de alivio incorporada (retorna hasta 30% del producto)',
          'Conjunto motor-bomba completo'
        ]
      }
    }]
  },
  {
    diameter: '1/4"',
    models: [{
      id: 'fbe-1-4',
      model: '1/4"',
      code: 'FBE-1/4',
      image: '/images/products/fbe-1-4.jpg',
      specifications: {
        flowRate: '8.90 L/min',
        maxFlow: '8.90 L/min',
        maxRPM: '1750 RPM',
        rpm: '1750',
        maxPressure: '22 bar',
        pressure: 'até 22 bar',
        maxViscosity: '100.000 SSU',
        viscosity: 'até 100.000 SSU',
        temperature: 'até 350°C',
        weight: '4.2 kg',
        inlet: 'Ø 1/4" BSP',
        outlet: 'Ø 1/4" BSP'
      },
      materials: {
        pt: [
          'Corpo em ferro fundido nodular',
          'Engrenagens em aço liga tratado termicamente',
          'Eixos em aço inox 304/316',
          'Buchas em bronze TM23 autolubrificante'
        ],
        en: [
          'Nodular cast iron body',
          'Heat-treated alloy steel gears',
          '304/316 stainless steel shafts',
          'TM23 self-lubricating bronze bushings'
        ],
        es: [
          'Cuerpo en hierro fundido nodular',
          'Engranajes en acero aleado tratado térmicamente',
          'Ejes en acero inoxidable 304/316',
          'Casquillos en bronce TM23 autolubricante'
        ]
      },
      performance: {
        efficiency: '85%',
        noiseLevel: '< 70 dB',
        npshRequired: '2,5 m'
      },
      technicalSpecs: {
        pt: [
          'Bocais de sucção e recalque de Ø 1/4" com rosca "BSP"',
          'Engrenagens de dentes helicoidais',
          'Vedação por gaxeta teflonada ou selo mecânico',
          'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
          'Construção em ferro fundido, aço inox ou aço carbono'
        ],
        en: [
          'Suction and discharge nozzles Ø 1/4" with BSP thread',
          'Helical gear teeth',
          'PTFE packing or mechanical seal',
          'TM23 self-lubricating bronze bushing bearings',
          'Cast iron, stainless steel or carbon steel construction'
        ],
        es: [
          'Boquillas de succión y descarga Ø 1/4" con rosca BSP',
          'Engranajes de dientes helicoidales',
          'Sellado por empaquetadura de PTFE o sello mecánico',
          'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
          'Construcción en hierro fundido, acero inoxidable o acero al carbono'
        ]
      },
      optionals: {
        pt: [
          'Válvula de alívio incorporada (retorna até 30% do produto)',
          'Conjunto moto-bomba completo'
        ],
        en: [
          'Built-in relief valve (returns up to 30% of product)',
          'Complete motor-pump assembly'
        ],
        es: [
          'Válvula de alivio incorporada (retorna hasta 30% del producto)',
          'Conjunto motor-bomba completo'
        ]
      }
    }]
  },
  {
    diameter: '3/8"',
    models: [{
      id: 'fbe-3-8',
      model: '3/8"',
      code: 'FBE-3/8',
      image: '/images/products/fbe-3-8.jpg',
      specifications: {
        flowRate: '14 L/min',
        maxFlow: '14 L/min',
        maxRPM: '1750 RPM',
        rpm: '1750',
        maxPressure: '22 bar',
        pressure: 'até 22 bar',
        maxViscosity: '100.000 SSU',
        viscosity: 'até 100.000 SSU',
        temperature: 'até 350°C',
        weight: '5,1 kg',
        inlet: 'Ø 3/8" BSP',
        outlet: 'Ø 3/8" BSP'
      },
      materials: {
        pt: [
          'Corpo em ferro fundido nodular',
          'Engrenagens em aço liga tratado termicamente',
          'Eixos em aço inox 304/316',
          'Buchas em bronze TM23 autolubrificante'
        ],
        en: [
          'Nodular cast iron body',
          'Heat-treated alloy steel gears',
          '304/316 stainless steel shafts',
          'TM23 self-lubricating bronze bushings'
        ],
        es: [
          'Cuerpo en hierro fundido nodular',
          'Engranajes en acero aleado tratado térmicamente',
          'Ejes en acero inoxidable 304/316',
          'Casquillos en bronce TM23 autolubricante'
        ]
      },
      performance: {
        efficiency: '85%',
        noiseLevel: '< 70 dB',
        npshRequired: '2,5 m'
      },
      technicalSpecs: {
        pt: [
          'Bocais de sucção e recalque de Ø 3/8" com rosca "BSP"',
          'Engrenagens de dentes helicoidais',
          'Vedação por gaxeta teflonada ou selo mecânico',
          'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
          'Construção em ferro fundido, aço inox ou aço carbono'
        ],
        en: [
          'Suction and discharge nozzles Ø 3/8" with BSP thread',
          'Helical gear teeth',
          'PTFE packing or mechanical seal',
          'TM23 self-lubricating bronze bushing bearings',
          'Cast iron, stainless steel or carbon steel construction'
        ],
        es: [
          'Boquillas de succión y descarga Ø 3/8" con rosca BSP',
          'Engranajes de dientes helicoidales',
          'Sellado por empaquetadura de PTFE o sello mecánico',
          'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
          'Construcción en hierro fundido, acero inoxidable o acero al carbono'
        ]
      },
      optionals: {
        pt: [
          'Válvula de alívio incorporada (retorna até 30% do produto)',
          'Conjunto moto-bomba completo'
        ],
        en: [
          'Built-in relief valve (returns up to 30% of product)',
          'Complete motor-pump assembly'
        ],
        es: [
          'Válvula de alivio incorporada (retorna hasta 30% del producto)',
          'Conjunto motor-bomba completo'
        ]
      }
    }]
  },
  {
    diameter: '1/2"',
    models: [{
      id: 'fbe-1-2',
      model: '1/2"',
      code: 'FBE-1/2',
      image: '/images/products/fbe-1-2.jpg',
      specifications: {
        flowRate: '17.70 L/min',
        maxFlow: '17.70 L/min',
        maxRPM: '1750 RPM',
        rpm: '1750',
        maxPressure: '22 bar',
        pressure: 'até 22 bar',
        maxViscosity: '100.000 SSU',
        viscosity: 'até 100.000 SSU',
        temperature: 'até 350°C',
        weight: '6.8 kg',
        inlet: 'Ø 1/2" BSP',
        outlet: 'Ø 1/2" BSP'
      },
      materials: {
        pt: [
          'Corpo em ferro fundido nodular',
          'Engrenagens em aço liga tratado termicamente',
          'Eixos em aço inox 304/316',
          'Buchas em bronze TM23 autolubrificante'
        ],
        en: [
          'Nodular cast iron body',
          'Heat-treated alloy steel gears',
          '304/316 stainless steel shafts',
          'TM23 self-lubricating bronze bushings'
        ],
        es: [
          'Cuerpo en hierro fundido nodular',
          'Engranajes en acero aleado tratado térmicamente',
          'Ejes en acero inoxidable 304/316',
          'Casquillos en bronce TM23 autolubricante'
        ]
      },
      performance: {
        efficiency: '87%',
        noiseLevel: '< 72 dB',
        npshRequired: '3 m'
      },
      technicalSpecs: {
        pt: [
          'Bocais de sucção e recalque de Ø 1/2" com rosca "BSP"',
          'Engrenagens de dentes helicoidais',
          'Vedação por gaxeta teflonada ou selo mecânico',
          'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
          'Construção em ferro fundido, aço inox ou aço carbono'
        ],
        en: [
          'Suction and discharge nozzles Ø 1/2" with BSP thread',
          'Helical gear teeth',
          'PTFE packing or mechanical seal',
          'TM23 self-lubricating bronze bushing bearings',
          'Cast iron, stainless steel or carbon steel construction'
        ],
        es: [
          'Boquillas de succión y descarga Ø 1/2" con rosca BSP',
          'Engranajes de dientes helicoidales',
          'Sellado por empaquetadura de PTFE o sello mecánico',
          'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
          'Construcción en hierro fundido, acero inoxidable o acero al carbono'
        ]
      },
      optionals: {
        pt: [
          'Válvula de alívio incorporada (retorna até 30% do produto)',
          'Conjunto moto-bomba completo'
        ],
        en: [
          'Built-in relief valve (returns up to 30% of product)',
          'Complete motor-pump assembly'
        ],
        es: [
          'Válvula de alivio incorporada (retorna hasta 30% del producto)',
          'Conjunto motor-bomba completo'
        ]
      }
    }]
  },
  {
    diameter: '3/4"',
    models: [{
      id: 'fbe-3-4',
      model: '3/4"',
      code: 'FBE-3/4',
      image: '/images/products/fbe-3-4.jpg',
      specifications: {
        flowRate: '44.40 L/min',
        maxFlow: '44.40 L/min',
        maxRPM: '1750 RPM',
        rpm: '1750',
        maxPressure: '22 bar',
        pressure: 'até 22 bar',
        maxViscosity: '100.000 SSU',
        viscosity: 'até 100.000 SSU',
        temperature: 'até 350°C',
        weight: '9.5 kg',
        inlet: 'Ø 3/4" BSP',
        outlet: 'Ø 3/4" BSP'
      },
      materials: {
        pt: [
          'Corpo em ferro fundido nodular',
          'Engrenagens em aço liga tratado termicamente',
          'Eixos em aço inox 304/316',
          'Buchas em bronze TM23 autolubrificante'
        ],
        en: [
          'Nodular cast iron body',
          'Heat-treated alloy steel gears',
          '304/316 stainless steel shafts',
          'TM23 self-lubricating bronze bushings'
        ],
        es: [
          'Cuerpo en hierro fundido nodular',
          'Engranajes en acero aleado tratado térmicamente',
          'Ejes en acero inoxidable 304/316',
          'Casquillos en bronce TM23 autolubricante'
        ]
      },
      performance: {
        efficiency: '88%',
        noiseLevel: '< 73 dB',
        npshRequired: '3,5 m'
      },
      technicalSpecs: {
        pt: [
          'Bocais de sucção e recalque de Ø 3/4" com rosca "BSP"',
          'Engrenagens de dentes helicoidais',
          'Vedação por gaxeta teflonada ou selo mecânico',
          'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
          'Construção em ferro fundido, aço inox ou aço carbono'
        ],
        en: [
          'Suction and discharge nozzles Ø 3/4" with BSP thread',
          'Helical gear teeth',
          'PTFE packing or mechanical seal',
          'TM23 self-lubricating bronze bushing bearings',
          'Cast iron, stainless steel or carbon steel construction'
        ],
        es: [
          'Boquillas de succión y descarga Ø 3/4" con rosca BSP',
          'Engranajes de dientes helicoidales',
          'Sellado por empaquetadura de PTFE o sello mecánico',
          'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
          'Construcción en hierro fundido, acero inoxidable o acero al carbono'
        ]
      },
      optionals: {
        pt: [
          'Válvula de alívio incorporada (retorna até 30% do produto)',
          'Conjunto moto-bomba completo',
          'Mancal externo'
        ],
        en: [
          'Built-in relief valve (returns up to 30% of product)',
          'Complete motor-pump assembly',
          'External bearing'
        ],
        es: [
          'Válvula de alivio incorporada (retorna hasta 30% del producto)',
          'Conjunto motor-bomba completo',
          'Cojinete externo'
        ]
      }
    }]
  },
  // 1" diameter - 4 models
  {
    diameter: '1"',
    models: [
      {
        id: 'fbe-1',
        model: '1"',
        code: 'FBE-1',
        image: '/images/products/fbe-1.jpg',
        specifications: {
          flowRate: '62 L/min',
          maxFlow: '62 L/min',
          maxRPM: '1750 RPM',
          rpm: '1750',
          maxPressure: '22 bar',
          pressure: 'até 22 bar',
          maxViscosity: '100.000 SSU',
          viscosity: 'até 100.000 SSU',
          temperature: 'até 350°C',
          weight: '12 kg',
          inlet: 'Ø 1" BSP',
          outlet: 'Ø 1" BSP'
        },
        materials: {
          pt: [
            'Corpo em ferro fundido nodular',
            'Engrenagens em aço liga tratado termicamente',
            'Eixos em aço inox 304/316',
            'Buchas em bronze TM23 autolubrificante'
          ],
          en: [
            'Nodular cast iron body',
            'Heat-treated alloy steel gears',
            '304/316 stainless steel shafts',
            'TM23 self-lubricating bronze bushings'
          ],
          es: [
            'Cuerpo en hierro fundido nodular',
            'Engranajes en acero aleado tratado térmicamente',
            'Ejes en acero inoxidable 304/316',
            'Casquillos en bronce TM23 autolubricante'
          ]
        },
        performance: {
          efficiency: '89%',
          noiseLevel: '< 74 dB',
          npshRequired: '4 m'
        },
        technicalSpecs: {
          pt: [
            'Bocais de sucção e recalque de Ø 1" com rosca "BSP"',
            'Engrenagens de dentes helicoidais',
            'Vedação por gaxeta teflonada ou selo mecânico',
            'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
            'Construção em ferro fundido, aço inox ou aço carbono'
          ],
          en: [
            'Suction and discharge nozzles Ø 1" with BSP thread',
            'Helical gear teeth',
            'PTFE packing or mechanical seal',
            'TM23 self-lubricating bronze bushing bearings',
            'Cast iron, stainless steel or carbon steel construction'
          ],
          es: [
            'Boquillas de succión y descarga Ø 1" con rosca BSP',
            'Engranajes de dientes helicoidales',
            'Sellado por empaquetadura de PTFE o sello mecánico',
            'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
            'Construcción en hierro fundido, acero inoxidable o acero al carbono'
          ]
        },
        optionals: {
          pt: [
            'Válvula de alívio incorporada (retorna até 30% do produto)',
            'Conjunto moto-bomba completo',
            'Mancal externo'
          ],
          en: [
            'Built-in relief valve (returns up to 30% of product)',
            'Complete motor-pump assembly',
            'External bearing'
          ],
          es: [
            'Válvula de alivio incorporada (retorna hasta 30% del producto)',
            'Conjunto motor-bomba completo',
            'Cojinete externo'
          ]
        }
      },
      {
        id: 'fbe-1-a',
        model: '1" A',
        code: 'FBE-1-A',
        image: '/images/products/fbe-1-a.jpg',
        specifications: {
          flowRate: '74 L/min',
          maxFlow: '74 L/min',
          maxRPM: '1750 RPM',
          rpm: '1750',
          maxPressure: '22 bar',
          pressure: 'até 22 bar',
          maxViscosity: '100.000 SSU',
          viscosity: 'até 100.000 SSU',
          temperature: 'até 350°C',
          weight: '13,5 kg',
          inlet: 'Ø 1" BSP',
          outlet: 'Ø 1" BSP'
        },
        materials: {
          pt: [
            'Corpo em ferro fundido nodular',
            'Engrenagens em aço liga tratado termicamente',
            'Eixos em aço inox 304/316',
            'Buchas em bronze TM23 autolubrificante'
          ],
          en: [
            'Nodular cast iron body',
            'Heat-treated alloy steel gears',
            '304/316 stainless steel shafts',
            'TM23 self-lubricating bronze bushings'
          ],
          es: [
            'Cuerpo en hierro fundido nodular',
            'Engranajes en acero aleado tratado térmicamente',
            'Ejes en acero inoxidable 304/316',
            'Casquillos en bronce TM23 autolubricante'
          ]
        },
        performance: {
          efficiency: '89%',
          noiseLevel: '< 74 dB',
          npshRequired: '4 m'
        },
        technicalSpecs: {
          pt: [
            'Bocais de sucção e recalque de Ø 1" com rosca "BSP"',
            'Engrenagens de dentes helicoidais',
            'Vedação por gaxeta teflonada ou selo mecânico',
            'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
            'Construção em ferro fundido, aço inox ou aço carbono'
          ],
          en: [
            'Suction and discharge nozzles Ø 1" with BSP thread',
            'Helical gear teeth',
            'PTFE packing or mechanical seal',
            'TM23 self-lubricating bronze bushing bearings',
            'Cast iron, stainless steel or carbon steel construction'
          ],
          es: [
            'Boquillas de succión y descarga Ø 1" con rosca BSP',
            'Engranajes de dientes helicoidales',
            'Sellado por empaquetadura de PTFE o sello mecánico',
            'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
            'Construcción en hierro fundido, acero inoxidable o acero al carbono'
          ]
        },
        optionals: {
          pt: [
            'Válvula de alívio incorporada (retorna até 30% do produto)',
            'Conjunto moto-bomba completo',
            'Mancal externo'
          ],
          en: [
            'Built-in relief valve (returns up to 30% of product)',
            'Complete motor-pump assembly',
            'External bearing'
          ],
          es: [
            'Válvula de alivio incorporada (retorna hasta 30% del producto)',
            'Conjunto motor-bomba completo',
            'Cojinete externo'
          ]
        }
      },
      {
        id: 'fbe-1-d',
        model: '1" D',
        code: 'FBE-1-D',
        image: '/images/products/fbe-1-d.jpg',
        specifications: {
          flowRate: '88.6 L/min',
          maxFlow: '88.6 L/min',
          maxRPM: '1750 RPM',
          rpm: '1750',
          maxPressure: '22 bar',
          pressure: 'até 22 bar',
          maxViscosity: '100.000 SSU',
          viscosity: 'até 100.000 SSU',
          temperature: 'até 350°C',
          weight: '15 kg',
          inlet: 'Ø 1" BSP',
          outlet: 'Ø 1" BSP'
        },
        materials: {
          pt: [
            'Corpo em ferro fundido nodular',
            'Engrenagens em aço liga tratado termicamente',
            'Eixos em aço inox 304/316',
            'Buchas em bronze TM23 autolubrificante'
          ],
          en: [
            'Nodular cast iron body',
            'Heat-treated alloy steel gears',
            '304/316 stainless steel shafts',
            'TM23 self-lubricating bronze bushings'
          ],
          es: [
            'Cuerpo en hierro fundido nodular',
            'Engranajes en acero aleado tratado térmicamente',
            'Ejes en acero inoxidable 304/316',
            'Casquillos en bronce TM23 autolubricante'
          ]
        },
        performance: {
          efficiency: '90%',
          noiseLevel: '< 75 dB',
          npshRequired: '4 m'
        },
        technicalSpecs: {
          pt: [
            'Bocais de sucção e recalque de Ø 1" com rosca "BSP"',
            'Engrenagens de dentes helicoidais',
            'Vedação por gaxeta teflonada ou selo mecânico',
            'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
            'Construção em ferro fundido, aço inox ou aço carbono'
          ],
          en: [
            'Suction and discharge nozzles Ø 1" with BSP thread',
            'Helical gear teeth',
            'PTFE packing or mechanical seal',
            'TM23 self-lubricating bronze bushing bearings',
            'Cast iron, stainless steel or carbon steel construction'
          ],
          es: [
            'Boquillas de succión y descarga Ø 1" con rosca BSP',
            'Engranajes de dientes helicoidales',
            'Sellado por empaquetadura de PTFE o sello mecánico',
            'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
            'Construcción en hierro fundido, acero inoxidable o acero al carbono'
          ]
        },
        optionals: {
          pt: [
            'Válvula de alívio incorporada (retorna até 30% do produto)',
            'Conjunto moto-bomba completo',
            'Mancal externo'
          ],
          en: [
            'Built-in relief valve (returns up to 30% of product)',
            'Complete motor-pump assembly',
            'External bearing'
          ],
          es: [
            'Válvula de alivio incorporada (retorna hasta 30% del producto)',
            'Conjunto motor-bomba completo',
            'Cojinete externo'
          ]
        }
      },
      {
        id: 'fbe-1-da',
        model: '1" DA',
        code: 'FBE-1-DA',
        image: '/images/products/fbe-1-da.jpg',
        specifications: {
          flowRate: '112 L/min',
          maxFlow: '112 L/min',
          maxRPM: '1750 RPM',
          rpm: '1750',
          maxPressure: '22 bar',
          pressure: 'até 22 bar',
          maxViscosity: '100.000 SSU',
          viscosity: 'até 100.000 SSU',
          temperature: 'até 350°C',
          weight: '17 kg',
          inlet: 'Ø 1" BSP',
          outlet: 'Ø 1" BSP'
        },
        materials: {
          pt: [
            'Corpo em ferro fundido nodular',
            'Engrenagens em aço liga tratado termicamente',
            'Eixos em aço inox 304/316',
            'Buchas em bronze TM23 autolubrificante'
          ],
          en: [
            'Nodular cast iron body',
            'Heat-treated alloy steel gears',
            '304/316 stainless steel shafts',
            'TM23 self-lubricating bronze bushings'
          ],
          es: [
            'Cuerpo en hierro fundido nodular',
            'Engranajes en acero aleado tratado térmicamente',
            'Ejes en acero inoxidable 304/316',
            'Casquillos en bronce TM23 autolubricante'
          ]
        },
        performance: {
          efficiency: '90%',
          noiseLevel: '< 75 dB',
          npshRequired: '4.5 m'
        },
        technicalSpecs: {
          pt: [
            'Bocais de sucção e recalque de Ø 1" com rosca "BSP"',
            'Engrenagens de dentes helicoidais',
            'Vedação por gaxeta teflonada ou selo mecânico',
            'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
            'Construção em ferro fundido, aço inox ou aço carbono'
          ],
          en: [
            'Suction and discharge nozzles Ø 1" with BSP thread',
            'Helical gear teeth',
            'PTFE packing or mechanical seal',
            'TM23 self-lubricating bronze bushing bearings',
            'Cast iron, stainless steel or carbon steel construction'
          ],
          es: [
            'Boquillas de succión y descarga Ø 1" con rosca BSP',
            'Engranajes de dientes helicoidales',
            'Sellado por empaquetadura de PTFE o sello mecánico',
            'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
            'Construcción en hierro fundido, acero inoxidable o acero al carbono'
          ]
        },
        optionals: {
          pt: [
            'Válvula de alívio incorporada (retorna até 30% do produto)',
            'Conjunto moto-bomba completo',
            'Mancal externo'
          ],
          en: [
            'Built-in relief valve (returns up to 30% of product)',
            'Complete motor-pump assembly',
            'External bearing'
          ],
          es: [
            'Válvula de alivio incorporada (retorna hasta 30% del producto)',
            'Conjunto motor-bomba completo',
            'Cojinete externo'
          ]
        }
      }
    ]
  },
  // 1.1/2" diameter - 2 models
  {
    diameter: '1.1/2"',
    models: [
      {
        id: 'fbe-1-5',
        model: '1.1/2"',
        code: 'FBE-1.1/2',
        image: '/images/products/fbe-1-5.jpg',
        specifications: {
          flowRate: '150 L/min',
          maxFlow: '150 L/min',
          maxRPM: '1750 RPM',
          rpm: '1750',
          maxPressure: '14 bar',
          pressure: 'até 14 bar',
          maxViscosity: '100.000 SSU',
          viscosity: 'até 100.000 SSU',
          temperature: 'até 350°C',
          weight: '22 kg',
          inlet: 'Ø 1.1/2" flange ANSI B16.1',
          outlet: 'Ø 1.1/2" flange ANSI B16.1'
        },
        materials: {
          pt: [
            'Corpo em ferro fundido nodular',
            'Engrenagens em aço liga tratado termicamente',
            'Eixos em aço inox 304/316',
            'Buchas em bronze TM23 autolubrificante'
          ],
          en: [
            'Nodular cast iron body',
            'Heat-treated alloy steel gears',
            '304/316 stainless steel shafts',
            'TM23 self-lubricating bronze bushings'
          ],
          es: [
            'Cuerpo en hierro fundido nodular',
            'Engranajes en acero aleado tratado térmicamente',
            'Ejes en acero inoxidable 304/316',
            'Casquillos en bronce TM23 autolubricante'
          ]
        },
        performance: {
          efficiency: '90%',
          noiseLevel: '< 77 dB',
          npshRequired: '5 m'
        },
        technicalSpecs: {
          pt: [
            'Bocais de sucção e recalque de Ø 1.1/2" com flange ANSI B16.1',
            'Engrenagens de dentes helicoidais',
            'Vedação por gaxeta teflonada ou selo mecânico',
            'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
            'Construção em ferro fundido, aço inox ou aço carbono'
          ],
          en: [
            'Suction and discharge nozzles Ø 1.1/2" with ANSI B16.1 flange',
            'Helical gear teeth',
            'PTFE packing or mechanical seal',
            'TM23 self-lubricating bronze bushing bearings',
            'Cast iron, stainless steel or carbon steel construction'
          ],
          es: [
            'Boquillas de succión y descarga Ø 1.1/2" con brida ANSI B16.1',
            'Engranajes de dientes helicoidales',
            'Sellado por empaquetadura de PTFE o sello mecánico',
            'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
            'Construcción en hierro fundido, acero inoxidable o acero al carbono'
          ]
        },
        optionals: {
          pt: [
            'Válvula de alívio incorporada (retorna até 30% do produto)',
            'Câmara de aquecimento',
            'Conjunto moto-bomba completo',
            'Mancal externo'
          ],
          en: [
            'Built-in relief valve (returns up to 30% of product)',
            'Heating chamber',
            'Complete motor-pump assembly',
            'External bearing'
          ],
          es: [
            'Válvula de alivio incorporada (retorna hasta 30% del producto)',
            'Cámara de calentamiento',
            'Conjunto motor-bomba completo',
            'Cojinete externo'
          ]
        }
      },
      {
        id: 'fbe-1-5-a',
        model: '1.1/2" A',
        code: 'FBE-1.1/2-A',
        image: '/images/products/fbe-1-5-a.jpg',
        specifications: {
          flowRate: '200 L/min',
          maxFlow: '200 L/min',
          maxRPM: '1750 RPM',
          rpm: '1750',
          maxPressure: '14 bar',
          pressure: 'até 14 bar',
          maxViscosity: '100.000 SSU',
          viscosity: 'até 100.000 SSU',
          temperature: 'até 350°C',
          weight: '25 kg',
          inlet: 'Ø 1.1/2" flange ANSI B16.1',
          outlet: 'Ø 1.1/2" flange ANSI B16.1'
        },
        materials: {
          pt: [
            'Corpo em ferro fundido nodular',
            'Engrenagens em aço liga tratado termicamente',
            'Eixos em aço inox 304/316',
            'Buchas em bronze TM23 autolubrificante'
          ],
          en: [
            'Nodular cast iron body',
            'Heat-treated alloy steel gears',
            '304/316 stainless steel shafts',
            'TM23 self-lubricating bronze bushings'
          ],
          es: [
            'Cuerpo en hierro fundido nodular',
            'Engranajes en acero aleado tratado térmicamente',
            'Ejes en acero inoxidable 304/316',
            'Casquillos en bronce TM23 autolubricante'
          ]
        },
        performance: {
          efficiency: '90%',
          noiseLevel: '< 77 dB',
          npshRequired: '5 m'
        },
        technicalSpecs: {
          pt: [
            'Bocais de sucção e recalque de Ø 1.1/2" com flange ANSI B16.1',
            'Engrenagens de dentes helicoidais',
            'Vedação por gaxeta teflonada ou selo mecânico',
            'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
            'Construção em ferro fundido, aço inox ou aço carbono'
          ],
          en: [
            'Suction and discharge nozzles Ø 1.1/2" with ANSI B16.1 flange',
            'Helical gear teeth',
            'PTFE packing or mechanical seal',
            'TM23 self-lubricating bronze bushing bearings',
            'Cast iron, stainless steel or carbon steel construction'
          ],
          es: [
            'Boquillas de succión y descarga Ø 1.1/2" con brida ANSI B16.1',
            'Engranajes de dientes helicoidales',
            'Sellado por empaquetadura de PTFE o sello mecánico',
            'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
            'Construcción en hierro fundido, acero inoxidable o acero al carbono'
          ]
        },
        optionals: {
          pt: [
            'Válvula de alívio incorporada (retorna até 30% do produto)',
            'Câmara de aquecimento',
            'Conjunto moto-bomba completo',
            'Mancal externo'
          ],
          en: [
            'Built-in relief valve (returns up to 30% of product)',
            'Heating chamber',
            'Complete motor-pump assembly',
            'External bearing'
          ],
          es: [
            'Válvula de alivio incorporada (retorna hasta 30% del producto)',
            'Cámara de calentamiento',
            'Conjunto motor-bomba completo',
            'Cojinete externo'
          ]
        }
      }
    ]
  },
  // 2" diameter - 2 models
  {
    diameter: '2"',
    models: [
      {
        id: 'fbe-2',
        model: '2"',
        code: 'FBE-2',
        image: '/images/products/fbe-2.jpg',
        specifications: {
          flowRate: '300 L/min',
          maxFlow: '300 L/min',
          maxRPM: '1750 RPM',
          rpm: '1750',
          maxPressure: '14 bar',
          pressure: 'até 14 bar',
          maxViscosity: '100.000 SSU',
          viscosity: 'até 100.000 SSU',
          temperature: 'até 350°C',
          weight: '35 kg',
          inlet: 'Ø 2" flange ANSI B16.1',
          outlet: 'Ø 2" flange ANSI B16.1'
        },
        materials: {
          pt: [
            'Corpo em ferro fundido nodular',
            'Engrenagens em aço liga tratado termicamente',
            'Eixos em aço inox 304/316',
            'Buchas em bronze TM23 autolubrificante'
          ],
          en: [
            'Nodular cast iron body',
            'Heat-treated alloy steel gears',
            '304/316 stainless steel shafts',
            'TM23 self-lubricating bronze bushings'
          ],
          es: [
            'Cuerpo en hierro fundido nodular',
            'Engranajes en acero aleado tratado térmicamente',
            'Ejes en acero inoxidable 304/316',
            'Casquillos en bronce TM23 autolubricante'
          ]
        },
        performance: {
          efficiency: '91%',
          noiseLevel: '< 78 dB',
          npshRequired: '5.5 m'
        },
        technicalSpecs: {
          pt: [
            'Bocais de sucção e recalque de Ø 2" com flange ANSI B16.1',
            'Engrenagens de dentes helicoidais',
            'Vedação por gaxeta teflonada ou selo mecânico',
            'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
            'Construção em ferro fundido, aço inox ou aço carbono'
          ],
          en: [
            'Suction and discharge nozzles Ø 2" with ANSI B16.1 flange',
            'Helical gear teeth',
            'PTFE packing or mechanical seal',
            'TM23 self-lubricating bronze bushing bearings',
            'Cast iron, stainless steel or carbon steel construction'
          ],
          es: [
            'Boquillas de succión y descarga Ø 2" con brida ANSI B16.1',
            'Engranajes de dientes helicoidales',
            'Sellado por empaquetadura de PTFE o sello mecánico',
            'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
            'Construcción en hierro fundido, acero inoxidable o acero al carbono'
          ]
        },
        optionals: {
          pt: [
            'Válvula de alívio incorporada (retorna até 30% do produto)',
            'Câmara de aquecimento',
            'Conjunto moto-bomba completo',
            'Mancal externo'
          ],
          en: [
            'Built-in relief valve (returns up to 30% of product)',
            'Heating chamber',
            'Complete motor-pump assembly',
            'External bearing'
          ],
          es: [
            'Válvula de alivio incorporada (retorna hasta 30% del producto)',
            'Cámara de calentamiento',
            'Conjunto motor-bomba completo',
            'Cojinete externo'
          ]
        }
      },
      {
        id: 'fbe-2-a',
        model: '2" A',
        code: 'FBE-2-A',
        image: '/images/products/fbe-2-a.jpg',
        specifications: {
          flowRate: '420 L/min',
          maxFlow: '420 L/min',
          maxRPM: '1750 RPM',
          rpm: '1750',
          maxPressure: '14 bar',
          pressure: 'até 14 bar',
          maxViscosity: '100.000 SSU',
          viscosity: 'até 100.000 SSU',
          temperature: 'até 350°C',
          weight: '40 kg',
          inlet: 'Ø 2" flange ANSI B16.1',
          outlet: 'Ø 2" flange ANSI B16.1'
        },
        materials: {
          pt: [
            'Corpo em ferro fundido nodular',
            'Engrenagens em aço liga tratado termicamente',
            'Eixos em aço inox 304/316',
            'Buchas em bronze TM23 autolubrificante'
          ],
          en: [
            'Nodular cast iron body',
            'Heat-treated alloy steel gears',
            '304/316 stainless steel shafts',
            'TM23 self-lubricating bronze bushings'
          ],
          es: [
            'Cuerpo en hierro fundido nodular',
            'Engranajes en acero aleado tratado térmicamente',
            'Ejes en acero inoxidable 304/316',
            'Casquillos en bronce TM23 autolubricante'
          ]
        },
        performance: {
          efficiency: '91%',
          noiseLevel: '< 78 dB',
          npshRequired: '5.5 m'
        },
        technicalSpecs: {
          pt: [
            'Bocais de sucção e recalque de Ø 2" com flange ANSI B16.1',
            'Engrenagens de dentes helicoidais',
            'Vedação por gaxeta teflonada ou selo mecânico',
            'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
            'Construção em ferro fundido, aço inox ou aço carbono'
          ],
          en: [
            'Suction and discharge nozzles Ø 2" with ANSI B16.1 flange',
            'Helical gear teeth',
            'PTFE packing or mechanical seal',
            'TM23 self-lubricating bronze bushing bearings',
            'Cast iron, stainless steel or carbon steel construction'
          ],
          es: [
            'Boquillas de succión y descarga Ø 2" con brida ANSI B16.1',
            'Engranajes de dientes helicoidales',
            'Sellado por empaquetadura de PTFE o sello mecánico',
            'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
            'Construcción en hierro fundido, acero inoxidable o acero al carbono'
          ]
        },
        optionals: {
          pt: [
            'Válvula de alívio incorporada (retorna até 30% do produto)',
            'Câmara de aquecimento',
            'Conjunto moto-bomba completo',
            'Mancal externo'
          ],
          en: [
            'Built-in relief valve (returns up to 30% of product)',
            'Heating chamber',
            'Complete motor-pump assembly',
            'External bearing'
          ],
          es: [
            'Válvula de alivio incorporada (retorna hasta 30% del producto)',
            'Cámara de calentamiento',
            'Conjunto motor-bomba completo',
            'Cojinete externo'
          ]
        }
      }
    ]
  },
  // 3" diameter - 2 models
  {
    diameter: '3"',
    models: [
      {
        id: 'fbe-3',
        model: '3"',
        code: 'FBE-3',
        image: '/images/products/fbe-3.jpg',
        specifications: {
          flowRate: '500 L/min',
          maxFlow: '500 L/min',
          maxRPM: '1150 RPM',
          rpm: '1150',
          maxPressure: '12 bar',
          pressure: 'até 12 bar',
          maxViscosity: '100.000 SSU',
          viscosity: 'até 100.000 SSU',
          temperature: 'até 350°C',
          weight: '55 kg',
          inlet: 'Ø 3" flange ANSI B16.1',
          outlet: 'Ø 3" flange ANSI B16.1'
        },
        materials: {
          pt: [
            'Corpo em ferro fundido nodular',
            'Engrenagens em aço liga tratado termicamente',
            'Eixos em aço inox 304/316',
            'Buchas em bronze TM23 autolubrificante'
          ],
          en: [
            'Nodular cast iron body',
            'Heat-treated alloy steel gears',
            '304/316 stainless steel shafts',
            'TM23 self-lubricating bronze bushings'
          ],
          es: [
            'Cuerpo en hierro fundido nodular',
            'Engranajes en acero aleado tratado térmicamente',
            'Ejes en acero inoxidable 304/316',
            'Casquillos en bronce TM23 autolubricante'
          ]
        },
        performance: {
          efficiency: '92%',
          noiseLevel: '< 80 dB',
          npshRequired: '6 m'
        },
        technicalSpecs: {
          pt: [
            'Bocais de sucção e recalque de Ø 3" com flange ANSI B16.1',
            'Engrenagens de dentes helicoidais',
            'Vedação por gaxeta teflonada ou selo mecânico',
            'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
            'Construção em ferro fundido, aço inox ou aço carbono'
          ],
          en: [
            'Suction and discharge nozzles Ø 3" with ANSI B16.1 flange',
            'Helical gear teeth',
            'PTFE packing or mechanical seal',
            'TM23 self-lubricating bronze bushing bearings',
            'Cast iron, stainless steel or carbon steel construction'
          ],
          es: [
            'Boquillas de succión y descarga Ø 3" con brida ANSI B16.1',
            'Engranajes de dientes helicoidales',
            'Sellado por empaquetadura de PTFE o sello mecánico',
            'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
            'Construcción en hierro fundido, acero inoxidable o acero al carbono'
          ]
        },
        optionals: {
          pt: [
            'Válvula de alívio incorporada (retorna até 30% do produto)',
            'Câmara de aquecimento',
            'Conjunto moto-bomba completo',
            'Mancal externo'
          ],
          en: [
            'Built-in relief valve (returns up to 30% of product)',
            'Heating chamber',
            'Complete motor-pump assembly',
            'External bearing'
          ],
          es: [
            'Válvula de alivio incorporada (retorna hasta 30% del producto)',
            'Cámara de calentamiento',
            'Conjunto motor-bomba completo',
            'Cojinete externo'
          ]
        }
      },
      {
        id: 'fbe-3-m9',
        model: '3" M9',
        code: 'FBE-3-M9',
        image: '/images/products/fbe-3-m9.jpg',
        specifications: {
          flowRate: '600 L/min',
          maxFlow: '600 L/min',
          maxRPM: '1150 RPM',
          rpm: '1150',
          maxPressure: '8 bar',
          pressure: 'até 8 bar',
          maxViscosity: '100.000 SSU',
          viscosity: 'até 100.000 SSU',
          temperature: 'até 350°C',
          weight: '60 kg',
          inlet: 'Ø 3" flange ANSI B16.1',
          outlet: 'Ø 3" flange ANSI B16.1'
        },
        materials: {
          pt: [
            'Corpo em ferro fundido nodular',
            'Engrenagens em aço liga tratado termicamente',
            'Eixos em aço inox 304/316',
            'Buchas em bronze TM23 autolubrificante'
          ],
          en: [
            'Nodular cast iron body',
            'Heat-treated alloy steel gears',
            '304/316 stainless steel shafts',
            'TM23 self-lubricating bronze bushings'
          ],
          es: [
            'Cuerpo en hierro fundido nodular',
            'Engranajes en acero aleado tratado térmicamente',
            'Ejes en acero inoxidable 304/316',
            'Casquillos en bronce TM23 autolubricante'
          ]
        },
        performance: {
          efficiency: '92%',
          noiseLevel: '< 80 dB',
          npshRequired: '6 m'
        },
        technicalSpecs: {
          pt: [
            'Bocais de sucção e recalque de Ø 3" com flange ANSI B16.1',
            'Engrenagens de dentes helicoidais',
            'Vedação por gaxeta teflonada ou selo mecânico',
            'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
            'Construção em ferro fundido, aço inox ou aço carbono'
          ],
          en: [
            'Suction and discharge nozzles Ø 3" with ANSI B16.1 flange',
            'Helical gear teeth',
            'PTFE packing or mechanical seal',
            'TM23 self-lubricating bronze bushing bearings',
            'Cast iron, stainless steel or carbon steel construction'
          ],
          es: [
            'Boquillas de succión y descarga Ø 3" con brida ANSI B16.1',
            'Engranajes de dientes helicoidales',
            'Sellado por empaquetadura de PTFE o sello mecánico',
            'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
            'Construcción en hierro fundido, acero inoxidable o acero al carbono'
          ]
        },
        optionals: {
          pt: [
            'Válvula de alívio incorporada (retorna até 30% do produto)',
            'Câmara de aquecimento',
            'Conjunto moto-bomba completo',
            'Mancal externo'
          ],
          en: [
            'Built-in relief valve (returns up to 30% of product)',
            'Heating chamber',
            'Complete motor-pump assembly',
            'External bearing'
          ],
          es: [
            'Válvula de alivio incorporada (retorna hasta 30% del producto)',
            'Cámara de calentamiento',
            'Conjunto motor-bomba completo',
            'Cojinete externo'
          ]
        }
      }
    ]
  },
  // 4" diameter - 3 models
  {
    diameter: '4"',
    models: [
      {
        id: 'fbe-4-m6',
        model: '4" M6',
        code: 'FBE-4-M6',
        image: '/images/products/fbe-4-m6.jpg',
        specifications: {
          flowRate: '650 L/min',
          maxFlow: '650 L/min',
          maxRPM: '1150 RPM',
          rpm: '1150',
          maxPressure: '8 bar',
          pressure: 'até 8 bar',
          maxViscosity: '100.000 SSU',
          viscosity: 'até 100.000 SSU',
          temperature: 'até 350°C',
          weight: '75 kg',
          inlet: 'Ø 4" flange ANSI B16.1',
          outlet: 'Ø 4" flange ANSI B16.1'
        },
        materials: {
          pt: [
            'Corpo em ferro fundido nodular',
            'Engrenagens em aço liga tratado termicamente',
            'Eixos em aço inox 304/316',
            'Buchas em bronze TM23 autolubrificante'
          ],
          en: [
            'Nodular cast iron body',
            'Heat-treated alloy steel gears',
            '304/316 stainless steel shafts',
            'TM23 self-lubricating bronze bushings'
          ],
          es: [
            'Cuerpo en hierro fundido nodular',
            'Engranajes en acero aleado tratado térmicamente',
            'Ejes en acero inoxidable 304/316',
            'Casquillos en bronce TM23 autolubricante'
          ]
        },
        performance: {
          efficiency: '93%',
          noiseLevel: '< 82 dB',
          npshRequired: '6.5 m'
        },
        technicalSpecs: {
          pt: [
            'Bocais de sucção e recalque de Ø 4" com flange ANSI B16.1',
            'Engrenagens de dentes helicoidais',
            'Vedação por gaxeta teflonada ou selo mecânico',
            'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
            'Construção em ferro fundido, aço inox ou aço carbono'
          ],
          en: [
            'Suction and discharge nozzles Ø 4" with ANSI B16.1 flange',
            'Helical gear teeth',
            'PTFE packing or mechanical seal',
            'TM23 self-lubricating bronze bushing bearings',
            'Cast iron, stainless steel or carbon steel construction'
          ],
          es: [
            'Boquillas de succión y descarga Ø 4" con brida ANSI B16.1',
            'Engranajes de dientes helicoidales',
            'Sellado por empaquetadura de PTFE o sello mecánico',
            'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
            'Construcción en hierro fundido, acero inoxidable o acero al carbono'
          ]
        },
        optionals: {
          pt: [
            'Válvula de alívio incorporada (retorna até 30% do produto)',
            'Câmara de aquecimento',
            'Conjunto moto-bomba completo',
            'Mancal externo'
          ],
          en: [
            'Built-in relief valve (returns up to 30% of product)',
            'Heating chamber',
            'Complete motor-pump assembly',
            'External bearing'
          ],
          es: [
            'Válvula de alivio incorporada (retorna hasta 30% del producto)',
            'Cámara de calentamiento',
            'Conjunto motor-bomba completo',
            'Cojinete externo'
          ]
        }
      },
      {
        id: 'fbe-4-m8',
        model: '4" M8',
        code: 'FBE-4-M8',
        image: '/images/products/fbe-4-m8.jpg',
        specifications: {
          flowRate: '1000 L/min',
          maxFlow: '1000 L/min',
          maxRPM: '1150 RPM',
          rpm: '1150',
          maxPressure: '8 bar',
          pressure: 'até 8 bar',
          maxViscosity: '100.000 SSU',
          viscosity: 'até 100.000 SSU',
          temperature: 'até 350°C',
          weight: '85 kg',
          inlet: 'Ø 4" flange ANSI B16.1',
          outlet: 'Ø 4" flange ANSI B16.1'
        },
        materials: {
          pt: [
            'Corpo em ferro fundido nodular',
            'Engrenagens em aço liga tratado termicamente',
            'Eixos em aço inox 304/316',
            'Buchas em bronze TM23 autolubrificante'
          ],
          en: [
            'Nodular cast iron body',
            'Heat-treated alloy steel gears',
            '304/316 stainless steel shafts',
            'TM23 self-lubricating bronze bushings'
          ],
          es: [
            'Cuerpo en hierro fundido nodular',
            'Engranajes en acero aleado tratado térmicamente',
            'Ejes en acero inoxidable 304/316',
            'Casquillos en bronce TM23 autolubricante'
          ]
        },
        performance: {
          efficiency: '93%',
          noiseLevel: '< 82 dB',
          npshRequired: '6.5 m'
        },
        technicalSpecs: {
          pt: [
            'Bocais de sucção e recalque de Ø 4" com flange ANSI B16.1',
            'Engrenagens de dentes helicoidais',
            'Vedação por gaxeta teflonada ou selo mecânico',
            'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
            'Construção em ferro fundido, aço inox ou aço carbono'
          ],
          en: [
            'Suction and discharge nozzles Ø 4" with ANSI B16.1 flange',
            'Helical gear teeth',
            'PTFE packing or mechanical seal',
            'TM23 self-lubricating bronze bushing bearings',
            'Cast iron, stainless steel or carbon steel construction'
          ],
          es: [
            'Boquillas de succión y descarga Ø 4" con brida ANSI B16.1',
            'Engranajes de dientes helicoidales',
            'Sellado por empaquetadura de PTFE o sello mecánico',
            'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
            'Construcción en hierro fundido, acero inoxidable o acero al carbono'
          ]
        },
        optionals: {
          pt: [
            'Válvula de alívio incorporada (retorna até 30% do produto)',
            'Câmara de aquecimento',
            'Conjunto moto-bomba completo',
            'Mancal externo'
          ],
          en: [
            'Built-in relief valve (returns up to 30% of product)',
            'Heating chamber',
            'Complete motor-pump assembly',
            'External bearing'
          ],
          es: [
            'Válvula de alivio incorporada (retorna hasta 30% del producto)',
            'Cámara de calentamiento',
            'Conjunto motor-bomba completo',
            'Cojinete externo'
          ]
        }
      },
      {
        id: 'fbe-4-m12',
        model: '4" M12',
        code: 'FBE-4-M12',
        image: '/images/products/fbe-4-m12.jpg',
        specifications: {
          flowRate: '1350 L/min',
          maxFlow: '1350 L/min',
          maxRPM: '1150 RPM',
          rpm: '1150',
          maxPressure: '6 bar',
          pressure: 'até 6 bar',
          maxViscosity: '100.000 SSU',
          viscosity: 'até 100.000 SSU',
          temperature: 'até 350°C',
          weight: '95 kg',
          inlet: 'Ø 4" flange ANSI B16.1',
          outlet: 'Ø 4" flange ANSI B16.1'
        },
        materials: {
          pt: [
            'Corpo em ferro fundido nodular',
            'Engrenagens em aço liga tratado termicamente',
            'Eixos em aço inox 304/316',
            'Buchas em bronze TM23 autolubrificante'
          ],
          en: [
            'Nodular cast iron body',
            'Heat-treated alloy steel gears',
            '304/316 stainless steel shafts',
            'TM23 self-lubricating bronze bushings'
          ],
          es: [
            'Cuerpo en hierro fundido nodular',
            'Engranajes en acero aleado tratado térmicamente',
            'Ejes en acero inoxidable 304/316',
            'Casquillos en bronce TM23 autolubricante'
          ]
        },
        performance: {
          efficiency: '93%',
          noiseLevel: '< 82 dB',
          npshRequired: '6.5 m'
        },
        technicalSpecs: {
          pt: [
            'Bocais de sucção e recalque de Ø 4" com flange ANSI B16.1',
            'Engrenagens de dentes helicoidais',
            'Vedação por gaxeta teflonada ou selo mecânico',
            'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
            'Construção em ferro fundido, aço inox ou aço carbono'
          ],
          en: [
            'Suction and discharge nozzles Ø 4" with ANSI B16.1 flange',
            'Helical gear teeth',
            'PTFE packing or mechanical seal',
            'TM23 self-lubricating bronze bushing bearings',
            'Cast iron, stainless steel or carbon steel construction'
          ],
          es: [
            'Boquillas de succión y descarga Ø 4" con brida ANSI B16.1',
            'Engranajes de dientes helicoidales',
            'Sellado por empaquetadura de PTFE o sello mecánico',
            'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
            'Construcción en hierro fundido, acero inoxidable o acero al carbono'
          ]
        },
        optionals: {
          pt: [
            'Válvula de alívio incorporada (retorna até 30% do produto)',
            'Câmara de aquecimento',
            'Conjunto moto-bomba completo',
            'Mancal externo'
          ],
          en: [
            'Built-in relief valve (returns up to 30% of product)',
            'Heating chamber',
            'Complete motor-pump assembly',
            'External bearing'
          ],
          es: [
            'Válvula de alivio incorporada (retorna hasta 30% del producto)',
            'Cámara de calentamiento',
            'Conjunto motor-bomba completo',
            'Cojinete externo'
          ]
        }
      }
    ]
  }
];

// FBE Series General Features
export const fbeSeriesFeatures = {
  pt: [
    'Engrenagens com dentes helicoidais para operação silenciosa',
    'Construção em ferro fundido, aço inox ou aço carbono',
    'Vedação por gaxeta teflonada ou selo mecânico',
    'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
    'Temperatura de operação até 350°C',
    'Pressão máxima até 22 bar',
    'Viscosidade até 100.000 SSU'
  ],
  en: [
    'Helical gear teeth for quiet operation',
    'Cast iron, stainless steel or carbon steel construction',
    'PTFE packing or mechanical seal',
    'TM23 self-lubricating bronze bushing bearings',
    'Operating temperature up to 350°C',
    'Maximum pressure up to 22 bar',
    'Viscosity up to 100,000 SSU'
  ],
  es: [
    'Engranajes de dientes helicoidales para operación silenciosa',
    'Construcción en hierro fundido, acero inoxidable o acero al carbono',
    'Sellado por empaquetadura de PTFE o sello mecánico',
    'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
    'Temperatura de operación hasta 350°C',
    'Presión máxima hasta 22 bar',
    'Viscosidad hasta 100.000 SSU'
  ]
};

// FBE Applications
export const fbeApplications = {
  pt: [
    'Transferência de óleos lubrificantes e combustíveis',
    'Bombeamento de fluidos viscosos',
    'Sistemas hidráulicos de alta pressão',
    'Processos químicos e petroquímicos',
    'Indústria alimentícia e farmacêutica',
    'Sistemas de aquecimento e refrigeração',
    'Aplicações marítimas e offshore'
  ],
  en: [
    'Transfer of lubricating oils and fuels',
    'Pumping of viscous fluids',
    'High pressure hydraulic systems',
    'Chemical and petrochemical processes',
    'Food and pharmaceutical industry',
    'Heating and cooling systems',
    'Marine and offshore applications'
  ],
  es: [
    'Transferencia de aceites lubricantes y combustibles',
    'Bombeo de fluidos viscosos',
    'Sistemas hidráulicos de alta presión',
    'Procesos químicos y petroquímicos',
    'Industria alimentaria y farmacéutica',
    'Sistemas de calefacción y refrigeración',
    'Aplicaciones marinas y offshore'
  ]
};