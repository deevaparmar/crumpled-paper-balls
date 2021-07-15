class ground{
constructor (x,y,w,h){

    var options = {

        isStatic : true
    }
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.body = Bodies.rectangle (x,y,w,h,options)
    World.add (world, this.body)
}
 show (){
     push ()
     rectMode (CENTER)
     strokeWeight (3)
     fill("lightblue")
     rect(this.x,this.y,this.w,this.h)
     pop()
 }
}