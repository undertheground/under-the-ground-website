import React from "react";
import { MDXProvider } from "@mdx-js/react";
import ImageContainer from "../components/image-container";

const holder = {
  marginLeft: "14rem",
};

const Layout = ({ children }) => {
  return (
    <div>
      <MDXProvider components={ImageContainer}>{children}</MDXProvider>
    </div>
  );
};
export default Layout;
