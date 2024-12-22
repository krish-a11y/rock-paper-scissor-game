let score1= document.querySelector("#score1");
let score2= document.querySelector("#score2");
let msg= document.querySelector("#msg");
let choice=document.querySelectorAll(".d");
let reset=document.querySelector(".reset");
let p1=0;
let p2=0;
const compChoice=()=>{
    let options=["rock d","paper d","scissor d"];
     let algo=Math.floor(Math.random()*3);
     return options[algo];
};
let  turn=compChoice();
const playgame=(choice)=>{ 
    if(turn==choice)
{
  msg.innerHTML="tied";
}
else if(turn=="rock d"&& choice=="scissor d"||turn=="paper d"&& choice=="rock d"||turn=="scissor d"&& choice=="paper d")
{
    msg.innerHTML="you lost";
    p2++;
    score2.innerHTML=p2;
}
else{
    msg.innerHTML="you won!!"
    p1++;
    score1.innerHTML=p1;
}
};
choice.forEach((a)=>{a.addEventListener("click",()=>{
   const choice= a.getAttribute("class");
   playgame(choice);

})});
reset.addEventListener("click",()=>{document.location.href="/rock paper scissor.html"});