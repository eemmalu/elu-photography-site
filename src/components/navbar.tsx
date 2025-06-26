import Link from "next/link";

export default function NavBar() {
  return (
    <div className="bg-bg1 sticky top-0 z-50">
      <nav className="font-serif w-full py-4 px-8 flex flex-row justify-between">
        <div className="font-black">Emma Lu Photography</div>
        <div className="flex flex-row gap-[calc(2px+3vw)] italic">
          <Link href="/" className="transition duration-300 ease-in-out hover:scale-110">Home</Link>
          <Link href="/portfolio" className="transition duration-300 ease-in-out hover:scale-110">Portfolio</Link>
          <Link href="/book" className="transition duration-300 ease-in-out hover:scale-110">Book Me</Link>
        </div>
      </nav>
      <hr className="h-px neutral bg-neutral border-0"/>
    </div>
  );
}
