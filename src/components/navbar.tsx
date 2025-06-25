import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav className="font-serif w-full py-6 px-8 flex flex-row justify-between">
        <div className="font-black">Emma Lu Photography</div>
        <div className="flex flex-row gap-[calc(2px+3vw)] italic">
          <Link href="#">Home</Link>
          <Link href="#">Portfolio</Link>
          <Link href="#">Book Me</Link>
        </div>
      </nav>
      <hr className="h-px neutral bg-neutral border-0"/>
    </>
  );
}
