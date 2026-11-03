let str:string[] = ["sunday","monday","tuesday","wednesday","friday"]
// length 
console.log(str.length);
// push 
str.push("saturday")
console.log(str);
// pop
str.pop()
console.log(str);
// shift 
str.shift()
console.log(str);
// unshift 
str.unshift("sunday")
console.log(str);
// slice 
console.log(str.slice(-2));
// splice 
str.splice(4,0,"thursday")
console.log(str);
// includes 
console.log(str.includes("sunday"));
// indexOf
console.log((str.indexOf("sunday")));

// toString
console.log(str.toString());



