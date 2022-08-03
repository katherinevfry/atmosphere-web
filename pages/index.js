import groq from "groq";
import client from "../lib/sanity";
import styles from '../styles/Home.module.css'

export default function Home(props) {
  console.log(props)
  return (
    <div className={styles.container}>
     <h1>Atmosphere</h1>
    </div>
  )
}

const query = groq`*[_type == "post"] | order(date desc, _createdAt desc)`;

export async function getStaticProps() {
  const allPosts = await client.fetch(query);

  return {
    props: {
      allPosts,
    },
  };
}
