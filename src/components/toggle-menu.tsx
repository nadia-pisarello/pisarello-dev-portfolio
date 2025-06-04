export default function ToggleMenu() {
  return (
    <div className="grid place-content-left mt-4">
      <div
        className="
        relative bg-transparent w-8 h-1 rounded-full
        before:content-[''] before:absolute before:w-8 before:h-1 before:bg-black
        before:rounded-full before:rotate-45 before:top-0 hover:before:bg-[color:var(--secondary)]
        after:content-[''] after:absolute after:w-8 after:h-1 after:bg-black
        after:rounded-full after:-rotate-45 after:top-0 hover:after:bg-[color:var(--secondary)]
      "
      ></div>
    </div>
  );
}
