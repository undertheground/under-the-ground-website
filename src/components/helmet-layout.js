import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

const HelmetLayout = ({ data, children }) => {
  const posts = data;
  useEffect(() => {
    console.log("page Context", posts);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Under the Ground Design System</title>
        <meta
          name="description"
          content="under the ground design system documentation"
        />
      </Helmet>
      {children}
    </div>
  );
};
export const query = graphql`
  query MyQuery {
    allMdx(filter: { excerpt: {} }) {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
export default HelmetLayout;
