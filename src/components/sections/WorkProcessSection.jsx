import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { CheckCircle, Code, Database, Shield, Target, Users, Clock } from 'lucide-react';
import { useSite } from '../../context/SiteContext';

const WorkProcessSection = () => {
  const { workProcess, getWhatsAppLink } = useSite();
  
  // Fallback se workProcess não estiver carregado
  if (!workProcess) {
    return (
      <section className="py-16 bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Carregando...</h2>
          </div>
        </div>
      </section>
    );
  }
  
  const getColorClasses = (color) => {
    const colors = {
      blue: {
        border: 'border-t-blue-500',
        bg: 'bg-blue-100',
        text: 'text-blue-600'
      },
      green: {
        border: 'border-t-green-500',
        bg: 'bg-green-100',
        text: 'text-green-600'
      },
      purple: {
        border: 'border-t-purple-500',
        bg: 'bg-purple-100',
        text: 'text-purple-600'
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-16 bg-gradient-to-r from-slate-50 to-slate-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">
              {workProcess.title}
            </h2>
            <p className="text-xl text-slate-600">{workProcess.subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {workProcess.phases && workProcess.phases.map((phase, index) => {
              const colorClasses = getColorClasses(phase.color);
              return (
                <Card key={index} className={`bg-white hover:shadow-lg transition-shadow border-t-4 ${colorClasses.border} flex flex-col h-full`}>
                  <CardHeader className="flex-shrink-0">
                    <div className={`w-12 h-12 ${colorClasses.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <span className={`text-xl font-bold ${colorClasses.text}`}>{phase.number}</span>
                    </div>
                    <CardTitle className="text-center">{phase.title}</CardTitle>
                    <CardDescription className="text-center min-h-[1.25rem]">
                      {phase.duration || " "}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow space-y-3">
                    <div className="flex-grow">
                      {phase.items && phase.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start space-x-3 mb-3 min-h-[1.5rem]">
                          <CheckCircle className={`w-5 h-5 ${colorClasses.text} mt-0.5 flex-shrink-0`} />
                          <span className="text-sm leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto">
                      {phase.investment && (
                        <div className="mt-4 p-3 bg-green-100 rounded-lg text-center">
                          <span className="text-green-800 font-semibold text-sm">{phase.investment}</span>
                        </div>
                      )}
                      {phase.cta && (
                        <div className="mt-4 p-3 bg-blue-100 rounded-lg text-center">
                          <span className="text-blue-800 font-semibold text-sm">{phase.cta}</span>
                        </div>
                      )}
                      {phase.guarantee && (
                        <div className="mt-4 p-3 bg-purple-100 rounded-lg text-center">
                          <span className="text-purple-800 font-semibold text-sm">{phase.guarantee}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {workProcess.whyDifferent && (
            <Card className="bg-white hover:shadow-lg transition-shadow mb-8">
              <CardHeader>
                <CardTitle className="text-center text-slate-800">
                  {workProcess.whyDifferent.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {workProcess.whyDifferent.items && workProcess.whyDifferent.items.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* PARCERIAS ESTRATÉGICAS - Seção separada (oculta por enquanto) */}
          {false && workProcess.partnerships && (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-slate-900">
                  {workProcess.partnerships.title}
                </h2>
                <p className="text-xl text-slate-600 mb-4">{workProcess.partnerships.subtitle}</p>
                <p className="text-lg text-slate-700 max-w-4xl mx-auto mb-8">
                  {workProcess.partnerships.description}
                </p>
              </div>

              {workProcess.partnerships.criteria && workProcess.partnerships.advantages && (
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-slate-800">
                        {workProcess.partnerships.criteria.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {workProcess.partnerships.criteria.items && workProcess.partnerships.criteria.items.map((item, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-slate-800">
                        {workProcess.partnerships.advantages.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {workProcess.partnerships.advantages.items && workProcess.partnerships.advantages.items.map((item, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {workProcess.partnerships.freedom && (
                <Card className="hover:shadow-lg transition-shadow mb-8">
                  <CardHeader>
                    <CardTitle className="text-center text-slate-800">
                      {workProcess.partnerships.freedom.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {workProcess.partnerships.freedom.items && workProcess.partnerships.freedom.items.map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {workProcess.partnerships.quote && (
                <div className="text-center mb-8">
                  <blockquote className="text-xl italic text-slate-700 bg-slate-50 p-6 rounded-lg">
                    "{workProcess.partnerships.quote}"
                  </blockquote>
                </div>
              )}

              {workProcess.partnerships.ctas && (
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {workProcess.partnerships.ctas.map((cta, index) => (
                    <Button
                      key={index}
                      size="lg"
                      className={index === 0 
                        ? "bg-blue-600 hover:bg-blue-700 text-white px-8 py-3" 
                        : "bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                      }
                      onClick={() => window.open(getWhatsAppLink(cta), '_blank')}
                    >
                      {cta}
                    </Button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;