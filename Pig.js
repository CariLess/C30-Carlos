class Pig extends BaseClass{
    constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visiblity = 255;
    //00000000 = 0
    //11111111 = 255
    }

    display(){
       // console.log(this.body.speed);
       push();
       if (this.body.speed < 3){
         super.display();
       }else {
           //desaparecer cerdito
           World.remove(world, this.body);
       }
       pop();
        
    }
};