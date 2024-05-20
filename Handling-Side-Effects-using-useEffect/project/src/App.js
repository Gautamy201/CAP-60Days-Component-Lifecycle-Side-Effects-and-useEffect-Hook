import React from "react";
import DataFetchingComponent from "./components/DataFetchingComponent ";
import MouseMovementComponent from "./components/MouseMovementComponent";
import TitleUpdaterComponent from "./components/TitleUpdaterComponent";

function App() {
  return (
    <div className="App">
      <DataFetchingComponent />
      <MouseMovementComponent />
      <TitleUpdaterComponent />
    </div>
  );
}

export default App;
