import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'

const DemoPage: React.FC = () => {
  const { page } = useParams<{ page: string }>()

  const pageInfo = {
    dashboard: {
      title: 'Dashboard',
      description: 'Visão geral completa do sistema com estatísticas e indicadores importantes.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    students: {
      title: 'Gestão de Alunos',
      description: 'Sistema completo para cadastro, edição e acompanhamento de alunos.',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    teachers: {
      title: 'Gestão de Professores',
      description: 'Registo e gestão de professores, disciplinas e horários.',
      image: 'https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    subjects: {
      title: 'Disciplinas',
      description: 'Gestão completa de disciplinas e recursos educacionais.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    timetables: {
      title: 'Horários',
      description: 'Geração automática e gestão de horários escolares.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    files: {
      title: 'Gestão de Ficheiros',
      description: 'Sistema de arquivos e backup de dados.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    settings: {
      title: 'Configurações',
      description: 'Personalização completa do sistema e preferências.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200'
    }
  }

  const currentPage = page && pageInfo[page as keyof typeof pageInfo] ? pageInfo[page as keyof typeof pageInfo] : pageInfo.dashboard

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="inline-flex items-center px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Voltar ao Início
              </Link>
            </div>
            
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Demo - {currentPage.title}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {currentPage.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {currentPage.description}
          </p>
        </div>

        {/* Demo Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Demo Image */}
          <div className="relative h-96 bg-gradient-to-r from-primary-500 to-secondary-500">
            <img
              src={currentPage.image}
              alt={currentPage.title}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-2xl font-bold mb-2">{currentPage.title}</h2>
              <p className="text-white/90">{currentPage.description}</p>
            </div>
          </div>

          {/* Demo Features */}
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Funcionalidades Principais
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {getPageFeatures(page || 'dashboard').map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
                Esta é uma demonstração visual
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                O código completo desta página está disponível no projeto original.
                Esta demonstração mostra como seria a interface final.
              </p>
              
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Ver Mais Páginas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function getPageFeatures(page: string) {
  const features = {
    dashboard: [
      { title: 'Estatísticas em Tempo Real', description: 'Dados atualizados automaticamente' },
      { title: 'Gráficos Interativos', description: 'Visualização clara de dados' },
      { title: 'Indicadores de Desempenho', description: 'KPIs importantes da escola' },
      { title: 'Resumo de Atividades', description: 'Visão geral das operações' },
      { title: 'Alertas e Notificações', description: 'Avisos importantes em destaque' },
      { title: 'Acesso Rápido', description: 'Links diretos para outras páginas' }
    ],
    students: [
      { title: 'Cadastro Completo', description: 'Informações pessoais e académicas' },
      { title: 'Controle de Assiduidade', description: 'Acompanhamento de presenças' },
      { title: 'Filtros Avançados', description: 'Busca por múltiplos critérios' },
      { title: 'Edição em Massa', description: 'Alterações para múltiplos alunos' },
      { title: 'Relatórios Personalizados', description: 'Exportação de dados' },
      { title: 'Histórico Académico', description: 'Registo completo do percurso' }
    ],
    teachers: [
      { title: 'Perfis Detalhados', description: 'Informações completas dos professores' },
      { title: 'Disciplinas Lecionadas', description: 'Gestão de matérias por professor' },
      { title: 'Carga Horária', description: 'Controle de horas de trabalho' },
      { title: 'Disponibilidade', description: 'Gestão de horários livres' },
      { title: 'Avaliações', description: 'Sistema de feedback' },
      { title: 'Contactos', description: 'Informações de contacto atualizadas' }
    ],
    subjects: [
      { title: 'Cadastro de Disciplinas', description: 'Registo completo de matérias' },
      { title: 'Salas de Aula', description: 'Gestão de espaços físicos' },
      { title: 'Recursos Necessários', description: 'Equipamentos e materiais' },
      { title: 'Carga Horária', description: 'Horas semanais por disciplina' },
      { title: 'Pré-requisitos', description: 'Dependências entre disciplinas' },
      { title: 'Classificação', description: 'Teóricas vs práticas' }
    ],
    timetables: [
      { title: 'Geração Automática', description: 'Criação inteligente de horários' },
      { title: 'Resolução de Conflitos', description: 'Evita sobreposições automáticamente' },
      { title: 'Visualização Clara', description: 'Interface intuitiva e organizada' },
      { title: 'Edição Manual', description: 'Ajustes personalizados quando necessário' },
      { title: 'Múltiplas Turmas', description: 'Gestão de várias turmas simultaneamente' },
      { title: 'Exportação', description: 'Impressão e partilha de horários' }
    ],
    files: [
      { title: 'Backup Automático', description: 'Proteção automática de dados' },
      { title: 'Organização Inteligente', description: 'Estrutura clara de ficheiros' },
      { title: 'Acesso Rápido', description: 'Busca e recuperação eficiente' },
      { title: 'Versionamento', description: 'Histórico de alterações' },
      { title: 'Partilha Segura', description: 'Controle de acesso por utilizador' },
      { title: 'Sincronização', description: 'Dados sempre atualizados' }
    ],
    settings: [
      { title: 'Temas Personalizados', description: 'Modo claro e escuro' },
      { title: 'Estrutura Escolar', description: 'Configuração de anos e turmas' },
      { title: 'Preferências do Sistema', description: 'Personalização da interface' },
      { title: 'Gestão de Utilizadores', description: 'Controle de acesso e permissões' },
      { title: 'Backup e Restauro', description: 'Proteção e recuperação de dados' },
      { title: 'Notificações', description: 'Configuração de alertas' }
    ]
  }

  return features[page as keyof typeof features] || features.dashboard
}

export default DemoPage