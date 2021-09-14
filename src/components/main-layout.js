import React from "react";
import { MDXProvider } from "@mdx-js/react";
// import { Chart, Pullquote } from "./ui"
import Header from "./header";
import ButtonCover from "../images/ButtonIcon/ButtonCover.png";
import ImageContainer from "../components/image-container";
// import { graphql, StaticQuery } from "gatsby";
import Layout from "./layout";
const holder = {
  marginLeft: "14rem",
  // position: "relative",
};

const MainLayout = ({ children }) => {
  return (
    // <StaticQuery
    //   query={graphql`
    //     query SiteTitleQuery {
    //       site {
    //         siteMetadata {
    //           title
    //           menuLinks {
    //             name
    //             link
    //           }
    //         }
    //       }
    //     }
    //   `}
    // render={(data) => (
    // <React.Fragment>
    <div>
      {/* <Header
      // menuLinks={data.site.siteMetadata.menuLinks}
      // siteTitle={data.site.siteMetadata.title}
      /> */}
      <Layout>{children}</Layout>
    </div>
    // </React.Fragment>
  );
};
// />
// );
// };

export default MainLayout;
