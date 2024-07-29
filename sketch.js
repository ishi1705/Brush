function setup() {
  createCanvas(500, 500);

  background('red');

  // take a big brush
  strokeWeight(20);
  // dip it in color purple
  stroke("yellow");
  // frameRate(20);
}

function draw() {
  //declare variables
  let posY = mouseY;
  let posX = mouseX;
  // place a dot on a screen
  point(posX, posY);
}

function jump() {
  console.log('Jumpy');
}
