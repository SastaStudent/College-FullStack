// let Virat ='Striker'
// let Jadeja = 'Non-Striker'
// let balls=0;

    
//     if(runs==1 || runs==3){
//         let temp=Virat
//         Virat=Jadeja
//         Jadeja=temp
//     }
//     if(balls%6==0){
//         let temp=Virat
//         Virat=Jadeja
//         Jadeja=temp
//     }
 
     
 
let a=[10,11,12,13,14,15,16,17,18,19,20]
let i=0;
while(i<a.length)
{
    a[i]+=2;
    i+=2
}

i=1;
while(i<a.length)
{
    a[i]-=2;
    i+=2
}

// console.table(a)

let arr=[10,11,12,13,14,15,16,17,18,19,20]
for(let k=0;k<arr.length;k++){
    if(k%2) arr[k]-=2
    else arr[k]+=2
}
// console.table(arr)



brr=[1,2,3,4]
// console.table(brr)

let cars ={
    volvo:"RED",
    nano:"Yellow",
    mustangGT:"Black"
}

console.log(cars.volvo)

console.log(cars['mustangGT'])
console.log(cars.nano)


let objectcons = (firstName,lastName)=>{
    return{
        first:firstName,
        last:lastName
    }
}

const obj1=objectcons("Monu","Chauhan")

obj1.nice='Ok'
// console.table(obj1)
// console.log(obj1.first)
// console.log(obj1.last)


const objectTo={
    villian:"Joker",
    Hero:"Batman"
}

objectTo.nice='Not ok'
// console.table(objectTo)

console.log("I love Vinita")



function add(num1,num2=5){
    console.log(num1+num2)
}
add(11)


//destructure
//array
let array = [32,43,23,12,122]
const [w,x,y,z]=array
console.log(w,x,y,z)

// let [w,x,y,z]=array
// console.log(w,x,y,z)


// var [w,x,y,z]=array
// console.log(w,x,y,z)


//spread operator
let arr2=[22,33,44,55,...array]
console.table(arr2)






