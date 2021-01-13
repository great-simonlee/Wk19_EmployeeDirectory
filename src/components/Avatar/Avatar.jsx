// @flow 
import * as React from 'react';
import "./avatar.scss"

const Avatar = ({ avatar }) => {
    return (
        <img src={ avatar } className="avatar" alt="avartar"/>
    );
};

export default Avatar;