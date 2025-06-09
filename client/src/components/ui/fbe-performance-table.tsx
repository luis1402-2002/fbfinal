import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './table';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Gauge, Droplets, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface PerformanceData {
  pressao_bar: number;
  vazao_l_min: number;
  potencia_cv: number;
}

interface FBEPerformanceTableProps {
  model: string;
  rpm: number;
  data: PerformanceData[];
}

export function FBEPerformanceTable({ model, rpm, data }: FBEPerformanceTableProps) {
  const { language } = useLanguage();
  
  const labels = {
    pt: {
      title: 'Dados de Performance',
      pressure: 'Pressão (bar)',
      flow: 'Vazão (L/min)',
      power: 'Potência (CV)',
      rpm: 'RPM'
    },
    en: {
      title: 'Performance Data',
      pressure: 'Pressure (bar)',
      flow: 'Flow (L/min)',
      power: 'Power (HP)',
      rpm: 'RPM'
    },
    es: {
      title: 'Datos de Rendimiento',
      pressure: 'Presión (bar)',
      flow: 'Flujo (L/min)',
      power: 'Potencia (CV)',
      rpm: 'RPM'
    }
  };
  
  const t = labels[language];
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{t.title} - {model}</span>
          <span className="text-sm font-normal text-muted-foreground">{rpm} {t.rpm}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Gauge className="h-4 w-4" />
                    {t.pressure}
                  </div>
                </TableHead>
                <TableHead className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Droplets className="h-4 w-4" />
                    {t.flow}
                  </div>
                </TableHead>
                <TableHead className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Zap className="h-4 w-4" />
                    {t.power}
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="text-center font-medium">
                    {row.pressao_bar.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-center">
                    {row.vazao_l_min.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-center">
                    {row.potencia_cv.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}