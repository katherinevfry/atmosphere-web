import client from "../../lib/sanity";
import groq from "groq";
import Hero from "../../components/Hero";
import imageUrlBuilder from "@sanity/image-url";
import { Button } from "../../components/Button";
import Card from "../../components/Card";
import { useRouter } from "next/router";

function urlFor(source) {
    return imageUrlBuilder(client).image(source).toString();
  }
  

export default function CategoryPage(props) {
  const { hero, currentCat, shops, categories } = props;
  const router = useRouter();
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
          <Button
            key={category.title}
            label={category.title}
            onClick={() => router.push(`/category/${category.slug.current}`)}
            activeCat={currentCat.title === category.title}
          />
        ))}
      </div>
      <div className="border-t-4 border-green w-full my-5" />
      <div className="grid grid-cols-1 grid-flow-row md:grid-cols-2">
        {shops.map((shop) => (
          <Card
            key={shop.title}
            name={shop.name}
            categories={shop.categories}
            mainImage={urlFor(shop.mainImage)}
            address={shop.address}
            website={shop.website}
          />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
    const heroQuery = groq`*[_type == "hero"][0]`;
    const categoryQuery = groq`*[_type == "category"]`;
    const slugsQuery = groq`*[_type == "category" && slug.current == $slug][0]`;
    const currentCat = await client.fetch(slugsQuery, {
    slug: params.slug,
  });
    const shopsQuery = groq`*[_type=="shop" && references(*[_type== "category" && title=="${currentCat.title}"]._id)]{
        categories[]->{title, slug},
        mainImage,
        address,
        website,
        name
      }`;

  const shops = await client.fetch(shopsQuery);
  const hero = await client.fetch(heroQuery);
  const categories = await client.fetch(categoryQuery)

  return {
    props: {
      currentCat,
      shops,
      hero,
      categories
    },
  };
}

export const slugQuery = `
  *[_type == "category" && defined(slug.current)][].slug.current
`;

export async function getStaticPaths() {
  const response = await client.fetch(slugQuery);
  const paths = response.map((slug) => `/category/${slug}`);
  return { paths, fallback: false };
}
