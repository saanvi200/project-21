class ground  {
    constructor(x,y,w,h)
    {
        //this.body = new rectangle(x,y,w,h)
        var x,y,w,h;
        this.x=x
        this.y = y
        this.h = h
        this.w = w
        //World.add(world,this.body)
    }
    display()
    {
        rect(this.x,this.y,this.w,this.h)
    }
}
