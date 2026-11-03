// object  by using 'type' aliase this is only applicable in ts
type pen ={
    brand : string[],
    color: string[],
    model : string[]
};
let values:pen= {
    brand : ["parker","hero","fair","montax"],
    color :["blue","black","red","green"],
    model:["refill","gel","ink","bollpoint"]
}
// normal object 

// Ex : 1
/*let obj:object = {
    name : "gajendran",
    age : 25,
    place : "chennai"
}
console.log(obj);*/

// Ex 2
let obj2:{
    nam : string;
    place : string;
    age : number;
}=
{
nam : "balaji",
place : "chennai",
age : 52

}
console.log(obj2);
