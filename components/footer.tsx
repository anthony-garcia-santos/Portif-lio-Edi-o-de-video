import { Mail, Linkedin, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-1 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-foreground font-bold text-sm">
                ▶
              </div>
              <span className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Anthony Garcia
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Editor profissional com foco em edição criativa e resultados comprovados
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#videos" className="text-muted-foreground hover:text-accent transition">Vídeos</a></li>
              <li><a href="#analytics" className="text-muted-foreground hover:text-accent transition">Analytics</a></li>
              {/*<li><a href="#portfolio" className="text-muted-foreground hover:text-accent transition">Portfólio</a></li>*/}
            </ul>
          </div>

          {/*<div>
            <h4 className="font-semibold text-foreground mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-accent transition">Edição de Vídeo</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition">Motion Graphics</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition">Consultoria</a></li>
            </ul>
          </div>*/}

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contato & Redes</h4>
            <div className="space-y-2 text-sm mb-4">
              <p className="text-muted-foreground">📱 (24) 98819-3941</p>
              <p className="text-muted-foreground">📧 anthony.garcia.santos17@gmail.com</p>
            </div>
            <div className="flex gap-4">
              <a href="https://www.youtube.com/channel/UCag8y4M7oJwgPEEh2-Cwm7w" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/tony_garcia_santos/" className="text-muted-foreground hover:text-accent transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:anthony.garcia.santos17@gmail.com" className="text-muted-foreground hover:text-accent transition">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Anthony Garcia • Editor de Vídeos Profissional</p>
        </div>
      </div>
    </footer>
  )
}
