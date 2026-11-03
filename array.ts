// array type1 

let arr:number[]= [10,20,30,40,50]
console.log(arr);


let ar = [10,20,30,40,50]
console.log(ar);


// decleration 

let ar2 :any[] = [];


// initilization 

ar2[0]= "prame";
ar2[1]= "sohil";
ar2[2]= "sachin"
console.log(ar2);


// type 2 using generic Array<string> 

let ar3:Array<string>= ["hello","java","world"]
console.log(ar3);

// approach 2 
let ar4:Array<string | number>=["hello",3565,"phone",9840]
console.log(ar4);


for(let a = 0;a<ar3.length;a++){
    console.log(ar3[a]);
    
}




// tuples method using string and number 
// tuple is used to set a fixed lengeth in a array

let tup:[string,number]= ["hello",123]
console.log((tup));


// tuple with multiple value

let tup2 :[string,number,boolean,number,string]= ["hi",26,true,22,"hello"]
console.log(tup2);


// tuple array 

let tup3: [string,number] [] = [["hello",5],["hi",2]]
console.log(tup3);


console.log(tup3[0]); //if i want to take any particular value in a single array  then 
let t = tup3[0]
console.log(t[1]);

