import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Button from "@mui/material/Button";

const UnitDelete = () => {
  const [submit, setSubmit] = useState(false);

  const [formData, setFormData] = useState({
    id: "",
  });

  const { id } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const onDelete = () => async () => {
    const res = await axios
      .delete("http://127.0.0.1:8000/unit/" + formData.id + "/", {
        unit: {
          id,
        },
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <P>ENTER ID TO DELETE UNIT BY ID</P>
      <Wrap>
        <form>
          <Container>
            <div>
              <label htmlFor="id">Enter ID</label>
              <input
                id="id"
                type="text"
                name="id"
                onChange={(e) => onChange(e)}
                value={id}
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
                onClick={onDelete()}
              >
                Delete
              </Button>
            </div>
          </Container>
        </form>
      </Wrap>
    </div>
  );
};

export default UnitDelete;

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
