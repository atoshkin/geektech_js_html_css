class Hero {
    name;
    health = 100;
    power = 10;

    constructor(root, name, health, color, power = 15) {
        this.name = name
        this.health = health
        this.power = power
        let canvas = this.canvas = document.createElement('canvas');
        canvas.setAttribute('width', '400px;')
        canvas.setAttribute('height', '400px;')
        canvas.className = 'hero-graph';
        root.append(this.canvas)

        let ctx = this.ctx = canvas.getContext('2d');
        this.startX = 0;
        this.startY = canvas.height / 2;

        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(this.startX, this.startY)
    }

    hit(hero) {
        if (hero.health > 0) {
            this.health -= hero.power
        }
    }

    draw(i) {
        let x = this.startX + i * 10;
        let y = this.startY - this.health / 5;
        this.ctx.lineTo(x, y);
        this.ctx.stroke();
    }
}

class DCHero extends Hero {
    superHit(hero) {
        if (hero.health > 0) {
            this.health -= hero.power * 2
        }
    }
}

class MrvlHero extends Hero {
    healPower

    constructor(root, name, health, power, color, healPower) {
        super(root, name, health, color, power);
        this.healPower = healPower
    }

    heal() {
        this.health += this.healPower
    }
}

let root = document.querySelector('#root')

let cap = new MrvlHero(root, 'Cap', 250, 15, 'red', 10);
let iron = new MrvlHero(root, 'Iron Man', 250, 25, 'green', 5);
let batman = new DCHero(root, 'Batman', 150, 'blue', 20);
let joker = new DCHero(root, "Joker", 120, 'magenta', 15);

const heroes = [cap, iron, batman, joker]

function round(i) {
    return new Promise(resolve => {

        for (let hero of heroes) {
            if (hero instanceof DCHero) {
                hero.hit(cap)
                hero.hit(iron)
                hero.superHit(cap)
            } else {
                hero.hit(batman)
                hero.hit(joker)
                hero.heal()
            }
            if (hero.health < 0) {
                hero.health = 0
            }
            hero.draw(i)
        }

        setTimeout(resolve, 500)
    })
}

async function fight(number) {
    console.table(heroes)
    for (let i = 1; i <= number; i++) {
        await round(i)

        console.log('round => ' + i)

        console.table(heroes)
    }
    console.log('end')
}

fight(10)