import Head from 'next/head'
import CodeSection from '../components/CodeSection'
import DesignSection from '../components/DesignSection'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import WorkSection from '../components/WorkSection'

const frontEnd = [
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'React',
  'Angular',
  'TailWindCSS',
  'Bootstrap',
  'Material UI',
].sort()

const backEnd = [
  '.Net',
  'NodeJs',
  'Python / Django',
  'SQL Databases',

  'Entity Framework',
  'Flutter/Dart',
  'RestAPI',
].sort()

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href={'/site.webmanifest'} />
        <meta property="og:title" content="MDI Nacer Portfolio" />
        <meta
          property="og:description"
          content="Mohammedi Abdenasser web developer Portfolio."
        />
        <meta
          property="og:image"
          content="
          /preview.jpg"
        />
      </Head>

      <main className="h-full w-full bg-light">
        <div className="relative h-screen w-full bg-primary">
          <HeroSection />
        </div>
        <div className="bg-primary">
          <DesignSection />
        </div>
        <CodeSection />
        <WorkSection />
      </main>

      <Footer />
    </div>
  )
}

//https://vod-progressive.akamaized.net/exp=1643168988~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3853%2F14%2F369268136%2F1529329930.mp4~hmac=4e4919b0eeaacc167d99b01a95f080b9643a409b6e1e9f8298502611eadcdabc/vimeo-prod-skyfire-std-us/01/3853/14/369268136/1529329930.mp4?download=1&filename=video.mp4

//https://vod-progressive.akamaized.net/exp=1643170238~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2394%2F22%2F561971096%2F2657522954.mp4~hmac=c8c6054590c656a6c73cb34dc1760109a2cee7e1afef286f87c05fb831430efe/vimeo-prod-skyfire-std-us/01/2394/22/561971096/2657522954.mp4?download=1&filename=pexels-rostislav-uzunov-8303104.mp4

//https://vod-progressive.akamaized.net/exp=1643170421~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2713%2F21%2F538569592%2F2552351901.mp4~hmac=0996ad948759d9e41914e26e1336c402cab779d27779651ffe579de3e1e2561f/vimeo-prod-skyfire-std-us/01/2713/21/538569592/2552351901.mp4?download=1&filename=pexels-mart-production-7565462.mp4

//https://vod-progressive.akamaized.net/exp=1643170772~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4885%2F22%2F574425766%2F2713906592.mp4~hmac=905b4d79f2fb9eefe1f1c73ff64e3f743f85bc49593b58e931b1270f7924c7e7/vimeo-prod-skyfire-std-us/01/4885/22/574425766/2713906592.mp4?download=1&filename=pexels-crazy-motions-8733062.mp4
