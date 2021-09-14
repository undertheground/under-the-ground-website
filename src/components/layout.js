import React from "react";
import { useEffect } from "react";
import { MDXProvider } from "@mdx-js/react";
// import { Chart, Pullquote } from "./ui"
import Header from "./header";
// import ButtonCover from "../images/ButtonIcon/ButtonCover.png";
import ImageContainer from "../components/image-container";
import { graphql, StaticQuery } from "gatsby";
// import Sidenav from "./links";
// import { Styled } from "theme-ui";

// const shortcodes = {};
const holder = {
  marginLeft: "14rem",
  // position: "relative",
};

const Layout = ({ children }) => {
  useEffect(() => {
    console.log(children, "children");
  }, []);
  return (
    <div>
      {/* <Header
      // menuLinks={data.site.siteMetadata.menuLinks}
      // siteTitle={data.site.siteMetadata.title}
      /> */}
      {/* <div style={holder}> */}
      <MDXProvider components={ImageContainer}>{children}</MDXProvider>;
    </div>
    // </div>
  );
};
export default Layout;
