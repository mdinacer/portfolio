export default function CodeSection() {
  const backEnd = [
    '.Net',
    'NodeJs',
    'Python / Django',
    'SQL Databases',
    'Entity Framework',
    'Flutter/Dart',
    'RestAPI',
  ].sort()

  return (
    <section className="flex h-[70vh] w-full -skew-y-[12deg] items-center justify-end overflow-hidden bg-dark">
      <div
        className={`absolute top-0 right-0 h-[140%] w-full -translate-y-[20%] skew-y-[12deg] bg-codeCover bg-cover bg-center opacity-20 mix-blend-overlay grayscale`}
      />
      <div className="mx-5 ml-auto   flex max-w-md translate-y-[0%] skew-y-[12deg] flex-col items-end text-white lg:m-36   ">
        <h1 className="font-Oswald text-8xl uppercase leading-normal">
          {'{C'}
          <span className="text-secondary">O</span>
          {'DE}'}
        </h1>
        <p className=" text-normal w-full px-4 py-2 text-right font-RobotoC">
          I mainly use .Net for backend development creating Rest and GraphQl
          APIs. <br />I also have used Python with Django, Flutter/Dart for
          mobile apps, so I&apos;m used to their syntax and patterns. <br />
          For databases I use PostgreSQL, but also used MySQL/mariaDb,
          MSSql/LocalDb and SQLite.
        </p>
        <div className="mt-3 flex max-w-sm flex-row flex-wrap justify-end">
          {backEnd.map((item, index) => (
            <div key={index} className="mr-1 mb-1 bg-light py-1 px-2 text-dark">
              <p className=" font-Oswald">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
