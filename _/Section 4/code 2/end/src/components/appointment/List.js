import React, { Component } from "react";
const { ipcRenderer } = window.require("electron");

class List extends Component {
  state = {
    appointments: []
  };

  componentDidMount() {
    ipcRenderer.send("appointment:request:list");

    ipcRenderer.on("appointment:response:list", (event, appointments) => {
      this.setState({ appointments });
    });
  }

  render() {
    return (
      <div>
        <h3>Appointments' List</h3>
        <hr />

        {this.state.appointments.map(appointment => {
          //if (appointment.name.includes(this.state.filter))
          return (
            <div key={appointment.id}>
              <p>Name: {appointment.name}</p>
              <p>Phone Number: {appointment.number}</p>
              <p>Date: {appointment.date}</p>
              <p>Hour: {appointment.hour}</p>
              <p>Symptoms: {appointment.symptoms}</p>
              <p>Done: {appointment.done ? "Yes" : "No"}</p>
              <hr />
            </div>
          );
          //else return null;
        })}
      </div>
    );
  }
}

export default List;
