class Stone{
    constructor(x, y, width, height){
        var options = {
            restitution: 1,
            friction: 0.9,
            density: 12
        }


        this.body = Bodies.rectangle(x, y, width, height, options); 
        this.width = width; 
        this.height = height; 
        World.add(world, this.body)
    }

        display(){

            push();
            translate(this.body.position.x, this.body.position.y);
            strokeWeight(3)
            stroke("blue");
            rectMode(CENTER);
            fill("red");
            rect(0, 0, this.width, this.height);
            pop(); 
    }
}