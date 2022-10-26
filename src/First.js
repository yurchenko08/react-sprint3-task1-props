import React from "react";
import { v4 as uuidv4 } from "uuid";
const First = (props) => {
  return <li key={uuidv4()}>{props.list[0]}</li>;
};
export default First;
