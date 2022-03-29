var names= document.createElement("label")
names.innerText="First name";
var names1 = document.createElement("input")
names1.setAttribute=("type","values")
console.log(names1)
var names2= document.createElement("label")
names2.innerText="lastname";
var names3 = document.createElement("input")
names3.setAttribute=("type","values")
console.log(names3)
var names4= document.createElement("label")
names4.innerText="Email";
var names5 = document.createElement("input")
names5.setAttribute=("type","values")
console.log(names5)
var names6= document.createElement("label")
names6.innerText="password";
var names7 = document.createElement("input")
names7.setAttribute=("type","values")
console.log(names7)
var button =document.createElement("button")
button.innerText="sumbit"


names.append(names1,names2,names3,names4,names5,names6,names7,button)
document.body.append(names)
