import React from 'react';

export default class Unit extends React.Component {
    render() {
        let className= this.props.type + " team-";
        if (this.props.team === 1) {
            className += "1";
        }
        console.log("team=", this.props.team, " type=", this.props.type);

        return (
            <div
                className={className}
            >
                {this.props.type.substring(0, 2)}
            </div>
        );
    }
}