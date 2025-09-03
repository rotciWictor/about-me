import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { CheckCircle } from 'lucide-react';
import { useSite } from '../../context/SiteContext';

const ServicesSection = () => {
  const { services } = useSite();
  
  if (!services) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-r from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-blue-600 text-white">
              {services.title}
            </Badge>
            <h2 className="text-3xl font-bold mb-4 text-slate-900">
              {services.title}
            </h2>
            <p className="text-xl text-slate-600">{services.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.categories.map((category, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-3xl">{category.icon}</span>
                    <CardTitle className="text-lg text-slate-900">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  {category.example && (
                    <div className="mt-4 p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-800 font-medium">
                        Exemplo: {category.example}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-6 text-slate-900">
              {services.differential.title}
            </h3>
            <p className="text-lg text-slate-700 text-center leading-relaxed">
              {services.differential.content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
