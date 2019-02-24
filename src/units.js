export class Unit {
    constructor(team = 0, type = "none", health = 0, ammo = 0, movementRange = 0) {
        if (arguments.length === 1) {
            team && Object.assign(team);
        } else {
            this._team = team;
            this._type = type;
            this._health = health;
            this._ammo = ammo;
            this._movementRange = movementRange;
            console.log("new unit created");
        }
    }

    // getters and setters
    get team() {
        return this._team;
    }

    get type() {
        return this._type;
    }

    get health() {
        return this._health;
    }

    get ammo() {
        return this._ammo;
    }

    get movementRange() {
        return this._movementRange;
    }

    set team(team) {
        this._team = team;
    }

    set type(type) {
        this._type = type;
    }

    set health(health) {
        this._health = health;
    }

    set ammo(ammo) {
        this._ammo = ammo;
    }
}

export class Infantry extends Unit {
    constructor(team) {
        super(team, "Infantry", 100, 100, 3);
    }
}

export class Drone extends Unit {
    constructor(team) {
        super(team, "Drone", 100, 100, 5);
    }
}