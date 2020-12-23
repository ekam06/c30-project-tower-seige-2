class Box {
  constructor(x, y, width, height ) {
      var options = {
          'isStatic':false,
          'restitution':0.8,
          'friction':1.0,
          'density':0.5
      }
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, width,height, options);
      this.visibility=255
      
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3){
    console.log(this.body.speed)
   
   push();
    translate(this.body.position.x, this.body.position.y);
    rotate (this.body.angle)
    rectMode(CENTER);
    rect(0,0, this.width, this.height);
   pop();
      }
      else{
        World.remove(world,this.body)
        
        push()
        this.visibility=this.visibility-5
     // tint (255,this.visibility)
     // rect(this.body.position.x,this.body.position.y,this.width,this.height)
      pop()
      }
    }
}