import React from 'react'
import { GraduationCap, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <GraduationCap className="h-8 w-8 text-primary-400" />
              <span className="text-2xl font-bold">EduManager</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Sistema completo de gestão escolar desenvolvido para modernizar e 
              simplificar a administração de instituições de ensino.
            </p>
            
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {[
                'Dashboard',
                'Gestão de Alunos',
                'Gestão de Professores',
                'Disciplinas',
                'Horários',
                'Configurações'
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">contato@edumanager.pt</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">+351 123 456 789</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">Lisboa, Portugal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 EduManager. Todos os direitos reservados.
            </p>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
                Suporte
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer