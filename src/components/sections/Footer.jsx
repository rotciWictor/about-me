import React from 'react';
import { useSite } from '../../context/SiteContext';

const Footer = () => {
  const { footer, site } = useSite();
  return (
    <footer className="bg-slate-900 text-slate-400 py-8">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-white mb-4">Garantias e Políticas:</h4>
              <ul className="space-y-2 text-sm">
                <li>• Privacidade: Seus dados protegidos (LGPD)</li>
                <li>• Pagamento: 50% início + 50% aprovação final</li>
                <li>• Suporte: 45 dias incluído em todo projeto</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Tecnologia:</h4>
              <p className="text-sm">Powered by Vite + React</p>
              <p className="text-sm">Este site demonstra as capacidades técnicas aplicadas aos seus projetos</p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} - {footer.copyright}</p>
            <p className="text-xs text-slate-500 mt-2">{footer.cnpj}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
