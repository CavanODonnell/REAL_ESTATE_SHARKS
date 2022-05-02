import React from "react";
import UnitCard from "./UnitCard";
import styled from "styled-components";

const listings = ({ listings }) => {
  const getListings = () => {
    let listingsOnPage = [];
    let result = [];
    console.log(listings);

    listings.map((unit) => {
      return listingsOnPage.push(
        <UnitCard
          id={unit.id}
          num_of_bedrooms={unit.num_of_bedrooms}
          num_of_bathrooms={unit.num_of_bathrooms}
          num_of_balcony={unit.num_of_balcony}
          is_available={unit.is_available}
          is_reserved={unit.is_reserved}
          unit_availability_start_date={unit.unit_availability_start_date}
          unit_availability_end_date={unit.unit_availability_end_date}
          unit_description={unit.unit_description}
          living_area_sf={unit.living_area_sf}
          unit_number={unit.unit_number}
          unit_at_floor={unit.unit_at_floor}
        />
      );
    });

    for (let i = 0; i < listings.length; i += 3) {
      result.push(
        <Row>
          <Col1>{listingsOnPage[i]}</Col1>
          <Col2>{listingsOnPage[i + 1] ? listingsOnPage[i + 1] : null}</Col2>
          <Col3>{listingsOnPage[i + 2] ? listingsOnPage[i + 2] : null}</Col3>
        </Row>
      );
    }

    return result;
  };

  return <Container>{getListings()}</Container>;
};

export default listings;

const Container = styled.div`
  padding-top: 2hv;
  width: 100%;
  height: 100%;
  align-items: center;
  background: darkGrey;
`;

const Row = styled.div`
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  background: darkGrey;
  width: 50%;
  float: left;
  hight: 300px;
  justify-content: center;
  align-items: center;
`;

const Col1 = styled.div`
  padding-top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: darkGrey;
  background-image: url("/images/solar-panel.jpg");
`;
const Col2 = styled.div`
  padding-top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: darkGrey;
  background-image: url("/images/solar-panel.jpg");
`;
const Col3 = styled.div`
  padding-top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: darkGrey;
`;
