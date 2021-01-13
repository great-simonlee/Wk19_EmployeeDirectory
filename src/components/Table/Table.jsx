// @flow
import React, { useContext } from 'react';
import Avatar from "../Avatar/Avatar.jsx";
import ArrowUp from "./arrow_up.svg";
import ArrowDown from "./arrow_down.svg";
import DataAreaContext from "../../utils/dataAreaContext.js";
import "./table.scss";

const col = (prop) => {
    return <div className="t-col">{prop}</div>;
};

export const TableHeader = () => {
    const context = useContext(DataAreaContext);
    return (
        <div className="t-header-container">
            {col(
                <>
                    <div
                        className="t-header-filter"
                        onClick={context.handleOnClick}
                    >
                        Employee
                    </div>
                    <div
                        className="t-header-filter"
                        onClick={context.handleOnClick}
                    >
                        {context.employeeState.order === "ascend" ? (
                            <img src={ArrowUp} alt="employee filter by name" />
                        ) : (
                            <img
                                src={ArrowDown}
                                alt="employee filter by name"
                            />
                        )}
                    </div>
                </>
            )}
            {col("Phone")}
            {col("Email")}
            {col("DOB")}
        </div>
    );
};

export const TableRow = ({ avatar, name, phone, email, dob }) => {
    return (
        <div className="t-row-container">
            {col(
                <>
                    <Avatar avatar={avatar} />
                    <div>{name}</div>
                </>
            )}
            {col(phone)}
            {col(
                <a href={"mailto:" + email} target="__blank">
                    {email}
                </a>
            )}
            {col(dob)}
        </div>
    );
};
