class Riata{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
           pointB:pointB,
            stiffness:1.2,
            length:250
        }
        this.pointB=pointB;
        this.Riata=Constraint.create(options)
        World.add(world,this.Riata)
    }
    display(){   
   if(this.Riata.bodyA){
       var pointA=this.Riata.bodyA.position;
         var pointB=this.pointB;
         push();
         strokeWeight(4);
         stroke("black");
        line(pointB.x,pointB.y,pointA.x,pointA.y);
        pop();
     }
    } 
}