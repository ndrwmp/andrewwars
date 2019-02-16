import React from 'react';

export default class Units extends React.Component {
    render() {
        return (
            <div className="units">
                <div className="infantry" onClick={console.log("buy infantry")}>
                    <span>Infantry, $200</span>
                    <img alt="" src="https://opengameart.org/sites/default/files/styles/medium/public/highschoolguy1.png"/>
                </div>

                <div className="spaceship" onClick={console.log("buy spaceship")}>
                    <span>Spaceship, $99999</span>
                    <img alt="" src="https://opengameart.org/sites/default/files/styles/medium/public/pitrizzo-SpaceShip-gpl3-opengameart-24x24-prev.png"/>
                </div>
            </div>
        );
    }
}