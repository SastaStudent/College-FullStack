let num=503
if((num&1)===0) console.log("Number is Even")
else console.log("Number is Odd")

//functions

function trainning(){
    console.log("We are doing js Trainning")
    // return

    console.log("2nd String")
}

//function call
trainning()


function add(a,b){
    console.log(a+b)
}

add(9,5);

//anonymous function
let c=function(){console.log("Anonymous Function")}
c()


//arrow function
let d= ()=>{console.log("Arrow Function")}
d()

//Program2 //divide 
console.log("Anonymous Program")
let num1=99
let num2=33
let anon=function(a,b){
    return a/b;
}
let res=anon(num1,num2)
console.log(res)

//Program3 //Modulus
console.log("Arrow Program")
let num3=54
let num4=5
let arrow = (a,b)=>{
    return a%b;
}
let ans=arrow(num3,num4)
console.log(ans)

//callback
function printSantos(){
    console.log("I am Vinit ")
}

//higher order
function printState(){
    
    console.log("Santos Pagal")
}
                
printState(printSantos())//iski wajah se hua

