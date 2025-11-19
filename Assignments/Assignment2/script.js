let userchoice;
 function playGame(choice){
userchoice= choice;
const choices = ["rock", "paper", "scissor"];
const randomIndex = Math.floor(Math.random() * 3);
const game = choices[randomIndex];

let result="";
if(userchoice===game){
    result = "It's a tie 😊";
}
else if(userchoice === "rock" && game === "scissor"||
        userchoice === "paper" && game === "rock"||
        userchoice === "scissor" && game === "paper"
){
result ="You Win 😁"
}
else{
    result="You Lose 😒";
}
document.getElementById('result').innerText= `you choose ${userchoice}, computer chose ${game}.${result}`;
 }
 document.getElementById("rock").addEventListener("click",function(){
    playGame("rock");
 });
 document.getElementById("paper").addEventListener("click",function(){
    playGame("paper");
 })
 document.getElementById("scissor").addEventListener("click",function(){
    playGame("scissor");
 })