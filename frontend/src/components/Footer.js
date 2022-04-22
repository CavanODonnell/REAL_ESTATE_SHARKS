import React from "react";
import styled from "styled-components";

function Footer() {
  return <Container></Container>;
}

export default Footer;

const Container = styled.div`
  z-index: 1;
  min-height: 40px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  bottom: 0;
  left: 0;
  right: 0;
`;
