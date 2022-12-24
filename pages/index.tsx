import groq from "groq";
import Hero from "../components/Hero";
import client from "../lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import { Button } from "../components/Button";
import { GetStaticProps } from "next";
import Image from "next/image";
import Card from "../components/Card";
import { useRouter } from "next/router";

function urlFor(source) {
  return imageUrlBuilder(client).image(source).toString();
}

export default function Home(props) {
  const { hero, categories, shops } = props;
  const router = useRouter();
  return (
    <div className="mx-10">
      <Hero imageSource={urlFor(hero.mainImage)} />
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex space-y-1 my-8 flex-col leading-[30px] lg:leading-[50px] align-top body-text text-[40px] lg:text-[60px] text-green">
          <p>Find Your</p>
          <p>Atmosphere.</p>
        </div>
        <div className="border-t-4 border-green w-full" />
      </div>
      <div className="my-2 flex flex-row flex-wrap justify-start">
        {categories.map((category) => (
          <Button key={category.title} label={category.title} onClick={() => router.push(`/category/${category.slug.current}`)} />
        ))}
      </div>
      <div className="border-t-4 border-green w-full my-5" />
      <div className="grid grid-cols-1 grid-flow-row lg:grid-cols-2">
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


export const getStaticProps: GetStaticProps = async () => {
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
