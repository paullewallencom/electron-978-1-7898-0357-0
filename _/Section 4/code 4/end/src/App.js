import React from "react";
import "./App.css";

import SideBar from "./components/SideBar";
import CreateAppointment from "./components/appointment/Create";
import AppointmentList from "./components/appointment/List";
import TodayAppointments from "./components/appointment/Today";

function App() {
  return (
    <div>
      <SideBar />
      <TodayAppointments />
      <CreateAppointment />
      <AppointmentList />
    </div>
  );
}

export default App;
