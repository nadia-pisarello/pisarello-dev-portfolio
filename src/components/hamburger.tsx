export default function Hamburger() {
  return (
    <div className="justify-items-end m-4">
      <div
        id="hamburger"
        className="
      relative w-8 h-1 bg-black rounded-full
      before:content-[''] before:absolute before:w-8 before:h-1 before:bg-black
      before:rounded-full before:-translate-y-2 before:left-0
      after:content-[''] after:absolute after:w-8 after:h-1 after:bg-black
      after:rounded-full after:translate-y-2 after:left-0"
      ></div>
    </div>
  );
}
