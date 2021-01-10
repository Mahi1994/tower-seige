class Block{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height=height
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        translate(pos.x,pos.y)
        push();
        rectMode(CENTER)
        fill("pink")
        rect(this.body.position.x,this.body.position.y,this.width,this.height) 
        pop();
    }
}