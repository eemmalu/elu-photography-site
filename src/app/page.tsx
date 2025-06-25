export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row py-8 px-[14vw] gap-8 justify-center items-center">
        <div className="flex flex-col basis-6/10 gap-6">
          <div>
            <h2>Hi, I'm Emma!</h2>
            <div className="font-accent primary">(the photographer)</div>
          </div>
          <div className="flex">
            I’m committed to capturing your memories with love and care. You are
            unique and beautiful, and I believe your photos should reflect that!
            That’s why I spend time to make sure your shoot is tailored to you.
            Let’s make memories together.
          </div>
          <div className="flex">
            I have 4+ years of photography experience, and am currently pursuing
            my Bachelor’s at the University of Washington.
          </div>
        </div>
        <div className="basis-4/10 rounded-full">
          <img
            src="/emma.jpg"
            alt="Photo of the photographer"
            className="w-full object-contain overflow-hidden rounded-full"
          />
        </div>
      </div>
    </>
  );
}
