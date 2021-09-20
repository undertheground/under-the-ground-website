// const path = require(`path`);
// const { createFilePath } = require("gatsby-source-filesystem");

// // Log out information after a build is done
// exports.onPostBuild = ({ reporter }) => {
//   reporter.info(`Your Gatsby site has been built!`);
// };

// // Here we're adding extra stuff to the "node" (like the slug)
// // so we can query later for all blogs and get their slug
// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions;
//   if (node.internal.type === "Mdx") {
//     const value = createFilePath({ node, getNode });
//     createNodeField({
//       // Individual MDX node
//       node,
//       // Name of the field you are adding
//       name: "slug",
//       // Generated value based on filepath with "blog" prefix
//       value: `/${value}`,
//     });
//   }
// };

// // Create blog pages dynamically
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;
//   const Layout = path.resolve(`./src/components/main-layout.js`);
//   return graphql(`
//     query {
//       allMdx(filter: { excerpt: {} }) {
//         edges {
//           node {
//             frontmatter {
//               title
//               author
//             }
//           }
//         }
//       }
//     }
//   `).then((results, errors) => {
//     if (errors) return Promise.reject(errors);

//     results.data.allMdx.edges.forEach((edge) => {
//       console.log(edge);
//       createPage({
//         path: `${edge.node.slug}`,
//         component: Layout,
//         context: {
//           title: edge.node.title,
//           author: edge.node.author,
//         },
//       });
//     });
//   });
// };
