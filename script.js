let time = 0;
let wave = [];
let circlesSlider;

function setup() {
  createCanvas(1000, 600);
  circlesSlider = createSlider(1, 200, 1);
  circlesSlider.position(580, 500, 0);
}

function draw() {
  background(51);
  translate(190, height / 2);
  
  let x = 0;
  let y = 0;
  
  for(let i = 0; i < circlesSlider.value(); i++) {
    text(circlesSlider.value(), circlesSlider.x - 190, 210);
    let prevX = x;
    let prevY = y;

    let n = 2 * i + 1;
    let radius = 100 * (4 / (n * PI));
    x += radius * cos(n * time);
    y += radius * sin(n * time);

    noFill();
    stroke(255, 100);
    ellipse(prevX, prevY, radius * 2);

    // fill(255);
    stroke(255);
    line(prevX, prevY, x, y);
  }
  wave.unshift(y);

  translate(200, 0);
  line(x - 200, y, 0, wave[0]);
  stroke(255);
  noFill();
  beginShape();
  for(let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();

  time += 0.05;

  if(wave.length > 1000) {
    wave.pop();
  }
}