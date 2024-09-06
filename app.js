let timerVar=20;
let rand=0;
let panel=document.querySelector("#inner-panel2");
let hitVar=0;
let score=0;
let flag=0;

let hitVal =()=>{
    hitVar=Math.floor(10 * Math.random())
    document.querySelector("#hit").textContent=hitVar;
}

let createBubble=()=>{
    var bubbles="";
    for ( var i =0; i<170;i++){ 
        rand= Math.floor(10 * Math.random());
        bubbles +=`<div id="bubble">${rand}</div>`;
    };
    document.querySelector("#inner-panel2").innerHTML=bubbles;
}

let runTimer=()=>{
    let interval=setInterval(()=>{
        if (timerVar <= 0) {
            clearInterval(interval);
            document.querySelector("#inner-panel2").innerHTML = ''; 

        }
        document.querySelector("#timer").textContent=`${timerVar}`;
        timerVar--;
    },1000)
};

panel.addEventListener("click", (e) => {
    let target = e.target;
    
    if (target.id === "styledButton") {
        if (flag === 0) { 
            flag = 1;
            hitVal(); 
            createBubble(); 
            runTimer(); 
        }
    } 
    else if (target.id === "bubble") {
        let ClickedNum = Number(target.innerText);
        if (ClickedNum === hitVar) {
            score++;
            document.querySelector("#Score").textContent = score;
        }
        hitVal(); 
        createBubble(); 
    } 
    else if (flag === 0) {
        alert("Please Click on Start");
    } 
    else {
        alert("Please click on the bubbles");
    }
});








