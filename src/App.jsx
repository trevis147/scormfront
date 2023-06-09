import React from "react";
import ScormProvider from "react-scorm-provider";
import Player from "./player";

const App = () => {
  return (
    <ScormProvider version="1.2" debug={true}>
      <h1>We've got a connection just by including ScormProvider!</h1>
      <p>
        I'm a child with no access to the ScormProvider's props. But the
        ScoLearner component is enhanced with withScorm()!
      </p>
      <Player />
    </ScormProvider>
  );
};

export default App;
