import React, { useState, onClick, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "../highOrder/axios";
import UnitCard from "../components/UnitCard";
import Button from "@mui/material/Button";
import api from "../highOrder/axios";
import Fade from "react-reveal/Fade";

//getting the base url based on database and appending for
//what we need
const Apartments = () => {
  const [unit, setUnit] = useState("");
  const [openSearch, setOpenSearch] = useState(true);

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
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const fetchUnit = async () => {
    api.get("unit/1/").then((res) => {
      setUnit(res.data.unit);
      console.log(unit);
    });
  };

  return (
    <div>
      <Header />
      {openSearch ? (
        <Container>
          <Fade left>
            <Wrap2>
              <form class="flex flex-col justify-center items-center">
                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label">
                    Apartment Type
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail4"
                  ></input>
                </div>

                <div class="col-12">
                  <label for="inputAddress" class="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  ></input>
                </div>
                <div class="col-12">
                  <label for="inputAddress2" class="form-label">
                    Address 2
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                  ></input>
                </div>
                <div>
                  <label for="inputCity" class="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputCity"
                  ></input>
                </div>
                <div>
                  <label for="inputState" class="form-label">
                    State
                  </label>
                  <select id="inputState" class="form-select">
                    <option selected>Choose...</option>
                    <option value={1}>Connecticut</option>
                    <option value={2}>Delaware</option>
                    <option value={3}>Maine</option>
                    <option value={4}>Maryland</option>
                    <option value={5}>Massachusetts</option>
                    <option value={6}>New Hampshire</option>
                    <option value={1}>Vermont</option>
                  </select>
                  <label for="inputZip" class="form-label">
                    Zip
                  </label>
                  <input type="text" class="form-control" id="inputZip"></input>
                  <Button
                    padding={10}
                    margin={5}
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
                    onClick={() => [fetchUnit(), setOpenSearch(false)]}
                  >
                    Search
                  </Button>
                </div>
              </form>
            </Wrap2>
          </Fade>
        </Container>
      ) : (
        /* Resulting search */
        <Container>
          <Fade top>
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
              onClick={() => setOpenSearch(true)}
            >
              Back To Search
            </Button>
          </Fade>
        </Container>
      )
      /*End of search results*/
      }
      <Footer />
    </div>
  );
};

export default Apartments;

const Container = styled.div`
  padding-top: 100px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/pool-by-sea.png");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;

  label {
    width: 300px;
    color: purple;
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

const Wrap2 = styled.div`
  padding-top: 4%;
  hight: 75%;
  opacity: .50
  backgroundcolor: transparent;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
