import React, { useState } from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

function Header() {
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <Container>
      <NavWrap>
        <Link to="/">
          {" "}
          <CustomHomeIcon style={{ fontSize: 50 }} />{" "}
        </Link>
        <LeftMenu>
          <Link to="/">Login</Link>

          <Link to="/Account">Account</Link>

          <Link to="/About">About</Link>

          <Link to="/Contact">Contact</Link>
        </LeftMenu>
        <RightNav show={openBurger}>
          <Close onClick={() => setOpenBurger(false)} />

          <li>
            <Link to="/Payments">Payments</Link>
          </li>
          <li>
            <Link to="/Maintanence">Maintanence</Link>
          </li>
          <li>
            <Link to="/Apartments">Apartments</Link>
          </li>
          <li>
            <Link to="/EnterData">EnterData</Link>
          </li>
          <li>
            <Link to="Account">Account</Link>
          </li>
          <li>
            <Link to="Contact">Help</Link>
          </li>
        </RightNav>
      </NavWrap>
      <RightMenu>
        <CustomBurger
          onClick={() => setOpenBurger(true)}
          style={{ fontSize: 40 }}
        />
      </RightMenu>
    </Container>
  );
}

export default Header;

const NavWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  opacity: 0.75;
`;
const Close = styled(CloseIcon)`
  cursor: pointer;
  color: white;
`;

const Container = styled.div`
  position: fixed;
  background: black;
  text-color: white;
  z-index: 1;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0.75;
`;
const RightNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: black;
  width: 200px;
  z-index: 5;
  list-style: none;
  padding: 20px;
  text-align: start;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  opacity: 0.75;
  transform: ${(props) => (props.show ? "TranslateX(0)" : "translateX(100%)")};
  transition: transfrom 0.2;

  li {
    padding: 20px 0;
    text-color: white;
    border-radius: 10px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    text-align: center;
  }

  a {
    font-weight: 800;
  }
`;

const CustomHomeIcon = styled(HomeIcon)`
  cursor: pointer;
  display: flex;
`;

const CustomBurger = styled(MenuOpenIcon)`
  cursor: pointer;
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  right: 0;
`;
const LeftMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-decoration: uppercase;
    padding: 0 10px; //top equals 0 sides equal 10
    flex-wrap: nowrap;
    text-align: right;
  }

  @media (max-width: 650px) {
    flex-direction: none;
  }
`;
