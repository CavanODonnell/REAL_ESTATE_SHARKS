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

const UnitCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

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
            onClick={togglePopup}
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
            contact
          </Button>
        </Stack>
      </CCardBody>
      {isOpen && (
        <popup>
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
              Available Start Date: {props.unit_availability_start_date}
            </CListGroupItem>
            <CListGroupItem color="dark">
              Unit Sqft: {props.living_area_sf}
            </CListGroupItem>
          </CCardBody>
        </popup>
      )}
    </CCard>
  );
};

export default UnitCard;
