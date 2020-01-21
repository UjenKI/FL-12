/* Your code goes here */function Fighter(obj) {

    obj.wins = 0;
    obj.losses = 0;

    const maximum_hp = obj.hp;

    return {

        getName: () => obj.name,
        getDamage: () => obj.damage,
        getStrength: () => obj.strength,
        getAgility: () => obj.agility,
        getHealth: () => obj.hp,
        logCombatHistory: () => console.log(`Name: ${obj.name}, Wins: ${obj.wins}, Losses: ${obj.losses}`),
        heal: (heal = obj.hp) => {
            obj.hp = obj.hp + heal > maximum_hp ? maximum_hp : obj.hp + heal;
            return;
        },
        dealDamage: (damage) => {
            obj.hp = obj.hp - damage < 0 ? 0 : obj.hp - damage;
            return;
        },
        addWin: () => obj.wins++,
        addLoss: () => obj.losses++,

        attack: function (defender) {
            const maximum_prb = 100;
            const probsuccess = maximum_prb - (defender.getStrength() + defender.getAgility());
            if (Math.floor(Math.random() * maximum_prb) < probsuccess) {
                defender.dealDamage(this.getDamage());
                console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
            } else {
                console.log(`${this.getName()} attack missed`);
            }
        }
    }
}

function Battle(...fighters) {

    for (const offight of fighters) {
        if (offight.getHealth() <= 0) {
            console.log(`${offight.getName()} is dead and can't fight`);
            return;
        }
    }

    let active = 0;
    let gaming = true;
    while (gaming) {
        if (fighters[active].getHealth() === 0) {
            gaming = false;
            console.log(`${fighters[1 - active].getName()} has won!`);
            fighters[1 - active].addWin();
            fighters[active].addLoss();
        } else {
            fighters[active].attack(fighters[1 - active]);
            active = 1 - active;
        }
    }
}