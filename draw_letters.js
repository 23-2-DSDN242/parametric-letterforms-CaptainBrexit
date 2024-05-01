/* these are optional special variables which will change the system */
var systemBackgroundColor = "#ffffff";
var systemLineColor = "#ffffff";
var systemBoxColor = "#C73869";

/* internal constants */
const white  = "#ffffff";
const black  = "#000000";
const strokeColor  = "#000000";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  let linePosX = 0;
  let linePosY = 0;

  // I tried to make this mess of code at least somewhat legible and properly named, but it's still a mess
  // To make things easier, all the parameters are repeats of these 4, just applied to 5 different white rectangles, which are used for negative space in the letters

  // Set parameters for the first rectangle
  let firstRectWidth = letterData["firstRectWidth"];
  let firstRectHeight = letterData["firstRectHeight"];
  let firstRectStartingX = 30 + letterData["firstRectXOffset"];
  let firstRectStartingY = 100 + letterData["firstRectYOffset"];

  // Set parameters for the second rectangle
  let secondRectWidth = letterData["secondRectWidth"];
  let secondRectHeight = letterData["secondRectHeight"];
  let secondRectStartingX = 30 + letterData["secondRectXOffset"];
  let secondRectStartingY = 100 + letterData["secondRectYOffset"];

  // Set parameters for the third rectangle
  let thirdRectWidth = letterData["thirdRectWidth"];
  let thirdRectHeight = letterData["thirdRectHeight"];
  let thirdRectStartingX = 30 + letterData["thirdRectXOffset"];
  let thirdRectStartingY = 100 + letterData["thirdRectYOffset"];

  // Set parameters for the fourth rectangle
  let fourthRectWidth = letterData["fourthRectWidth"];
  let fourthRectHeight = letterData["fourthRectHeight"];
  let fourthRectStartingX = 30 + letterData["fourthRectXOffset"];
  let fourthRectStartingY = 100 + letterData["fourthRectYOffset"];

  // Set parameters for the fifth rectangle
  let fifthRectWidth = letterData["fifthRectWidth"];
  let fifthRectHeight = letterData["fifthRectHeight"];
  let fifthRectStartingX = 30 + letterData["fifthRectXOffset"];
  let fifthRectStartingY = 100 + letterData["fifthRectYOffset"];


  // Draws the diagonal lines
  fill(0);
  strokeCap(SQUARE);
  line(linePosX, linePosY+180, 10, 200);
  line(linePosX, linePosY+160, 20, 200);
  line(linePosX, linePosY+140, 30, 200);
  line(linePosX, linePosY+120, 40, 200);
  line(linePosX, linePosY+100, 50, 200);
  line(linePosX, linePosY+80, 60, 200);
  line(linePosX, linePosY+60, 70, 200);
  line(linePosX, linePosY+40, 80, 200);
  line(linePosX, linePosY+20, 90, 200);
  line(linePosX, linePosY, 100, 200);
  line(linePosX+10, linePosY, 100, 180);
  line(linePosX+20, linePosY, 100, 160);
  line(linePosX+30, linePosY, 100, 140);
  line(linePosX+40, linePosY, 100, 120);
  line(linePosX+50, linePosY, 100, 100);
  line(linePosX+60, linePosY, 100, 80);
  line(linePosX+70, linePosY, 100, 60);
  line(linePosX+80, linePosY, 100, 40);
  line(linePosX+90, linePosY, 100, 20);
  line(linePosX+100, linePosY, 100, 0);

  // Draws the 5 white rectangles
  noStroke();
  fill(255);
  rect(firstRectStartingX, firstRectStartingY, firstRectWidth, firstRectHeight);
  rect(secondRectStartingX, secondRectStartingY, secondRectWidth, secondRectHeight);
  rect(thirdRectStartingX, thirdRectStartingY, thirdRectWidth, thirdRectHeight);
  rect(fourthRectStartingX, fourthRectStartingY, fourthRectWidth, fourthRectHeight);
  rect(fifthRectStartingX, fifthRectStartingY, fifthRectWidth, fifthRectHeight);
  
}

function interpolate_letter(percent, oldObj, newObj) {let new_letter = {};
new_letter["firstRectWidth"]    = map(percent, 0, 100, oldObj["firstRectWidth"], newObj["firstRectWidth"]);
new_letter["firstRectHeight"]    = map(percent, 0, 100, oldObj["firstRectHeight"], newObj["firstRectHeight"]);
new_letter["firstRectXOffset"] = map(percent, 0, 100, oldObj["firstRectXOffset"], newObj["firstRectXOffset"]);
new_letter["firstRectYOffset"] = map(percent, 0, 100, oldObj["firstRectYOffset"], newObj["firstRectYOffset"]);

new_letter["secondRectWidth"]    = map(percent, 0, 100, oldObj["secondRectWidth"], newObj["secondRectWidth"]);
new_letter["secondRectHeight"]    = map(percent, 0, 100, oldObj["secondRectHeight"], newObj["secondRectHeight"]);
new_letter["secondRectXOffset"] = map(percent, 0, 100, oldObj["secondRectXOffset"], newObj["secondRectXOffset"]);
new_letter["secondRectYOffset"] = map(percent, 0, 100, oldObj["secondRectYOffset"], newObj["secondRectYOffset"]);

new_letter["thirdRectWidth"]    = map(percent, 0, 100, oldObj["thirdRectWidth"], newObj["thirdRectWidth"]);
new_letter["thirdRectHeight"]    = map(percent, 0, 100, oldObj["thirdRectHeight"], newObj["thirdRectHeight"]);
new_letter["thirdRectXOffset"] = map(percent, 0, 100, oldObj["thirdRectXOffset"], newObj["thirdRectXOffset"]);
new_letter["thirdRectYOffset"] = map(percent, 0, 100, oldObj["thirdRectYOffset"], newObj["thirdRectYOffset"]);

new_letter["fourthRectWidth"]    = map(percent, 0, 100, oldObj["fourthRectWidth"], newObj["fourthRectWidth"]);
new_letter["fourthRectHeight"]    = map(percent, 0, 100, oldObj["fourthRectHeight"], newObj["fourthRectHeight"]);
new_letter["fourthRectXOffset"] = map(percent, 0, 100, oldObj["fourthRectXOffset"], newObj["fourthRectXOffset"]);
new_letter["fourthRectYOffset"] = map(percent, 0, 100, oldObj["fourthRectYOffset"], newObj["fourthRectYOffset"]);

new_letter["fifthRectWidth"]    = map(percent, 0, 100, oldObj["fifthRectWidth"], newObj["fifthRectWidth"]);
new_letter["fifthRectHeight"]    = map(percent, 0, 100, oldObj["fifthRectHeight"], newObj["fifthRectHeight"]);
new_letter["fifthRectXOffset"] = map(percent, 0, 100, oldObj["fifthRectXOffset"], newObj["fifthRectXOffset"]);
new_letter["fifthRectYOffset"] = map(percent, 0, 100, oldObj["fifthRectYOffset"], newObj["fifthRectYOffset"]);
  return new_letter;
}

// I tried to think of an 8 letter name for my font, but I couldn't think of one I liked. At least Dashed is an even number of letters
var swapWords = [
  " DASHED" ,
  "HOLYHELL",
  "THISISSO",
  "DAMNCOOL"
]
