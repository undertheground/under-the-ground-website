import React from "react";
import { MDXProvider } from "@mdx-js/react";
// import ImageContainer from "../components/image-container";
// import { useLocation } from "@reach/router";
import Header from "./header";
const holder = {
  marginLeft: "14rem",
};

const Layout = ({ components, children }) => {
  return (
    <div>
      <MDXProvider components={components}>{children}</MDXProvider>
    </div>
  );
};
export default Layout;
