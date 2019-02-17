import React from 'react';
import Headquarters from './Buildings/Headquarters.js';
import Workshop from './Buildings/Workshop.js';
import Infantry from './Units/Infantry.js';

export default class Square extends React.Component {
    render() {
        var terrain = this.props.terrain;
        var unit = this.props.unit
        var unitTag = (unit === null ? 'unit--none' : ('unit--'+unit));
        return (
            <button 
                className={"board--square terrain--" + terrain + ' ' + unitTag}
            >
                {terrain === 'headquarters' ? <Headquarters /> : null }
                {terrain === 'workshop' ? <Workshop onClick={this.props.onClick}/> : null }
                
                {unit === 'infantry' ? <Infantry /> : null}
            </button>
        );
    }
}