export default function About() {
  return (
    <section
      id="about"
      className="p-8 pb-12 mx-auto flex flex-col items-center inset-shadow-sm bg-[color:var(--sextary)] dark:bg-neutral-800"
    >
      <h2 className="text-4xl lg:text-6xl text-gray-400 font-bold text-center w-full px-8 pb-6 text-stroke">
        About Me
      </h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl p-10 justify-center bg-white rounded-3xl drop-shadow-md drop-shadow-[color:var(--secondary)]/20">
        <article id="intro" className="items-center shadow-sm rounded-lg p-5">
          <p className="flex flex-col items-center">
            <img
              src="begannings.png"
              alt="begannings"
              className="size-44 object-cover opacity-80 rounded-full mb-5"
            />
            My journey in tech began thanks to my sister, and since then, I’ve
            been fascinated by how ideas can be brought to life through
            functional and engaging interfaces.
          </p>
        </article>
        <article
          id="philosophy"
          className="items-center shadow-sm rounded-lg p-5"
        >
          <p className="flex flex-col items-center">
            <img
              src="nakamaStack.png"
              alt="Stack"
              className="size-44 object-cover opacity-80 rounded-full mb-5"
            />
            My personal mantra is: "Gratitude enriches, complaining
            impoverishes". I believe curiosity, humility, and a good attitude
            make all the difference in this ever-evolving world.
          </p>
        </article>
        <article id="stack" className="items-center shadow-sm rounded-lg p-5">
          <p className="flex flex-col items-center">
            <img
              src="nakamaStack.png"
              alt="Stack"
              className="size-44 object-cover opacity-70 rounded-full mb-5"
            />
            I mainly work with technologies like NestJS, TypeScript, Node.js,
            React, and lately, I've been enjoying exploring Next.js. While I
            initially leaned toward backend development, I currently feel more
            comfortable on the frontend — though I believe that understanding
            both sides is essential to building great products and collaborating
            effectively.
          </p>
        </article>
        <article
          id="collaboration"
          className="items-center shadow-sm rounded-lg p-5"
        >
          <p className="flex flex-col items-center">
            <img
              src="nakamaStack.png"
              alt="Stack"
              className="size-44 object-cover opacity-70 rounded-full mb-5"
            />
            I love designing interfaces and solving problems, especially when I
            can do it with someone else — teamwork inspires me and sparks new
            ideas. I'm constantly learning, researching, asking questions when
            needed, and always trying to enjoy the journey, even when things get
            tough.
          </p>
        </article>
        <article
          id="goals-future "
          className="items-center shadow-sm rounded-lg p-5"
        >
          <p className="flex flex-col items-center">
            <img
              src="nakamaStack.png"
              alt="Stack"
              className="size-44 object-cover opacity-70 rounded-full mb-5"
            />
            Right now, I’m focused on entering the world of app development and
            I’m ready to take the leap into the tech industry. I'm still
            figuring out what sets me apart, but I know I want to build things
            that matter. 🚀
          </p>
        </article>
      </div>
    </section>
  );
}
