class car {
    speed : number;
    brand : string;
    price : number
    constructor(speed:number,brand:string,price:number){
        this.speed=speed;
        this.brand=brand;
        this.price=price;
    }

    final():any{
        console.log(`The minimum of car speed is ${this.speed}kmph \nAnd i want to buy ${this.brand}\nAnd the Maxinum of the car price is ${this.price}lakhs`);
    }
}
const output = new car(240,"BMW",180000);
output.final();