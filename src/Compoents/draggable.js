import { ItemTypes } from "./constant";
import Item1 from "./item1";
import Item2 from "./item2";

import React, { Component } from "react";
import { DropTarget } from "react-dnd";
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
function _({ connectDropTarget }) {
  return connectDropTarget(
    <div
      style={{
        width: "500px",
        height: "400px",
        border: "1px solid black",
        backgroundColor: "grey",
        padding: "7px"
      }}
    >
      <Item1 />
      <Item2 />
    </div>
  );
}

export default DropTarget("data", squareTarget, collect)(_);
