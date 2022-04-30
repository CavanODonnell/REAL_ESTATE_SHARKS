import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UnitForm from "../components/UnitForm";
import UnitDelete from "../components/UnitDelete";

function EnterData() {
  const [submit, setSubmit] = useState(true);

  const handleSubmit = (a) => {
    setSubmit(a);
  };

  return (
    <Container>
      <Header />
      <Wrap>
        <UnitForm />
      </Wrap>
      <Wrap>
        <UnitDelete />
      </Wrap>
      <Footer />
    </Container>
  );
}

export default EnterData;

const Wrap = styled.div`
  padding-top: 4%;
  width: 50%;
  float: left;
  hight: 75%;
  opacity: .50
  backgroundcolor: transparent;
`;

const Container = styled.div`
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  backgroundcolor: rgba(0, 0, 0, 0.1);
  background-image: url("/images/solar-panel.jpg");
`;
