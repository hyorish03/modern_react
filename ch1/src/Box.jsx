import React from "react";

function Box({ number, visible }) {
  return <div className="box">{visible && number}</div>;
}

export default Box;
