import Header from '@/components/header'
import Hero from '@/components/hero'
import VideoGallery from '@/components/video-gallery'
import Metrics from '@/components/metrics'
// import Portfolio from '@/components/portfolio'
import CTA from '@/components/cta'
import Footer from '@/components/footer'
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <VideoGallery />
      <Metrics />
     {/* <Portfolio /> */}
      <CTA />
      <Footer />
    </main>
  )
}
