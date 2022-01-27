import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <footer
      id="contact"
      className=" text-black relative h-full min-h-[40vh] 
   w-full bg-dark p-10 py-10"
    >
      <div className="flex h-full flex-col justify-between lg:container">
        <h1 className="my-5 font-Oswald text-5xl text-white">Contact me</h1>
        <div className="relative z-10  mt-auto grid grid-flow-row   grid-cols-1 gap-4 p-4 font-Oswald md:grid-cols-2 lg:grid-cols-4">
          <a
            href="tel:+213662991735"
            className="col-span-1 flex flex-col items-center rounded-md bg-[#25D366] py-3 px-5  text-white transition-all duration-700 hover:bg-[#25D366] md:bg-dark  lg:scale-90 lg:hover:scale-110 "
          >
            <FontAwesomeIcon
              className=" m-1 h-8 w-8"
              icon={faPhone}
            ></FontAwesomeIcon>
            +213 662 991 735
          </a>
          <a
            href="mailto:mdi.nacer@outlook.com"
            className="rounded-md bg-[#EA4335] py-3 px-5 text-white transition-all duration-700 hover:bg-[#EA4335] md:bg-dark lg:scale-90 lg:hover:scale-110"
          >
            <div className="flex flex-col items-center">
              <FontAwesomeIcon
                className=" m-1 h-8 w-8  "
                icon={faMailBulk}
              ></FontAwesomeIcon>
              <p className="">mdi.nacer@outlook.com</p>
            </div>
          </a>
          <a
            href="https://github.com/mdinacer"
            target={'_blank'}
            className="flex flex-col items-center rounded-md bg-purple py-3 px-5 text-white transition-all duration-700 hover:bg-purple md:bg-dark lg:scale-90 lg:hover:scale-110"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className=" m-1 h-8 w-8"
              icon={faGithub}
            ></FontAwesomeIcon>
            <p className="uppercase">Github</p>
          </a>

          <a
            href="https://www.facebook.com/mdi.nacer.5"
            rel="noreferrer"
            target={'_blank'}
            className="flex flex-col items-center rounded-md bg-[#4267B2] py-3 px-5 text-white transition-all duration-700 hover:bg-[#4267B2] md:bg-dark lg:scale-90 lg:hover:scale-110"
          >
            <FontAwesomeIcon
              className=" m-1 h-8 w-8"
              icon={faFacebook}
            ></FontAwesomeIcon>
            <p className="uppercase">Facebook</p>
          </a>
        </div>
      </div>
      <div
        className={`bg-fill  bg-contactBg absolute bottom-0 left-0 right-0 top-0 z-[1] my-auto h-full w-full bg-fixed mix-blend-overlay grayscale`}
      ></div>
    </footer>
  )
}
