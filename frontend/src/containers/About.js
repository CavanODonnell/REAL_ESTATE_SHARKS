import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styled from "styled-components";

function About() {
  return (
    <Container>
      <Header />
      <Box padding-top="50px" sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>Welcome to Real Estate Charks Webpage</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Welcome to Real Estate Charks Webpage</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Welcome to Real Estate Charks Webpage</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>Welcome to Real Estate Charks Webpage</Item>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Container>
  );
}

export default About;

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
