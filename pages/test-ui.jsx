import groq from "groq";
import client from "../lib/sanity";
import Hero from "../components/Hero";
import imageUrlBuilder from "@sanity/image-url";
import { useState } from "react";
import { Button } from "../components/Button";

function urlFor(source) {
    return imageUrlBuilder(client).image(source).toString();
  }

const StartHere = ({ goToNext, hero }) => (
    <div>
              <Hero imageSource={urlFor(hero.mainImage)} />
      <div className="flex flex-col">
        <div className="flex space-y-1 my-8 flex-col leading-[20px] lg:leading-[40px] align-top body-text text-[30px] lg:text-[50px] text-green">
        <p className="body-text text-green">There&apos;s a lot to choose from in Nashville. Coffee shops are no exception. No one wants to commit the faux pas of showing up at a social shop to do work. Yikes. Let&apos;s find your atmosphere.</p>
        </div>
      </div>
      <Button label="Okay let's do this" style="outline" onClick={() => goToNext(1)}/>
      </div>
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
    <>
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
      <Button label="See what happens" style="outline" disabled={selectedCats.length < 1} onClick={() => goToNext(2)} />
    </>
  );
};

export default function TestUI(props) {
  const [step, setStep] = useState(0);
  const [selectedCats, setSelectedCats] = useState([]);
  const { categories, hero } = props;
  return (
    <div className="mx-4 lg:mx-10">
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
        <div>
          <p>your atmosphere is...</p>
          {selectedCats.map((cat) => (
            <p key={cat}>{cat}</p>
          ))}
        </div>
      ) : null}
    </div>
  );
}

const categoryQuery = groq`*[_type == "category"]`;
const heroQuery = groq`*[_type == "hero"][0]`;

export const getStaticProps = async () => {
  const categories = await client.fetch(categoryQuery);
  const hero = await client.fetch(heroQuery);

  return {
    props: {
      categories,
      hero,
    },
  };
};
