/* eslint-disable react/forbid-prop-types */
import Head from "next/head";
import Navigation from "./Navigation";

declare interface LayoutProps {
  children?: React.ReactNode,
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Head>
      <meta name="description" content="atmosphere" />
      <title>Atmosphere</title>
    </Head>
    <Navigation />
    <main role="main" className="bg-cream main">
      <h1 className="sr-only">Atmosphere</h1>
      {children}
    </main>
  </>
);

export default Layout;
