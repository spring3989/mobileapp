"use strict";

window.addEventListener("DOMContentLoaded",
function(){
    
    $("header").textillate({
        loop: false, 
        minDisplayTime: 2000, 
        initialDelay: 2000, 
        autoStart: true, 
        in: {
        effect: "fadeInLeftBig", 
        delayScale: 1.5, 
        delay: 50, 
        sync: false, 
        shuffle: true 
        }
    });
   
    $(function(){
        ScrollReveal().reveal("#btn1", { duration: 9000 });
    });

    this.setTimeout(
        function(){
            let popMessage = "いらっしゃませ!おみくじ引いてって！";
            window.alert(popMessage);
        },
        "5000"
    );

}, false
);  


const btn1 = document.getElementById("btn1");
btn1.addEventListener("click",
function(){
//    let n = Math.floor(Math.random() * 3);

//    switch (n) {
//     case 0 : 
//         btn1.textContent = "Verry Happy";
//         btn1.style.color = "#479AB6";
//         btn1.style.fontSize = "40px"
//         break;

//     case 1 : 
//         btn1.textContent = "Happy";
//         btn1.style.color = "#7D4653";
//         btn1.style.fontSize = "30px"
//         break;

//     case 2 : 
//         btn1.textContent = "Unappy";
//         btn1.style.color = "#DDEAEB";
//         btn1.style.fontSize = "20px"
//         break;
//    }

btn1.style.transition ="1s";
let resultText = ["大吉","吉","中吉","小吉","末吉","凶"];
let resultColor = ["#ff0000","#c555555","#ff1493","#ff69b4","ff8c00","#1e90ff"];
let resultFontSize = ["55px","50px","45px","40px","35px","30px"];
let resultMaxSpeed = [10,10,8,5,5,5];
let resultMaxSize = [50,30,20,15,20,20];
let resultImage = ["img/star.png"]


let n =Math.floor(Math.random() * resultText.length);
btn1.textContent = resultText[n];
btn1.style.color = resultColor[n];
btn1.style.fontSize = resultFontSize[n];


    $(document).snowfall("clear");

    $(document).ready(function(){
        $(document).snowfall({
            maxSpeed : resultMaxSpeed[n],
            minSpeed : 1,   
            maxSize : 20,
            minSize : 1,
            image : 'img/sakura_hanabira.png',
        });
    });

    }, false
);