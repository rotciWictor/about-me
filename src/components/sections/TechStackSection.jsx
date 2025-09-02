import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { CheckCircle } from 'lucide-react';
import { useSite } from '../../context/SiteContext';


import reactLogo from '../../assets/logos/react.svg';
import nextjsLogo from '../../assets/logos/nextdotjs.svg';
import nodejsLogo from '../../assets/logos/nodedotjs.svg';
import pythonLogo from '../../assets/logos/python.svg';
import bigqueryLogo from '../../assets/logos/googlebigquery.svg';
import openaiLogo from '../../assets/logos/openai.svg';
import powerbiLogo from '../../assets/powerbi_logo.png';
import googlecloudLogo from '../../assets/logos/googlecloud.svg';
import viteLogo from '../../assets/logos/vite.svg';
import tailwindLogo from '../../assets/logos/tailwindcss.svg';
import javascriptLogo from '../../assets/logos/javascript.svg';
import typescriptLogo from '../../assets/logos/typescript.svg';
import rubyLogo from '../../assets/logos/ruby.svg';
import flutterLogo from '../../assets/logos/flutter.svg';
import postgresLogo from '../../assets/logos/postgresql.svg';
import gitLogo from '../../assets/logos/git.svg';
import claudeLogo from '../../assets/logos/claude.svg';

const TechStackSection = () => {
  const { techStack } = useSite();
  
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">
              {techStack.title}
            </h2>
            <p className="text-xl text-slate-600 italic">
              "{techStack.quote}"
            </p>
          </div>

          {/* Technology Carousel */}
          <div className="mb-12">
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll space-x-8 py-4">
                {/* First row of technologies */}
                <div className="flex space-x-8 min-w-max">
                  <div className="flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm">
                    <img src={reactLogo} alt="React Logo" className="w-6 h-6" />
                    <span className="font-medium">React</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm">
                    <img src={nextjsLogo} alt="Next.js Logo" className="w-6 h-6" />
                    <span className="font-medium">Next.js</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm">
                    <img src={viteLogo} alt="Vite Logo" className="w-6 h-6" />
                    <span className="font-medium">Vite</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm">
                    <img src={tailwindLogo} alt="Tailwind CSS Logo" className="w-6 h-6" />
                    <span className="font-medium">Tailwind</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm">
                    <img src={javascriptLogo} alt="JavaScript Logo" className="w-6 h-6" />
                    <span className="font-medium">JavaScript</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm">
                    <img src={typescriptLogo} alt="TypeScript Logo" className="w-6 h-6" />
                    <span className="font-medium">TypeScript</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm">
                    <img src={nodejsLogo} alt="Node.js Logo" className="w-6 h-6" />
                    <span className="font-medium">Node.js</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm">
                    <img src={rubyLogo} alt="Ruby Logo" className="w-6 h-6" />
                    <span className="font-medium">Ruby</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm">
                    <img src={pythonLogo} alt="Python Logo" className="w-6 h-6" />
                    <span className="font-medium">Python</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm">
                    <img src={flutterLogo} alt="Flutter Logo" className="w-6 h-6" />
                    <span className="font-medium">Flutter</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm">
                    <img src={bigqueryLogo} alt="BigQuery Logo" className="w-6 h-6" />
                    <span className="font-medium">BigQuery</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm">
                    <img src={postgresLogo} alt="PostgreSQL Logo" className="w-6 h-6" />
                    <span className="font-medium">PostgreSQL</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm">
                    <img src={googlecloudLogo} alt="Google Cloud Logo" className="w-6 h-6" />
                    <span className="font-medium">Google Cloud</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm">
                    <img src={gitLogo} alt="Git Logo" className="w-6 h-6" />
                    <span className="font-medium">Git</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm">
                    <img src={openaiLogo} alt="OpenAI Logo" className="w-6 h-6" />
                    <span className="font-medium">OpenAI</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm">
                    <img src={claudeLogo} alt="Claude Logo" className="w-6 h-6" />
                    <span className="font-medium">Claude</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm">
                    <img src={powerbiLogo} alt="Power BI Logo" className="w-6 h-6 hidden" />
                    <span className="font-medium">Power BI</span>
                  </div>
                </div>
                {/* Duplication for continuous effect */}
                <div className="flex space-x-8 min-w-max">
                  <div className="flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm">
                    <img src={reactLogo} alt="React Logo" className="w-6 h-6" />
                    <span className="font-medium">React</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm">
                    <img src={nextjsLogo} alt="Next.js Logo" className="w-6 h-6" />
                    <span className="font-medium">Next.js</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm">
                    <img src={viteLogo} alt="Vite Logo" className="w-6 h-6" />
                    <span className="font-medium">Vite</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm">
                    <img src={tailwindLogo} alt="Tailwind CSS Logo" className="w-6 h-6" />
                    <span className="font-medium">Tailwind</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm">
                    <img src={javascriptLogo} alt="JavaScript Logo" className="w-6 h-6" />
                    <span className="font-medium">JavaScript</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm">
                    <img src={typescriptLogo} alt="TypeScript Logo" className="w-6 h-6" />
                    <span className="font-medium">TypeScript</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm">
                    <img src={nodejsLogo} alt="Node.js Logo" className="w-6 h-6" />
                    <span className="font-medium">Node.js</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm">
                    <img src={rubyLogo} alt="Ruby Logo" className="w-6 h-6" />
                    <span className="font-medium">Ruby</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm">
                    <img src={pythonLogo} alt="Python Logo" className="w-6 h-6" />
                    <span className="font-medium">Python</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm">
                    <img src={flutterLogo} alt="Flutter Logo" className="w-6 h-6" />
                    <span className="font-medium">Flutter</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm">
                    <img src={bigqueryLogo} alt="BigQuery Logo" className="w-6 h-6" />
                    <span className="font-medium">BigQuery</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm">
                    <img src={postgresLogo} alt="PostgreSQL Logo" className="w-6 h-6" />
                    <span className="font-medium">PostgreSQL</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm">
                    <img src={googlecloudLogo} alt="Google Cloud Logo" className="w-6 h-6" />
                    <span className="font-medium">Google Cloud</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm">
                    <img src={gitLogo} alt="Git Logo" className="w-6 h-6" />
                    <span className="font-medium">Git</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm">
                    <img src={openaiLogo} alt="OpenAI Logo" className="w-6 h-6" />
                    <span className="font-medium">OpenAI</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm">
                    <img src={claudeLogo} alt="Claude Logo" className="w-6 h-6" />
                    <span className="font-medium">Claude</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white rounded-lg px-6 py-3 shadow-sm">
                    <img src={powerbiLogo} alt="Power BI Logo" className="w-6 h-6 hidden" />
                    <span className="font-medium">Power BI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">Por Que Essa Stack:</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Tecnologias confiáveis: Testadas em sistemas de alto volume</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Automação eficiente: Soluções práticas sem complexidade</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Escalabilidade: Cresce conforme sua necessidade</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Manutenção simples: Código organizado e documentado</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      

    </section>
  );
};

export default TechStackSection;