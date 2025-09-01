import Image from "next/image"
import { Button } from "./Button";

type CardProps = {
  name: string,
  categories: {
    title: string
  }[] | string[],
  mainImage: string,
  address: string,
  website: string,
  handleCategoryClick?: (arg0: string[]) => void,
};

export default function Card({name, categories, mainImage, address, website, handleCategoryClick}: CardProps) {
    const handleClick = () => {
        window.open(website, '_blank')
    }

    const handleAddressClick = () => {
      const queryString = address.split(' ').join('+');
      const site = `https://www.google.com/maps/place/${queryString}`;
      window.open(site, '_blank')
    }

    return (
      <div className="flex p-4 rounded-3xl border-2 border-green flex-col w-full lg:w-[460px] xl:w-[500px] my-4 lg:my-6 lg:mx-10">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <p className="body-text mb-2 text-green text-[30px] w-[300px] leading-[30px] pr-12">
            {name}.
          </p>
        </div>
        <div className="flex justify-center align-center flex-col lg:flex-row lg:space-x-4">
          <div className="flex flex-col space-y-3 align-center justify-center order-first lg:order-none">
                <Image
                  className="rounded-lg"
                  src={mainImage}
                  alt="coffee"
                  height={200}
                  width={300}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "cover"
                  }} />
                <Button label="Take Me There." onClick={() => handleAddressClick()} style="outline"/>
                <Button label="Learn More." onClick={() => {handleClick()}} style="outline"/>
          </div>
          <div className="flex flex-col lg:w-[65%] my-4">
            <p className="body-text pt-2 text-green text-[24px] leading-[20px] justify-center">
              Good for...
            </p>
            <div className="my-2 flex flex-row flex-wrap justify-start">
              {categories.map((category) => (
                <Button key={category.title || category} label={category.title || category} onClick={() => handleCategoryClick([category.title || category])} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center lg:hidden">
        <svg className="w-6 h-6 stroke-pink" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
        <svg className="w-6 h-6 stroke-pink" fill="none"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
        <svg className="w-6 h-6 stroke-pink" fill="none"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
        </div>
      </div>
    );
}