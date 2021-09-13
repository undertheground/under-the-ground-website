import React from "react";

const components = {
  h1: (props) => (
    <h1 {...props}>
      <a href={`#${props.id}`}>{props.children}</a>
    </h1>
  ),
  link: (props) => (
    <h2>
      <a href={`${props.to}`}>{props.children}</a>
    </h2>
  ),
  p: (props) => (
    <p {...props}>
      <p>{props.children}</p>
    </p>
  ),
};

export default components;
