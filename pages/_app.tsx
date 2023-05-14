import { AppProps } from "next/app";
import Layout from "../components/Layout";
import StepContext from "../components/FlowContext";
import "../styles/globals.css";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StepContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StepContext>
  );
}

export default MyApp;
