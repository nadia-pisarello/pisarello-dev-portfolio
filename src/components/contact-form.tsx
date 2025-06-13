export default function ContactForm() {
  return (
    <div
      id="contact-form"
      className="flex items-center justify-center bg-white rounded-lg p-8 mx-4 shadow-sm"
    >
      <form action="" method="post" className="w-full max-w-md">
        <div className="flex flex-col gap-4">
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Name"
          ></input>
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
          ></input>
          <input
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="subject"
            type="text"
            placeholder="Subject"
          ></input>
          <textarea
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            typeof="text"
            placeholder="Type your message here"
          ></textarea>
          <div className="flex justify-between sm:justify-center items-center sm:gap-16">
            <input
              className="shadow bg-[color:var(--primary)] hover:bg-[color:var(--secondary)] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              value="Send email"
            ></input>
            <input
              className="shadow bg-[color:var(--primary)] hover:bg-[color:var(--secondary)] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="reset"
              value="Reset fields"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}
