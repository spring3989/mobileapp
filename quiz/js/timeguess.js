"use strict";


const timer = document.getElementById("timer");
const Start = document.getElementById("start");
const Stop = document.getElementById("stop");
const Reset = document.getElementById("reset");

let startTime;       // Startボタンクリック時の時刻
let timeoutid;       // ID
let stopTime = 0;  
let soundEndflag = "0";  // Stopまでの経過時間


// ボタンを"初期"状態とする
setButtonStateInitial()



////////////////////////
// Startボタンクリック
////////////////////////
Start.addEventListener("click",
  function() {
    if(soundEndflag === "1"){
      soundControl("end","");
    }
    soundControl("start","sound/start.mp3");
    soundEndflag = "1";
    setButtonStateRunning();
    startTime = Date.now();
    countUp();
  },false
);

////////////////////////
// Stopボタンクリック
////////////////////////
Stop.addEventListener("click",
  function() {
    // タイマーを"停止中"状態とする
    setButtonStateStopped();
    clearTimeout(timeoutid); //setTimeout()でセットしたタイマーを解除する際に使用
    stopTime = Date.now() - startTime;
    if(soundEndflag === "1"){
      soundControl("end","");
    }
    if(timer.textContent.substring(0, 5) === "00:10"){

      
      const body = document.body;
      body.style.backgroundImage = "url('img/fireworks.gif')";
      body.style.backgroundColor = "rgba(0,0,0,0)";
      soundControl("start","sound/stop2.mp3");
    }
    else{
      soundControl("start","sound/stop1.mp3");
    }
  },false
)

////////////////////////
// Resetボタンクリック
////////////////////////
Reset.addEventListener("click",
  function() {
    if(soundEndflag === "1"){
      soundControl("end","");
    }
    soundControl("start","sound/reset.mp3");
    soundEndflag = "1";
    setButtonStateInitial();
    timer.textContent = "00:00.000";
    stopTime = 0;
    const body = document.body;
    body.style.backgroundImage = "";
    body.style.backgroundColor = "rgba(233, 168, 227, 0.6)";
  },false
);


function countUp() {
  const d = new Date(Date.now() - startTime + stopTime);
  /* padStart()で２桁固定表示とする */
  const m = String(d.getMinutes()).padStart(2, "0");
  const s = String(d.getSeconds()).padStart(2, "0");
  const ms = String(d.getMilliseconds()).padStart(3, "0");

  /* 描画 */
  timer.textContent = `${m}:${s}.${ms}`;

  timeoutid = setTimeout(() => {
    //再帰呼び出し
    countUp();
  }, 10);
}

// 初期 または Reset後
function setButtonStateInitial() {
  Start.classList.remove("js-inactive");
  Stop.classList.add("js-inactive");
  Reset.classList.add("js-inactive");
  Start.classList.remove("js-unclickable");
  Stop.classList.add("js-unclickable");
  Reset.classList.add("js-unclickable");
}

// 状態:タイマー動作中
function setButtonStateRunning() {
  timer.classList.add("timer-fontColor_hidden"); //時間を見えなくする
  Start.classList.add("js-inactive");   // 非活性
  Stop.classList.remove("js-inactive");  // 活性
  Reset.classList.add("js-inactive");   // 非活性
  Start.classList.add("js-unclickable");
  Stop.classList.remove("js-unclickable");
  Reset.classList.add("js-unclickable");
}

// 状態:タイマー停止中
function setButtonStateStopped() {
  timer.classList.remove("timer-fontColor_hidden"); //時間を見えるようにする
  timer.classList.add(".timer_appear"); //時間をゆっくり表示
  Start.classList.add("js-inactive"); // 活性
  Stop.classList.add("js-inactive");    // 非活性
  Reset.classList.remove("js-inactive"); // 活性
  Start.classList.add("js-unclickable");
  Stop.classList.add("js-unclickable");
  Reset.classList.remove("js-unclickable");
}

/*btn.addEventListener("click",
    function(){
        if(soundEndflag === "10") {
            soundControl("end","");
        }
        let resultSound = ["sound/stop2.mp3"]
      }
    );*/


    let w_sound
let music
function soundControl(status, w_sound){
    if(status === "start") {
        music = new Audio(w_sound);
        music.currentTime = 0;
        music.play();
    } else if(status === "end") {
        music.pause();
        music.currentTime = 0;
    }
}
