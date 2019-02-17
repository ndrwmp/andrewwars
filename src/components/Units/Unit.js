import React from 'react';

export default class Unit extends React.Component {
    constructor(team, health, ammo) {
        super();
        this.team = team;
        this.health = health;
        this.ammo = ammo;
    }

    reduceHealth(amount) {
        this.health -= amount;
    }

    reduceAmmo() {
        this.ammo -= 1;
    }
}