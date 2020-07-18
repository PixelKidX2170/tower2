class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':.8,
        'friction':3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.v=255
    this.image=loadImage("sprites/c.png")
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed<3){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height)
    pop();
    }
    else{
      World.remove(world, this.body)
      push();
      tint(255,this.v)
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
      this.v=this.v-5
      pop();
    }
  }
};
