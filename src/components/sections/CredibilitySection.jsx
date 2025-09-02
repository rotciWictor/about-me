import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { TrendingUp, Shield, Award, Brain } from 'lucide-react';
import { useSite } from '../../context/SiteContext';

const CredibilitySection = () => {
  const { credibility } = useSite();
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            {credibility.title}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">CloudWalk</CardTitle>
                <CardDescription>2 anos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Dashboards estratégicos, BigQuery, bots com IA em sistemas que processam milhões
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Stone Pagamentos</CardTitle>
                <CardDescription>Fintech</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Análise comercial e experiência com migração de clientes enterprise
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Formação Híbrida</CardTitle>
                <CardDescription>Business + Tech</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Administração (PUC-Rio) + Ciência de Dados + Full Stack completo
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Tecnologias</CardTitle>
                <CardDescription>Em Produção</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  SQL enterprise, automação inteligente, IA quando necessário
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-slate-50 rounded-lg p-8 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-slate-900">Diferencial Único:</h3>
            <p className="text-lg text-slate-700 italic">
              "Combino visão de negócio com execução técnica. Entendo o problema do empresário e sei construir a solução que funciona - seja para startup nascente ou empresa consolidada."
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 items-center">
            {credibility.badges.map((badge, index) => {
              const colors = [
                'bg-green-100 text-green-800',
                'bg-blue-100 text-blue-800',
                'bg-purple-100 text-purple-800'
              ];
              return (
                <Badge key={index} variant="secondary" className={colors[index]}>
                  {badge}
                </Badge>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
