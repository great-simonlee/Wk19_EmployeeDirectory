// @flow
import * as React from 'react';
import LogoSVG from "./logo.svg";
import "./logo.scss";

function Logo() {
  return (
    <div className="logo-container">
        <div className="logo">
            <img src={LogoSVG} className="app-logo" alt="logo" />
        </div>
        <div className="logo-text">Employee Directory</div>
        <div className="logo-sub-text">
            Click on each heading to filter or use the search box to narrow
            your results
        </div>
    </div>
  );
};

export default Logo;