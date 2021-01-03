import React, { Component } from "react";
import "./App.css";

import SideBar from "./components/SideBar";
import CreateAppointment from "./components/appointment/Create";
import AppointmentList from "./components/appointment/List";
import TodayAppointments from "./components/appointment/Today";

class App extends Component {
  state = {
    view: "today"
  };

  renderView() {
    if (this.state.view === "create") return <CreateAppointment />;
    else if (this.state.view === "list") return <AppointmentList />;
    else return <TodayAppointments />;
  }

  render() {
    return (
      <div>
        <SideBar onViewChange={view => this.setState({ view })} />
        {this.renderView()}
      </div>
    );
  }
}

export default App;
