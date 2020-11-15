// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Simple Particle System

// A simple Particle class

class Particle {

  constructor(position) {
    this.acceleration = createVector(0, 0.03);
    this.velocity = createVector(random(-3, 3), random(-3, 3));
    this.position = position.copy();
    this.lifespan = 255;
  }

  run() {
    this.update();
    this.display();
  }

  // Method to update position
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 1.5;
  }

  // Method to display
  display() {
    stroke(50, this.lifespan);
    strokeWeight(2);
    fill(11,201,4, this.lifespan);
    ellipse(this.position.x, this.position.y, 70, 70);
  }

  // Is the particle still useful?
  isDead() {
    if (this.lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  }
}
