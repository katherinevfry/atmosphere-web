import groq from "groq";
import client from "../lib/sanity";
import Hero from "../components/Hero";
import imageUrlBuilder from "@sanity/image-url";
import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import Card from "../components/Card";
import { AnimatePresence, motion } from "framer-motion";

function urlFor(source) {
  return imageUrlBuilder(client).image(source).toString();
}

const StartHere = ({ goToNext, hero }) => (
  <>
    <Hero imageSource={urlFor(hero.mainImage)} />
    <div className="mx-4 lg:mx-10">
      <div className="flex flex-col">
        <div className="flex space-y-1 my-8 flex-col leading-[28px] lg:leading-[40px] align-top body-text text-[30px] lg:text-[50px] text-green">
          <p className="body-text text-green">
            Life&apos;s too short to drink bad coffee in a lame coffee shop.
            Let&apos;s find your atmosphere.
          </p>
        </div>
      </div>
      <Button
        label="Okay let's do this"
        style="outline"
        onClick={() => goToNext(1)}
      />
    </div>
  </>
);

const ChooseCats = ({
  goToNext,
  categories,
  setSelectedCats,
  selectedCats,
}) => {
  const handleCatClick = (category) => {
    if (selectedCats.includes(category)) {
      setSelectedCats(selectedCats.filter((cat) => cat !== category));
    } else {
      setSelectedCats([...selectedCats, category]);
    }
  };
  return (
    <div className="mx-4 lg:mx-10">
      <div className="flex flex-col">
        <div className="flex space-y-1 my-8 flex-col leading-[28px] lg:leading-[40px] align-top body-text text-[30px] lg:text-[50px] text-green">
          <p className="body-text text-green">
            This is just like those choose-your-own adventure novels you read as
            a kid. Pick up to three categories from the list below. Let&apos;s
            see where your taste takes you.
          </p>
        </div>
      </div>
      <div className="my-2 flex flex-row flex-wrap justify-start">
        {categories.map((category) => (
          <Button
            key={category.title}
            disabled={selectedCats.length >= 3}
            activeCat={selectedCats.includes(category.title)}
            label={category.title}
            onClick={() => handleCatClick(category.title)}
          />
        ))}
      </div>
      <div className="mt-6 lg:mt-10">
        <Button
          label="See what happens"
          style="outline"
          disabled={selectedCats.length < 1}
          onClick={() => goToNext(2)}
        />
      </div>
    </div>
  );
};

const ShowShops = ({ selectedCats, setSelectedCats, shops, reset }) => {
  const [filteredShops, setFilteredShops] = useState([]);

  useEffect(() => {
    const getFilteredShops = (shopCats, selected) =>
    selected.every((s) => shopCats.includes(s));

  const filteredShopsArray = shops.filter((shop) =>
    getFilteredShops(shop.categories, selectedCats)
  );
    setFilteredShops(filteredShopsArray)
  }, [selectedCats, shops])
  

  return (
    <div className="flex flex-col justify-center">
      <div className="flex p-3 space-y-2 my-8 mx-4 lg:mx-10 flex-col justify-center align-center body-text text-green">
        <p className="body-text text-green leading-[28px] lg:leading-[40px] text-[30px] lg:text-[50px]">Your atmosphere is...</p>
        <div className="self-center lg:self-start">
        {selectedCats.map((cat) => (
          <p
            className="bg-pink inline-flex items-center justify-center py-2 px-3 
            rounded-3xl text-green body-text m-1"
            key={cat}
          >
            {cat}
          </p>
        ))}
        </div>
      </div>
      {filteredShops.length === 0 ? (
        <p className="body-text mx-4 lg:mx-10 text-[20px] md:text-[40px] text-green mb-4">
          Wow, you&apos;re such a cool hipster person. Your perfect place
          doesn&apos;t even exist. Stop being so picky.
        </p>
      ) : (
        <div className="flex  mx-4 lg:mx-10 flex-col flex-wrap lg:flex-row">
          {filteredShops.map((shop) => (
            <Card
              key={shop.name}
              name={shop.name}
              categories={shop.categories}
              mainImage={urlFor(shop.mainImage)}
              address={shop.address}
              website={shop.website}
              handleCategoryClick={setSelectedCats}
            />
          ))}
        </div>
      )}
      <div className="mt-6 lg:mt-10 mx-4 lg:mx-10">
        <Button
          label="Let's try that again"
          style="outline"
          onClick={() => reset()}
        />
      </div>
    </div>
  );
};

export default function TestUI(props) {
  const [step, setStep] = useState(0);
  const [selectedCats, setSelectedCats] = useState([]);
  const { categories, hero, shops } = props;
  const reset = () => {
    setStep(1);
    setSelectedCats([]);
  };
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step}
        className="mb-10"
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1, }}
        exit={{ y: -300, opacity: 0 }}
      >
        {step === 0 ? <StartHere goToNext={setStep} hero={hero} /> : null}
        {step === 1 ? (
          <ChooseCats
            goToNext={setStep}
            selectedCats={selectedCats}
            setSelectedCats={setSelectedCats}
            categories={categories}
          />
        ) : null}
        {step === 2 ? (
          <ShowShops selectedCats={selectedCats} setSelectedCats={setSelectedCats} shops={shops} reset={reset} />
        ) : null}
      </motion.div>
    </AnimatePresence>
  );
}

const categoryQuery = groq`*[_type == "category"]`;
const heroQuery = groq`*[_type == "hero"][0]`;
const shopsQuery = groq`*[_type == "shop"]{
    "categories": categories[]->title,
    mainImage,
    address,
    website,
    name
  }`;

export const getStaticProps = async () => {
  const categories = await client.fetch(categoryQuery);
  const hero = await client.fetch(heroQuery);
  const shops = await client.fetch(shopsQuery);

  return {
    props: {
      categories,
      hero,
      shops,
    },
  };
};
