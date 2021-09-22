import React, { useEffect } from "react";
import { MDXProvider } from "@mdx-js/react";
// import { Chart, Pullquote } from "./ui"
import Header from "./header";
import { graphql } from "gatsby";
import ButtonCover from "../images/ButtonIcon/ButtonCover.png";
import ImageContainer from "../components/image-container";
// import { graphql, StaticQuery } from "gatsby";
import Layout from "./layout";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";

const holder = {
  marginLeft: "12rem",
  // marginRight: "6rem",
  // position: "relative",
};
const MainLayout = ({ children, pageContext, components }) => {
  const location = useLocation();
  let title, description;
  if (location.pathname != "/") {
    title = pageContext.frontmatter.title;
    description = pageContext.frontmatter.description;
  } else {
    title = "Under the Ground Design System";
    description =
      "Under the Ground design system has been developed by Wish Work team to develop state-of-the-art software products";
  }
  useEffect(() => {
    console.log(location.pathname);
    console.log(description);
  }, []);
  if (typeof window !== "undefined") {
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={`${description}`} />
        </Helmet>
        <Layout components={components}>{children}</Layout>
      </div>
    );
  } else {
    return <></>;
  }
};

// />
// );
// };

export default MainLayout;
