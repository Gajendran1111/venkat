// map 
/*
let numarr : number[] = [10,20,30,40,50]
let newarr = numarr.map((v,i,a)=>v*5)
console.log(newarr);

// filter

let filarr : number[] = [6,12,5,36,51,54,94,4,14,36,2,654,12,324,94,5,132,489,9,2,498,489]
let retarr = filarr.filter((a,b,c)=>b >10)
console.log(retarr);
*/

// reduce 

let redarr : number[] = [10,20,30,40]
let sumarr = redarr.reduce((x,y)=>x+y)
console.log(sumarr);

// some 

let so : number[] = [1,2,3,4,5]
let ret = so.some(a=>a>5)
console.log(ret);

// every 

let eve : number[] = [1,2,3,4,5]
let reteve = eve.every(b => b>4)
console.log(reteve);
