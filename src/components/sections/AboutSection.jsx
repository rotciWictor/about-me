import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Heart, Music, BookOpen, Lightbulb, Target, Users, Linkedin, MessageCircle, Mail, Github } from 'lucide-react';
import { useSite } from '../../context/SiteContext';
import profileImage from '../../assets/victor_campos_profile.jpg';

const AboutSection = () => {
  const { about, getWhatsAppLink } = useSite();
  return (
    <section className="py-16 bg-gradient-to-r from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">
              {about.title}
            </h2>
            <p className="text-xl text-slate-600">
              {about.subtitle}
            </p>
          </div>

                     <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
             {/* Photo and Quote */}
             <div className="text-center">
               <div className="relative group mb-8">
                 <div className="flex justify-center">
                   <div className="relative">
                     <img 
                       src={profileImage} 
                       alt="Victor Campos" 
                       className="w-48 h-48 rounded-full object-cover border-4 border-blue-500 shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl" 
                     />
                     <div className="absolute inset-0 w-48 h-48 rounded-full border-4 border-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                   </div>
                 </div>
               </div>
               
               {/* Quote */}
               <div className="bg-white rounded-lg p-6 max-w-sm mx-auto shadow-lg">
                 <blockquote className="text-lg italic text-slate-700 text-center">
                   "{about.quote.text}"
                 </blockquote>
                 <p className="text-slate-500 mt-3 text-center text-sm">— {about.quote.author}</p>
               </div>
             </div>

            {/* Story */}
            <div className="space-y-6">
              <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-slate-900 flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-red-500" />
                    {about.story.journey.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {about.story.journey.content}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-slate-900 flex items-center">
                    <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />
                    {about.story.vision.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {about.story.vision.content}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-slate-900 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-blue-500" />
                    {about.story.methodology.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {about.story.methodology.content}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Interests and Personality */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-center mb-8 text-slate-900">
              {about.interests.title}
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {about.interests.items.map((item, index) => {
                const icons = [Music, BookOpen, Target];
                const colors = [
                  { bg: 'bg-blue-100', hover: 'bg-blue-200', text: 'text-blue-600', hoverText: 'group-hover:text-blue-600' },
                  { bg: 'bg-green-100', hover: 'bg-green-200', text: 'text-green-600', hoverText: 'group-hover:text-green-600' },
                  { bg: 'bg-purple-100', hover: 'bg-purple-200', text: 'text-purple-600', hoverText: 'group-hover:text-purple-600' }
                ];
                const Icon = icons[index];
                const color = colors[index];
                
                return (
                  <div key={index} className="text-center group cursor-pointer">
                    <div className={`w-16 h-16 ${color.bg} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:${color.hover} transition-colors duration-300 group-hover:scale-110 transform`}>
                      <Icon className={`w-8 h-8 ${color.text} group-hover:animate-bounce`} />
                    </div>
                    <h4 className={`font-semibold text-slate-900 mb-2 ${color.hoverText} transition-colors`}>{item.title}</h4>
                    <p className="text-sm text-slate-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Floating Contact Button */}
          <div className="fixed bottom-6 right-6 z-50">
            <div className="relative group">
              {/* Main Button */}
              <button className="w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:scale-110">
                <MessageCircle className="w-6 h-6 text-white" />
              </button>
              
              {/* Contact Miniatures */}
              <div className="absolute bottom-16 right-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="flex flex-col space-y-3">
                                    {/* Contact Links */}
                  {getWhatsAppLink && (
                    <a 
                      href={getWhatsAppLink("Oi Victor, vi seu site e gostaria de conversar!")} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#25D366] hover:bg-[#1DA851] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
                    >
                      <MessageCircle className="w-5 h-5 text-white" />
                    </a>
                  )}

                  <a 
                    href="https://linkedin.com/in/victorhscampos" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#0077B5] hover:bg-[#005885] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>

                  <a 
                    href="mailto:victorhscampos@gmail.com" 
                    className="w-12 h-12 bg-[#EA4335] hover:bg-[#D33B2C] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
                  >
                    <Mail className="w-5 h-5 text-white" />
                  </a>

                  <a 
                    href="https://github.com/rotciWictor" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#333333] hover:bg-[#1a1a1a] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
