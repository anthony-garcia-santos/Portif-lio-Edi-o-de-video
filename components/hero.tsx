'use client';

import { Star, Zap } from 'lucide-react'
import { useEffect, useState } from 'react';

type Particle = {
  left: string;
  top: string;
  animationDelay: string;
};

export default function Hero() {
  const channelLink = "https://www.youtube.com/channel/UCag8y4M7oJwgPEEh2-Cwm7w"
  const whatsappLink = "https://wa.me/5524988193941"

  // tipagem correta aqui
  const [stars, setStars] = useState<Particle[]>([]);

  useEffect(() => {
    const generatedStars: Particle[] = [];

    for (let i = 0; i < 20; i++) {
      generatedStars.push({
        left: Math.random() * 100 + "%",
        top: Math.random() * 100 + "%",
        animationDelay: Math.random() * 3 + "s"
      });
    }

    setStars(generatedStars);
  }, []);

  return (
    <section className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 gradient-sideral"></div>

      {/* Efeito de estrelas — agora 100% client-side */}
      <div className="absolute inset-0 opacity-20">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full star"
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.animationDelay
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Star className="w-5 h-5 text-accent" fill="currentColor" />
          <span className="text-accent font-semibold">Editor de Vídeos Profissional</span>
          <Star className="w-5 h-5 text-accent" fill="currentColor" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance glow-text">
          Transforme seus Vídeos em <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Obras-Primas</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-10 text-balance">
          Edição profissional com criatividade sideral. Aumento comprovado de visualizações, inscritos e engajamento.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a 
            href={channelLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition text-lg flex items-center justify-center gap-2 group"
          >
            <Zap className="w-5 h-5 group-hover:animate-pulse" />
            Ver Meu Canal
          </a>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition text-lg border border-primary/20"
          >
            Chamar no WhatsApp
          </a>
        </div>

        <p className="text-muted-foreground text-sm">
          📱 (24) 98819-3941 • anthony.garcia.santos17@gmail.com
        </p>
      </div>
    </section>
  )
}
