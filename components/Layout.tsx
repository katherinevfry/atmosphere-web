/* eslint-disable react/forbid-prop-types */
import Head from "next/head";
import Navigation from "./Navigation";
// import Footer from './Footer';

declare interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Head>
      <meta name="description" content="atmosphere" />
      <meta property="og:title" content="atmosphere" />
      <meta property="og:image" content="https://atmosphere-web.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F9h4vha0j%2Fproduction%2Fe6c9f628b8da86c82844e77f799f61c89a416e47-6000x4000.png&w=1200&q=75" />
      <meta property="og:url" content="https://atmosphere-nash.com/" />
      <meta property="og:type" content="website" />
      <link rel="icon" type="image/x-icon" href="https://i.imgur.com/BFCKEJ3.png"/>
    </Head>
    <Navigation />
    <main role="main" className="bg-cream main">
      <h1 className="sr-only">Atmosphere</h1>
      {children}
    </main>
    {/* <Footer /> */}
  </>
);

export default Layout;
