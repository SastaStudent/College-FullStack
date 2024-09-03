let age=17;
if(age>=18){
    console.log("Not Eligible");
}
else console.log("Eligible")


let num=11
if(num%2==0) console.log("Even Number")
else console.log("Odd number")


let n=12;
if((n&1)==0) console.log("Number is Even")
else console.log("Number is Odd")


let a=(5>4)?5:4
console.log(a)



let b=1
switch(b=3){
    case 1:
        console.log('One')
        break
    case 2: 
        console.log('Two') 
        break
    case 3:
        console.log('Three')
        break
    default:
        console.log("Not Listed")
        break
}

//multiple of 2
for(let d=1;d<=10;d++)
{
    console.log(d*2);
}


let d=1;
while(d<=10){
    console.log(d*2)
    d++
}


let c=1;
do{
    console.log(c*2)
    c++;
     
}while(c<=10)