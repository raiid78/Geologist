class Hammer{
    constructor(x,y){ 
        var options = {
        density: 1.2, 
        friction: 1.0, 
        restitution: 0.5
    }
    

    this.body = Bodies.rectangle(x, y, 50, 50); 
    this.width = 150; 
    this.height = 40; 
    World.add(world, this.body)
}
    
    display() {
        var pos = this.body.position;
        pos.x = mouseX; 
        pos.y = mouseY;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(3)
        stroke("white");
        rectMode(CENTER);
        fill("red");
        rect(0, 0, this.width, this.height);
        pop();
    }    
}