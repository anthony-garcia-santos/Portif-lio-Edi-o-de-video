'use client'

import { Mail, MessageCircle } from 'lucide-react'

export default function CTA() {
  const whatsappLink = "https://wa.me/5524988193941"
  const emailLink = "mailto:anthony.garcia.santos17@gmail.com"

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-purple-600 to-accent">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
          Pronto para Revolucionar seus Vídeos?
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-8 text-balance">
          Entre em contato e vamos discutir como posso elevar seus vídeos com edição profissional e criativa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-primary-foreground text-primary rounded-lg font-semibold hover:opacity-90 transition text-lg flex items-center justify-center gap-2 group"
          >
            <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
            WhatsApp: (24) 98819-3941
          </a>
          <a
            href={emailLink}
            className="px-8 py-4 bg-transparent text-primary-foreground border-2 border-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/10 transition text-lg flex items-center justify-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Email
          </a>
        </div>
        <p className="text-primary-foreground/70 text-sm mt-8">
          Respondo em até 2 horas • Orçamento gratuito
        </p>
      </div>
    </section>
  )
}
