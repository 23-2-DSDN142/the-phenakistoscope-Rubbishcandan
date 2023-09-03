const SLICE_COUNT = 10;
let r = 150


function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_FRAME);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){
 
  new PLayer(null, 0);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(Moon);
  layer1.mode( RING );
  layer1.set_boundary( 200, 1000 );

  var layer2 = new PLayer(Atmosphere);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );


}

function Moon(animation, pScope){
  noFill()
  circle (0,0, r*10)
  //scale(animation.frame*animation.wave); 
  strokeWeight(32)
  stroke('#909090')
  let angle = 0
  let x = r * cos(angle);
  let y = r * sin(angle);
  point(x,y); // for animation 0+animation.wave(0.2)*350

  angle += 0.01;
  //fill('#303B45')
  //noStroke()
 // ellipse(horozontalMovement,verticalMovement,10,10)
 // ellipse(horozontalMovement,verticalMovement,10,10)
  
}

function Atmosphere(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(66, 135, 245)
  arc(x,y,600,600,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(255)
  rect(-50,-300-animation.wave()*50,100,20) // .wave is a cosine wave btw

}
