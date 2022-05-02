import React, { useEffect, useState } from "react";
import api from "../highOrder/axios";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Listings from "../components/Listings";
import Fade from "react-reveal/Fade";

export default function Explore() {
  const [units, setUnits] = useState([]);
  const [unit, setUnit] = useState("");

  const fetchAllUnits = async () => {
    api.get("unitlisting/").then((res) => {
      setUnits(res.data.units);
      console.log(units);
    });
  };

  useEffect(() => {
    fetchAllUnits();
  }, []);

  //<UnitCard unit={unit} />
  return (
    <SearchWrap>
      <Header />
      <Fade top>
        <Listings listings={units} />
      </Fade>
      <Footer />
    </SearchWrap>
  );
}

const SearchWrap = styled.div`
  height: 100%;
  background-size: cover;
  backgroundRepeat: repeat-y,
  backgroundAttachment: fixed,
  backgroundPosition: center center,
  background: darkGrey;
  background-image: url("/images/vista.jpg");
  display: flex;
  overflow-y: scroll;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
