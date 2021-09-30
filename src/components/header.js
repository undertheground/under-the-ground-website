import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { Button } from "@undertheground/react";
import ArrowDropUp from "@material-ui/icons/ArrowDropUp";
import MenuIcon from "@material-ui/icons/Menu";
import { createPortal } from "react-dom";
import { Link, navigate } from "gatsby";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
// import { NavLink } from "theme-ui";
import colors from "@undertheground/color";
import Logo from "../images/Under-the-Ground-Logo.svg";
import { Height } from "@material-ui/icons";

export const Navbar = styled.nav`
  margin-top: 0;
  /* margin-bottom: 30px; */
  /* width: 100%; */
`;

export const PhoneMenuPage = styled.div`
  /* display: none; */
  z-index: 3;
`;

export const PhoneMenu = styled.div`
  display: none;
  margin-left: auto;
  margin-right: 4rem;
  @media (max-width: 768px) {
    display: inline-block;
  }
`;

export const UL = styled.ul`
  padding-top: 6rem;
  display: flex;
  flex-direction: column;
  padding-left: 0;
  /* height: 100%; */
  border-right: #e0e0e0 solid 1px;
  border-image: linear-gradient(to top, #e1e1e1, #000) 1;
  list-style: none;
  background-color: #04010a;
  position: fixed;
  /* width: 16rem; */
  z-index: 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ULPhone = styled.ul`
  /* padding-top: 6rem; */
  display: flex;
  flex-direction: column;
  padding-left: 0;
  height: 100%;
  border-right: #e0e0e0 solid 1px;
  border-image: linear-gradient(to top, #e1e1e1, #000) 1;
  list-style: none;
  background-color: #04010a;
  /* position: fixed; */
  width: 100%;
  z-index: 0;
  @media (max-width: 768px) {
    border-image: none;
    border-right: none;
  }
`;

const LI = styled.li`
  align-self: auto;
  display: flex;
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

export const LIPhone = styled.li`
  align-self: auto;
  display: flex;
  color: #e0e0e0;
  padding-left: 1rem;
  padding-bottom: 1rem;
  font-weight: 700;
  font-size: 1rem;
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
  text-decoration: none;
  z-index: 1;
  position: fixed;
  padding: 1rem;
  width: 100%;
  cursor: pointer;
  border-bottom: 1px #e0e0e0 solid;
  border-image: linear-gradient(to left, #e1e1e1, #000) 0.5;
  font-size: 1.8rem;
  color: #e0e0e0;
  transition: 0.5s linear color;
  @media (max-width: 768px) {
    border-image: linear-gradient(to left, #e00475, #3970ca) 0.5;
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
  @media (max-width: 768px) {
    margin-right: 4rem;
  }
`;

export const IconInfinite = styled.div`
  transition: 500ms linear all;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
  :hover {
    transform: rotate(180deg);
    transition: 500ms linear all;
    transform-origin: center center;
  }
`;

export const Title = styled.div`
  font-family: "Permanent Marker", cursive;
  display: inline;
  margin-right: 0.5rem;
  :hover {
    transition: 0.5s linear color;
    color: #e00475;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 1.5rem;
  }
  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;

export const NavLink = styled(Link)`
  color: #e0e0e0;
  display: block;
  text-decoration: none;
  margin-top: 1rem;
  margin-bottom: 2rem;
  cursor: pointer;
  margin-left: 2rem;
  transition: 500ms linear color;
  :hover {
    color: #e00475;
    transition: 500ms linear color;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Holder = styled.div`
  display: flex;
  align-items: center;
`;

export const Home = styled.div`
  display: flex;
`;

export default function Header({}) {
  const [open, dropDown] = useState({ first: false, second: false });
  // const [openPhone, dropDownPhone] = useState({first: false, second: false})
  const [isOpen, openMenu] = useState(false);
  const onClickDropDown = () => {
    dropDown({ ...open, first: !open.first });
  };
  const onClickDropDown2 = () => {
    dropDown({ ...open, second: !open.second });
  };
  const toggle = () => {
    openMenu((isOpen) => !isOpen);
  };
  return (
    <div>
      <Navbar>
        <Head>
          <Holder>
            <img src={Logo} style={{ width: "2rem", marginRight: "0.5rem" }} />
            <Title onClick={() => navigate("/", { replace: true })}>
              Under the Ground Design System
            </Title>
            <PhoneMenu>
              <MenuIcon onClick={() => toggle()} />
            </PhoneMenu>
          </Holder>
          {isOpen ? (
            <PhoneMenuPage>
              <ULPhone>
                <LIPhone onClick={onClickDropDown}>
                  Under the Ground
                  <Icon>
                    <ArrowDropUp />
                  </Icon>
                </LIPhone>
                {open.first ? (
                  <div>
                    <NavLink
                      onClick={() => {
                        toggle();
                      }}
                      to={"/philosophy/"}
                      activeStyle={{ color: "#e00475" }}
                    >
                      Philosophy
                    </NavLink>
                    <NavLink
                      // isActive={active[2]}
                      onClick={() => {
                        toggle();
                      }}
                      to={"/team"}
                      activeStyle={{ color: "#e00475" }}
                    >
                      Team
                    </NavLink>
                    <NavLink
                      onClick={() => {
                        toggle();
                      }}
                      to={"/contribution"}
                      activeStyle={{ color: "#e00475" }}
                    >
                      Contribution
                    </NavLink>
                  </div>
                ) : null}
                <LIPhone onClick={onClickDropDown2}>
                  Components
                  <Icon>
                    <ArrowDropUp />
                  </Icon>
                </LIPhone>
                {open.second ? (
                  <div>
                    <NavLink
                      // isActive={active[4]}
                      onClick={() => {
                        toggle();
                      }}
                      to={"/buttondoc"}
                      activeStyle={{ color: "#e00475" }}
                    >
                      Button
                    </NavLink>
                    <NavLink
                      onClick={() => {
                        toggle();
                      }}
                      // isActive={active[5]}
                      to={"/inputdoc"}
                      activeStyle={{ color: "#e00475" }}
                    >
                      Input
                    </NavLink>
                    <NavLink
                      onClick={() => {
                        toggle();
                      }}
                      // isActive={active[6]}
                      activeStyle={{ color: "#e00475" }}
                    >
                      Sidenav
                    </NavLink>
                  </div>
                ) : null}
              </ULPhone>
            </PhoneMenuPage>
          ) : null}
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
              <NavLink to={"/philosophy/"} activeStyle={{ color: "#e00475" }}>
                Philosophy
              </NavLink>
              <NavLink
                // isActive={active[2]}
                to={"/team"}
                activeStyle={{ color: "#e00475" }}
              >
                Team
              </NavLink>
              <NavLink to={"/contribution"} activeStyle={{ color: "#e00475" }}>
                Contribution
              </NavLink>
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
              <NavLink
                // isActive={active[4]}
                to={"/buttondoc"}
                activeStyle={{ color: "#e00475" }}
              >
                Button
              </NavLink>
              <NavLink
                // isActive={active[5]}
                to={"/inputdoc"}
                activeStyle={{ color: "#e00475" }}
              >
                Input
              </NavLink>
              <NavLink
                // isActive={active[6]}
                activeStyle={{ color: "#e00475" }}
              >
                Sidenav
              </NavLink>
            </div>
          ) : null}
          <div
            style={{
              position: "fixed",
              bottom: "1rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <p style={{ color: colors.grey[3], marginLeft: "2rem" }}>
              MAINTAINED FOR
            </p>
            <IconInfinite>
              <AllInclusiveIcon
                style={{
                  color: "#e00475",
                  marginLeft: "0.5rem",
                  marginRight: "0.5rem",
                }}
              />
            </IconInfinite>
          </div>
        </UL>
      </Navbar>
      {/* <Button>Hello</Button> */}
    </div>
  );
}
