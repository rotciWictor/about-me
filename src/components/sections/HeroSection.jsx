import React from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { CheckCircle, MessageCircle, Target, Zap, Star } from 'lucide-react';
import { useSite } from '../../context/SiteContext';
import profileImage from '../../assets/victor_campos_profile.jpg';

const HeroSection = () => {
  const { hero, getWhatsAppLink } = useSite();

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 bg-slate-800/50"></div>
      
      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <img src={profileImage} alt="Victor Campos" className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-blue-500 shadow-lg" />
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4 bg-blue-600/20 text-blue-300 border-blue-500/30">
              <Target className="w-4 h-4 mr-2" />
              Consultoria + Desenvolvimento
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            {hero.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-4">
            {hero.subtitle}
          </p>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-blue-300">
            "{hero.description}"
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-10 text-left max-w-3xl mx-auto">
            <div className="flex items-center space-x-3">
              <Target className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <span>Ex-CloudWalk & Stone (2 anos em fintechs)</span>
            </div>
            <div className="flex items-center space-x-3">
              <Star className="w-5 h-5 text-yellow-400 flex-shrink-0" />
              <span>Base empresarial (Administração PUC-Rio)</span>
            </div>
            <div className="flex items-center space-x-3">
              <Zap className="w-5 h-5 text-purple-400 flex-shrink-0" />
              <span>IA disponível quando necessário</span>
            </div>
            <div className="flex items-center space-x-3">
              <Target className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span>Multi-setor: ESG, e-commerce, gestão</span>
            </div>
            <div className="flex items-center space-x-3">
              <Star className="w-5 h-5 text-orange-400 flex-shrink-0" />
              <span>Projetos personalizados para parcerias</span>
            </div>
            <div className="flex items-center space-x-3">
              <Zap className="w-5 h-5 text-red-400 flex-shrink-0" />
              <span>Briefing técnico sempre gratuito</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-slate-300 mb-6">
              {hero.ctaDescription}
            </p>
            
                        <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
                onClick={() => window.open(getWhatsAppLink(hero.cta.primary.message), '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {hero.cta.primary.text}
              </Button>
            </div>
            
            <p className="text-sm text-slate-400 mt-4">
              {hero.info}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
