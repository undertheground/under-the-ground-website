import * as React from "react";
import "@fontsource/play"; // Defaults to weight 400 with all styles included.
import "../styles/global.css";
import Layout from "../components/layout.js";
import { Button } from "@undertheground/react";
import styled from "styled-components";
import { Link, navigate } from "gatsby";
// styles

// markup

const Title = styled.div`
  margin-right: 6rem;
  margin-left: 2rem;
  padding-top: 10rem;
  @media (max-width: 768px) {
    margin-left: 0.5rem;
    margin-top: 2rem;
    margin-right: 0.5rem;
  }
`;

const Tape = styled.div`
  background-color: #000;
  padding: 5rem;
  margin-top: 2rem;
  color: #fff;
  text-align: justify;
`;
const IndexPage = () => {
  return (
    <Layout>
      <Title>
        <h1>Let the System Emerge</h1>
      </Title>
      <Tape>
        "Creativity is just connecting things. When you ask creative people how
        they did something, they feel a little guilty because they didn't really
        do it, they just saw something. It seemed obvious to them after a
        while."
        <br />
        <br />
        Steve Jobs
      </Tape>
      <Button kind={"primary"} onClick={() => navigate("/philosophy")}>
        Philosophy
      </Button>
      <Button kind={"secondary"} onClick={() => navigate("/buttondoc")}>
        Button Document
      </Button>
      {/* <br /> */}
    </Layout>
  );
};

export default IndexPage;
