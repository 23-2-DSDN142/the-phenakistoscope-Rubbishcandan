const SLICE_COUNT = 10;
let angle = -180
var StarLocationX = [-100,0,100]
var StarLocationY = [-400,-500,-600,-700,-800]

function setup_pScope(pScope) {
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CW);
  pScope.set_slice_count(SLICE_COUNT);

  
}

function setup_layers(pScope) {

  new PLayer(null, 0); //lets us draw the whole circle background, ignoring the boundaries


  var layer1 = new PLayer(Moon);
  layer1.mode(RING);
  layer1.set_boundary(200, 1000);

  var layer2 = new PLayer(Planet);
  layer2.mode(RING);
  layer2.set_boundary(0, 400);


  var layer3 = new PLayer(Stars);
  layer3.mode(RING);
  layer3.set_boundary(300,1000);
  


}

function Moon(animation, pScope) {
  let r = 600
  noFill()
  stroke(255)
  circle (0,0, r*2)
  strokeWeight(64)
  stroke('#909090')
  let x = r * cos(angle);
  let y = r * sin(angle);
  point(x, y);
  angle += 0.5; //0.5 is optimal speed 
  fill('#303B45')
  noStroke()
  ellipse(x - 10, y, 20, 20)
  ellipse(x + 15, y + 10, 15, 15)
  ellipse(x + 10, y - 15, 12.5, 12.5)

}

function Planet(x, y, animation, pScope) {

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

 
  
  fill(66, 135, 245)
  noStroke();
  arc(x, y, 600, 600, backgroundArcStart, backgroundArcEnd); // draws "pizza slice" in the background
 // fill('#0da61d')
  noSmooth()
  fill('#667E2C')
  circle(0,0,500)
  fill('#928e85')
  circle(0,0,425)
  fill('#964B00')
  circle(0,0,350)
  fill('#BE5504')
  circle(0,0,250)
  fill('#ff4e01')
  circle(0,0,150)
  fill(0)
  circle(0,0,100)
  fill('#ebff7d')
  circle(0,0,55)
  fill(255)
  triangle(0,275,-10,260,10,260)
  fill('#928e85')
  triangle (0,270,-10,250,10,250)
  //lerp colour with circle rings 

  fill(255)
  rect(-50, -300 - animation.wave() * 10, 100, 20) // .wave is a cosine wave btw

}

function Stars (x,y, animation, pScope){
//offset with animation.wave or different frequency 
  
  strokeWeight(15)
  stroke(255)
  point((StarLocationX[2]),(StarLocationY[3]))
  point((StarLocationX[1],StarLocationY[3]))

}