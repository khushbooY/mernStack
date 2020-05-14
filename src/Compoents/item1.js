import React, { Component } from "react";
import { ItemTypes } from "./constant";

import { DragSource } from "react-dnd";

const knightSource = {
  beginDrag(props) {
    return {
      pieceId: props.id
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

function Item1({ connectDragSource, isDragging }) {
  return connectDragSource(
    <div
      style={{
        width: "100%",
        height: "20%",
        backgroundColor: "white",
        border: "1px solid black",
        margin: "2px",
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: "bold"
      }}
    >
      Hello
    </div>
  );
}

export default DragSource("data", knightSource, collect)(Item1);
