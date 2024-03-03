const input= require("readline-sync")
let n = input.questionInt("enter the number: ")
let i = 1;
sum=0;
while(n>=i){
   
        sum=sum+1/i;    
        i++
}
console.log(sum)
