// string
// number 
// boolean 
// null 
// unefined 
// any 
// union type 
// void 

let a: string = "string"
console.log(a);

let b:number = 10;
console.log(b);

let c: boolean = true;
console.log(c);

let d:null = null;
console.log(d);

let f:undefined ;
console.log(f);

let  e:any = 10;
console.log(e);

// union type 

let u:string | number | boolean;
u = "hello";
u = 10;
u = true;
console.log(u);

function hi ():void{  // void is basicully used to when a function doesn't implement any value then we mention void 
    console.log(10);
    
}
hi();