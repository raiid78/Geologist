class Rubber{
    constructor(x, y, r){
        var options = {
            restitution: 0.3,
            friction: 5,
            density: 1
        }

        this.x = x; 
        this.y = y; 
        this.r = r; 

        this.body = Bodies.circle(this.x, this.y, this.r, options);
     
        World.add(world, this.body);
    }
    display(){
        var rubberPos = this.body.position;

        push(); 
        translate(rubberPos.x, rubberPos.y)
        strokeWeight(3)
        stroke("white");
        rectMode(CENTER);
        fill("black");
        ellipse(0, 0, this.r, this.r);
        pop();

    }
}