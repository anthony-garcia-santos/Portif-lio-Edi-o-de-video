'use client'

import { TrendingUp, Users, Eye, BarChart3, Share2, Flame } from 'lucide-react'

export default function Metrics() {
  const metrics = [
    {
      icon: Eye,
      label: 'Visualizações (Últimas 48h)',
      value: '1.412',
      description: 'Crescimento em tempo real',
    },
    {
      icon: Users,
      label: 'Novos Inscritos',
      value: '+5',
      description: 'Últimas 48 horas',
    },
    {
      icon: Share2,
      label: 'Fontes de Tráfego (Feed Shorts)',
      value: '95.3%',
      description: 'Principal origem de views',
    },
    {
      icon: Flame,
      label: 'Engajamento',
      value: 'Alto',
      description: 'Taxa de crescimento consistente',
    },
  ]

  return (
    <section id="analytics" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/50 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Analytics do Meu Canal
          </h2>
          <p className="text-lg text-muted-foreground">
            Números reais que comprovam qualidade e capacidade de gerar resultados
          </p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <div
                key={index}
                className="bg-card rounded-lg p-6 border border-border hover:border-accent transition hover:shadow-lg hover:shadow-accent/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-lg">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-sm text-muted-foreground mb-1">{metric.label}</h3>
                <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-2">
                  {metric.value}
                </p>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </div>
            )
          })}
        </div>

        {/* Analytics Image */}
        <div className="relative bg-card rounded-lg overflow-hidden border border-border shadow-lg">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-q3DXPWaxP2PwjcHnLt16968SnsRoHe.png"
            alt="YouTube Analytics"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg border border-primary/30">
          <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-accent" />
            Resultados Reais
          </h3>
          <ul className="space-y-3 text-foreground">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              Crescimento consistente: +1.412 views em 48 horas
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              95.3% do tráfego vem do Feed de Shorts (viralização)
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              Crescimento de inscritos em curto período
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              Estratégia de edição que gera engajamento alto
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
