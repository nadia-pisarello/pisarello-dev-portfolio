export default function Hero() {
  return (
    <section id="home" className="pt-5 px-4 max-w-4xl mx-auto">
      <div className="flex flex-col gap-4 items-center justify-items-center w-full">
        <img
          src="nakadev.svg"
          alt="logotipo de nakama dev"
          className="lg:w-32 lg:h-32 w-28 h-28"
        />
        <h1
          id="fullname"
          className="text-6xl lg:text-7xl px-8 font-medium tracking-wide text-center w-full text-neutral-700
          font-poppins"
        >
          nadia pisarello
        </h1>
        <h2 className="uppercase tracking-widest font-medium text-3xl lg:text-4xl ">
          nakama dev
        </h2>
        <p className="text-2xl lg:text-3xl text-justify p-8">
          Welcome to my portfolio! I’m a passionate developer dedicated to
          creating engaging and interactive experiences. Take a look at my
          projects and feel free to get in touch!
        </p>
      </div>
    </section>
  );
}
