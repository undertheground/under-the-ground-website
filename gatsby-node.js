// const { createFilePath } = require("gatsby-source-filesystem");
// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions;
//   // you only want to operate on `Mdx` nodes. If you had content from a
//   // remote CMS you could also check to see if the parent node was a
//   // `File` node here
//   if (node.internal.type === "Mdx") {
//     const value = createFilePath({ node, getNode });
//     createNodeField({
//       // Name of the field you are adding
//       name: "slug",
//       // Individual MDX node
//       node,
//       // Generated value based on filepath with "blog" prefix. you
//       // don't need a separating "/" before the value because
//       // createFilePath returns a path with the leading "/".
//       value: `${value}`,
//     });
//   }
// };

// const path = require(`path`);
// // Log out information after a build is done
// exports.onPostBuild = ({ reporter }) => {
//   reporter.info(`Your Gatsby site has been built!`);
// };
// // Create blog pages dynamically
// exports.createPages = async ({ graphql, actions, reporter }) => {
//   // Destructure the createPage function from the actions object
//   const { createPage } = actions;
//   const blogPostTemplate = path.resolve(`src/components/main-layout.js`);
//   const result = await graphql(`
//     query {
//       allMdx(filter: { excerpt: {} }) {
//         edges {
//           node {
//             fields {
//               slug
//             }
//             frontmatter {
//               description
//               title
//             }
//           }
//         }
//       }
//     }
//   `);
//   if (result.errors) {
//     reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
//   }

//   result.data.allMdx.edges.forEach(({ node }) => {
//     console.log(node);
//     createPage({
//       path: node.fields.slug,
//       component: blogPostTemplate,
//       context: {
//         title: node.frontmatter.title,
//         description: node.frontmatter.description,
//       },
//     });
//   });
// };
