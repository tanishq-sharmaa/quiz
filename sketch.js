var canvas, backgroundImage;

var questions;

var question, contestant, quiz;


function setup(){
 // canvas = createCanvas(1279,641);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
  canvas = createCanvas(windowWidth, windowHeight);
}


function draw(){
  background("pink");

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
