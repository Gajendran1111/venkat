// function 

// way 1
function show (h:string , i:number , j:number ){
console.log(h);
console.log(i);
console.log(j);
}
show("gajendran",23,11)

/*
// way 2 

function ad (m1 : number, m2 : number, m3 : number){

    return m1+m2+m3
}
console.log(ad(10,20,30));*/


// function types

// function 
/*
function nam (){
    console.log("hello java");
    
}
nam();
// function with return
function nam1 (){
return "hello";
}
console.log(nam1());

// function with params
function nam2 (n:number,m:number){
return n+m;
}
console.log(nam2(10,15));*/
/*
// function with union params
function nam3 (n:number,m:number,o:(number | string)): number{
    if(typeof o === "number"){
        return n+m+o;
    }
return n+m;
}
console.log(nam3(10,15,"22"));

// function with optional param 
function nam4 (n:number,m:number,o?:(number | string)): number{
    if(typeof o === "number"){
        return n+m+o;
    }
return n+m;
}
console.log(nam4(10,15));
*/
// function with default value //doesn't allow ?
function nam5 (n:number,m:number,o:(number | string)=10): number{
    if(typeof o === "number"){
        return n+m+o;
    }
return n+m;
}
console.log(nam5(10,15));

