//1st Program
function Batmanbegins(){
    console.log("You are watching batman begins")
}
let ok=false
function darkKnight(Batmanbegins){
    if(!ok){
        // console.log(Batmanbegins())
    }

    console.log("You are watching the Dark Knight rises")
}

darkKnight(Batmanbegins())

console.log("TASK 1..................................")
//Task 1
let firstName = "Monu"
let lastName = "Chauhan"
let res = firstName+"_"+lastName
console.log(res)

console.log("TASK 2..................................")

let input="This is String"
let input2=234;
let input3=true;
console.log(typeof(input))

let func = (a)=>{
    if(typeof(a)=="string") console.log("Input is String")
    else if(typeof(a)=='number') console.log("Input is Number")
    else console.log("Input is Boolean")
}
func(input3)
func(input)
func(input2)

//method best
let func2 = (a)=>{
    console.log("Given input is "+typeof(a))
}
func2(input3)
func2(input)
func2(input2)


///Promise
//Tujhe dekh lunga baad abhi jaane de

//String
let batman = "Bruce Wayne"
console.log(batman.length +" length of batman String")

//write a pro which compare two string and return longest string

let s1="Monu Chauhan"
let s2="Ajay Chaudhary"

function compareString(s1,s2){
    if(s1.length >s2.length) return s1;
    else return s2;
}

let result=compareString(s1,s2)
console.log("Largest string is "+result);

//string function
let str="wayerene"
let str1="    batman   ";
console.log(str.charAt(2));
console.log(str.charCodeAt(3))
console.log(str.substring(1,2))
console.log(str.indexOf('y'))
console.log(str.length)
console.log(str1.trim(" "))


// 1. Write a program to reverse the given string.
let string = "Welcome Monu"
let size=string.length;
let ans=""
for(let i=size-1;i>=0;i--){
    ans+=string.charAt(i)
}
console.log(ans)
// console.log(string)

//method 2: using split()

let arr = string.split("")
let start=0
let end=arr.length -1;
while(start<end){
    let temp=arr[start]
    arr[start]=arr[end]
    arr[end]=temp
    start++
    end--
}

console.log(arr.join(""))

//method 3

let res4=string.split("").reverse().join("")
console.log(res4)

// 2. Write a program to find out cat string and convert it in UpperCase.

let sample="dogeereecatenemy"
let isFind = sample.indexOf('cat')
console.log(isFind)//ans is 3... As start index of cat is 3

sample="doghotcow"
isFind = sample.indexOf('cat')
console.log(isFind)//ans is -1... As cat is not present


console.log(sample.toUpperCase())//to uppercase


// 3. Write a program to eliminate all the whiteSpace from a string and then reverse it.

let str4="   BigHero6   "
let res5=str4.trim(" ").split("").reverse().join("")
console.log(res5)


// 4. Write a program to check it is palindrome or not.


//method 1
let str5="AbcdbA"
let str6="AABBCCBBAA"

function isPalindrome(str){
    let start=0
    let end=str.length -1
    while(start<end){
        if(str.charAt(start)!=str.charAt(end)) return false
        start++
        end--
    }
    return true
}

let res6=isPalindrome(str5)
console.log(res6)

res6=isPalindrome(str6)
console.log(res6)


//method 2

function isPalindrome2(str){

    let reverseString= str.split("").reverse().join("");
    return str===reverseString
}
res6=isPalindrome2(str5)
console.log(res6)

res6=isPalindrome2(str6)
console.log(res6)

res6=isPalindrome2("AabbBaA")
console.log(res6)








