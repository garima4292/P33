class Particle {
    constructor(x,y,r) {
      var options = {
          restitution:0.3
      }
      this.body = Bodies.circle(x,y,r,options);
      this.radius = r;
      this.colour = color(random(0,255),random(0,255),random(0,255));
      World.add(myworld, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      ellipseMode(RADIUS);
      fill(this.colour);
      ellipse(pos.x, pos.y, this.radius, this.radius);
      pop();
    }
  };
