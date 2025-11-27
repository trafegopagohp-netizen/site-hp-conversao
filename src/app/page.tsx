"use client";

import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, TrendingUp, Target, Users, Zap, Instagram, Mail, Flame, Droplet, Snowflake } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const whatsappLink = "https://wa.me/556184540374?text=Ol%C3%A1!%20gostaria%20de%20saber%20mais%20sobre%20o%20%20servi%C3%A7o%20da%20HP%20tr%C3%A1fego%20pago.";

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section com MacBook Animado */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern Animado */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* MacBook Pro 2025 Animado no Fundo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
          <div className="relative w-[800px] h-[500px] transform rotate-[5deg] perspective-1000">
            {/* MacBook Body */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl border-4 border-gray-800">
              {/* Screen */}
              <div className="absolute top-4 left-4 right-4 bottom-16 bg-black rounded-lg overflow-hidden">
                {/* Gráfico Animado na Tela */}
                <div className="w-full h-full flex items-center justify-center p-8">
                  <svg className="w-full h-full" viewBox="0 0 400 300">
                    {/* Grid */}
                    <line x1="50" y1="250" x2="350" y2="250" stroke="#333" strokeWidth="2"/>
                    <line x1="50" y1="50" x2="50" y2="250" stroke="#333" strokeWidth="2"/>
                    
                    {/* Linha de Lucro Crescente Animada - Verde */}
                    <path
                      d="M 50 240 L 100 220 L 150 200 L 200 160 L 250 120 L 300 70 L 350 40"
                      stroke="#10B981"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                      className="animate-draw-chart"
                    />
                    
                    {/* Pontos */}
                    <circle cx="50" cy="240" r="6" fill="#10B981" className="animate-pulse"/>
                    <circle cx="100" cy="220" r="6" fill="#10B981" className="animate-pulse" style={{animationDelay: '0.2s'}}/>
                    <circle cx="150" cy="200" r="6" fill="#10B981" className="animate-pulse" style={{animationDelay: '0.4s'}}/>
                    <circle cx="200" cy="160" r="6" fill="#10B981" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
                    <circle cx="250" cy="120" r="6" fill="#10B981" className="animate-pulse" style={{animationDelay: '0.8s'}}/>
                    <circle cx="300" cy="70" r="6" fill="#10B981" className="animate-pulse" style={{animationDelay: '1s'}}/>
                    <circle cx="350" cy="40" r="6" fill="#10B981" className="animate-pulse" style={{animationDelay: '1.2s'}}/>
                    
                    {/* Labels */}
                    <text x="200" y="280" fill="#666" fontSize="14" textAnchor="middle">Tempo</text>
                    <text x="20" y="150" fill="#666" fontSize="14" textAnchor="middle" transform="rotate(-90 20 150)">Lucro</text>
                    <text x="200" y="30" fill="#10B981" fontSize="20" fontWeight="bold" textAnchor="middle">📈 CRESCIMENTO</text>
                  </svg>
                </div>
              </div>
              {/* Keyboard */}
              <div className="absolute bottom-2 left-4 right-4 h-12 bg-gray-900 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Conteúdo Hero */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight relative">
            {/* Texto Cursivo Ciano Atrás (Efeito Moderno) */}
            <span className="absolute inset-0 text-cyan-500 opacity-20 blur-sm transform -translate-x-2 -translate-y-2 font-cursive italic">
              Transforme Cliques em Vendas
            </span>
            <span className="relative text-white">
              Transforme Cliques
            </span>
            <br />
            <span className="relative bg-gradient-to-r from-cyan-500 to-cyan-400 bg-clip-text text-transparent">
              em Vendas
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Gestão completa de <span className="text-cyan-400 font-semibold">Tráfego Pago</span> para 
            <span className="text-gray-100 font-semibold"> Negócios Locais</span> e 
            <span className="text-cyan-400 font-semibold"> E-commerce</span>
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 group"
          >
            Quero Vender Mais Agora
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </a>

          {/* Indicadores de Confiança - REMOVIDO ROI MÉDIO E CLIENTES SATISFEITOS */}
          <div className="mt-16 grid grid-cols-1 gap-8 max-w-md mx-auto">
            <div className="flex flex-col items-center backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all">
              <div className="text-4xl font-bold text-cyan-400 mb-2">+500</div>
              <div className="text-gray-400">Campanhas Criadas</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-500 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Sobre a HP Tráfego Pago */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Sobre a <span className="text-cyan-400">HP Tráfego Pago</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 backdrop-blur-sm bg-white/5 p-8 rounded-3xl border border-gray-700/50">
              <p className="text-xl text-gray-300 leading-relaxed">
                Somos especialistas em <span className="text-cyan-400 font-semibold">transformar investimento em resultados</span>. 
                Nossa missão é escalar seu negócio através de estratégias de tráfego pago personalizadas e otimizadas.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                Com <span className="text-white font-semibold">gestão completa das campanhas</span>, análise de dados em tempo real 
                e otimização constante, garantimos que cada real investido traga o máximo retorno possível.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                Não trabalhamos com achismos. Trabalhamos com <span className="text-emerald-500 font-semibold">dados, estratégia e resultados mensuráveis</span>.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                <TrendingUp className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Resultados</h3>
                <p className="text-gray-400">Foco total em conversão e ROI</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-blue-500/20 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <Target className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Estratégia</h3>
                <p className="text-gray-400">Planejamento personalizado</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-emerald-500/20 hover:border-emerald-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20">
                <Zap className="w-12 h-12 text-emerald-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Agilidade</h3>
                <p className="text-gray-400">Otimização constante</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-500/20 hover:border-gray-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/20">
                <Users className="w-12 h-12 text-gray-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Suporte</h3>
                <p className="text-gray-400">Atendimento dedicado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Rápidos */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-cyan-500 rounded-full"
                style={{
                  width: Math.random() * 4 + 2 + 'px',
                  height: Math.random() * 4 + 2 + 'px',
                  top: Math.random() * 100 + '%',
                  left: Math.random() * 100 + '%',
                  animation: `float ${Math.random() * 10 + 5}s ease-in-out infinite`,
                  animationDelay: Math.random() * 5 + 's'
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Por Que Escolher a <span className="text-cyan-400">HP?</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-start gap-4 bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
              <CheckCircle2 className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Mais Clientes Todos os Dias</h3>
                <p className="text-gray-400">Atraia leads qualificados constantemente e aumente sua base de clientes de forma previsível.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <CheckCircle2 className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Anúncios Otimizados</h3>
                <p className="text-gray-400">Campanhas testadas e ajustadas diariamente para garantir o melhor custo por aquisição.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm p-6 rounded-2xl border border-emerald-500/20 hover:border-emerald-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20">
              <CheckCircle2 className="w-8 h-8 text-emerald-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Estratégias Personalizadas</h3>
                <p className="text-gray-400">Cada negócio é único. Criamos estratégias sob medida para seu público e objetivos.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-500/20 hover:border-gray-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/20">
              <CheckCircle2 className="w-8 h-8 text-gray-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Gestão Completa das Campanhas</h3>
                <p className="text-gray-400">Você foca no seu negócio enquanto cuidamos de toda a operação de tráfego pago.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gradient-to-br from-gray-800/80 to-black/80 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 md:col-span-2">
              <CheckCircle2 className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Resultados Mensuráveis e Escaláveis</h3>
                <p className="text-gray-400">Relatórios transparentes com métricas claras. Veja exatamente onde seu dinheiro está sendo investido e o retorno gerado.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/50"
            >
              Quero Saber Como Funciona
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Quem Atendemos */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Quem <span className="text-cyan-400">Atendemos</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trabalhamos com diversos segmentos, sempre focados em gerar resultados reais e escaláveis
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Negócios Locais */}
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/50">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Negócios Locais</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Restaurantes e Bares
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Clínicas e Consultórios
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Academias e Studios
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Salões de Beleza
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  Lojas Físicas
                </li>
              </ul>
            </div>

            {/* E-commerce */}
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">E-commerce</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Lojas Virtuais
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Dropshipping
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Marketplaces
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Infoprodutos
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Cursos Online
                </li>
              </ul>
            </div>

            {/* Geral */}
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-emerald-500/30 hover:border-emerald-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/50">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Geral</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  Advogados
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  Contadores
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  Arquitetos
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  Consultores
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  Coaches
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50"
            >
              Preciso de Tráfego Pago
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Seção do Funil - Público Frio → Morno → Quente */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Nossa <span className="text-cyan-400">Estratégia de Funil</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transformamos visitantes desconhecidos em clientes fiéis através de um processo estratégico e comprovado
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Público Frio */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-900/30 to-blue-950/30 backdrop-blur-sm p-8 rounded-2xl border-2 border-blue-500/50 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50">
                    <Snowflake className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-center text-blue-400">Público Frio</h3>
                <p className="text-gray-300 text-center mb-6">
                  Pessoas que <span className="text-blue-400 font-semibold">nunca ouviram falar</span> da sua marca
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-400">Anúncios de conscientização</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-400">Conteúdo educativo e relevante</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-400">Primeira impressão impactante</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-400">Segmentação precisa por interesse</p>
                  </div>
                </div>
              </div>
              {/* Seta para próxima etapa */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <ArrowRight className="w-8 h-8 text-cyan-400" />
              </div>
            </div>

            {/* Público Morno */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-900/30 to-orange-950/30 backdrop-blur-sm p-8 rounded-2xl border-2 border-orange-500/50 hover:border-orange-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/50">
                    <Droplet className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-center text-orange-400">Público Morno</h3>
                <p className="text-gray-300 text-center mb-6">
                  Pessoas que <span className="text-orange-400 font-semibold">já conhecem</span> sua marca e demonstram interesse
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-400">Remarketing estratégico</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-400">Provas sociais e depoimentos</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-400">Ofertas e benefícios exclusivos</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-400">Nutrição com conteúdo de valor</p>
                  </div>
                </div>
              </div>
              {/* Seta para próxima etapa */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <ArrowRight className="w-8 h-8 text-cyan-400" />
              </div>
            </div>

            {/* Público Quente */}
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-950/30 backdrop-blur-sm p-8 rounded-2xl border-2 border-cyan-500/50 hover:border-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50">
                    <Flame className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-center text-cyan-400">Público Quente</h3>
                <p className="text-gray-300 text-center mb-6">
                  Pessoas <span className="text-cyan-400 font-semibold">prontas para comprar</span> e se tornar clientes
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-400">Ofertas irresistíveis</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-400">Urgência e escassez</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-400">Facilidade no processo de compra</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-400">Conversão otimizada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Explicação do Funil */}
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/30 max-w-4xl mx-auto hover:border-cyan-500/50 transition-all">
            <h3 className="text-2xl font-bold mb-6 text-center">Como Funciona na Prática</h3>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                <span className="text-blue-400 font-semibold">1. Público Frio:</span> Criamos campanhas de conscientização para alcançar pessoas que ainda não conhecem sua marca. Usamos segmentação avançada para encontrar seu público ideal e apresentar sua solução de forma impactante.
              </p>
              <p className="leading-relaxed">
                <span className="text-orange-400 font-semibold">2. Público Morno:</span> Através de remarketing inteligente, reengajamos visitantes que demonstraram interesse. Mostramos provas sociais, depoimentos e ofertas especiais para nutrir o relacionamento e construir confiança.
              </p>
              <p className="leading-relaxed">
                <span className="text-cyan-400 font-semibold">3. Público Quente:</span> Para quem está pronto para comprar, criamos ofertas irresistíveis com senso de urgência. Otimizamos cada etapa do processo de conversão para maximizar suas vendas.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50"
            >
              Quero Implementar Essa Estratégia
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        {/* Background Effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-emerald-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Pronto Para <span className="text-cyan-400">Escalar Suas Vendas?</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Não deixe seus concorrentes saírem na frente. Comece hoje mesmo a atrair mais clientes e aumentar seu faturamento com tráfego pago profissional.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-12 py-6 rounded-full text-2xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 group w-full sm:w-auto justify-center"
            >
              Falar Agora com o Especialista
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all hover:scale-105">
              <CheckCircle2 className="w-10 h-10 text-emerald-500 mb-3" />
              <p className="text-gray-300">Sem Contratos Longos</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-blue-500/20 hover:border-blue-500/50 transition-all hover:scale-105">
              <CheckCircle2 className="w-10 h-10 text-blue-500 mb-3" />
              <p className="text-gray-300">Suporte Dedicado</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:scale-105">
              <CheckCircle2 className="w-10 h-10 text-cyan-400 mb-3" />
              <p className="text-gray-300">Resultados Garantidos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-black border-t border-gray-800 py-12 relative overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo e Descrição */}
            <div className="flex flex-col items-center md:items-start">
              <div className="relative w-32 h-32 mb-4 opacity-60">
                <Image
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/ef82ae95-216c-4bd6-b791-da94f179a5b1.png"
                  alt="HP Tráfego Pago"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-gray-400 text-center md:text-left">
                Transformando cliques em vendas reais
              </p>
            </div>

            {/* Contato */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-4 text-white">Contato</h3>
              <div className="space-y-3">
                <a
                  href="https://www.instagram.com/hpagencyads/?hl=pt-br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors justify-center md:justify-start"
                >
                  <Instagram className="w-5 h-5" />
                  @hpagencyads
                </a>
                <a
                  href="mailto:trafegopagohp@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors justify-center md:justify-start"
                >
                  <Mail className="w-5 h-5" />
                  trafegopagohp@gmail.com
                </a>
              </div>
            </div>

            {/* CTA Rápido */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-4 text-white">Comece Agora</h3>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
              >
                Aumentar Minhas Vendas
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500">
              © {new Date().getFullYear()} HP Tráfego Pago. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none group"
        aria-label="Falar no WhatsApp"
      >
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="absolute -top-1 -right-1 bg-cyan-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-bounce">
          1
        </span>
      </a>

      <style jsx>{`
        @keyframes draw-chart {
          from {
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        .animate-draw-chart {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw-chart 3s ease-in-out forwards;
        }

        .font-cursive {
          font-family: 'Brush Script MT', cursive;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}
