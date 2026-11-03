type obj = {
    name : string[],
    place : string,
    num : number,
    id : number
} ;
let valu : obj = 
{
    name : ["balaji","chandru","suriya"],
    place : "chennai",
    num : 36523652,
    id : 852963
}
// console.log(valu.num);
for(let hi in valu){
    console.log(valu[hi as keyof obj]);
    
}


/*
// push 
// pop
// shift
// unshift 
// sort 
// splice 
// reverse 

let arrmethod:number[] = [10,20,30,40,50]
arrmethod.push(60)
console.log(arrmethod);

let arrmethod2:number[] = [10,20,30,40,50]
arrmethod2.pop()
console.log(arrmethod2);

let arrmethod3:number[] = [10,20,30,40,50]
arrmethod3.shift()
console.log(arrmethod3);

let arrmethod4:number[] = [10,20,30,40,50]
arrmethod4.unshift(9)
console.log(arrmethod4);

let str : string[] = ['a','d','c','e','b']
console.log(str.sort());

let str2 : string[] = ["sunday","monday","wednesday","thursday","friday","saturday"]
str2.splice(2,1,"tuesday")
console.log(str2.reverse());





*/








