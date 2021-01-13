import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const NotFound = () => (
  <div>
    <h1>404 - Not Found!</h1>
    <Link to="/">Go Home</Link>
    <div>sdfwr</div>
    <img src="" className="body"/>
    <div>
      <div className="message">
        <b> We are undergoing a bit of scheduled maintenance. </b>
        <br />
        <b>Sorry for the inconvenience. We'll be back up and running soon.</b>
      </div>
    </div>
  </div>
);

export default NotFound;
