let hilichurl = {
    name: 'lavachurl',
    age: 35,
    pet: 'slaim',
};
let character1 = {
    name: 'diluc',
    age: 22,
    pet: 'wolf`s gravestone',
};
let character2 = {
    name: 'xingqiu',
    age: 15,
    pet: 'skyward blade'
};
let character3 = {
    name: 'rozaria',
    age: 24,
    pet: 'dragonspine spear',
};
let character4 = {
    name: 'bennet',
    age: 16,
    pet: 'lion`s roar',
};

let heroes = [hilichurl, character1, character2, character3, character4]

function getPetName(index) {
    return heroes[index].name
}

console.log(getPetName(0))
console.log(getPetName(4))
console.log(getPetName(1))

function getBirthYear(index) {
    let year = 2021
    return year - heroes[index].age
}

console.log(getBirthYear(0))
console.log(getBirthYear(4))
console.log(getBirthYear(1))

function findOlder(a, b) {
    let hilichurl = heroes[a]
    let character1 = heroes[b]

    return hilichurl.age > character1.age ? hilichurl.name : character1.name

}
function findOlder(a, b) {
    let hero1 = heroes[a]
    let hero2 = heroes[b]

    return hero1.age > hero2.age ? hero1.name : hero2.name
}


