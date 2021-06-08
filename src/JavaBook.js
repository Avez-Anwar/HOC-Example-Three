import React from "react";
import Frame from "./FrameWork";

class JavaBook extends React.Component {
  render() {
    return (
      <div>
        <h4 onMouseOver={this.props.HocHandleclick}>
          Java Books {this.props.HocFrameWork} :{this.props.HocBooks}
        </h4>
      </div>
    );
  }
}

export default Frame(JavaBook, 10);
