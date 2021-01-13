import React, { useContext } from "react";
import { TableHeader, TableRow } from "../Table/Table.jsx";
import DataAreaContext from "../../utils/dataAreaContext.js";
import Utils from "../../utils/utils.js";
import "./card.scss";

function Card() {
    const context = useContext(DataAreaContext);

    return (
        <>
            <div className="card-container">
                <TableHeader />
                {context.employeeState.filtered[0] !== undefined &&
                context.employeeState.filtered[0].name !== undefined ? (
                    context.employeeState.filtered.map(
                        ({ login, name, picture, phone, email, dob }) => {
                            const prop = {
                                avatar: picture.medium,
                                name: name.first + " " + name.last,
                                phone,
                                email,
                                dob: Utils.formatDate(dob.date),
                            };
                            return <TableRow key={login.uuid} {...prop} />;
                        }
                    )
                ) : (
                    <></>
                )}
            </div>
        </>
    );
}

export default Card;