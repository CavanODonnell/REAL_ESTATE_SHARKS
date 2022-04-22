import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

function Contact() {
  return (
    <Container>
      <Header />
      <Footer />
    </Container>
  );
}

export default Contact;

const SearchWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background: darkGrey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Search = styled.div`
  cursor: pointer;
`;
const SearchNav = styled.div`
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

const Button = styled.div`
  type: submit;
  class: btn btn-primary
  width: 100px;
    color: white;
    background-color: rgba(18, 20, 34, 0.8);
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 60px;
    opacity: 0.95;
    text-transform: uppercase;
    font-size: 18px;
    cursor: pointer;
    text-align: center;
`;
const Container = styled.div`
  height: 100vh;
  label {
    width: 300px;
    color: purple;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 15px;
    text-align: center;
  }

  input {
    width: 300px;
    color: white;
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 60px;
    opacity: 0.85;
    font-size: 12px;
    cursor: hover;
    text-align: center;
  }

  select {
    width: 300px;
    color: white;
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 60px;
    opacity: 0.85;
    font-size: 15px;
    cursor: pointer;
    text-align: center;
  }
`;
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  color: blue;
  text-align: center;
  display: flex;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 50px;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  justify-content: center;
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
`;
const SecondButton = styled(FirstButton)``;
