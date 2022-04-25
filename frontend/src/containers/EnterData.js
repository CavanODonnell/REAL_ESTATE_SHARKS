import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UnitForm from "../components/UnitForm";

function EnterData() {
  const [submit, setSubmit] = useState(true);

  const handleSubmit = (a) => {
    setSubmit(a);
  };

  return (
    <Container>
      <Header />
      <UnitForm />
      <Footer />
    </Container>
  );
}

export default EnterData;

const Container = styled.div`
  display: flex;
  background-color: rgba(23, 26, 32, 0.8);
`;
