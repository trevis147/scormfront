import React from "react";
import { withScorm } from "react-scorm-provider";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  render() {
    return (
      <div>
        <iframe
          src="https://louuu03.github.io/Scorm_Example/story.html"
          height="300"
          width="100%"
        />
        <br />
        <button
          onClick={() => {
            console.log(this.props.sco.get("cmi.core.lesson_location "));
          }}
        >
          Click Me
        </button>
        <br />
      
      </div>
    );
  }
}

export default withScorm()(Player);
