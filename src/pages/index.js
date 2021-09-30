import * as React from "react";
import "@fontsource/play"; // Defaults to weight 400 with all styles included.
import "../styles/global.css";
import MainLayout from "../components/main-layout.js";
import { Button } from "@undertheground/react";
import styled from "styled-components";
import { Link, navigate } from "gatsby";
// import InputImage from "../images/InputCover.png";

// styles

// markup

const Title = styled.div`
  margin-right: 6rem;
  margin-left: 6rem;
  padding-top: 10rem;
  @media (max-width: 768px) {
    margin-left: 0.5rem;
    padding-top: 8rem;
    margin-right: 0.5rem;
  }
`;

const Tape = styled.div`
  background-color: #000;
  padding: 6rem;
  margin-top: 2rem;
  color: #fff;
  text-align: justify;
  @media (max-width: 768px) {
    padding: 2rem 5rem;
  }
`;
const IndexPage = () => {
  return (
    <MainLayout>
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
    </MainLayout>
  );
};

export default IndexPage;
