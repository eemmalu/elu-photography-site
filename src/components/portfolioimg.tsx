type PortfolioImageProps = {
    image: string
}

export default function PortfolioImage({image} : PortfolioImageProps) {
    return (
        <img
          src={`/portfolio/${image}.jpg`}
          className="object-contain rounded-sm"
        />
    );
}