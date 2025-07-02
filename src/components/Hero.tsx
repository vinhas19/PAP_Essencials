import React from 'react'
import { ArrowRight, Play, Users, BookOpen, Calendar } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-bounce-subtle"></span>
              Sistema Completo de Gestão Escolar
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Gerencie sua
              <span className="gradient-text block">Escola com</span>
              <span className="gradient-text">Eficiência</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Uma solução completa para administração escolar com gestão de alunos, professores, 
              disciplinas, horários e muito mais. Interface moderna e intuitiva.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="btn-hover inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Explorar Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              
              <button className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 transform hover:scale-105">
                <Play className="mr-2 h-5 w-5" />
                Ver Vídeo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg mb-3 mx-auto">
                  <Users className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Alunos</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg mb-3 mx-auto">
                  <BookOpen className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Disciplinas</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg mb-3 mx-auto">
                  <Calendar className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Automatizado</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Visual */}
          <div className="relative animate-slide-up">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sistema de Gestão Escolar"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg glass animate-bounce-subtle">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Sistema Online</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg glass">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">98%</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Satisfação</div>
                </div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-2xl transform rotate-6 scale-105 opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero