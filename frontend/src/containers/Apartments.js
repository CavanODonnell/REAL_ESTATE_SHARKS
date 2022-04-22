import React, { useState, onClick, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "../highOrder/axios";
import UnitCard from "../components/UnitCard";

//getting the base url based on database and appending for
//what we need
const Apartments = () => {
  const [listings, setListings] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:8000/unitlisting/`);

        setListings(res.data.results);
        setCount(res.data.count);
      } catch (err) {}
    };

    fetchData();
  }, []);

  const displayListings = () => {
    let display = [];
    let result = [];

    listings.map((listing) => {
      return display.push(
        <UnitCard
          num_of_bedrooms={listing.num_of_bedrooms}
          num_of_bathrooms={listing.num_of_bathrooms}
          num_of_balcony={listing.num_of_balcony}
          is_available={listing.is_available}
          is_reserved={listing.is_reserved}
          unit_availability_start_date={listing.unit_availability_start_date}
          unit_availability_end_date={listing.unit_availability_end_date}
          unit_description={listing.unit_description}
          living_area_sf={listing.living_area_sf}
          unit_number={listing.unit_number}
          unit_at_floor={listing.unit_at_floor}
        />
      );
    });

    for (let i = 0; i < listings.length; i += 3) {
      result.push(
        <div key={i} className="row">
          <div className="col-1-of-3">{display[i]}</div>
          <div className="col-1-of-3">
            {display[i + 1] ? display[i + 1] : null}
          </div>
          <div className="col-1-of-3">
            {display[i + 2] ? display[i + 2] : null}
          </div>
        </div>
      );
    }

    return result;
  };

  const [openSearch, setOpenSearch] = useState(true);

  const handleSearch = (a) => {
    setOpenSearch(a);
  };

  return (
    <Wrap>
      <Header />
      <ItemText>
        {openSearch ? (
          <Container>
            <ButtonGroup>
              <form class="row g-3">
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
                <div class="col-md-6">
                  <label for="inputCity" class="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputCity"
                  ></input>
                </div>
                <div class="col-md-4">
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
                </div>
                <div class="col-md-2">
                  <label for="inputZip" class="form-label">
                    Zip
                  </label>
                  <input type="text" class="form-control" id="inputZip"></input>
                </div>
                <div class="col-12">
                  <div class="form-check"></div>
                </div>
                <div class="col-12">
                  <Button onClick={() => handleSearch(false)}>Search</Button>
                </div>
              </form>
            </ButtonGroup>
          </Container>
        ) : (
          /* Resulting search */
          <SearchWrap>
            <Container>
              <ButtonGroup>
                <Button onClick={() => handleSearch(true)}>
                  Back to Search
                </Button>
                <section className="listings__listings">
                  {displayListings()}
                </section>
              </ButtonGroup>
            </Container>
          </SearchWrap>
        )
        /*End of search results*/
        }
      </ItemText>
      <Footer />
    </Wrap>
  );
};

export default Apartments;

const SearchWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/newYork-skyline.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Search = styled.div`
  cursor: pointer;
`;
const SearchNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: black;
  width: 200px;
  z-index: 5;
  list-style: none;
  padding: 20px;
  text-align: start;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  opacity: 0.75;
  transform: ${(props) => (props.show ? "TranslateX(0)" : "translateX(100%)")};
  transition: transfrom 0.2;
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

  a {
    font-weight: 800;
  }
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
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  color: blue;
  text-align: center;
  display: flex;
`;

const ButtonGroup = styled.div`
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
const SecondButton = styled(FirstButton)``;
