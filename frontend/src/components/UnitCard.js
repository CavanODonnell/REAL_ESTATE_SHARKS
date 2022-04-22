import React from "react";
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CListGroup,
  CListGroupItem,
  CCardLink,
} from "@coreui/react";
import styled from "styled-components";

const UnitCard = (props) => {
  return (
    <CCard style={{ width: "25rem" }}>
      <CCardImage orientation="flex" src="/images/solar-panel.jpg" />
      <CCardBody>
        <CCardTitle>Unit ID Number: {props.unit.id}</CCardTitle>
        <CCardText>Description: {props.unit.unit_description}</CCardText>
      </CCardBody>
      <CListGroup flush>
        <CListGroupItem>Balconies: {props.unit.num_of_balcony}</CListGroupItem>
        <CListGroupItem>Bedrooms: {props.unit.bedrooms}</CListGroupItem>
        <CListGroupItem>
          Bathrooms: {props.unit.num_of_bathrooms}
        </CListGroupItem>
        <CListGroupItem>
          Available Start Date{props.unit.unit_availability_start_date}
        </CListGroupItem>
        <CListGroupItem>
          Available End Date{props.unit.unit_availability_end_date}
        </CListGroupItem>
        <CListGroupItem>Unit Sqft: {props.unit.living_area_sf}</CListGroupItem>
      </CListGroup>
      <CCardBody>
        <CCardLink href="#">Details</CCardLink>
        <CCardLink href="/Contact">contact</CCardLink>
      </CCardBody>
    </CCard>
  );
};

export default UnitCard;

const Wrap = styled.div`
  z-index: 10;
  width: 100vw;
  height: 100vh;
  margin: 50px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  z-index: 10;
  color: black;
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
