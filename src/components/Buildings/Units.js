import React from 'react';

export default class Units extends React.Component {
    render() {
        return (
            <div className="units">
                <button
                    className="units--infantry" 
                    // onClick={() => this.props.handleBuyInfantry(this.props.row, this.props.col)}
                    onClick={() => this.props.handleBuyUnits(this.props.row, this.props.col, "infantry")}
                >
                    <span>Infantry, $200</span>
                    <img alt="" src="https://opengameart.org/sites/default/files/styles/medium/public/highschoolguy1.png"/>
                </button>

                <button 
                    className="units--spaceship"
                    onClick={() => this.props.handleBuyUnits(this.props.row, this.props.col, "drone")}
                >
                    <span>Drone, $500</span>
                    <img alt="" src="https://opengameart.org/sites/default/files/styles/medium/public/pitrizzo-SpaceShip-gpl3-opengameart-24x24-prev.png"/>
                </button>
            </div>
        );
    }
}