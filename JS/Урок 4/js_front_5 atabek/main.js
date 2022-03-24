class Hero {
    name;
    health = 100;
    power = 10;

    constructor(name, health, power = 15) {
        this.name = name
        this.health = health
        this.power = power
    }

    hit(hero) {
        console.log(this.name,'name')
        console.log(hero.name,'Hero name')
        //this.health -= hero.power
        console.log(${hero.name} c силой ${hero.power} ударил ${this.name} a ${this.health}-${hero.power}=${this.health -= hero.power})
    }
}

class DCHero extends Hero {
    superHit(hero) {
        let health = this.health - hero.power *2
        console.log(${this.name} Health ${this.health} - ${hero.name} SuperHit ${hero.power * 2})
        console.log(${this.name} Health ${health})
        console.log('-----------------ц')
        // this.health -= this.power * 2
    }
}

class MrvlHero extends Hero {
    healPower

    constructor(name, health, power, healPower) {
        super(name, health, power);
        this.healPower = healPower
    }

    heal() {
        this.health += this.healPower
    }
}

let c = new MrvlHero('Cap', 250, 15, 10);
let iron = new MrvlHero('Iron Man', 250, 25, 5);

let b = new DCHero('Batman', 150, 20);
let j = new DCHero("Joker", 120, 15);

const heroes = [c, iron, b, j]

function fight(n) {
    for (let i = 0; i < n; i++) {
        for (let hero of heroes) {
            if (hero instanceof DCHero) {
                if (b.health > 0 && j.health > 0) {
                    hero.hit(c)
                    hero.hit(iron)
                    hero.superHit(c)
                }
            } else {
                if (c.health > 0 && iron.health > 0) {
                    hero.hit(b)
                    hero.hit(j)
                    hero.heal()
                }
            }
            if (hero.health < 0){
                hero.health = 0
            }
        }
    }
}

fight(5)
console.log(heroes)