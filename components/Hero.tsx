import Image from "next/legacy/image";

type HeroProps = {
  imageSource: string
};

function Hero({ imageSource }: HeroProps) {
  return (
    <div className="h-[12rem] md:h-[20rem] relative">
      <Image src={imageSource} alt="coffee" layout="fill" objectFit="cover" />
    </div>
  );
}

export default Hero;
