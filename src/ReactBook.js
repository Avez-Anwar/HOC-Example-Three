import React from "react";
import Frame from "./FrameWork";

class ReactBook extends React.Component {
  render() {
    return (
      <div>
        <h4 onMouseOver={this.props.HocHandleclick}>
          React Books {this.props.HocFrameWork} : {this.props.HocBooks}
        </h4>
      </div>
    );
  }
}

export default Frame(ReactBook, 20);
