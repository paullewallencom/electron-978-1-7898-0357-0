import React, { Component } from "react";

class SideBar extends Component {
  render() {
    return (
      <div>
        <h4 onClick={() => this.props.onViewChange("today")}>Today</h4>
        <h4 onClick={() => this.props.onViewChange("create")}>Create</h4>
        <h4 onClick={() => this.props.onViewChange("list")}>List</h4>
      </div>
    );
  }
}

export default SideBar;
