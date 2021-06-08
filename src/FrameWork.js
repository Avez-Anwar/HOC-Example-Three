import React from "react";

const Frame = (Study, read) => {
  class NewStudy extends React.Component {
    state = {
      Books: 10
    };

    handleClick = () => {
      this.setState({ Books: this.state.Books + read });
    };
    render() {
      return (
        <div>
          <Study
            HocFrameWork="Spring"
            HocBooks={this.state.Books}
            HocHandleclick={this.handleClick}
          />
        </div>
      );
    }
  }
  return NewStudy;
};

export default Frame;
