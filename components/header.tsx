'use client'

import { useState } from 'react'
import { Menu, X, Rocket } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-foreground font-bold text-lg">
            <Rocket size={24} />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Anthony Garcia
            </span>
            <span className="text-xs text-muted-foreground">Editor de Vídeos</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#videos" className="text-foreground hover:text-accent transition">Vídeos</a>
          <a href="#analytics" className="text-foreground hover:text-accent transition">Analytics</a>
          {/*<a href="#portfolio" className="text-foreground hover:text-accent transition">Portfólio</a>*/}
          <a href="#contact" className="px-6 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg hover:opacity-90 transition font-medium">
            Contatar
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b border-border p-4 md:hidden flex flex-col gap-4">
            <a href="#videos" className="text-foreground hover:text-accent transition">Vídeos</a>
            <a href="#analytics" className="text-foreground hover:text-accent transition">Analytics</a>
            <a href="#portfolio" className="text-foreground hover:text-accent transition">Portfólio</a>
            <a href="#contact" className="px-6 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg hover:opacity-90 transition font-medium inline-block">
              Contatar
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
