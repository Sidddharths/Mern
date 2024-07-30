// 1.Arrow function
var votingEligibility = () =>{
    age=18
    if(age>=18){
        console.log("Eligible for voting");
    }else{
        console.log("Not eligible for voting");
    }
}
votingEligibility();

// Looping statement

// 4/for in loop.

arr=[10,20,"hello",true]
for(ind in arr){
    console.log(ind);
}

// 5.For of loop

for(ind of arr){
    console.log(ind);
}

// 6.for each loop.
arr.forEach((ind) => {
    console.log(ind);
});

// DESTRUCTURING OPERATOR
arr=[10,20,"ABC"]
var [a,b,d]=arr
console.log(arr,a,b,d);

//SPREAD OPERATOR
rollno = []

// Example of set time out
console.log("set Timeout Example");
setTimeout(function(){
    console.log("hello, skcet");
},5000);
// the code will be executed only after the time seconds.

// setinterval example.
console.log("Set interval example");
setInterval(function(){
    console.log("Hello,skcet");
},2000);
// the code will be executed only in the time interval, and then stops.


// 2.self calling function.

(function name(){

})

async function a(){
    await b();
    setTimeout(()=>{
    console.log('add a');
    },2000); 
}
async function b(){
    await c();
   setTimeout(() => {
    console.log("add b");
   }, 1000);
}
async function c(){
    setTimeout(()=>{
        console.log('add c');
    },1000);
}
a();