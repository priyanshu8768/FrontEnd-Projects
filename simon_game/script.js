let gameSeq=[];
let userSeq=[];

let btns=["one","two","three","four"];

let started = false;
let level=0;

let h2 =document.querySelector("h2");
let body=document.querySelector("body");
start();
function start(){
    document.addEventListener("keypress",function(){
        if(started==false){
            started =true;
            levelUp();

        }
    });
}
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}



function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn= document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnflash(randbtn);
    
    
}

function userflash(btn){
    btn.classList.add("pressflash");
    setTimeout(function(){
        btn.classList.remove("pressflash");
    },250);
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game Over!🥲 Your Score was<b> ${level}</b>. </br> Press any key to start. `;
        body.style.backgroundColor="red";
        setTimeout(function(){
            body.style.backgroundColor="white";
        },180);
        reset();
    }
}

function userpress(){
    let btn= this;
    userflash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}


let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",userpress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
    start();
}