import React from 'react';

export default class Headquarters extends React.Component {
    render() {
        return (
            <div className="building--headquarters">
                <img alt="" src={require("../../assets/buildings/headquarters.png")}></img>
            </div>
        );
    }
}