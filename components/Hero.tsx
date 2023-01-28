import Image from "next/image";

type HeroProps = {
  imageSource: string
};

function Hero({ imageSource }: HeroProps) {
  return (
    <div className="h-[18rem] md:h-[30rem] relative">
      <Image src={imageSource} alt="coffee" layout="fill" objectFit="cover" />
    </div>
  );
}

export default Hero;
