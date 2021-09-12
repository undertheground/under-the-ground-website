import React from "react";
import { MDXProvider } from "@mdx-js/react";
// import { Chart, Pullquote } from "./ui"
import Header from "./header";
import ButtonCover from "../images/ButtonIcon/ButtonCover.png";
import ImageContainer from "../components/image-container";
// import Sidenav from "./links";
// import { Styled } from "theme-ui";

// const shortcodes = {};
const holder = {
  marginLeft: "14rem",
  // position: "relative",
};

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div style={holder}>
        <MDXProvider components={ImageContainer}>{children}</MDXProvider>;
      </div>
    </div>
  );
}
