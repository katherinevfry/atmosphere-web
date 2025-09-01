import Image from "next/image";

type HeroProps = {
  imageSource: string
};

function Hero({ imageSource }: HeroProps) {
  return (
    <div className="h-[12rem] md:h-[20rem] relative">
      <Image
        src={imageSource}
        alt="coffee"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover"
        }} />
    </div>
  );
}

export default Hero;
