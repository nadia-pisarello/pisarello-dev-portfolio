import ContactForm from "./contact-form";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-6 sm:py-8 mx-auto px-4 inset-shadow-sm shadow-sm bg-[color:var(--sextary)]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-10 mx-auto">
        <div className="flex flex-col gap-2 items-center justify-items-center w-full">
          <h2 className="text-3xl lg:text-6xl p-6 font-bold text-center w-full">
            Contact
          </h2>
          <p className="text-xl lg:text-2xl max-w-lg mb-4">
            I would love to hear from you! Feel free to reach out via email or
            connect with me on LinkedIn.
          </p>
          <ul className="grid grid-cols-2 gap-8">
            <li className="flex flex-row items-center gap-2 hover:text-[color:var(--primary)]">
              <img src="linkedin.png" alt="linkedin" className="size-6" />
              <a
                href="https://www.linkedin.com/in/nadia-pisarello"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li className="flex flex-row items-center gap-2 hover:text-[color:var(--primary)]">
              <img src="github.png" alt="github" className="size-6" />
              <a href="https://github.com/nadia-pisarello">GitHub</a>
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
