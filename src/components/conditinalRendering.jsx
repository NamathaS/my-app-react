import React, { Component } from "react";

class ConRender extends Component {
  state = {
    tags: ["tag1", "tag2", "tag3"],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p> There is no tags</p>;
    else
      return (
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
  }
  render() {
    // Children is used to access the values/ elements specified in the opening and closing
    //bracket of the child - specified in the root
    //  {this.props.children}
    return <div>{this.renderTags()}</div>;
  }
}

export default ConRender;
