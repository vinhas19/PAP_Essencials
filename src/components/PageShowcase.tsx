import React from 'react'
import { Link } from 'react-router-dom'
import { 
  BarChart3, 
  Users, 
  BookOpen, 
  GraduationCap, 
  Calendar, 
  FileText, 
  Settings,
  ExternalLink
} from 'lucide-react'

const PageShowcase: React.FC = () => {
  const pages = [
    {
      id: 'dashboard',
      title: 'Dashboard',
      description: 'Visão geral completa com estatísticas, gráficos e indicadores importantes do sistema.',
      icon: BarChart3,
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-blue-500 to-blue-600',
      features: ['Estatísticas em tempo real', 'Gráficos interativos', 'Indicadores de desempenho']
    },
    {
      id: 'students',
      title: 'Gestão de Alunos',
      description: 'Sistema completo para cadastro, edição e acompanhamento de alunos.',
      icon: Users,
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-green-500 to-green-600',
      features: ['Cadastro completo', 'Controle de assiduidade', 'Filtros avançados']
    },
    {
      id: 'teachers',
      title: 'Gestão de Professores',
      description: 'Registo e gestão de professores, disciplinas e horários de trabalho.',
      icon: GraduationCap,
      image: 'https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-purple-500 to-purple-600',
      features: ['Perfis de professores', 'Disciplinas lecionadas', 'Carga horária']
    },
    {
      id: 'subjects',
      title: 'Disciplinas',
      description: 'Gestão completa de disciplinas, salas de aula e recursos educacionais.',
      icon: BookOpen,
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-orange-500 to-orange-600',
      features: ['Cadastro de disciplinas', 'Salas de aula', 'Recursos necessários']
    },
    {
      id: 'timetables',
      title: 'Horários',
      description: 'Geração automática e gestão de horários escolares para todas as turmas.',
      icon: Calendar,
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-red-500 to-red-600',
      features: ['Geração automática', 'Conflitos evitados', 'Visualização clara']
    },
    {
      id: 'files',
      title: 'Gestão de Ficheiros',
      description: 'Sistema de arquivos para documentos, relatórios e backup de dados.',
      icon: FileText,
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-teal-500 to-teal-600',
      features: ['Backup automático', 'Organização de ficheiros', 'Acesso rápido']
    },
    {
      id: 'settings',
      title: 'Configurações',
      description: 'Personalização completa do sistema, temas e estrutura organizacional.',
      icon: Settings,
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-indigo-500 to-indigo-600',
      features: ['Temas personalizados', 'Estrutura escolar', 'Preferências do sistema']
    }
  ]

  return (
    <section id="showcase" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Explore as
            <span className="gradient-text block">Páginas do Sistema</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Cada página foi cuidadosamente desenvolvida para proporcionar a melhor experiência de gestão escolar
          </p>
        </div>

        {/* Pages Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {pages.map((page, index) => (
            <div
              key={page.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={page.image}
                  alt={page.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${page.color} opacity-80`}></div>
                <div className="absolute top-4 left-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl">
                    <page.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Link
                    to={`/demo/${page.id}`}
                    className="inline-flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-200"
                  >
                    <ExternalLink className="h-5 w-5 text-white" />
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {page.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {page.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {page.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  to={`/demo/${page.id}`}
                  className="btn-hover inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Ver Página
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
            Sistema completo e funcional
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Pronto para revolucionar a gestão da sua escola?
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore todas as funcionalidades e veja como o nosso sistema pode transformar 
            a administração da sua instituição de ensino.
          </p>
          
          <button className="btn-hover inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Começar Agora
            <ExternalLink className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default PageShowcase