import Image from "next/image";

function Hero({ imageSource }) {
  return (
    <div className="h-[30rem] mt-10 mx-10 relative">
      <Image className="rounded-lg" src={imageSource} alt="coffee" layout="fill" objectFit="cover" />
    </div>
  );
}

export default Hero;
