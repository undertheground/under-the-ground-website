import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@undertheground/react";

export const Navbar = styled.nav`
  margin-top: 0;
  /* width: 100%; */
`;

export const UL = styled.ul`
  padding-top: 6rem;
  padding-left: 0;
  height: 100%;
  border-right: #e0e0e0 solid 1px;
  list-style: none;
  background-color: #04010a;
  position: fixed;
  z-index: 0;
`;

const LI = styled.li`
  margin-top: 1rem;
  padding-right: 6rem;
  color: #e0e0e0;
  padding-left: 3rem;
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
  font-size: 2rem;
  color: #e0e0e0;
`;

export default function Header() {
  // const [open, dropDown] = useState({firts: false, second: false})
  return (
    <div>
      <Navbar>
        <Head>Under the Ground Design System</Head>
        <UL>
          <LI>Under the Ground</LI>
          <LI>Components</LI>
        </UL>
      </Navbar>
      {/* <Button>Hello</Button> */}
    </div>
  );
}
