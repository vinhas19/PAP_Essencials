import React from 'react'
import { 
  Users, 
  BookOpen, 
  Calendar, 
  BarChart3, 
  Settings, 
  FileText,
  Shield,
  Smartphone,
  Clock
} from 'lucide-react'

const Features: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Gestão de Alunos',
      description: 'Cadastro completo de alunos com informações pessoais, académicas e de contacto. Controle de assiduidade e notas.',
      color: 'bg-blue-500'
    },
    {
      icon: BookOpen,
      title: 'Gestão de Professores',
      description: 'Registo de professores, disciplinas lecionadas e horários. Acompanhamento de carga horária e disponibilidade.',
      color: 'bg-green-500'
    },
    {
      icon: Calendar,
      title: 'Horários Automáticos',
      description: 'Geração automática de horários escolares considerando disponibilidade de professores e salas de aula.',
      color: 'bg-purple-500'
    },
    {
      icon: BarChart3,
      title: 'Dashboard Analítico',
      description: 'Visão geral com estatísticas importantes, gráficos de desempenho e indicadores de gestão escolar.',
      color: 'bg-orange-500'
    },
    {
      icon: FileText,
      title: 'Gestão de Disciplinas',
      description: 'Cadastro de disciplinas, salas de aula, carga horária e classificação entre teóricas e práticas.',
      color: 'bg-red-500'
    },
    {
      icon: Settings,
      title: 'Configurações Avançadas',
      description: 'Personalização completa do sistema com temas, estrutura de horários e configurações específicas.',
      color: 'bg-indigo-500'
    },
    {
      icon: Shield,
      title: 'Segurança de Dados',
      description: 'Sistema seguro com backup automático, controle de acesso e proteção de dados pessoais.',
      color: 'bg-teal-500'
    },
    {
      icon: Smartphone,
      title: 'Interface Responsiva',
      description: 'Design moderno e responsivo que funciona perfeitamente em computadores, tablets e smartphones.',
      color: 'bg-pink-500'
    },
    {
      icon: Clock,
      title: 'Tempo Real',
      description: 'Atualizações em tempo real, notificações automáticas e sincronização instantânea de dados.',
      color: 'bg-yellow-500'
    }
  ]

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Funcionalidades
            <span className="gradient-text block">Completas</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tudo o que precisa para gerir a sua instituição de ensino de forma eficiente e moderna
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 ${feature.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
            Pronto para começar?
          </div>
          
          <button className="btn-hover inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Explorar Todas as Funcionalidades
            <BarChart3 className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Features