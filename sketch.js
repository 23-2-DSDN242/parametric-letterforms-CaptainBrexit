const canvasWidth = 960;
const canvasHeight = 500;

/*
 I have way too many parameters
 And the ones you can see here isn't even all of them
 They're all explained under draw_letters
 */

const letterA = {
  firstRectWidth: 60,
  firstRectHeight: 60,
  firstRectXOffset: -80,
  firstRectYOffset: -80,

  secondRectWidth: 60,
  secondRectHeight: 100,
  secondRectXOffset: -80,
  secondRectYOffset: 0
}

const letterB = {
  firstRectWidth: 50,
  firstRectHeight: 60,
  firstRectXOffset: -80,
  firstRectYOffset: -80,

  secondRectWidth: 60,
  secondRectHeight: 60,
  secondRectXOffset: -80,
  secondRectYOffset: 20,

  thirdRectWidth: 20,
  thirdRectHeight: 100,
  thirdRectXOffset: 150,
  thirdRectYOffset: -100
}

const letterC = {
  firstRectWidth: 80,
  firstRectHeight: 160,
  firstRectXOffset: -80,
  firstRectYOffset: -80
}

const backgroundColor  = "#ffffff";

const strokeColor  = "#000000";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);
  fill(0);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 1.6;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {

  let firstRectStartingX = posx + letterData["firstRectXOffset"];
  let firstRectStartingY = posy + letterData["firstRectYOffset"];
  let firstRectWidth = letterData["firstRectWidth"];
  let firstRectHeight = letterData["firstRectHeight"];
  
  let secondRectStartingX = posx + letterData["secondRectXOffset"];
  let secondRectStartingY = posy + letterData["secondRectYOffset"];
  let secondRectWidth = letterData["secondRectWidth"];
  let secondRectHeight = letterData["secondRectHeight"];
  
  let thirdRectStartingX = posy + letterData["thirdRectXOffset"];
  let thirdRectStartingY = posy + letterData["thirdRectYOffset"];
  let thirdRectWidth = letterData["thirdRectWidth"];
  let thirdRectHeight = letterData["thirdRectHeight"];



  fill(0);
  strokeWeight(4);
  stroke(0);
  strokeCap(SQUARE);

  line(posx-100, posy+80, posx-90, posy+100);
  line(posx-100, posy+60, posx-80, posy+100);
  line(posx-100, posy+40, posx-70, posy+100);
  line(posx-100, posy+20, posx-60, posy+100);
  line(posx-100, posy, posx-50, posy+100);
  line(posx-100, posy-20, posx-40, posy+100);
  line(posx-100, posy-40, posx-30, posy+100);
  line(posx-100, posy-60, posx-20, posy+100);
  line(posx-100, posy-80, posx-10, posy+100);
  line(posx-100, posy-100, posx, posy+100);
  line(posx-90, posy-100, posx, posy+80);
  line(posx-80, posy-100, posx, posy+60);
  line(posx-70, posy-100, posx, posy+40);
  line(posx-60, posy-100, posx, posy+20);
  line(posx-50, posy-100, posx, posy);
  line(posx-40, posy-100, posx, posy-20);
  line(posx-30, posy-100, posx, posy-40);
  line(posx-20, posy-100, posx, posy-60);
  line(posx-10, posy-100, posx, posy-80);
  line(posx, posy-100, posx, posy-100);
  

  fill(255);
  stroke(255);
  rect(firstRectStartingX, firstRectStartingY, firstRectWidth, firstRectHeight);
  rect(secondRectStartingX, secondRectStartingY, secondRectWidth, secondRectHeight);
  rect(thirdRectStartingX, thirdRectStartingY, thirdRectWidth, thirdRectHeight);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
