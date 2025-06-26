type CarouselSlideProps = {
    image: string;
}

export default function CarouselSlide({image}: CarouselSlideProps) {
    return (
        <div className="w-[400px] shrink-0">
            <img src={image} className="px-1"/>
        </div>
    );
}