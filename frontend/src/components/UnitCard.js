import React, { useState } from "react";
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
import CardDetail from "./CardDetail";

const UnitCard = (props) => {
  return (
    <CCard
      style={{ width: "45rem", height: "44rem" }}
      borderRadius="5rem"
      textColor="white"
      color="dark"
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
        <CListGroupItem color="dark">Bedrooms: {props.bedrooms}</CListGroupItem>
        <CListGroupItem color="dark">
          Bathrooms: {props.num_of_bathrooms}
        </CListGroupItem>
        <CListGroupItem color="dark">
          Available Start Date: {props.unit_availability_start_date}
        </CListGroupItem>
        <CListGroupItem color="dark">
          Unit Sqft: {props.living_area_sf}
        </CListGroupItem>
      </CCardBody>
      <CCardBody textColor="white" color="dark">
        <CCardText>Monthly Rent: $ {props.price_per_month}</CCardText>
        <Stack spacing={2} direction="row">
          <Button
            style={{
              maxWidth: "10rem",
              maxHeight: "2rem",
              minWidth: "8rem",
              minHeight: "2rem",
            }}
            variant="contained"
            to={{
              pathname: "/CardDetail",
              state: {
                id: props.id,
                num_of_bedrooms: props.num_of_bedrooms,
                num_of_bathrooms: props.num_of_bathrooms,
                num_of_balcony: props.num_of_balcony,
                is_available: props.is_available,
                is_reserved: props.is_reserved,
                unit_availability_start_date:
                  props.unit_availability_start_date,
                unit_availability_end_date: props.unit_availability_end_date,
                unit_description: props.unit_description,
                living_area_sf: props.living_area_sf,
                unit_number: props.unit_number,
                unit_at_floor: props.unit_at_floor,
                price_per_month: props.price_per_month,
              },
            }}
          >
            Details
          </Button>
          <Button
            style={{
              maxWidth: "10rem",
              maxHeight: "2rem",
              minWidth: "8rem",
              minHeight: "2rem",
            }}
            variant="contained"
            href="/Contact"
          >
            Contact
          </Button>
        </Stack>
      </CCardBody>
    </CCard>
  );
};

export default UnitCard;
