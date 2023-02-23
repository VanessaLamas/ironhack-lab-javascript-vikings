
let damage = 10;
// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack () {
        return this.strength;
    }
    receiveDamage (damage) {
        this.health = this.health - damage;
        }
    }

// Viking
class Viking extends Soldier {
    constructor (displayName, health, strength){
        displayName = "Roberto";
        super(health, strength)
    }
    receiveDamage (damage){
        this.health = this.health - damage;
}   
battleCry (){
    return `Odin Owns You All!`;
}
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
}



