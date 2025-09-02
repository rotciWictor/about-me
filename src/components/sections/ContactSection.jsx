import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { MessageCircle, Mail, Linkedin, Github, Clock, Target } from 'lucide-react';
import { useSite } from '../../context/SiteContext';

const ContactSection = () => {
  const { contact, getWhatsAppLink } = useSite();

  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            {contact.title}
          </h2>
          <p className="text-xl text-slate-300 mb-12">{contact.subtitle}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-[#25D366] hover:bg-[#1DA851] transition-colors cursor-pointer text-white border-[#25D366]"
                  onClick={() => window.open(getWhatsAppLink("Oi Victor, vi seu site e preciso automatizar [descrever processo]. Como funciona o briefing técnico gratuito?"), '_blank')}>
              <CardHeader className="text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-4" />
                <CardTitle>WhatsApp</CardTitle>
                <CardDescription className="text-green-100">(Resposta Mais Rápida)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-green-100">Conversa direta sobre seu projeto</p>
              </CardContent>
            </Card>

            <Card className="bg-[#0077B5] hover:bg-[#005885] transition-colors cursor-pointer text-white border-[#0077B5]"
                  onClick={() => window.open('https://linkedin.com/in/victorhscampos', '_blank')}>
              <CardHeader className="text-center">
                <Linkedin className="w-12 h-12 mx-auto mb-4" />
                <CardTitle>LinkedIn</CardTitle>
                <CardDescription className="text-blue-100">Networking</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-blue-100">Conexões profissionais</p>
              </CardContent>
            </Card>

            <Card className="bg-[#EA4335] hover:bg-[#D33B2C] transition-colors cursor-pointer text-white border-[#EA4335]"
                  onClick={() => window.open('mailto:victorhscampos@gmail.com', '_blank')}>
              <CardHeader className="text-center">
                <Mail className="w-12 h-12 mx-auto mb-4" />
                <CardTitle>Email</CardTitle>
                <CardDescription className="text-red-100">Profissional</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-red-100">Para propostas formais e documentação</p>
              </CardContent>
            </Card>

            <Card className="bg-[#333333] hover:bg-[#1a1a1a] transition-colors cursor-pointer text-white border-[#333333]"
                  onClick={() => window.open('https://github.com/rotciWictor', '_blank')}>
              <CardHeader className="text-center">
                <Github className="w-12 h-12 mx-auto mb-4" />
                <CardTitle>GitHub</CardTitle>
                <CardDescription className="text-gray-100">Portfolio</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-100">Veja meus projetos e código</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-slate-800 border-slate-700 mb-8">
            <CardHeader>
              <CardTitle className="text-white">Compromisso de Atendimento:</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 text-slate-300">
                <div className="flex items-center space-x-3 justify-center">
                  <Clock className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-center">{contact.responseTime}</span>
                </div>
                <div className="flex items-center space-x-3 justify-center">
                  <Target className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-center">Briefing técnico gratuito</span>
                </div>
                <div className="flex items-center space-x-3 justify-center">
                  <MessageCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-center">Disponível: Seg-Sex, 9h-18h</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Indique um Amigo - Crescemos Juntos</h3>
            <p className="text-slate-300 mb-4">Conhece alguém atolado em planilhas? Me encaminha! 😉</p>
            <Button 
              className="bg-[#25D366] hover:bg-[#1DA851]"
              onClick={() => {
                const shareText = "Conheci o Victor, desenvolvedor que automatiza processos de negócios. Pode ser útil para você: " + window.location.href;
                const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              COMPARTILHAR NO WHATSAPP
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
