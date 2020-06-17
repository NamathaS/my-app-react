import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm m-2 badge badge-pill"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2 badge badge-pill "
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge badge-pill m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "info";
    return classes;
  }

  formatCount() {
    const value = this.props.counter.value;
    return value === 0 ? "Zero" : value;
  }
}
