import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Contact() {
  return (
    <Container>
      <Header />
      <Box padding-top="5rem" sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>Email: sharksAreReal@gmail.com</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Phone: 777-8888-8888</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              {" "}
              Please reach out if you have any questions and leave a message
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>Copy Right here</Item>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Container>
  );
}

export default Contact;

const Item = styled.div`
  bakgroundcolor: dark;
  item-text: white;
`;

const Container = styled.div`
  width: 100%;
  padding-top: 4%;
  align-items: center;
  background: clear;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
