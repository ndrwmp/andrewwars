import React from 'react';
import Headquarters from './Buildings/Headquarters.js';
import Workshop from './Buildings/Workshop.js';
import Infantry from './Units/Infantry.js';
import Drone from './Units/Drone.js';

export default class Square extends React.Component {
    render() {
        var terrain = this.props.terrain;
        var unit = this.props.unit;
        var className = "board--square terrain--" + terrain;
        if (this.props.aUnitIsSelected(this.props.row, this.props.col))
            className += " selected";
        
        return (
            <button 
                className={className}
                onClick={() => (this.props.handleSelect(this.props.row, this.props.col))}
                // onClick={() => (console.log("clicked square " + this.props.row + ", " + this.props.col))}
            >
                {terrain === 'headquarters' ? <Headquarters /> : null }
                {terrain === 'workshop' ? 
                    <Workshop
                        row={this.props.row}
                        col={this.props.col}
                        aUnitIsSelected={this.props.aUnitIsSelected}
                        handleBuyUnits={this.props.handleBuyUnits}
                        setModalStatus={this.props.setModalStatus}
                    /> : null }
                
                {unit === 'infantry' ? <Infantry /> : null}
                {unit === 'drone' ? <Drone /> : null}
            </button>
        );
    }
}