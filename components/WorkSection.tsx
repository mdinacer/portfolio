import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

type ProjectType = 'fullstack' | 'backend' | 'frontend'

export default function WorkSection() {
  return (
    <div className="pb-32">
      <MyWorkHeader />
      <section className="container relative flex min-h-[50vh]  translate-y-[10%] flex-col items-center justify-start pb-20 ">
        <div className="relative mx-auto grid grid-flow-row grid-cols-1 gap-4 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative flex h-auto w-80 flex-col  overflow-hidden rounded-xl bg-light shadow-dark"
            >
              <p className=" flex-initial font-RobotoC text-sm uppercase">
                {project.type}
              </p>

              {project.title}

              <div className="relative my-2 h-40 w-full overflow-hidden rounded-md">
                <Image
                  src={`/assets/images/projects/thumbnails/${project.image}`}
                  layout="fill"
                  alt={project.type}
                />
              </div>
              <p className="pr- flex-auto font-RobotoC text-sm font-light">
                {project.desc}
              </p>
              <div className="flex-wra mt-3 flex max-w-sm flex-row justify-around">
                {project.items.map((item, index) => (
                  <div
                    key={index}
                    className="mr-1 mb-1 w-full bg-dark py-1 px-2 text-light"
                  >
                    <p className="font-RobotoC text-sm font-light">{item}</p>
                  </div>
                ))}
              </div>
              <div className="my-2">
                <a href={project.link} target={'_blank'} rel="noreferrer">
                  <div className="flex flex-row items-center">
                    <FontAwesomeIcon
                      className=" m-1 h-4 w-4"
                      icon={faLink}
                    ></FontAwesomeIcon>
                    <p className="mx-2 font-RobotoC text-sm ">{project.link}</p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function MyWorkHeader() {
  return (
    <section className="relative z-20 flex h-auto w-full skew-y-[12deg] items-center justify-center overflow-hidden  bg-primary shadow-lg shadow-[#50132b] lg:-translate-y-[20%]">
      <video
        className=" absolute top-0 left-0 h-[200%] w-full -translate-y-[23%] -skew-y-[12deg] object-cover opacity-50 mix-blend-overlay"
        autoPlay
        playsInline
        preload="lazy"
        muted
        loop
        src="/assets/videos/video.mp4"
      ></video>

      <div className="  -skew-y-[12deg] flex-col px-10 py-24 text-white">
        <h1 className=" translate-y-8 font-Oswald text-6xl uppercase ">
          M<span className=" text-secondary ">Y</span>
        </h1>
        <h1 className="font-Oswald text-8xl uppercase leading-normal">
          W<span className="text-9xl text-secondary">O</span>
          RK
        </h1>
      </div>
    </section>
  )
}

const projects = [
  {
    id: 1,
    type: 'Restaurant / E-commerce',
    title: (
      <h1 className="text-black flex flex-initial flex-row items-center font-Oswald text-3xl uppercase leading-normal">
        <span>{`<{`}</span>
        <span className=" text-primary">OH</span>
        <span>FOOD</span>
        <span>{`}/>`}</span>
      </h1>
    ),
    desc: 'A Restaurant website for showcasing your receipts and also provide Order/Delivery service for customers.',
    items: ['NET6', 'POSTGRES', 'React', 'Material UI'],
    link: 'https://oh-food.herokuapp.com',
    image: 'ohfood.jpg',
  },

  {
    id: 2,
    type: 'Portfolio',
    title: (
      <h1 className="text-black mb-2 flex flex-initial flex-row items-center font-Oswald text-3xl uppercase">
        <span>{`<`}</span>
        <span className=" text-primary">LOLA</span>
        <span>DECO</span>
        <span>{`/>`}</span>
      </h1>
    ),
    desc: "A seamstress' portfolio showcasing her work and her contact and social media links.",
    items: ['React', 'NextJs', 'TailwindCSS'],
    link: 'https://lola-deco.netlify.app/',
    image: 'loladeco.jpg',
  },

  {
    id: 3,
    type: 'Toys Shop / E-commerce',
    title: (
      <h1 className="text-black  flex-initial font-Oswald text-3xl uppercase leading-normal">
        <span>{`<LA `}</span>
        <span className=" text-primary">CASA </span>
        <span>DES ENFANTS</span>
        <span>{`/>`}</span>
      </h1>
    ),
    desc: 'A Toys Shop e-commerce website, mixed between simplicity for adults and colors and drawings for kids',
    items: ['React', 'NextJs', 'TailwindCSS'],
    link: 'https://casadesenfants.netlify.app/',
    image: 'casa.jpg',
  },
]
