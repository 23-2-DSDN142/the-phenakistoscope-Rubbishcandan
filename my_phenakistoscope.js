const SLICE_COUNT = 12;
let angle = -180 //angle for calculation, -180 do not change
var StarLocationX = [-100, 0, 100, 150, 200, 250, 300] //array to make stars easier to place
var StarLocationY = [-400, -500, -650, -750, -800, -900] //as above
let r = 600 //radius for calculations, 600 do not change


function setup_pScope(pScope) {
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CW);
  pScope.set_slice_count(SLICE_COUNT);


}

function setup_layers(pScope) {

  new PLayer(null, 0); //lets us draw the whole circle background, ignoring the boundaries


  var layer1 = new PLayer(Moon); // draws the orbiting moon 
  layer1.mode(RING);
  layer1.set_boundary(200, 1000);

  var layer2 = new PLayer(Planet); //draws the central planet and black holes 
  layer2.mode(RING);
  layer2.set_boundary(0, 400);


  var layer3 = new PLayer(Stars); // draws the twinkling stars
  layer3.mode(RING);
  layer3.set_boundary(-400, 1000);

  var layer4 = new PLayer(Asteroids); //draws the falling asteroids
  layer4.mode(SWIRL(2));
  layer4.set_boundary(350, 1000)

  var layer5 = new PLayer(Border,'#5f4e43'); //draws the border on the outside 
  layer5.mode(RING);
  layer5.set_boundary(950,1000)
  


}

function Moon(animation, pScope) {

  noFill()
  stroke(255) //white
  strokeWeight(0.05)
  circle(0, 0, 1200)

  strokeWeight(64)
  stroke('#909090') //grey 
  let x = r * cos(angle); //calculation to get the moon to orbit 
  let y = r * sin(angle); //same as above
  point(x, y);
  angle += 0.25; //0.25 is optimal speed, 
  fill('#303B45') //darker grey 
  noStroke()
  ellipse(x - 10, y, 20, 20) //ellipse's are for moon craters 
  ellipse(x + 15, y + 10, 15, 15)
  ellipse(x + 10, y - 15, 12.5, 12.5)




}

function Planet(x, y, animation, pScope) {

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;
  var start = color('#4287f5') //light blue 
  var end = color('#000000') // black
  let interA = lerpColor(start, end, 0.3) //lerpcolours to blend black and blue for different areas of atmosphere
  let interB = lerpColor(start, end, 0.6)
  let interC = lerpColor(start, end, 0.9)

  //section for black holes 
  fill('#ff4e01') //orange
  ellipse(0, -325 - animation.wave() * 10, 70, 35) //ecllipses are black holes and the wave is to wiggle them
  fill('#FFFF00') //yellow
  ellipse(0, -325 - animation.wave() * 10, 60, 25)
  fill(0) // black
  ellipse(0, -325 - animation.wave() * 10, 50, 15) // .wave is a cosine wave btw

  //Section below is for the Central planet 
  fill('#4287f5')
  noStroke();
  //arc(x, y, 600, 600, backgroundArcStart, backgroundArcEnd); // draws "pizza slice" in the background
  fill(interC) //outer atmosphere, darkest blue 
  circle(0, 0, 600)
  fill(interB) //outer atmosphere, dark blue 
  circle(0, 0, 575)
  fill(interA) //outer atmosphere, lighter blue 
  circle(0, 0, 550)
  fill('#4287f5') //inner atmosphere, light blue
  circle(0, 0, 525)
  fill('#667E2C') //outer planet, green 
  circle(0, 0, 500)
  fill('#928e85') //outer planet, grey 
  circle(0, 0, 425)
  fill('#964B00') //inner planet,orangy red
  circle(0, 0, 350)
  fill('#BE5504') //inner planet,reddish orange
  circle(0, 0, 250)
  fill('#ff4e01') //core area, orange 
  circle(0, 0, 150)
  fill(0) //black
  circle(0, 0, 100)
  fill('#ebff7d') //core, yellow 
  circle(0, 0, 55)
  fill(255) //mountain top,white
  triangle(0, 275, -5, 260, 5, 260)
  fill('#928e85') //mountain, grey 
  triangle(0, 270, -10, 250, 10, 250)
  fill(255) //mountain top,white
  triangle(0, -275, 5, -260, -5, -260)
  fill('#928e85') //mountain top,white
  triangle(0, -270, 10, -250, -10, -250)





}

function Stars(x, y, animation, pScope) {
  //offset with animation.wave or different frequency 

  //sectipn for stars 
  strokeWeight(15 - animation.wave() * 15) //star twinkle 
  stroke(255) //white
  scale(1 + animation.wave() * 0.01) //star pulsation 
  point((StarLocationX[2]), (StarLocationY[3])) //this line and below for stars 
  point((StarLocationX[1]), (StarLocationY[2]))
  point((StarLocationX[0]), (StarLocationY[4]))
  point((StarLocationX[3]), (StarLocationY[1]))
  point((StarLocationX[3]), (StarLocationY[5]))
}

function Asteroids(x, y, animation, pScope) {

  //section for asteroids
  var outer = color('#5f4e43') //dark grey 
  var inner = color('#FC8A17') //orange
  let asteroidColour = lerpColor(inner, outer, animation.frame * 10) //swap change colour from grey to orange near center
  scale(1 + animation.frame * 0.01) //to keep the size constant througout the gif
  fill('#12c5e0') //blue trail 
  ellipse(x, y - 10, 45, 65)
  fill(asteroidColour) //the lerp colour changer 
  ellipse(x, y, 40, 40) //asteroid 
  //Code for cracks in asteroid
  fill(0) // black 
  strokeWeight(2)//crack thickness 
  line(-15,-12.5,5,0) //cracks 
  line(5,0,0,10)  
  line(0,10,5,20) 
 
}

function Border(x,y, animation, pScope){ //Function to display border 

}