export default function DesignSection() {
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

  return (
    <section className="relative flex h-[70vh] w-full -skew-y-[12deg] items-center justify-start overflow-hidden  bg-light">
      <div
        className={`absolute top-0 right-0 h-[150%] w-full -translate-y-[17%] skew-y-[12deg] bg-designCover bg-cover bg-bottom mix-blend-overlay`}
      />
      <div className="mx-5 flex max-w-md  skew-y-[12deg] flex-col items-start lg:mx-28 ">
        <h1 className="font-Oswald text-8xl uppercase leading-normal">
          {'<D'}
          <span className="relative z-[3] text-primary">E</span>
          {'sign/>'}
        </h1>
        <p className=" w-full px-4 py-2 font-RobotoC text-lg ">
          Putting Javascript / Typescript, Angular/React, aside, I use multiple
          known theming frameworks like TailwindCss (my crush actually),
          Bootstrap and Material UI and of course sometime there is no way
          around some vanilla CSS/SCSS.
        </p>
        <div className="mt-3 flex max-w-sm  flex-row flex-wrap">
          {frontEnd.map((item, index) => (
            <div key={index} className="mr-1 mb-1 bg-dark py-1 px-2 text-light">
              <p className=" font-Oswald">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
