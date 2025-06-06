export default function Contact() {
  return (
    <section
      id="contact"
      className="py-8 px-4 mx-auto bg-[color:var(--sextary)]"
    >
      <div className="flex flex-col gap-[16px] items-center justify-items-center w-full h-screen">
        <h2 className="text-4xl lg:text-7xl p-8 font-bold text-center w-full">
          Contact
        </h2>
        <p className="text-2xl lg:text-5xl text-justify px-8">
          I would love to hear from you! Feel free to reach out via email or
          connect with me on LinkedIn.
        </p>
      </div>
    </section>
  );
}
