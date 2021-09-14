import * as React from "react";
import "@fontsource/play"; // Defaults to weight 400 with all styles included.
import "../styles/global.css";
import Layout from "../components/layout.js";

// styles

// markup
const IndexPage = () => {
  return (
    <Layout>
      <h1>I’m in a layout!</h1>
    </Layout>
  );
};

export default IndexPage;
