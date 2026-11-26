function add(a,b = 20){
    console.log(a)
    console.log(b)
    console.log(arguments)//[Arguments] { '0': 10, '1': 30, '2': 50 }
    console.log(arguments[0])
   
}
add(10,30,50) 


add(10,undefined);
add(10,null);
add(10,false);
add(10,'');


function info(user){
    console.log(user.name);
    user.name  = 'yasho'
}

let customer = {
    name : "vardhan"
}
console.log(customer.name)
info(customer);
console.log(customer.name)

"use strict";

function test(a, b) {
    a = 100;

    console.log(arguments[0]); // 10
}
let a  = 10
test(a, 20);
console.log(a)

