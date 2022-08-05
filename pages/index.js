import groq from "groq";
import Hero from "../components/Hero";
import client from "../lib/sanity";
import imageUrlBuilder from "@sanity/image-url";

function urlFor(source) {
  return imageUrlBuilder(client).image(source).toString();
}

export default function Home(props) {
 const { hero } = props;
  return (
    <>
     <Hero imageSource={urlFor(hero.mainImage)}/>
     <div className="flex flex-row items-center">
     <div className="flex space-y-1 ml-10 my-10 flex-col leading-[50px] align-top body-text text-[60px] text-green ">
      <p>Find Your</p>
      <p>Atmosphere.</p>
     </div>
     <div className=" border-t-4 border-green w-full mr-10"/>
     </div>
     </>
  )
}

const query = groq`*[_type == "hero"][0]`;

export async function getStaticProps() {
  const hero = await client.fetch(query);

  return {
    props: {
      hero,
    },
  };
}
