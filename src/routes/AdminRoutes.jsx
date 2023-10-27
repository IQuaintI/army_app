import { Route } from "react-router-dom";

//Imports
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { ErrorPage } from "../pages/ErrorPage";

//Export
export default [
  <Route exact path="/" element={<Home />} key="Home" />,
  <Route path="/about" element={<About />} key="About" />,
  <Route path="*" element={<ErrorPage />} key="ErrorPage" />,
];
