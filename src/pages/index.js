import * as React from "react";
import "@fontsource/play"; // Defaults to weight 400 with all styles included.
import "../styles/global.css";
import Layout from "../components/layout.js";
import styled from "styled-components";
// styles

// markup

const Tape = styled.div`
  background-color: #000;
  padding: 5rem;
  margin-top: 2rem;
  color: #fff;
`;
const IndexPage = () => {
  return (
    <Layout>
      <div
        style={{
          marginLeft: "12rem",
          marginRight: "6rem",
          paddingTop: "10rem",
        }}
      >
        <h1>Let it Begin</h1>
      </div>
      <Tape>
        Creativity is just connecting things. When you ask creative people how
        they did something, they feel a little guilty because they didn't really
        do it, they just saw something. It seemed obvious to them after a while
        <br />
        <br />
        Steve Jobs
      </Tape>
    </Layout>
  );
};

export default IndexPage;
