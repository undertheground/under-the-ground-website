import React from "react";
import MainLayout from "./src/components/main-layout";
import Header from "./src/components/header";
// Logs when the client route changes
export const onRouteUpdate = ({ location, prevLocation }) => {
  console.log("new pathname", location.pathname);
  console.log("old pathname", prevLocation ? prevLocation.pathname : null);
};
// Wraps every page in a component

const holder = {
  marginLeft: "14rem",
  // position: "relative",
};
export const wrapPageElement = ({ element, props }) => {
  return (
    <>
      <Header></Header>
      <div style={holder}>
        <MainLayout {...props}>{element}</MainLayout>
      </div>
    </>
  );
};
