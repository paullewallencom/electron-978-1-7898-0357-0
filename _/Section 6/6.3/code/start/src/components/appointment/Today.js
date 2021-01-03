import React, { Component } from "react";
const { ipcRenderer } = window.require("electron");

class Today extends Component {
  state = {
    appointments: []
  };

  componentDidMount() {
    ipcRenderer.send("appointment:request:today");

    ipcRenderer.on("appointment:response:today", (event, appointments) => {
      this.setState({ appointments });
    });
  }

  done = id => {
    ipcRenderer.send("appointment:done", id);
  };

  render() {
    return (
      <div>
        <h3>Today's Appointments</h3>
        <hr />

        {this.state.appointments.map(appointment => {
          return (
            <div key={appointment.id}>
              <p>Name: {appointment.name}</p>
              <p>Phone Number: {appointment.number}</p>
              <p>Date: {appointment.date}</p>
              <p>Hour: {appointment.hour}</p>
              <p>Symptoms: {appointment.symptoms}</p>
              <p>Done: {appointment.done ? "Yes" : "No"}</p>
              <button
                disabled={appointment.done}
                onClick={() => this.done(appointment.id)}
              >
                Done
              </button>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Today;
