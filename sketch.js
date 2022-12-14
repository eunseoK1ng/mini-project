// assets
let images = {};
let sounds = {};
let fonts = {};

// gameController
let gameController;

// levels
let levels = [];

// cam
let video;
// let videoOn;
// let btns;

// let btn_capture_on;
// let btn_capture_off;
// let handpose;
// let predictions = [];

function preload(){

  //sound - start
  sounds['startSound'] = loadSound('assets/start.mp3');
  sounds['ButtonSound'] = loadSound('assets/startButton.mp3');

  //sound - intro
  sounds['introSound'] = loadSound('assets/introBackground.mp3');
  sounds['why'] = loadSound('assets/why.mp3');
  sounds['eating'] = loadSound('assets/eating.mp3');
  sounds['pouring'] = loadSound('assets/pouring.mp3');
  sounds['sadDog'] = loadSound('assets/story1dog1.wav');
  sounds['walkDog'] = loadSound('assets/story1dog2.wav');
  sounds['byeDog'] = loadSound('assets/story3dog.wav');  
  sounds['soSad'] = loadSound('assets/soSad.mp3');  

  //sound - stage1
  sounds['stage1'] = loadSound('assets/stage1.mp3');
  sounds['crush'] = loadSound('assets/stage1dog.mp3');

  //sound - stage2
  sounds['stage2'] = loadSound('assets/stage2.mp3');
  sounds['good'] = loadSound('assets/stage2_good.mp3');
  sounds['bad'] = loadSound('assets/stage2_bad.mp3');

  //sound - stage3
  sounds['stage3'] = loadSound('assets/stage3.mp3');
  sounds['item'] = loadSound('assets/stage3_item.wav');

  //sound - ending
  sounds['end0'] = loadSound('assets/end0.mp3');
  sounds['end1'] = loadSound('assets/end1.mp3');
  sounds['end2'] = loadSound('assets/end2.mp3');
  sounds['end3'] = loadSound('assets/end3.mp3');
  sounds['end4'] = loadSound('assets/end4.mp3');

  // level 0 (intro)
  images['intro0'] = loadImage("assets/intro_button0.png");
  images['intro1'] = loadImage("assets/intro_button1.png");
  let startImgs = [];
  for(i = 0; i < 2; i++){
    startImgs[i] = loadImage("assets/start_back"+i+".png");
  }
  images['start'] = startImgs;
  images['cursor'] = loadImage("assets/cursor.png");
  let startButtons = [];
  for(i = 0; i < 2; i++){
    startButtons[i] = loadImage("assets/start_button"+i+".png");
  }
  images['startButton'] = startButtons;
  let eatImgs = [];
  for(i = 0; i < 9; i++){
    eatImgs[i] = loadImage("assets/eat"+i+".jpg");
  }
  images['eat'] = eatImgs;
  let blinkImgs = [];
  for(j = 0; j < 2; j++){
    blinkImgs[j] = loadImage("assets/blink"+j+".jpg");
  }
  images['blink'] = blinkImgs
  let sceneImgs = [];
  for(i = 0; i < 11; i++){
    sceneImgs[i] = loadImage("assets/img"+i+".jpg");
  }
  images['scene'] = sceneImgs;

  // let docImgs = [];
  // images['doctor'] = docImgs
  // for(i = 0; i < 5; i++){
  //   docImgs[i] = loadImage("assets/doc"+i+".jpg");
  // }

  // level 1
  images['stage1'] = loadImage("assets/stage1.png");
  let animals = [];
  for(let i = 0; i <= 2; i++){
    animals[i] = loadImage("assets/lev1_" + (i+1) + ".png");
  }
  images['animal'] = animals;
  let mini1 = [];
  for(let i = 0; i<= 1; i++){
    mini1[i] = loadImage("assets/lev1_mini_" + (i+1) + ".png");
  }
  images['lev1mini'] = mini1;
  images['stage1_click0'] = loadImage("assets/stage1_click0.png");
  images['stage1_click1'] = loadImage("assets/stage1_click1.png");
  images['clock'] = loadImage("assets/clock.png");
  images['minus'] = loadImage("assets/kg1.png");
  images['plus1'] = loadImage("assets/kg0.png");
  
  

  // level 2
  images['stage2'] = loadImage("assets/stage2.png");
  let mini2 = [];
  for(let i = 0; i <= 2; i++){
    mini2[i] = loadImage("assets/lev2_mini_" + i +".png");
  }
  images['lev2mini'] = mini2;
  let veg = [];
  let des = [];
  for(let i = 0; i <= 3; i++){
    veg[i] = loadImage("assets/lev2_veg_" + i + ".png");
    des[i] = loadImage("assets/lev2_des_" + i + ".png");
  }
  images['veg'] = veg;
  images['des'] = des;
  images['plus2'] = loadImage("assets/kg2.png");


  // level 3
  images['stage3'] = loadImage("assets/stage3.png");
  let mini3 = [];
  for(let i = 0 ; i <= 4; i++){
    mini3[i] = loadImage("assets/lev3_mini_" + i + ".png");
  }
  images['lev3mini'] = mini3;
  let clothes = [];
  for(let i = 0; i <= 3; i++){
    clothes[i] = loadImage("assets/lev3_" + i + ".png");
  }
  images['clothes'] = clothes;

  // level 4
  let end1 = [];
  let end2 = [];
  let end3 = [];
  let end4 = [];
  images['end0'] = loadImage("assets/end0.png");
  // images['test'] = loadImage("assets/end1_0.png");

  end1[0] = loadImage("assets/end1_0.png");
  end1[1] = loadImage("assets/end1_1.png");
  images['end1'] = end1
  images['endText1'] = loadImage("assets/endText0.png");

  end2[0] = loadImage("assets/end2_0.jpg");
  end2[1] = loadImage("assets/end2_1.jpg");
  end2[2] = loadImage("assets/end2_2.jpg");
  images['end2'] = end2
  images['endText2'] = loadImage("assets/endText3.png");

  end3[0] = loadImage("assets/end3_0.jpg");
  end3[1] = loadImage("assets/end3_1.jpg");
  end3[2] = loadImage("assets/end3_2.jpg");
  images['end3'] = end3
  images['endText3'] = loadImage("assets/endText2.png");

  end4[0] = loadImage("assets/end4_0.png");
  end4[1] = loadImage("assets/end4_1.png");
  end4[2] = loadImage("assets/end4_2.png");
  end4[3] = loadImage("assets/end4_3.png");
  end4[4] = loadImage("assets/end4_4.png");
  end4[5] = loadImage("assets/end4_5.png");
  end4[6] = loadImage("assets/end4_6.png");
  end4[7] = loadImage("assets/end4_7.png");
  end4[8] = loadImage("assets/end4_8.png");
  end4[9] = loadImage("assets/end4_9.png");
  images['end4'] = end4
  // images['end4_test'] = loadImage("assets/end4_test.png");
  images['endText4'] = loadImage("assets/endText1.png");

  images['retry0'] = loadImage("assets/retry0.png");
  images['retry1'] = loadImage("assets/retry1.png");

  images['skip0'] = loadImage("assets/skip0.png");
  images['skip1'] = loadImage("assets/skip1.png");


  //howToPlay
  let how = [];
  for(let i = 1; i <= 3; i++){
    how[i] = loadImage("assets/level"+i+"_how.png");
  }
  images['how'] = how;
  images['camTest'] = loadImage("assets/stage3_pre.png");

  // font
  fonts['digital'] = loadFont('assets/DS_DIGI.TTF');
  fonts['nowKg'] = loadFont('assets/HSGooltokki.ttf');

}

function turnOnCapture() {
  console.log("video on");
  videoOn = true;
}

function turnOffCapture() {
  console.log("video off");
  videoOn = false;
}


function setup() {
  createCanvas(800, 600);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  // videoOn = false;
  // turnOffCapture();

  // btn_capture_on = new Button("Captrue ON", 10, 10, 100, 30, turnOnCapture);
  // btn_capture_off = new Button("Captrue OFF", 10, 50, 100, 30, turnOffCapture);

  // btns = [btn_capture_on, btn_capture_off];



  // // levels
  levels.push(new Level0(images, sounds));
  levels.push(new Level1(images, sounds));
  levels.push(new Level2(images, sounds));
  levels.push(new Level3(images, sounds));
  levels.push(new Level4(images, sounds));
  levels.push(new Level5(images, sounds));
  levels.push(new Level6(images, sounds));
  levels.push(new Level7(images, sounds));
  levels.push(new Level8(images, sounds));
  levels.push(new Level9(images, sounds));
  levels.push(new Level10(images, sounds));
  levels.push(new Level11(images, sounds));
  levels.push(new Level12(images, sounds));
  
  // gameController
  gameController = new GameController(levels, images, fonts);
  
}

function draw() {
  // fill(255);
  // stroke(0);
  // rect(0, 0, width, height);
  // if (videoOn) {
  //   image(video, 0, 0, width, height);
  // }
  // if (handposeOn) {
  //   drawKeypoints();
  // }
  // btns.forEach((btn) => {
  //   btn.draw();
  // });
  gameController.display();
  
}

function mouseClicked(){
  // btns.forEach((btn) => {
  //   btn.mousePressed();
  // });
  gameController.clickEvent();
}

function keyPressed(){
  gameController.keyEvent();
}

function mouseReleased(){
  gameController.releaseEvent();
}


// function turnOnHandpose() {
//   if (!handposeReady) {
//     handposeReady = true;
//     handpose = ml5.handpose(video, modelReady);
//     handpose.on("predict", (results) => {
//       predictions = results;
//     });
//   }
// }

// function turnOffHandpose() {
//   if (handposeOn) {
//     handpose.video = undefined;
//     handposeReady = false;
//     handposeOn = false;
//   }
// }

// class Button {
//   constructor(text, x, y, w, h, onClickFunction) {
//     this.text = text;
//     this.x = x;
//     this.y = y;
//     this.w = w;
//     this.h = h;
//     this.onClick = onClickFunction;
//   }

//   draw() {
//     stroke(0);
//     fill(255);
//     if (this.isMouseOver()) {
//       fill(220);
//     }
//     rect(this.x, this.y, this.w, this.h);
//     fill(0);
//     textAlign(CENTER, CENTER);
//     text(this.text, this.x + this.w / 2, this.y + this.h / 2);
//   }

//   isMouseOver() {
//     let xIn = mouseX > this.x && mouseX < this.x + this.w;
//     let yIn = mouseY > this.y && mouseY < this.y + this.h;
//     return xIn && yIn;
//   }

//   mousePressed() {
//     if (this.isMouseOver()) {
//       this.onClick();
//     }
//   }
// }
