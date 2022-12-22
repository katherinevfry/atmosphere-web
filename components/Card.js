import Image from "next/image"

export default function Card({name, categories, mainImage, address, website}) {
    const handleClick = (website) => {
        window.location = website;
    }
    return(
        <div className="flex flex-col w-full lg:w-[460px] xl:w-[500px] my-4 lg:my-10 lg:mx-10">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <p className="body-text mb-2 text-green text-[30px] w-[120px] leading-[30px] pr-12">
            {name}.
          </p>
          <div className="border-t-2 border-green w-full my-5" />
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-4">
          <div className="flex flex-col lg:w-[65%] my-4 lg:self-end">
            <div className="hidden lg:block border-t-2 border-green w-full my-5" />
            <p className="body-text text-green text-[24px] leading-[20px] justify-start">
              Good for...
            </p>
            <div className="my-2 flex flex-row flex-wrap justify-start">
              {categories.map((category) => (
                <div key={category.title} className="bg-pink inline-flex items-center justify-center py-1 px-2 rounded-2xl text-green body-text text-[14px] m-1">{category.title}</div>
              ))}
            </div>
          </div>
          <div className="border-r-2 border-green h-full mx-4" />
          <div className="flex flex-col space-y-3 align-center order-first lg:order-none">
                <Image className="rounded-lg" src={mainImage} alt="coffee" height={200} width={300} objectFit="cover"/>
                <p className="body-text text-green text-[14px]">{address}</p>
                <button onClick={() => {handleClick(website)}} className="outline outline-2 outline-green rounded-3xl py-1 px-3 body-text hover:underline hover:decoration-wavy hover:decoration-green hover:underline-offset-2 text-green">Learn More.</button>
          </div>
        </div>
        <div className="flex flex-row justify-center lg:hidden">
        <svg className="w-6 h-6 stroke-pink" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
        <svg className="w-6 h-6 stroke-pink" fill="none"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
        <svg className="w-6 h-6 stroke-pink" fill="none"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
        </div>
      </div>
    )
}