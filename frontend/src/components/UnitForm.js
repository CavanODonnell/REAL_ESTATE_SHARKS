import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Button from "@mui/material/Button";

const UnitForm = () => {
  const [submit, setSubmit] = useState(false);

  const [formData, setFormData] = useState({
    num_of_bedrooms: "0",
    num_of_bathrooms: "0",
    num_of_balcony: "0",
    is_available: "true",
    is_reserved: "false",
    unit_availability_start_date: null,
    unit_availability_end_date: null,
    unit_description: "For Rent",
    living_area_sf: "0",
    unit_number: "0",
    unit_at_floor: "0",
    price_per_month: "0",
  });

  const {
    num_of_bedrooms,
    num_of_bathrooms,
    num_of_balcony,
    is_available,
    is_reserved,
    unit_availability_start_date,
    unit_availability_end_date,
    unit_description,
    living_area_sf,
    unit_number,
    unit_at_floor,
    price_per_month,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const onSubmit = () => async () => {
    const res = await axios
      .post("http://127.0.0.1:8000/unit/", {
        unit: {
          num_of_bedrooms,
          num_of_bathrooms,
          num_of_balcony,
          is_available,
          is_reserved,
          unit_availability_start_date,
          unit_availability_end_date,
          unit_description,
          living_area_sf,
          unit_number,
          unit_at_floor,
          price_per_month,
        },
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <P>
        Enter Unit information in the form fields below. Hit "Submit" when ready
      </P>
      <Wrap>
        <form classname="form1">
          <Container>
            <div>
              <label htmlFor="num_of_bedrooms">Number of Bedrooms</label>
              <input
                id="num_of_bedrooms"
                type="number"
                name="num_of_bedrooms"
                min="0"
                max="20"
                onChange={(e) => onChange(e)}
                value={num_of_bedrooms}
              ></input>
            </div>

            <div>
              <label htmlFor="num_of_bathrooms">Number of Bathrooms</label>
              <input
                id="num_of_bathrooms"
                type="number"
                name="num_of_bathrooms"
                min="0"
                max="15"
                onChange={(e) => onChange(e)}
                value={num_of_bathrooms}
              ></input>
            </div>

            <div>
              <label htmlFor="num_of_balcony">Balcony Number</label>
              <input
                id="num_of_balcony"
                default="0"
                type="number"
                name="num_of_balcony"
                min="0"
                max="10"
                onChange={(e) => onChange(e)}
                value={num_of_balcony}
              ></input>
            </div>

            <div>
              <label htmlFor="is_available">Available?</label>
              <input
                id="is_available"
                type="checkbox"
                name="is_available"
                onChange={(e) => onChange(e)}
                value={is_available}
              ></input>
            </div>

            <div>
              <label htmlFor="is_reserved">Reserved?</label>
              <input
                id="is_reserved"
                type="checkbox"
                name="is_reserved"
                onChange={(e) => onChange(e)}
                value={is_reserved}
              ></input>
            </div>

            <div>
              <label htmlFor="unit_availability_start_date">
                Available Start Date:
              </label>
              <input
                id="unit_availability_start_date"
                type="date"
                placeholder="YYYY-MM-DD"
                required
                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                title="Enter a date in this formart YYYY-MM-DD"
                name="unit_availability_start_date"
                onChange={(e) => onChange(e)}
                value={unit_availability_start_date}
              ></input>
            </div>

            <div>
              <label htmlFor="unit_availability_end_date">End Date</label>
              <input
                id="unit_availability_end_date"
                type="date"
                placeholder="YYYY-MM-DD"
                required
                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                title="Enter a date in this formart YYYY-MM-DD"
                name="unit_availability_end_date"
                onChange={(e) => onChange(e)}
                value={unit_availability_end_date}
              ></input>
            </div>
          </Container>
          <Container>
            <div>
              <label htmlFor="unit_description">Unit Description</label>
              <textarea
                id="unit_description"
                name="unit_description"
                rows="5"
                cols="40"
                wrap="soft"
                maxLength="1000"
                onChange={(e) => onChange(e)}
                value={unit_description}
              ></textarea>
            </div>

            <div>
              <label htmlFor="living_area_sf">Square Footage</label>
              <input
                id="living_area_sf"
                type="text"
                name="living_area_sf"
                onChange={(e) => onChange(e)}
                value={living_area_sf}
              ></input>
            </div>

            <div>
              <label htmlFor="unit_number">Unit Number</label>
              <input
                id="unit_number"
                type="text"
                name="unit_number"
                onChange={(e) => onChange(e)}
                value={unit_number}
              ></input>
            </div>

            <div>
              <label htmlFor="unit_at_floor">Floor (leave blank if none)</label>
              <input
                id="unit_at_floor"
                type="text"
                name="unit_at_floor"
                onChange={(e) => onChange(e)}
                value={unit_at_floor}
              ></input>
            </div>
            <div>
              <label htmlFor="price_per_month">Monthly Cost</label>
              <input
                id="price_per_month"
                type="text"
                name="price_per_month"
                onChange={(e) => onChange(e)}
                value={price_per_month}
              ></input>
            </div>
            <div show={submit}>
              <label></label>
              <Button
                style={{
                  maxWidth: "300px",
                  maxHeight: "50px",
                  minWidth: "300px",
                  minHeight: "30px",
                }}
                variant="contained"
                type="submit"
                name="Submit"
                id="submit"
                onClick={onSubmit(false)}
              >
                Submit
              </Button>
            </div>
          </Container>
        </form>
      </Wrap>
      <P>
        All fields must be entered, Leaving A field blank will result in no data
        being stored
      </P>
    </div>
  );
};

export default UnitForm;

const P = styled.div`
  text-align: center;
  color: black;
`;
const Wrap = styled.div`
  padding-top: 10%;
  width: 100%;
  hight: 100%;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid;
  border-color: black;
  border-radius: 15px;
  overflow: hidden;
  background-color: rgba(23, 26, 32, 0.8);
`;

const FirstButton = styled.div`
  padding: 10px;
  width: 300px;
  color: #2577be;
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
`;

const Container = styled.div`
  padding: 10px;
  padding-top: 10px;
  width: 50%;
  float: left;
  height: 65vh;
  align-items: column;
  label {
    width: 300px;
    color: #2577be;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 15px;
    text-align: center;
  }

  input {
    width: 300px;
    color: white;
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 60px;
    opacity: 0.85;
    font-size: 12px;
    cursor: hover;
    text-align: center;
  }

  select {
    width: 300px;
    color: white;
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 60px;
    opacity: 0.85;
    font-size: 15px;
    cursor: pointer;
    text-align: center;
  }
`;
