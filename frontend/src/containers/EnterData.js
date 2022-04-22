import React, { useState, onClick } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";

function EnterData() {
  const [submit, setSubmit] = useState(true);

  const [match, setMatch] = useState(false);

  const handleSubmit = (a) => {
    setSubmit(a);
  };

  const handleMatch = (b) => {
    setMatch(b);
  };

  return (
    <Container>
      <Header />
      <ItemText>
        <SearchWrap>
          {submit ? (
            <ButtonGroup>
              <Container>
                <form>
                  <div>
                    <label for="quantity">Number of Bedrooms</label>
                    <input
                      type="number"
                      id="quantityBed"
                      name="quantity"
                      min="0"
                      max="20"
                    ></input>
                  </div>

                  <div>
                    <label for="quantity">Number of Bathrooms</label>
                    <input
                      type="number"
                      id="quantityBath"
                      name="quantity"
                      min="0"
                      max="15"
                    ></input>
                  </div>

                  <div>
                    <label for="text">Balcony Number</label>
                    <input
                      default="0"
                      type="number"
                      id="quantityBalc"
                      name="quantity"
                      min="0"
                      max="10"
                    ></input>
                  </div>

                  <div>
                    <label for="quantity">Available?</label>
                    <input type="checkbox"></input>
                  </div>

                  <div>
                    <label for="quantity">Reserved?</label>
                    <input type="checkbox"></input>
                  </div>

                  <div>
                    <label for="birthday">Available Start Date:</label>
                    <input type="date" id="startDate" name="startDate"></input>
                  </div>

                  <div>
                    <label for="birthday">End Date</label>
                    <input type="date" id="endDate" name="endDate"></input>
                  </div>

                  <div>
                    <label for="description">Unit Description</label>
                    <textarea
                      name="text"
                      rows="5"
                      cols="40"
                      wrap="soft"
                      maxlength="500"
                    ></textarea>
                  </div>

                  <div>
                    <label for="area" class="form-label">
                      Square Footage
                    </label>
                    <input type="text" class="form-control" id="area"></input>
                  </div>

                  <div>
                    <label for="unitNumber" class="form-label">
                      Unit Number
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="unitNumber"
                    ></input>
                  </div>

                  <div>
                    <label for="floor" class="form-label">
                      Floor (leave blank if none)
                    </label>
                    <input type="text" class="form-control" id="floor"></input>
                  </div>

                  <div>
                    <div class="form-check"></div>
                  </div>

                  <div>
                    <Button onClick={() => handleMatch(true)}>Match</Button>
                  </div>

                  <div>
                    <Button onClick={() => handleSubmit(false)}>Submit</Button>
                  </div>
                </form>
              </Container>
            </ButtonGroup>
          ) : (
            /* Resulting search */
            <ButtonGroup>
              <Button onClick={() => handleSubmit(true)}>
                Add Another Entry
              </Button>
            </ButtonGroup>
          )
          /*End of search results*/
          }
        </SearchWrap>
      </ItemText>
      <Footer />
    </Container>
  );
}

export default EnterData;

const SearchWrap = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/pool-by-sea.png");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.div`
  type: submit;
  class: btn btn-primary
  width: 100px;
    color: white;
    background-color: rgba(18, 20, 34, 0.8);
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 60px;
    opacity: 0.95;
    text-transform: uppercase;
    font-size: 18px;
    cursor: pointer;
    text-align: center;
`;

const Container = styled.div`
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

const wrapperC = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 100px);
  grid-template-rows: repeat(1, 100px);
  height: 500px;
  width: 500px;
  gap: 10px;
  grid-template-areas: "b b";
`;

const item1 = styled.div`
  grid-area: b;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  color: blue;
  text-align: center;
  display: flex;
`;

const ButtonGroup = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-bottom: 50px;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  justify-content: center;
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
`;
