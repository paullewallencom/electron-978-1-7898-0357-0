import React, { Component } from "react";
const { ipcRenderer } = window.require("electron");

const INITIAL_STATE = {
  name: "",
  number: "",
  date: "",
  hour: "",
  symptoms: ""
};

class Create extends Component {
  state = INITIAL_STATE;

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();

    ipcRenderer.send("appointment:create", this.state);
    this.setState(INITIAL_STATE);
  };

  render() {
    return (
      <div>
        <h3>Create Appointment</h3>
        <hr />
        <form id="form" onSubmit={this.submitForm}>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
            required
          />
          <br />
          <br />
          <label htmlFor="number">Phone Number:</label>
          <br />
          <input
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.onChange}
            required
          />
          <br />
          <br />
          <label htmlFor="date">Date:</label>
          <br />
          <input
            type="text"
            name="date"
            placeholder="YYYY-MM-DD"
            value={this.state.date}
            onChange={this.onChange}
            required
          />
          <br />
          <br />
          <label htmlFor="hour">Hour:</label>
          <br />
          <input
            type="text"
            name="hour"
            placeholder="hh:mm"
            value={this.state.hour}
            onChange={this.onChange}
            required
          />
          <br />
          <br />
          <label htmlFor="symptoms">Symptoms:</label>
          <br />
          <textarea
            type="text"
            name="symptoms"
            value={this.state.symptoms}
            onChange={this.onChange}
            required
          />
          <br />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Create;
