class LauncherClass{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.4,
            length:0.4
        }
        this.pointB=pointB
        this.launcher=Constraint.create(options);
        World.add(world,this.launcher);
    }
    display(){
      if(this.launcher.bodyA!=null) 
      {var a=this.launcher.bodyA.position;
        var b=this.pointB
        strokeWeight(10);
        line(a.x,a.y,b.x,b.y);
      }
    }
    fly(){
    this.launcher.bodyA=null
    }
    attatch(body){
      this.launcher.bodyA=body;
    }
}