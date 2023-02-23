
let damage = 10;

// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        name = "Roberto";
        super(health, strength)
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        this.VikingsLive();
    }
    VikingsLive() {
        if (this.health >= 0) {
            return `${name} has received ${damage} points of damage`;
        } else {
            return `${name} has died in act of combat`;
        }
    }
    battleCry() {
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        this.SaxonLive();
    }
    SaxonLive() {
        if (this.health >= 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}



