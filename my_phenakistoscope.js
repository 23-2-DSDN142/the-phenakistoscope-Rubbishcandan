const SLICE_COUNT = 10;
let angle = -180
var StarLocationX = [-100,0,100]
var StarLocationY = [-400,-500,-600,-700,-800]

function setup_pScope(pScope) {
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);

  
}

function setup_layers(pScope) {

  new PLayer(null, 0); //lets us draw the whole circle background, ignoring the boundaries


  var layer1 = new PLayer(Moon);
  layer1.mode(RING);
  layer1.set_boundary(200, 1000);

  var layer2 = new PLayer(Atmosphere);
  layer2.mode(RING);
  layer2.set_boundary(0, 400);


  var layer3 = new PLayer(Stars);
  layer3.mode(RING);
  layer3.set_boundary(300,1000);
  


}

function Moon(animation, pScope) {
  let r = 600
  noFill()
  //circle (0,0, r*2)
  strokeWeight(64)
  stroke('#909090')
  let x = r * cos(angle);
  let y = r * sin(angle);
  point(x, y);
  angle += 0.5;
  fill('#303B45')
  noStroke()
  ellipse(x + 10, y, 10, 10)
  ellipse(x + 20, y + 10, 10, 10)

}

function Atmosphere(x, y, animation, pScope) {

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(66, 135, 245)
  noStroke();
  arc(x, y, 600, 600, backgroundArcStart, backgroundArcEnd); // draws "pizza slice" in the background

  fill(255)
  rect(-50, -300 - animation.wave() * 10, 100, 20) // .wave is a cosine wave btw

}

function Stars (x,y, animation, pScope){

  
  strokeWeight(15)
  stroke(255)
  point((StarLocationX[2]),(random(StarLocationY)))
 

}