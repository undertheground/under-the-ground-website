import * as React from "react";
import "@fontsource/play"; // Defaults to weight 400 with all styles included.
import "../styles/global.css";
import MainLayout from "../components/main-layout.js";
import { Button } from "@undertheground/react";
import styled from "styled-components";
import { Link, navigate } from "gatsby";
import GitHubIcon from "../images/Octicons-mark-github.svg";
import FigmaIcon from "../images/Figma-logo.svg";
import AdobeXD from "../images/Adobe_XD_CC_icon.svg";
// import background from "../images/InputCover.png";

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
  margin-bottom: 2rem;
  color: #fff;
  text-align: justify;
  @media (max-width: 768px) {
    padding: 2rem 5rem;
    border-bottom: 3px #e0e0e0 solid;
    border-top: 3px #e0e0e0 solid;
    border-image: linear-gradient(to left, #e00475, #3970ca) 0.5;
  }
`;

export const SocialIcon = styled.img`
  width: 2rem;
  margin: 0 0.5rem;
  :hover {
    cursor: pointer;
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
      <div style={{ marginLeft: "3rem" }}>
        <a
          href="https://github.com/undertheground/design-system"
          target="_blank"
        >
          <SocialIcon src={GitHubIcon} />
        </a>
        <SocialIcon src={FigmaIcon} />
        <SocialIcon src={AdobeXD} />
      </div>
    </MainLayout>
  );
};

export default IndexPage;
