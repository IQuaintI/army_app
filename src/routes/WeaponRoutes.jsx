import { Route } from "react-router-dom";

//Imports
import { M249_Saw } from "../board_information/weapons/M249_Saw";
import { MK19 } from "../board_information/weapons/MK19";

export default [
  <Route
    path="/board_information/weapons/M249_Saw"
    element={<M249_Saw />}
    key="M249"
  />,

  <Route
    path="/board_information/weapons/MK19"
    element={<MK19 />}
    key="MK19"
  />,
];
