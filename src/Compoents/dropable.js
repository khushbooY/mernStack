import React, { Component } from "react";
import { DropTarget } from "react-dnd";

import { ItemTypes } from "./constant";

const squareTarget = {
  drop(props) {
    console.log("DONE");
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}
function Dropw({ connectDropTarget }) {
  return connectDropTarget(
    <div
      style={{
        width: "500px",
        height: "400px",
        border: "1px solid black",
        backgroundColor: "grey",
        padding: "7px"
      }}
    />
  );
}

export default DropTarget("data", squareTarget, collect)(Dropw);
