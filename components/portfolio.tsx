export default function Portfolio() {
  const works = [
    {
      id: 1,
      title: 'Edição Cinematic',
      category: 'Vídeo Profissional',
      image: '/cinematic-video-editing-color-grading.jpg',
      description: 'Edição completa com correção de cor, efeitos visuais e sound design profissional',
    },
    {
      id: 2,
      title: 'Motion Graphics 3D',
      category: 'Animação',
      image: '/3d-motion-graphics-animation-intro.jpg',
      description: 'Animações profissionais em 3D e efeitos visuais para intros impactantes',
    },
    {
      id: 3,
      title: 'Reels e Shorts Virais',
      category: 'Conteúdo Digital',
      image: '/instagram-reels-viral-short-form-video.jpg',
      description: 'Conteúdo otimizado para redes sociais com alta performance e viralização',
    },
  ]

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Portfólio de Trabalhos
          </h2>
          <p className="text-lg text-muted-foreground">
            Projetos selecionados que demonstram meu diferencial e expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <div
              key={work.id}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition h-full hover:shadow-lg hover:shadow-accent/20"
            >
              <div className="relative h-72 overflow-hidden bg-muted">
                <img
                  src={work.image || "/placeholder.svg"}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-accent font-semibold mb-2">{work.category}</p>
                <h3 className="text-2xl font-bold text-foreground mb-2">{work.title}</h3>
                <p className="text-muted-foreground mb-4">{work.description}</p>
                <button className="text-accent font-semibold hover:text-primary transition">
                  Ver Detalhes →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
