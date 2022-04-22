import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

function Section() {
  return (
    <Wrap>
      <Fade top>
        <ItemText>
          <h1>Real Estate Shark Home</h1>
          <p>Your in dangerious waters, where would you like to go?</p>
        </ItemText>
      </Fade>
      <Fade left>
        <ButtonGroup>
          <FirstButton>
            <li>
              <Link to="/Explore">Explore</Link>
            </li>
          </FirstButton>
          <SecondButton>
            <li>
              <Link to="/About">About</Link>
            </li>
          </SecondButton>
        </ButtonGroup>
      </Fade>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  z-index: 10;
  width: 100vw;
  height: 100vh;
  margin: 50px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/solar-panel.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  z-index: 10;
  color: blue;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 50px;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
const FirstButton = styled.div`
  width: 300px;
  color: white;
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  text-align: center;

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
`;
const SecondButton = styled(FirstButton)``;
