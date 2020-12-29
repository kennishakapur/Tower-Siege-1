class Box {
    constructor(x, y, color) {
      var options = {
          'restitution':0.1,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 30,40, options);
      this.width = 30;
      this.height = 40;
      this.color = color;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      var color = this.color
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4)
      fill (color)
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
