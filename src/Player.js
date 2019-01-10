export class Player {
    constructor(classType, speed, health, defense, attack) {
        this.classType = classType;
        this.speed = speed;
        this.health = health;
        this.defense = defense;
        this.attack = attack;
    }

    setAttributes(classType) {
        if (classType == "warrior") {
            this.speed = 100;
            this.health = 200;
            this.defense = 100;
            this.attack = 200;
        } else if (classType == "mage") {
            this.speed = 150;
            this.health = 100;
            this.defense = 50;
            this.attack = 250;
        } else if (classType == "paladin") {
            this.speed = 50;
            this.health = 150;
            this.defense = 200;
            this.attack = 150;
        } else if (classType == "undead") {
            this.speed = 50;
            this.health = 50;
            this.defense = 50;
            this.attack = 300;
        } else if (classType == "archer") {
            this.speed = 150;
            this.health = 50;
            this.defense = 50;
            this.attack = 300;
        } else if (classType == "ogre") {
            this.speed = 5;
            this.health = 500;
            this.defense = 50;
            this.attack = 30;
        } else if (classType == "demon") {
            this.speed = 15;
            this.health = 500;
            this.defense = 50;
            this.attack = 30;
        }
    }

    calculateDamage(player, enemy){   
       let damage = player.attack - enemy.defense;
       console.log(damage);   
       return damage;
    }


    damage(damageAmt, target){
        console.log(target.health);
       target.health -= damageAmt;
       console.log(target.health);
       this.health = target.health;
       return this.health
    }

    playerAlive(player) {
        if (player.health < 0) {
            alert(player.classType+ " has died. Game restarting.")
            document.reload();
        }
    }

    enemyAlive(enemy) {
        if (enemy.health < 0) {
           return false;
        } else {
            return true;
        }
    }

}

