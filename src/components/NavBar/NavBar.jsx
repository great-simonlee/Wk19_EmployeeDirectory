// @flow
import * as React from 'react';
import Button from "../Button/Button.jsx";
import "./navBar.scss";

function NavBar() {
  return (
    <div className="nav-container">
        <Button content={"People"}></Button>
        <Button content={"Teams"}></Button>
        <Button content={"Projects"}></Button>
    </div>
  );
};

export default NavBar;