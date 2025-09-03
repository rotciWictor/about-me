import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { CheckCircle, ExternalLink, MessageCircle, Target, TrendingUp, Zap, Star, ArrowRight } from 'lucide-react';
import { useSite } from '../../context/SiteContext';

const CaseStudySection = () => {
  const { caseStudy, getWhatsAppLink } = useSite();

  return (
    <section className="py-16 bg-gradient-to-r from-slate-100 to-slate-200">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-blue-600 text-white">
              {caseStudy.title}
            </Badge>
            <h2 className="text-3xl font-bold mb-4 text-slate-900">
              {caseStudy.projectTitle}
            </h2>
            <p className="text-xl text-slate-600">{caseStudy.subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-red-600 flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  {caseStudy.challenge.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {caseStudy.challenge.items.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-600 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  {caseStudy.solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {caseStudy.solution.items.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200 mb-12">
            <CardHeader>
              <CardTitle className="text-center text-slate-800 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 mr-2 text-green-600" />
                {caseStudy.results.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {caseStudy.results.items.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow mb-8">
            <CardHeader>
              <CardTitle className="text-center text-slate-800">
                Aprendizado do Projeto:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-slate-700 text-center">
                {caseStudy.description}
              </p>
            </CardContent>
          </Card>

          <div className="text-center">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-6 text-slate-800">{caseStudy.technologies.title}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {caseStudy.technologies.items.map((tech, index) => (
                  <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-slate-800">Próximo Projeto?</h3>
                  <p className="text-slate-600">Vamos automatizar seus processos também!</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-slate-700">
                  Quer ver mais detalhes técnicos ou discutir um projeto similar?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => window.open(getWhatsAppLink("Oi Victor, vi seu case de ESG e gostaria de discutir um projeto similar. Pode me contar mais detalhes técnicos?"), '_blank')}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Discutir Projeto Similar
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-600 text-slate-700 hover:bg-slate-100 px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => window.open(getWhatsAppLink("Oi Victor, vi seu case de ESG e gostaria de ver mais cases de sucesso. Tem outros exemplos?"), '_blank')}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Ver Mais Cases
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;