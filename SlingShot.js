class SlingShot{
    constructor(bodyA,pointB){

        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
fly()
{
    // to remove the constraint 
  this.sling.bodyA = null;  
}
    display(){
        // to only display the lines when the constraint is still there 
        if(this.sling.bodyA)
        {

        
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}
