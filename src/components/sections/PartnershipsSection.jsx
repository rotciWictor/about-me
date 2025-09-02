import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { CheckCircle } from 'lucide-react';
import { useSite } from '../../context/SiteContext';

const PartnershipsSection = () => {
  const { workProcess, getWhatsAppLink } = useSite();
  
  // Fallback se workProcess não estiver carregado
  if (!workProcess || !workProcess.partnerships) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-r from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
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
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
