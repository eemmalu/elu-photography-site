import Image from "next/image";

type CarouselSlideProps = {
    image: string;
}

export default function CarouselSlide({image}: CarouselSlideProps) {
    return (
        <div className="w-[calc(15vh*4)] shrink-0">
            {/* <img src={image} className="px-1"/> */}
            <Image src={image} alt="Carousel showcase photo" className="px-1 object-contain overflow-hidden" width={500} height={500}></Image>
        </div>
    );
}