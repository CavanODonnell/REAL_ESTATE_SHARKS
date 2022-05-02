import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UnitForm from "../components/UnitForm";
import UnitDelete from "../components/UnitDelete";
import Fade from "react-reveal/Fade";

function EnterData() {
  const [submit, setSubmit] = useState(true);

  const handleSubmit = (a) => {
    setSubmit(a);
  };

  return (
    <Wrap>
      <Header />
      <Wrap2>
        <Fade top>
          <UnitForm />
        </Fade>
      </Wrap2>
      <Wrap2>
        <Fade top>
          <UnitDelete />
        </Fade>
      </Wrap2>
      <Footer />
    </Wrap>
  );
}

export default EnterData;
const Wrap = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/newYork-skyline.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Wrap2 = styled.div`
  padding-top: 4%;
  width: 50%;
  float: left;
  hight: 75%;
  opacity: .50
  backgroundcolor: transparent;
`;
