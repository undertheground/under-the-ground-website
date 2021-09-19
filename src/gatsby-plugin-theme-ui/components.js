import React from "react";
import styled from "styled-components";

const anchor = styled.a`
  text-decoration: none;
  color: #e00475;
`;

const components = {
  h1: (props) => (
    <h1 {...props}>
      <anchor href={`#${props.id}`}>{props.children}</anchor>
    </h1>
  ),
  link: (props) => (
    <h2>
      <anchor href={`${props.to}`}>{props.children}</anchor>
    </h2>
  ),
  p: (props) => (
    <p {...props}>
      <p>{props.children}</p>
    </p>
  ),
};

export default components;
