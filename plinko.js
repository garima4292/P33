class Plinko {
    constructor(x,y,r) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,r,options);
      this.radius = r;
      World.add(myworld, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      ellipseMode(RADIUS);
      fill("red");
      ellipse(pos.x, pos.y, this.radius, this.radius);
      pop();
    }
  };
