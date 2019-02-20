import React from 'react';

export default class Units extends React.Component {
    handleBuyUnit(unit) {
        this.props.handleBuyUnits(this.props.row, this.props.col, unit);
        this.props.handleCloseModal();
    }

    render() {
        return (
            <div className="units">
                <button
                    className="units--infantry" 
                    onClick={() => this.handleBuyUnit("infantry")}
                >
                    <span>Infantry, $200</span>
                </button>

                <button 
                    className="units--spaceship"
                    onClick={() => this.handleBuyUnit("drone")}
                >
                    <span>Drone, $500</span>
                </button>
            </div>
        );
    }
}