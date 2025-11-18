'use client'

import { Play } from 'lucide-react'

export default function VideoGallery() {
  const videos = [
    {
      id: 1,
      title: 'Ruyter e a fabrica de dinheiro',
      thumbnail: '/Tumb.jpg',
      views: '1.4K',
      url: 'https://www.youtube.com/shorts/xO_3We97eSs',
    },

    // ---------------------------
    // VÍDEOS ANTIGOS (DESATIVADOS)
    // ---------------------------
    /*
    {
      id: 2,
      title: 'Edição Cinematic',
      thumbnail: '/cinematic-video-editing.jpg',
      views: '2.3K',
      url: 'https://www.youtube.com/channel/UCag8y4M7oJwgPEEh2-Cwm7w',
    },
    {
      id: 3,
      title: 'Motion Graphics',
      thumbnail: '/abstract-motion-graphics.png',
      views: '1.8K',
      url: 'https://www.youtube.com/channel/UCag8y4M7oJwgPEEh2-Cwm7w',
    },
    {
      id: 4,
      title: 'Short Viral',
      thumbnail: '/viral-short-video.jpg',
      views: '5.2K',
      url: 'https://www.youtube.com/channel/UCag8y4M7oJwgPEEh2-Cwm7w',
    },
    {
      id: 5,
      title: 'Edição Dramática',
      thumbnail: '/dramatic-video-editing.jpg',
      views: '3.1K',
      url: 'https://www.youtube.com/channel/UCag8y4M7oJwgPEEh2-Cwm7w',
    },
    {
      id: 6,
      title: 'Collab Profissional',
      thumbnail: '/professional-collaboration-video.jpg',
      views: '2.7K',
      url: 'https://www.youtube.com/channel/UCag8y4M7oJwgPEEh2-Cwm7w',
    },
    */
  ];

  return (
    <section id="videos" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
          Últimos Vídeos Editado
        </h2>
        <p className="text-lg text-muted-foreground">
          Conheça os trabalhos recentes que mostram minha qualidade e criatividade
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <a
            key={video.id}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-accent transition cursor-pointer"
          >
            <div className="relative h-64 overflow-hidden bg-muted">
              <img
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                className="w-full h-full object-contain scale-100 mx-auto transition duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
                <Play className="w-16 h-16 text-accent opacity-0 group-hover:opacity-100 transition" fill="currentColor" />
              </div>
              <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                {video.views} views
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-foreground text-lg">{video.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">Clique para assistir</p>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://www.youtube.com/channel/UCag8y4M7oJwgPEEh2-Cwm7w"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition"
        >
          Ir para canal
        </a>
      </div>
    </section>
  )
}
