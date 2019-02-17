import React from 'react';
import Unit from './Unit.js';

export default class Infantry extends Unit {
    constructor(team, health, ammo) {
        super(team, health, ammo);
    }

    render() {
        return (
            <img alt="" src="../../assets/units/infantry.png"/>
        );
    }
}