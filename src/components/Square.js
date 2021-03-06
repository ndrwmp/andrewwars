import React from 'react';
import Headquarters from './Buildings/Headquarters.js';
import Workshop from './Buildings/Workshop.js';
import Unit from './Units/Unit.js';

export default class Square extends React.Component {
    render() {
        var terrain = this.props.terrain;
        var unit = this.props.unit;
        var className = "board--square terrain--" + terrain + this.props.selectedTag + this.props.squareWithinRangeTag;
        // if (this.props.aUnitIsSelected(this.props.row, this.props.col))
            // className += " selected";

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
                        setSelectedUnitType={this.props.setSelectedUnitType}
                        handleBuyUnits={this.props.handleBuyUnits}
                        setModalStatus={this.props.setModalStatus}
                        aUnitIsOnThisSquare={this.props.aUnitIsOnThisSquare}
                    /> : null }
                
                {unit ? <Unit team={unit.team} type={unit.type} /> : null}
                {/* {unit && unit} */}
            </button>
        );
    }
}