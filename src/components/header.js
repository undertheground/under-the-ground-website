import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "@undertheground/react";
import ArrowDropUp from "@material-ui/icons/ArrowDropUp";
import "@fontsource/permanent-marker"; // Defaults to weight 400 with all styles included.
import { ArrowDropDown } from "@material-ui/icons";
import { createPortal } from "react-dom";
// import { NavLink } from "theme-ui";

export const Navbar = styled.nav`
  margin-top: 0;
  /* width: 100%; */
`;

export const UL = styled.ul`
  padding-top: 6rem;
  display: flex;
  flex-direction: column;
  padding-left: 0;
  height: 100%;
  /* border-: linear-gradient(to right, darkblue, darkorchid) 1; */
  border-right: #e0e0e0 solid 1px;
  border-image: linear-gradient(to top, #e1e1e1, #000) 1;
  list-style: none;
  background-color: #04010a;
  position: fixed;
  width: 16rem;
  z-index: 0;
`;

const LI = styled.li`
  /* margin-top: 1rem; */
  align-self: auto;
  display: flex;
  /* padding-right: 6rem; */
  color: #e0e0e0;
  padding-left: 1rem;
  padding-bottom: 1rem;
  font-weight: 700;
  transition: all 0.5s;
  cursor: pointer;
  padding-top: 1rem;
  :hover {
    transition: all 0.5s;
    background-color: azure;
    color: #e00475;
  }
`;

export const Head = styled.div`
  background-color: #04010a;
  z-index: 1;
  position: fixed;
  padding: 1rem;
  /* position: fixed; */
  width: 100%;
  cursor: pointer;
  border-bottom: 1px #e0e0e0 solid;
  border-image: linear-gradient(to left, #e1e1e1, #000) 0.5;
  font-size: 2rem;
  color: #e0e0e0;
  transition: 0.5s linear color;
  :hover {
    transition: 0.5s linear color;
    color: #e00475;
  }
  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;

export const Icon = styled.div`
  margin-left: auto;
  margin-right: 1rem;
  transition: 500ms linear all;
  ${LI}:hover & {
    transform: rotate(180deg);
    transition: 500ms linear all;
  }
`;

export const Title = styled.div`
  font-family: "Permanent Marker", cursive;
  display: inline;
`;

export const NavLink = styled.p`
  color: #e0e0e0;
  margin-top: 1rem;
  margin-bottom: 2rem;
  cursor: pointer;
  margin-left: 2rem;
  transition: 500ms linear color;
  :hover {
    color: #e00475;
    transition: 500ms linear color;
  }
  ${(props) => {
    if (props.isActive) {
      return `
      color: #e00475
      `;
    }
  }}
`;

export default function Header() {
  const [open, dropDown] = useState({ first: false, second: false });

  const onClickDropDown = () => {
    dropDown({ ...open, first: !open.first });
  };
  const onClickDropDown2 = () => {
    dropDown({ ...open, second: !open.second });
  };
  return (
    <div>
      <Navbar>
        <Head>
          <Title>Under the Ground</Title> Design System
        </Head>
        <UL>
          <LI onClick={onClickDropDown}>
            Under the Ground
            <Icon>
              <ArrowDropUp />
            </Icon>
          </LI>
          {open.first ? (
            <div>
              <NavLink>Philosophy</NavLink>
              <NavLink>Team</NavLink>
              <NavLink>Contribution</NavLink>
            </div>
          ) : null}
          <LI onClick={onClickDropDown2}>
            Components
            <Icon>
              <ArrowDropUp />
            </Icon>
          </LI>
          {open.second ? (
            <div>
              <NavLink isActive={true}>Button</NavLink>
              <NavLink>Input</NavLink>
              <NavLink>Sidenav</NavLink>
            </div>
          ) : null}
        </UL>
      </Navbar>
      {/* <Button>Hello</Button> */}
    </div>
  );
}
