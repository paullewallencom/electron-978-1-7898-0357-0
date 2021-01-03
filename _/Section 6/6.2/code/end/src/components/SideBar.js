import React, { Component } from "react";

class SideBar extends Component {
  style = viewName => {
    if (this.props.selected === viewName)
      return { textDecoration: "underline" };
    else return null;
  };

  render() {
    return (
      <div>
        <h4
          onClick={() => this.props.onViewChange("today")}
          style={this.style("today")}
        >
          Today
        </h4>
        <h4
          onClick={() => this.props.onViewChange("create")}
          style={this.style("create")}
        >
          Create
        </h4>
        <h4
          onClick={() => this.props.onViewChange("list")}
          style={this.style("list")}
        >
          List
        </h4>
      </div>
    );
  }
}

export default SideBar;
