import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="overflow- relative h-screen  bg-primary">
      <video
        className=" absolute top-0 left-0 h-[130vh] w-full  object-cover opacity-20 mix-blend-overlay"
        autoPlay
        playsInline
        preload="lazy"
        muted
        loop
        src="/assets/videos/hero.mp4"
      ></video>
      <div className=" absolute h-[130vh] min-h-screen w-full bg-primary mix-blend-overlay"></div>

      <div className="relative flex h-full w-full flex-col items-center justify-center sm:h-[70vh] sm:justify-end">
        <div className=" mx-auto  flex   flex-col items-center justify-around text-white lg:flex-row ">
          <div className="flex flex-col">
            <h1 className="ml-[6rem] font-Oswald text-4xl lg:ml-[9rem] lg:translate-y-8  lg:text-6xl">
              Mohammedi
            </h1>
            <h1 className="font-Oswald text-6xl lg:text-8xl ">
              <span>Abde</span>
              <span className=" text-secondary">nasser</span>
            </h1>
          </div>

          <div className=" my-3 h-2 w-full bg-secondary lg:mx-6 lg:h-40 lg:w-2  "></div>

          <div className="mr-auto flex flex-col pb-7">
            <h1 className="font-Oswald text-5xl lg:translate-y-[18px] lg:translate-x-[33px]    lg:text-7xl">
              <span>Des</span>
              <span className="font-Oswald text-5xl  text-secondary lg:text-8xl">
                i
              </span>
              <span>gner</span>
            </h1>
            <h1 className="font-Oswald text-6xl lg:text-8xl ">
              <span>Dev</span>
              <span className="font-Oswald text-secondary lg:text-8xl">l</span>
              <span>oper</span>
            </h1>
          </div>
        </div>

        <p className="justify-start px-4 font-RobotoC font-thin text-white lg:max-w-[50rem]">
          Hi, I'm a fullstack web developer, based in Algeria.
          <br />I started coding late 2014, but my love for coding started at
          early age when I started coding with Pascal and Delphi 2. I Have
          always been fascinated by complex yet clean code, but Also by
          beautiful and elegant user interface Design.
        </p>

        <div className="my-5 flex flex-col font-Oswald text-lg text-white sm:flex-row">
          <Link href={'/about'}>
            <button
              className=" m-3 rounded-md border-2 border-secondary px-4 py-2 transition-all duration-300 hover:scale-110 "
              type="button"
            >
              About Me
            </button>
          </Link>
          <Link href={'#contact'}>
            <button
              className=" m-3 rounded-md border-2 bg-secondary px-4 py-2 text-primary transition-all duration-300 hover:scale-110"
              type="button"
            >
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
