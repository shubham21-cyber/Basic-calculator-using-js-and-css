var num1 = document.getElementById("txt1")
var num2 = document.getElementById("txt2")
var num3 = document.getElementById("txt3")
var res = document.getElementById("txt4")
var add = document.getElementById("btn1")
var sub = document.getElementById("btn2")
var mul = document.getElementById("btn3")
var div = document.getElementById("btn4")
var mod = document.getElementById("btn5")

//Additiuon
add.addEventListener('click',()=>{
var a = parseInt(num1.value)
var b = parseInt(num2.value)
var c = parseInt(num3.value)
var sum = a+b+c
res.value = sum
alert ("Sum of Numbers : "+sum)
})

//subtraction
sub.addEventListener('click',()=>{
var a = parseInt(num1.value)
var b = parseInt(num2.value)
var c = parseInt(num3.value)
var min = a-b-c
res.value = min
alert ("Subtraction of Numbers : "+min)
})

//Multiply
mul.addEventListener('click',()=>{
var a = parseInt(num1.value)
var b = parseInt(num2.value)
var c = parseInt(num3.value)
var prod = a*b*c
res.value = prod
alert ("Multipliction of Numbers : "+prod)
})


//divide
div.addEventListener('click',()=>{
var a = parseInt(num1.value)
var b = parseInt(num2.value)
var c = parseInt(num3.value)
var div = (a/b)/c
res.value = div
alert ("Division  of Numbers : "+div)
})

mod.addEventListener('click',()=>{
var a =parseInt(num1.value)
var b =parseInt(num2.value)
var c =parseInt(num3.value)
var modl = (a%b)%c
res.value = modl
alert("Modulus of Numbers : "+modl)
})
