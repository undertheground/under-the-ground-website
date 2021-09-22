import "@fontsource/permanent-marker"; // Defaults to weight 400 with all styles included.
import Layout from "./src/components/layout";
import React from "react";
import { Button, TextInput } from "@undertheground/react";
import colors from "@undertheground/color";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import dracula from "prism-react-renderer/themes/dracula";
import { MDXProvider } from "@mdx-js/react";

import Header from "./src/components/header";
const scope = { Button, TextInput };
const components = {
  pre: (props) => (
    <LiveProvider
      code={props.children.props.children.trim()}
      scope={scope}
      theme={dracula}
    >
      <div
        style={{
          border: "#e0e0e0 1px solid",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10rem",
          borderRadius: "0.1rem",
        }}
      >
        <LivePreview />
      </div>
      <LiveEditor
        style={{ marginBottom: "2rem", fontSize: "0.8rem" }}
        padding={20}
      />
      {/* <LiveError /> */}
    </LiveProvider>
  ),
  h1: (props) => (
    <h1 style={{ color: colors.pink[3], fontSize: "3rem" }}>
      {props.children}
    </h1>
  ),
  link: (props) => (
    <h2>
      <a href={`${props.to}`}>{props.children}</a>
    </h2>
  ),
  inlineCode: (props) => (
    <code
      style={{
        backgroundColor: "#c9d1d9",
        padding: "0.2rem 0.4rem",
        margin: "0 .2rem",
      }}
    >
      {props.children}
    </code>
  ),
};
const holder = {
  marginLeft: "14rem",
};

export const wrapPageElement = ({ element, props }) => {
  return (
    <>
      <Header></Header>
      {window.innerWidth > 768 ? (
        <div style={holder}>
          <Layout components={components}>{element}</Layout>
        </div>
      ) : (
        <div>
          <Layout components={components}>{element}</Layout>
        </div>
      )}
    </>
  );
};
