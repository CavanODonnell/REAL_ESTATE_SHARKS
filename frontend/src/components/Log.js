import React, { Component } from "react";
import Button from "@mui/material/Button";

export default class Log extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({ [e.currentTarget.id]: e.currentTarget.value });
  };

  render() {
    return (
      <div className="Log">
        <form className="form">
          <input
            labelText="Email"
            id="email"
            formControlProps={{
              fullWidth: true,
            }}
            handleChange={this.handleChange}
            type="text"
          />
          <input
            labelText="Password"
            id="password"
            formControlProps={{
              fullWidth: true,
            }}
            handleChange={this.handleChange}
            type="password"
          />

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
          >
            Log In
          </Button>
        </form>
      </div>
    );
  }
}
