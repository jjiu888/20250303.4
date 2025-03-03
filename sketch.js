let jumping = false;
let offsets = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0); // 設置背景為黑色
  fill(255); // 設置文字顏色為白色
  let inputText = document.getElementById('textInput').value;
  let textSizeValue = document.getElementById('textSizeSlider').value;
  textSize(78 - textSizeValue); // 反轉滑桿值，使越右越小，越左越大
  let spacedText = inputText.split('').join(' ');
  let repeatedText = spacedText;
  while (textWidth(repeatedText) < width) {
    repeatedText += ' ' + spacedText;
  }
  for (let i = 0; i < height; i += textSize() * 1.5) {
    if (jumping) {
      let yOffset = sin(offsets[i / (textSize() * 1.5)] + frameCount * 0.1) * 10;
      text(repeatedText, width / 2, i + yOffset);
    } else {
      text(repeatedText, width / 2, i);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function toggleJump() {
  jumping = !jumping;
  if (jumping) {
    offsets = Array.from({ length: height / (textSize() * 1.5) }, () => random(TWO_PI));
  }
}

function navigateToWeek() {
  const weekSelect = document.getElementById('weekSelect').value;
  const contentFrame = document.getElementById('contentFrame');
  if (weekSelect === 'week1') {
    contentFrame.src = 'https://www.tku.edu.tw';
  } else if (weekSelect === 'week2') {
    contentFrame.src = 'https://www.et.tku.edu.tw/';
  } else if (weekSelect === 'week3') {
    contentFrame.src = 'https://hackmd.io/@jjjjiu/S1fSMKGs1x';
  } else {
    contentFrame.src = '';
  }
}
