import React from "react";
import MainLayout from "./src/components/main-layout";
import Header from "./src/components/header";
import HelmetLayout from "./src/components/helmet-layout";
import "@fontsource/permanent-marker"; // Defaults to weight 400 with all styles included.

// import styled from
// Logs when the client route changes
export const onRouteUpdate = ({ location, prevLocation }) => {
  console.log("new pathname", location.pathname);
  console.log("old pathname", prevLocation ? prevLocation.pathname : null);
};
// Wraps every page in a component

const holder = {
  marginLeft: "16rem",
  // position: "relative",
};

// export const wrapPageElement = ({ element, props }) => {
//   // const { title, author } = pageContext;
//   return (
//     <>
//       <HelmetLayout>
//         <Header></Header>
//         {window.innerWidth > 768 ? (
//           <div style={holder}>
//             <MainLayout {...props}>{element}</MainLayout>
//           </div>
//         ) : (
//           <div>
//             <MainLayout {...props}>{element}</MainLayout>
//           </div>
//         )}
//       </HelmetLayout>
//     </>
//   );
// };
