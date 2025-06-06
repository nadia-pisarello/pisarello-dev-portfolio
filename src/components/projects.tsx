export default function Projects() {
  return (
    <section id="projects" className="p-8 pb-12 mx-auto px-4 shadow-sm">
      <div className="flex flex-col gap-4 items-center justify-items-center w-full">
        <h2 className="text-4xl lg:text-6xl font-bold text-center w-full px-8 pb-6">
          Projects
        </h2>
        <p className="text-2xl lg:text-3xl text-justify max-w-2xl">
          Here are some of the projects I have worked on. Feel free to explore
          and reach out if you have any questions!
        </p>
      </div>
      <div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <li className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <a
              href="https://centro-athena.vercel.app"
              target="_blank"
              className="text-blue-500"
            >
              <h3 className="text-xl text-[color:var(--quaternary)] font-semibold mb-2">
                Sistema de Gestión para Athena Centro de Estética y Nutrición
              </h3>
              <p className="text-gray-700 mb-4">
                A brief description of the project goes here. It can include
                technologies used, features, and any other relevant information.
              </p>
              View Project
            </a>
          </li>
          <li className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <a href="#" className="text-blue-500">
              <h3 className="text-xl text-[color:var(--quaternary)] font-semibold mb-2">
                Project Title 2
              </h3>
              <p className="text-gray-700 mb-4">
                A brief description of the project goes here. It can include
                technologies used, features, and any other relevant information.
              </p>
              View Project
            </a>
          </li>
          {/* Add more projects as needed */}
        </ul>
      </div>
    </section>
  );
}
