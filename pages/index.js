import groq from "groq";
import Hero from "../components/Hero";
import client from "../lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import { Button } from "../components/Button";
import Image from "next/image";
import Card from "../components/Card";

function urlFor(source) {
  return imageUrlBuilder(client).image(source).toString();
}

export default function Home(props) {
  const { hero, categories, shops } = props;
  console.log(shops);
  return (
    <div className="mx-10">
      <Hero imageSource={urlFor(hero.mainImage)} />
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="flex space-y-1 my-8 flex-col leading-[30px] md:leading-[50px] align-top body-text text-[40px] md:text-[60px] text-green">
          <p>Find Your</p>
          <p>Atmosphere.</p>
        </div>
        <div className="border-t-4 border-green w-full" />
      </div>
      <div className="my-2 flex flex-row flex-wrap justify-start">
        {categories.map((category) => (
          <Button key={category.title} label={category.title} />
        ))}
      </div>
      <div className="border-t-4 border-green w-full my-5" />
      <div className="flex flex-col md:flex-row md:space-between">
        {shops.map((shop) => (
          <Card key={shop.title} name={shop.name} categories={shop.categories} mainImage={urlFor(shop.mainImage)} address={shop.address} website={shop.website} />
        ))}
      </div>
    </div>
  );
}

const heroQuery = groq`*[_type == "hero"][0]`;
const categoryQuery = groq`*[_type == "category"]`;
const shopsQuery = groq`*[_type == "shop"]{
  categories[]->{title, slug},
  mainImage,
  address,
  website,
  name
}`;

export async function getStaticProps() {
  const hero = await client.fetch(heroQuery);
  const categories = await client.fetch(categoryQuery);
  const shops = await client.fetch(shopsQuery);

  return {
    props: {
      hero,
      categories,
      shops,
    },
  };
}
