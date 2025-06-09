// Detailed FBE Gear Pumps Specifications Data

export interface FBEDetailedModel {
  id: string;
  diameter: string;
  model: string;
  maxFlow: string;
  maxRPM: string;
  maxPressure: string;
  maxViscosity: string;
  specifications: {
    pt: {
      connections: string;
      gears: string;
      sealing: string;
      bearings: string;
      construction: string;
    };
    en: {
      connections: string;
      gears: string;
      sealing: string;
      bearings: string;
      construction: string;
    };
    es: {
      connections: string;
      gears: string;
      sealing: string;
      bearings: string;
      construction: string;
    };
  };
  optionals: {
    pt: string[];
    en: string[];
    es: string[];
  };
}

export const fbeDetailedSpecs: Record<string, FBEDetailedModel[]> = {
  '1/8"': [{
    id: 'fbe-18',
    diameter: '1/8"',
    model: 'FBE 1/8"',
    maxFlow: '5,15 l/min',
    maxRPM: '1750 RPM',
    maxPressure: '22 bar',
    maxViscosity: '100.000 SSU',
    specifications: {
      pt: {
        connections: 'Bocais de sucção e recalque de Ø 1/8" com rosca "BSP"',
        gears: 'Engrenagens de dentes helicoidais',
        sealing: 'Vedação por gaxeta teflonada ou selo mecânico',
        bearings: 'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
        construction: 'Construção em ferro fundido, aço inox ou aço carbono'
      },
      en: {
        connections: 'Suction and discharge nozzles Ø 1/8" with BSP thread',
        gears: 'Helical gear teeth',
        sealing: 'PTFE packing or mechanical seal',
        bearings: 'Sliding bearings in self-lubricating TM23 bronze bushings',
        construction: 'Cast iron, stainless steel or carbon steel construction'
      },
      es: {
        connections: 'Boquillas de succión y descarga Ø 1/8" con rosca BSP',
        gears: 'Engranajes de dientes helicoidales',
        sealing: 'Sellado por empaquetadura de PTFE o sello mecánico',
        bearings: 'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
        construction: 'Construcción en hierro fundido, acero inoxidable o acero al carbono'
      }
    },
    optionals: {
      pt: ['Válvula de alívio incorporada (retorna até 30% do produto)', 'Conjunto moto-bomba completo'],
      en: ['Built-in relief valve (returns up to 30% of product)', 'Complete motor-pump set'],
      es: ['Válvula de alivio incorporada (retorna hasta 30% del producto)', 'Conjunto motor-bomba completo']
    }
  }],
  
  '1/4"': [{
    id: 'fbe-14',
    diameter: '1/4"',
    model: 'FBE 1/4"',
    maxFlow: '8,90 l/min',
    maxRPM: '1750 RPM',
    maxPressure: '22 bar',
    maxViscosity: '100.000 SSU',
    specifications: {
      pt: {
        connections: 'Bocais de sucção e recalque de Ø 1/4" com rosca "BSP"',
        gears: 'Engrenagens de dentes helicoidais',
        sealing: 'Vedação por gaxeta teflonada ou selo mecânico',
        bearings: 'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
        construction: 'Construção em ferro fundido, aço inox ou aço carbono'
      },
      en: {
        connections: 'Suction and discharge nozzles Ø 1/4" with BSP thread',
        gears: 'Helical gear teeth',
        sealing: 'PTFE packing or mechanical seal',
        bearings: 'Sliding bearings in self-lubricating TM23 bronze bushings',
        construction: 'Cast iron, stainless steel or carbon steel construction'
      },
      es: {
        connections: 'Boquillas de succión y descarga Ø 1/4" con rosca BSP',
        gears: 'Engranajes de dientes helicoidales',
        sealing: 'Sellado por empaquetadura de PTFE o sello mecánico',
        bearings: 'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
        construction: 'Construcción en hierro fundido, acero inoxidable o acero al carbono'
      }
    },
    optionals: {
      pt: ['Válvula de alívio incorporada (retorna até 30% do produto)', 'Conjunto moto-bomba completo'],
      en: ['Built-in relief valve (returns up to 30% of product)', 'Complete motor-pump set'],
      es: ['Válvula de alivio incorporada (retorna hasta 30% del producto)', 'Conjunto motor-bomba completo']
    }
  }],
  
  '3/8"': [{
    id: 'fbe-38',
    diameter: '3/8"',
    model: 'FBE 3/8"',
    maxFlow: '14 l/min',
    maxRPM: '1750 RPM',
    maxPressure: '22 bar',
    maxViscosity: '100.000 SSU',
    specifications: {
      pt: {
        connections: 'Bocais de sucção e recalque de Ø 3/8" com rosca "BSP"',
        gears: 'Engrenagens de dentes helicoidais',
        sealing: 'Vedação por gaxeta teflonada ou selo mecânico',
        bearings: 'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
        construction: 'Construção em ferro fundido, aço inox ou aço carbono'
      },
      en: {
        connections: 'Suction and discharge nozzles Ø 3/8" with BSP thread',
        gears: 'Helical gear teeth',
        sealing: 'PTFE packing or mechanical seal',
        bearings: 'Sliding bearings in self-lubricating TM23 bronze bushings',
        construction: 'Cast iron, stainless steel or carbon steel construction'
      },
      es: {
        connections: 'Boquillas de succión y descarga Ø 3/8" con rosca BSP',
        gears: 'Engranajes de dientes helicoidales',
        sealing: 'Sellado por empaquetadura de PTFE o sello mecánico',
        bearings: 'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
        construction: 'Construcción en hierro fundido, acero inoxidable o acero al carbono'
      }
    },
    optionals: {
      pt: ['Válvula de alívio incorporada (retorna até 30% do produto)', 'Conjunto moto-bomba completo'],
      en: ['Built-in relief valve (returns up to 30% of product)', 'Complete motor-pump set'],
      es: ['Válvula de alivio incorporada (retorna hasta 30% del producto)', 'Conjunto motor-bomba completo']
    }
  }],
  
  '1/2"': [{
    id: 'fbe-12',
    diameter: '1/2"',
    model: 'FBE 1/2"',
    maxFlow: '17,70 l/min',
    maxRPM: '1750 RPM',
    maxPressure: '22 bar',
    maxViscosity: '100.000 SSU',
    specifications: {
      pt: {
        connections: 'Bocais de sucção e recalque de Ø 1/2" com rosca "BSP"',
        gears: 'Engrenagens de dentes helicoidais',
        sealing: 'Vedação por gaxeta teflonada ou selo mecânico',
        bearings: 'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
        construction: 'Construção em ferro fundido, aço inox ou aço carbono'
      },
      en: {
        connections: 'Suction and discharge nozzles Ø 1/2" with BSP thread',
        gears: 'Helical gear teeth',
        sealing: 'PTFE packing or mechanical seal',
        bearings: 'Sliding bearings in self-lubricating TM23 bronze bushings',
        construction: 'Cast iron, stainless steel or carbon steel construction'
      },
      es: {
        connections: 'Boquillas de succión y descarga Ø 1/2" con rosca BSP',
        gears: 'Engranajes de dientes helicoidales',
        sealing: 'Sellado por empaquetadura de PTFE o sello mecánico',
        bearings: 'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
        construction: 'Construcción en hierro fundido, acero inoxidable o acero al carbono'
      }
    },
    optionals: {
      pt: ['Válvula de alívio incorporada (retorna até 30% do produto)', 'Conjunto moto-bomba completo'],
      en: ['Built-in relief valve (returns up to 30% of product)', 'Complete motor-pump set'],
      es: ['Válvula de alivio incorporada (retorna hasta 30% del producto)', 'Conjunto motor-bomba completo']
    }
  }],
  
  '3/4"': [{
    id: 'fbe-34',
    diameter: '3/4"',
    model: 'FBE 3/4"',
    maxFlow: '44,40 l/min',
    maxRPM: '1750 RPM',
    maxPressure: '22 bar',
    maxViscosity: '100.000 SSU',
    specifications: {
      pt: {
        connections: 'Bocais de sucção e recalque de Ø 3/4" com rosca "BSP"',
        gears: 'Engrenagens de dentes helicoidais',
        sealing: 'Vedação por gaxeta teflonada ou selo mecânico',
        bearings: 'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
        construction: 'Construção em ferro fundido, aço inox ou aço carbono'
      },
      en: {
        connections: 'Suction and discharge nozzles Ø 3/4" with BSP thread',
        gears: 'Helical gear teeth',
        sealing: 'PTFE packing or mechanical seal',
        bearings: 'Sliding bearings in self-lubricating TM23 bronze bushings',
        construction: 'Cast iron, stainless steel or carbon steel construction'
      },
      es: {
        connections: 'Boquillas de succión y descarga Ø 3/4" con rosca BSP',
        gears: 'Engranajes de dientes helicoidales',
        sealing: 'Sellado por empaquetadura de PTFE o sello mecánico',
        bearings: 'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
        construction: 'Construcción en hierro fundido, acero inoxidable o acero al carbono'
      }
    },
    optionals: {
      pt: ['Válvula de alívio incorporada (retorna até 30% do produto)', 'Conjunto moto-bomba completo', 'Mancal externo'],
      en: ['Built-in relief valve (returns up to 30% of product)', 'Complete motor-pump set', 'External bearing'],
      es: ['Válvula de alivio incorporada (retorna hasta 30% del producto)', 'Conjunto motor-bomba completo', 'Cojinete externo']
    }
  }],
  
  '1"': [
    {
      id: 'fbe-1',
      diameter: '1"',
      model: 'FBE 1"',
      maxFlow: '62 l/min',
      maxRPM: '1750 RPM',
      maxPressure: '22 bar',
      maxViscosity: '100.000 SSU',
      specifications: {
        pt: {
          connections: 'Bocais de sucção e recalque de Ø 1" com rosca "BSP"',
          gears: 'Engrenagens de dentes helicoidais',
          sealing: 'Vedação por gaxeta teflonada ou selo mecânico',
          bearings: 'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
          construction: 'Construção em ferro fundido, aço inox ou aço carbono'
        },
        en: {
          connections: 'Suction and discharge nozzles Ø 1" with BSP thread',
          gears: 'Helical gear teeth',
          sealing: 'PTFE packing or mechanical seal',
          bearings: 'Sliding bearings in self-lubricating TM23 bronze bushings',
          construction: 'Cast iron, stainless steel or carbon steel construction'
        },
        es: {
          connections: 'Boquillas de succión y descarga Ø 1" con rosca BSP',
          gears: 'Engranajes de dientes helicoidales',
          sealing: 'Sellado por empaquetadura de PTFE o sello mecánico',
          bearings: 'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
          construction: 'Construcción en hierro fundido, acero inoxidable o acero al carbono'
        }
      },
      optionals: {
        pt: ['Válvula de alívio incorporada (retorna até 30% do produto)', 'Conjunto moto-bomba completo', 'Mancal externo'],
        en: ['Built-in relief valve (returns up to 30% of product)', 'Complete motor-pump set', 'External bearing'],
        es: ['Válvula de alivio incorporada (retorna hasta 30% del producto)', 'Conjunto motor-bomba completo', 'Cojinete externo']
      }
    },
    {
      id: 'fbe-1-a',
      diameter: '1"',
      model: 'FBE 1" A',
      maxFlow: '74 l/min',
      maxRPM: '1750 RPM',
      maxPressure: '22 bar',
      maxViscosity: '100.000 SSU',
      specifications: {
        pt: {
          connections: 'Bocais de sucção e recalque de Ø 1" com rosca "BSP"',
          gears: 'Engrenagens de dentes helicoidais',
          sealing: 'Vedação por gaxeta teflonada ou selo mecânico',
          bearings: 'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
          construction: 'Construção em ferro fundido, aço inox ou aço carbono'
        },
        en: {
          connections: 'Suction and discharge nozzles Ø 1" with BSP thread',
          gears: 'Helical gear teeth',
          sealing: 'PTFE packing or mechanical seal',
          bearings: 'Sliding bearings in self-lubricating TM23 bronze bushings',
          construction: 'Cast iron, stainless steel or carbon steel construction'
        },
        es: {
          connections: 'Boquillas de succión y descarga Ø 1" con rosca BSP',
          gears: 'Engranajes de dientes helicoidales',
          sealing: 'Sellado por empaquetadura de PTFE o sello mecánico',
          bearings: 'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
          construction: 'Construcción en hierro fundido, acero inoxidable o acero al carbono'
        }
      },
      optionals: {
        pt: ['Válvula de alívio incorporada (retorna até 30% do produto)', 'Conjunto moto-bomba completo', 'Mancal externo'],
        en: ['Built-in relief valve (returns up to 30% of product)', 'Complete motor-pump set', 'External bearing'],
        es: ['Válvula de alivio incorporada (retorna hasta 30% del producto)', 'Conjunto motor-bomba completo', 'Cojinete externo']
      }
    },
    {
      id: 'fbe-1-d',
      diameter: '1"',
      model: 'FBE 1" D',
      maxFlow: '88,6 l/min',
      maxRPM: '1750 RPM',
      maxPressure: '22 bar',
      maxViscosity: '100.000 SSU',
      specifications: {
        pt: {
          connections: 'Bocais de sucção e recalque de Ø 1" com rosca "BSP"',
          gears: 'Engrenagens de dentes helicoidais',
          sealing: 'Vedação por gaxeta teflonada ou selo mecânico',
          bearings: 'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
          construction: 'Construção em ferro fundido, aço inox ou aço carbono'
        },
        en: {
          connections: 'Suction and discharge nozzles Ø 1" with BSP thread',
          gears: 'Helical gear teeth',
          sealing: 'PTFE packing or mechanical seal',
          bearings: 'Sliding bearings in self-lubricating TM23 bronze bushings',
          construction: 'Cast iron, stainless steel or carbon steel construction'
        },
        es: {
          connections: 'Boquillas de succión y descarga Ø 1" con rosca BSP',
          gears: 'Engranajes de dientes helicoidales',
          sealing: 'Sellado por empaquetadura de PTFE o sello mecánico',
          bearings: 'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
          construction: 'Construcción en hierro fundido, acero inoxidable o acero al carbono'
        }
      },
      optionals: {
        pt: ['Válvula de alívio incorporada (retorna até 30% do produto)', 'Conjunto moto-bomba completo', 'Mancal externo'],
        en: ['Built-in relief valve (returns up to 30% of product)', 'Complete motor-pump set', 'External bearing'],
        es: ['Válvula de alivio incorporada (retorna hasta 30% del producto)', 'Conjunto motor-bomba completo', 'Cojinete externo']
      }
    },
    {
      id: 'fbe-1-da',
      diameter: '1"',
      model: 'FBE 1" DA',
      maxFlow: '112 l/min',
      maxRPM: '1750 RPM',
      maxPressure: '22 bar',
      maxViscosity: '100.000 SSU',
      specifications: {
        pt: {
          connections: 'Bocais de sucção e recalque de Ø 1" com rosca "BSP"',
          gears: 'Engrenagens de dentes helicoidais',
          sealing: 'Vedação por gaxeta teflonada ou selo mecânico',
          bearings: 'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
          construction: 'Construção em ferro fundido, aço inox ou aço carbono'
        },
        en: {
          connections: 'Suction and discharge nozzles Ø 1" with BSP thread',
          gears: 'Helical gear teeth',
          sealing: 'PTFE packing or mechanical seal',
          bearings: 'Sliding bearings in self-lubricating TM23 bronze bushings',
          construction: 'Cast iron, stainless steel or carbon steel construction'
        },
        es: {
          connections: 'Boquillas de succión y descarga Ø 1" con rosca BSP',
          gears: 'Engranajes de dientes helicoidales',
          sealing: 'Sellado por empaquetadura de PTFE o sello mecánico',
          bearings: 'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
          construction: 'Construcción en hierro fundido, acero inoxidable o acero al carbono'
        }
      },
      optionals: {
        pt: ['Válvula de alívio incorporada (retorna até 30% do produto)', 'Conjunto moto-bomba completo', 'Mancal externo'],
        en: ['Built-in relief valve (returns up to 30% of product)', 'Complete motor-pump set', 'External bearing'],
        es: ['Válvula de alivio incorporada (retorna hasta 30% del producto)', 'Conjunto motor-bomba completo', 'Cojinete externo']
      }
    }
  ],
  
  '1.1/2"': [
    {
      id: 'fbe-112',
      diameter: '1.1/2"',
      model: 'FBE 1.1/2"',
      maxFlow: '150 l/min',
      maxRPM: '1750 RPM',
      maxPressure: '14 bar',
      maxViscosity: '100.000 SSU',
      specifications: {
        pt: {
          connections: 'Bocais de sucção e recalque de Ø 1.1/2" com flange ANSI B16.1',
          gears: 'Engrenagens de dentes helicoidais',
          sealing: 'Vedação por gaxeta teflonada ou selo mecânico',
          bearings: 'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
          construction: 'Construção em ferro fundido, aço inox ou aço carbono'
        },
        en: {
          connections: 'Suction and discharge nozzles Ø 1.1/2" with ANSI B16.1 flange',
          gears: 'Helical gear teeth',
          sealing: 'PTFE packing or mechanical seal',
          bearings: 'Sliding bearings in self-lubricating TM23 bronze bushings',
          construction: 'Cast iron, stainless steel or carbon steel construction'
        },
        es: {
          connections: 'Boquillas de succión y descarga Ø 1.1/2" con brida ANSI B16.1',
          gears: 'Engranajes de dientes helicoidales',
          sealing: 'Sellado por empaquetadura de PTFE o sello mecánico',
          bearings: 'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
          construction: 'Construcción en hierro fundido, acero inoxidable o acero al carbono'
        }
      },
      optionals: {
        pt: ['Válvula de alívio incorporada (retorna até 30% do produto)', 'Câmara de aquecimento', 'Conjunto moto-bomba completo', 'Mancal externo'],
        en: ['Built-in relief valve (returns up to 30% of product)', 'Heating chamber', 'Complete motor-pump set', 'External bearing'],
        es: ['Válvula de alivio incorporada (retorna hasta 30% del producto)', 'Cámara de calentamiento', 'Conjunto motor-bomba completo', 'Cojinete externo']
      }
    },
    {
      id: 'fbe-112-a',
      diameter: '1.1/2"',
      model: 'FBE 1.1/2" A',
      maxFlow: '200 l/min',
      maxRPM: '1750 RPM',
      maxPressure: '14 bar',
      maxViscosity: '100.000 SSU',
      specifications: {
        pt: {
          connections: 'Bocais de sucção e recalque de Ø 1.1/2" com flange ANSI B16.1',
          gears: 'Engrenagens de dentes helicoidais',
          sealing: 'Vedação por gaxeta teflonada ou selo mecânico',
          bearings: 'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
          construction: 'Construção em ferro fundido, aço inox ou aço carbono'
        },
        en: {
          connections: 'Suction and discharge nozzles Ø 1.1/2" with ANSI B16.1 flange',
          gears: 'Helical gear teeth',
          sealing: 'PTFE packing or mechanical seal',
          bearings: 'Sliding bearings in self-lubricating TM23 bronze bushings',
          construction: 'Cast iron, stainless steel or carbon steel construction'
        },
        es: {
          connections: 'Boquillas de succión y descarga Ø 1.1/2" con brida ANSI B16.1',
          gears: 'Engranajes de dientes helicoidales',
          sealing: 'Sellado por empaquetadura de PTFE o sello mecánico',
          bearings: 'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
          construction: 'Construcción en hierro fundido, acero inoxidable o acero al carbono'
        }
      },
      optionals: {
        pt: ['Válvula de alívio incorporada (retorna até 30% do produto)', 'Câmara de aquecimento', 'Conjunto moto-bomba completo', 'Mancal externo'],
        en: ['Built-in relief valve (returns up to 30% of product)', 'Heating chamber', 'Complete motor-pump set', 'External bearing'],
        es: ['Válvula de alivio incorporada (retorna hasta 30% del producto)', 'Cámara de calentamiento', 'Conjunto motor-bomba completo', 'Cojinete externo']
      }
    }
  ],
  
  '2"': [
    {
      id: 'fbe-2',
      diameter: '2"',
      model: 'FBE 2"',
      maxFlow: '300 l/min',
      maxRPM: '1750 RPM',
      maxPressure: '14 bar',
      maxViscosity: '100.000 SSU',
      specifications: {
        pt: {
          connections: 'Bocais de sucção e recalque de Ø 2" com flange ANSI B16.1',
          gears: 'Engrenagens de dentes helicoidais',
          sealing: 'Vedação por gaxeta teflonada ou selo mecânico',
          bearings: 'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
          construction: 'Construção em ferro fundido, aço inox ou aço carbono'
        },
        en: {
          connections: 'Suction and discharge nozzles Ø 2" with ANSI B16.1 flange',
          gears: 'Helical gear teeth',
          sealing: 'PTFE packing or mechanical seal',
          bearings: 'Sliding bearings in self-lubricating TM23 bronze bushings',
          construction: 'Cast iron, stainless steel or carbon steel construction'
        },
        es: {
          connections: 'Boquillas de succión y descarga Ø 2" con brida ANSI B16.1',
          gears: 'Engranajes de dientes helicoidales',
          sealing: 'Sellado por empaquetadura de PTFE o sello mecánico',
          bearings: 'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
          construction: 'Construcción en hierro fundido, acero inoxidable o acero al carbono'
        }
      },
      optionals: {
        pt: ['Válvula de alívio incorporada (retorna até 30% do produto)', 'Câmara de aquecimento', 'Conjunto moto-bomba completo', 'Mancal externo'],
        en: ['Built-in relief valve (returns up to 30% of product)', 'Heating chamber', 'Complete motor-pump set', 'External bearing'],
        es: ['Válvula de alivio incorporada (retorna hasta 30% del producto)', 'Cámara de calentamiento', 'Conjunto motor-bomba completo', 'Cojinete externo']
      }
    },
    {
      id: 'fbe-2-a',
      diameter: '2"',
      model: 'FBE 2" A',
      maxFlow: '420 l/min',
      maxRPM: '1750 RPM',
      maxPressure: '14 bar',
      maxViscosity: '100.000 SSU',
      specifications: {
        pt: {
          connections: 'Bocais de sucção e recalque de Ø 2" com flange ANSI B16.1',
          gears: 'Engrenagens de dentes helicoidais',
          sealing: 'Vedação por gaxeta teflonada ou selo mecânico',
          bearings: 'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
          construction: 'Construção em ferro fundido, aço inox ou aço carbono'
        },
        en: {
          connections: 'Suction and discharge nozzles Ø 2" with ANSI B16.1 flange',
          gears: 'Helical gear teeth',
          sealing: 'PTFE packing or mechanical seal',
          bearings: 'Sliding bearings in self-lubricating TM23 bronze bushings',
          construction: 'Cast iron, stainless steel or carbon steel construction'
        },
        es: {
          connections: 'Boquillas de succión y descarga Ø 2" con brida ANSI B16.1',
          gears: 'Engranajes de dientes helicoidales',
          sealing: 'Sellado por empaquetadura de PTFE o sello mecánico',
          bearings: 'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
          construction: 'Construcción en hierro fundido, acero inoxidable o acero al carbono'
        }
      },
      optionals: {
        pt: ['Válvula de alívio incorporada (retorna até 30% do produto)', 'Câmara de aquecimento', 'Conjunto moto-bomba completo', 'Mancal externo'],
        en: ['Built-in relief valve (returns up to 30% of product)', 'Heating chamber', 'Complete motor-pump set', 'External bearing'],
        es: ['Válvula de alivio incorporada (retorna hasta 30% del producto)', 'Cámara de calentamiento', 'Conjunto motor-bomba completo', 'Cojinete externo']
      }
    }
  ],
  
  '3"': [
    {
      id: 'fbe-3',
      diameter: '3"',
      model: 'FBE 3"',
      maxFlow: '500 l/min',
      maxRPM: '1150 RPM',
      maxPressure: '12 bar',
      maxViscosity: '100.000 SSU',
      specifications: {
        pt: {
          connections: 'Bocais de sucção e recalque de Ø 3" com flange ANSI B16.1',
          gears: 'Engrenagens de dentes helicoidais',
          sealing: 'Vedação por gaxeta teflonada ou selo mecânico',
          bearings: 'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
          construction: 'Construção em ferro fundido, aço inox ou aço carbono'
        },
        en: {
          connections: 'Suction and discharge nozzles Ø 3" with ANSI B16.1 flange',
          gears: 'Helical gear teeth',
          sealing: 'PTFE packing or mechanical seal',
          bearings: 'Sliding bearings in self-lubricating TM23 bronze bushings',
          construction: 'Cast iron, stainless steel or carbon steel construction'
        },
        es: {
          connections: 'Boquillas de succión y descarga Ø 3" con brida ANSI B16.1',
          gears: 'Engranajes de dientes helicoidales',
          sealing: 'Sellado por empaquetadura de PTFE o sello mecánico',
          bearings: 'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
          construction: 'Construcción en hierro fundido, acero inoxidable o acero al carbono'
        }
      },
      optionals: {
        pt: ['Válvula de alívio incorporada (retorna até 30% do produto)', 'Câmara de aquecimento', 'Conjunto moto-bomba completo', 'Mancal externo'],
        en: ['Built-in relief valve (returns up to 30% of product)', 'Heating chamber', 'Complete motor-pump set', 'External bearing'],
        es: ['Válvula de alivio incorporada (retorna hasta 30% del producto)', 'Cámara de calentamiento', 'Conjunto motor-bomba completo', 'Cojinete externo']
      }
    },
    {
      id: 'fbe-3-m9',
      diameter: '3"',
      model: 'FBE 3" M9',
      maxFlow: '600 l/min',
      maxRPM: '1150 RPM',
      maxPressure: '8 bar',
      maxViscosity: '100.000 SSU',
      specifications: {
        pt: {
          connections: 'Bocais de sucção e recalque de Ø 3" com flange ANSI B16.1',
          gears: 'Engrenagens de dentes helicoidais',
          sealing: 'Vedação por gaxeta teflonada ou selo mecânico',
          bearings: 'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
          construction: 'Construção em ferro fundido, aço inox ou aço carbono'
        },
        en: {
          connections: 'Suction and discharge nozzles Ø 3" with ANSI B16.1 flange',
          gears: 'Helical gear teeth',
          sealing: 'PTFE packing or mechanical seal',
          bearings: 'Sliding bearings in self-lubricating TM23 bronze bushings',
          construction: 'Cast iron, stainless steel or carbon steel construction'
        },
        es: {
          connections: 'Boquillas de succión y descarga Ø 3" con brida ANSI B16.1',
          gears: 'Engranajes de dientes helicoidales',
          sealing: 'Sellado por empaquetadura de PTFE o sello mecánico',
          bearings: 'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
          construction: 'Construcción en hierro fundido, acero inoxidable o acero al carbono'
        }
      },
      optionals: {
        pt: ['Válvula de alívio incorporada (retorna até 30% do produto)', 'Câmara de aquecimento', 'Conjunto moto-bomba completo', 'Mancal externo'],
        en: ['Built-in relief valve (returns up to 30% of product)', 'Heating chamber', 'Complete motor-pump set', 'External bearing'],
        es: ['Válvula de alivio incorporada (retorna hasta 30% del producto)', 'Cámara de calentamiento', 'Conjunto motor-bomba completo', 'Cojinete externo']
      }
    }
  ],
  
  '4"': [
    {
      id: 'fbe-4-m6',
      diameter: '4"',
      model: 'FBE 4" M6',
      maxFlow: '650 l/min',
      maxRPM: '1150 RPM',
      maxPressure: '8 bar',
      maxViscosity: '100.000 SSU',
      specifications: {
        pt: {
          connections: 'Bocais de sucção e recalque de Ø 4" com flange ANSI B16.1',
          gears: 'Engrenagens de dentes helicoidais',
          sealing: 'Vedação por gaxeta teflonada ou selo mecânico',
          bearings: 'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
          construction: 'Construção em ferro fundido, aço inox ou aço carbono'
        },
        en: {
          connections: 'Suction and discharge nozzles Ø 4" with ANSI B16.1 flange',
          gears: 'Helical gear teeth',
          sealing: 'PTFE packing or mechanical seal',
          bearings: 'Sliding bearings in self-lubricating TM23 bronze bushings',
          construction: 'Cast iron, stainless steel or carbon steel construction'
        },
        es: {
          connections: 'Boquillas de succión y descarga Ø 4" con brida ANSI B16.1',
          gears: 'Engranajes de dientes helicoidales',
          sealing: 'Sellado por empaquetadura de PTFE o sello mecánico',
          bearings: 'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
          construction: 'Construcción en hierro fundido, acero inoxidable o acero al carbono'
        }
      },
      optionals: {
        pt: ['Válvula de alívio incorporada (retorna até 30% do produto)', 'Câmara de aquecimento', 'Conjunto moto-bomba completo', 'Mancal externo'],
        en: ['Built-in relief valve (returns up to 30% of product)', 'Heating chamber', 'Complete motor-pump set', 'External bearing'],
        es: ['Válvula de alivio incorporada (retorna hasta 30% del producto)', 'Cámara de calentamiento', 'Conjunto motor-bomba completo', 'Cojinete externo']
      }
    },
    {
      id: 'fbe-4-m8',
      diameter: '4"',
      model: 'FBE 4" M8',
      maxFlow: '1.000 l/min',
      maxRPM: '1150 RPM',
      maxPressure: '8 bar',
      maxViscosity: '100.000 SSU',
      specifications: {
        pt: {
          connections: 'Bocais de sucção e recalque de Ø 4" com flange ANSI B16.1',
          gears: 'Engrenagens de dentes helicoidais',
          sealing: 'Vedação por gaxeta teflonada ou selo mecânico',
          bearings: 'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
          construction: 'Construção em ferro fundido, aço inox ou aço carbono'
        },
        en: {
          connections: 'Suction and discharge nozzles Ø 4" with ANSI B16.1 flange',
          gears: 'Helical gear teeth',
          sealing: 'PTFE packing or mechanical seal',
          bearings: 'Sliding bearings in self-lubricating TM23 bronze bushings',
          construction: 'Cast iron, stainless steel or carbon steel construction'
        },
        es: {
          connections: 'Boquillas de succión y descarga Ø 4" con brida ANSI B16.1',
          gears: 'Engranajes de dientes helicoidales',
          sealing: 'Sellado por empaquetadura de PTFE o sello mecánico',
          bearings: 'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
          construction: 'Construcción en hierro fundido, acero inoxidable o acero al carbono'
        }
      },
      optionals: {
        pt: ['Válvula de alívio incorporada (retorna até 30% do produto)', 'Câmara de aquecimento', 'Conjunto moto-bomba completo', 'Mancal externo'],
        en: ['Built-in relief valve (returns up to 30% of product)', 'Heating chamber', 'Complete motor-pump set', 'External bearing'],
        es: ['Válvula de alivio incorporada (retorna hasta 30% del producto)', 'Cámara de calentamiento', 'Conjunto motor-bomba completo', 'Cojinete externo']
      }
    },
    {
      id: 'fbe-4-m12',
      diameter: '4"',
      model: 'FBE 4" M12',
      maxFlow: '1.350 l/min',
      maxRPM: '1150 RPM',
      maxPressure: '6 bar',
      maxViscosity: '100.000 SSU',
      specifications: {
        pt: {
          connections: 'Bocais de sucção e recalque de Ø 4" com flange ANSI B16.1',
          gears: 'Engrenagens de dentes helicoidais',
          sealing: 'Vedação por gaxeta teflonada ou selo mecânico',
          bearings: 'Mancais deslizantes em buchas de bronze TM23 autolubrificantes',
          construction: 'Construção em ferro fundido, aço inox ou aço carbono'
        },
        en: {
          connections: 'Suction and discharge nozzles Ø 4" with ANSI B16.1 flange',
          gears: 'Helical gear teeth',
          sealing: 'PTFE packing or mechanical seal',
          bearings: 'Sliding bearings in self-lubricating TM23 bronze bushings',
          construction: 'Cast iron, stainless steel or carbon steel construction'
        },
        es: {
          connections: 'Boquillas de succión y descarga Ø 4" con brida ANSI B16.1',
          gears: 'Engranajes de dientes helicoidales',
          sealing: 'Sellado por empaquetadura de PTFE o sello mecánico',
          bearings: 'Cojinetes deslizantes en casquillos de bronce TM23 autolubricantes',
          construction: 'Construcción en hierro fundido, acero inoxidable o acero al carbono'
        }
      },
      optionals: {
        pt: ['Válvula de alívio incorporada (retorna até 30% do produto)', 'Câmara de aquecimento', 'Conjunto moto-bomba completo', 'Mancal externo'],
        en: ['Built-in relief valve (returns up to 30% of product)', 'Heating chamber', 'Complete motor-pump set', 'External bearing'],
        es: ['Válvula de alivio incorporada (retorna hasta 30% del producto)', 'Cámara de calentamiento', 'Conjunto motor-bomba completo', 'Cojinete externo']
      }
    }
  ]
};