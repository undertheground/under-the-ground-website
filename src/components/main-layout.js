import React, { useEffect } from "react";
import { MDXProvider } from "@mdx-js/react";
// import { Chart, Pullquote } from "./ui"
import Header from "./header";
import ButtonCover from "../images/ButtonIcon/ButtonCover.png";
import ImageContainer from "../components/image-container";
// import { graphql, StaticQuery } from "gatsby";
import Layout from "./layout";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";

const holder = {
  marginLeft: "16rem",
  // position: "relative",
};

const MainLayout = ({ children, pageContext }) => {
  const location = useLocation();
  let title, description;
  if (location.pathname != "/") {
    title = pageContext.frontmatter.title;
    description = pageContext.frontmatter.description;
  } else {
    title = "hi";
    description = "pageContext.frontmatter.description ";
  }
  useEffect(() => {
    console.log(location.pathname);
    console.log(description);
  }, []);
  return (
    <div>
      <Helmet>
        <title>${title}</title>
        <meta name="description" content={`${description}`} />
      </Helmet>
      <Header></Header>
      {window.innerWidth > 768 ? (
        <div style={holder}>
          <Layout>{children}</Layout>
        </div>
      ) : (
        <div>
          <Layout>{children}</Layout>
        </div>
      )}
    </div>
  );
};

export const query = graphql`
  query MyQuery {
    allMdx(filter: { excerpt: {} }) {
      edges {
        node {
          frontmatter {
            description
            title
          }
        }
      }
    }
  }
`;
// />
// );
// };

export default MainLayout;
