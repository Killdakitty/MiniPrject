const attackBtn = document.querySelector('#attack-btn');


//*parent class
class ship{
    constructor(shipName, hull, firepower, accuracy){
        this.shipName=shipName;
        this.hull=hull;
        this.firepower=firepower;
        this.accuracy=accuracy;
        this.attack = this.attack.bind(this);
       
    }


    attack(humanShipAtt) {
        if (Math.random()<player1.accuracy){
            console.log('We got a HIT!');
            enemy1.hull-=this.firepower;
            console.log(`${enemy1.name} hull is ${enemy1.hull}`);
        }else if (enemy1.hull<0){
            console.log(`Congrats! ${enemy1.name} has been destoryed!`);
        }  

    }
    retreat(){if (this.hull<=4)
        console.log(`lets go home!`);
        gamePlay=false;
    
     }
    Aattack(){
        if(Math.random()<enemy1.accuracy){
            Math.floor(player1.hull-=this.firepower);
            console.log(`USS is underattack ${player1.name} has hull of ${player1.hull}`);   
        } else{
            console.log('MISSES');
        }
        if(player1.hull<=0){
            console.log(`HAHA! 1 DOWN!`);
            Aretreat();
        }
        }

    Aretreat(){
        new enemy1;
    }

}


//*human class
class humanShip extends ship{
    constructor(shipName, attack, hull=20, firepower=5, accuracy=.7){
    super(shipName, attack);
        this.hull=hull;
        this.firepower=firepower;
        this.accuracy=accuracy;
       
    }
    
    

    

}



const player1= new humanShip("USS Gerenal")


//*enemy class
class aleinship extends ship{
    constructor(shipName, attack, hull, firepower, accuracy){
    super(shipName, attack, hull, firepower, accuracy);
        this.hull=Math.floor(Math.random() * 4) + 3;
        this.firepower=Math.floor(Math.random() * 3) + 2;
        this.acuracy=(Math.floor(Math.random() * 3) + 6) / 10;
    }


}


const enemy1=new aleinship("Alien Ship");

// check on status
console.log(player1);
console.log(enemy1);


//AlienArmy
const alienArmy = [ ];
for (let i=1; i<7; i++){
    alienArmy.push(new aleinship (`Alien Ship #${i}`))
}
console.log(alienArmy);



//*attack
// event listener
attackBtn.addEventListener('click', function(e){
player1.attack(enemy1);
console.log(player1);
enemy1.Aattack(player1);
console.log(enemy1);



});


