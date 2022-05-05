import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
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
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function CardDetail(props) {
  return (
    <Container1>
      <Container>
        <CCard
          style={{ width: "100%", height: "100%" }}
          borderRadius="5rem"
          textColor="white"
          color="dark"
          opacity=".85"
        >
          <CCardImage
            style={{ height: "15rem" }}
            orientation="bottom"
            src="/images/pool-by-sea.png"
          />
          <CCardBody textColor="white" color="dark">
            <CCardTitle>Unit ID Number: {props.id}</CCardTitle>
            <CCardText>Description: {props.unit_description}</CCardText>
          </CCardBody>
          <CCardBody>
            <CListGroupItem color="dark">
              Bedrooms: {props.bedrooms}
            </CListGroupItem>
            <CListGroupItem color="dark">
              Bathrooms: {props.num_of_bathrooms}
            </CListGroupItem>
            <CListGroupItem color="dark">
              Balconies: {props.num_of_balcony}
            </CListGroupItem>
            <CListGroupItem color="dark">
              Avalability: {props.is_available}
            </CListGroupItem>
            <CListGroupItem color="dark">
              Avalability: {props.is_reserved}
            </CListGroupItem>
            <CListGroupItem color="dark">
              Available Start Date: {props.unit_availability_start_date}
            </CListGroupItem>
            <CListGroupItem color="dark">
              Available End Date: {props.unit_availability_end_date}
            </CListGroupItem>
            <CListGroupItem color="dark">
              Unit Sqft: {props.living_area_sf}
            </CListGroupItem>
            <CListGroupItem color="dark">
              Unit Floor if applicable: {props.unit_at_floor}
            </CListGroupItem>
            <CListGroupItem color="dark">
              Cost: $ {props.price_per_month}
            </CListGroupItem>
          </CCardBody>
        </CCard>
      </Container>
    </Container1>
  );
}

export default CardDetail;

const Container = styled.div`
  width: 50%;
  padding-top: 4%;
  align-items: center;
  background: clear;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  opacity: 0.85;
`;

const Container1 = styled.div`
  width: 100%;
  padding-top: 4%;
  align-items: center;
  background-color: dark;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
