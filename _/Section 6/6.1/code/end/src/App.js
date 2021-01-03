import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
      <Container>
        <Row>
          <Col md="3">
            <SideBar
              onViewChange={view => this.setState({ view })}
              selected={this.state.view}
            />
          </Col>
          <Col md="9">{this.renderView()}</Col>
        </Row>
      </Container>
    );
  }
}

export default App;
