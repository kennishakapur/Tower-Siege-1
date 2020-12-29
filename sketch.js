
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
    polygonImage=loadImage("polygon.png")
}

function setup(){
    createCanvas(1000,400)

    engine = Engine.create();
    world = engine.world;

    ground1= new Ground(500,390,1000,20)
    ground2= new Ground(550, 305, 250, 20)
    ground3= new Ground(800,205,250,20)

    b1=new Box(480,275,"blue");
    b2=new Box(510,275, "pink");
    b3=new Box(540,275,"blue" );
    b4=new Box(570,275,"pink");
    b5=new Box(600,275,"blue");
    b6=new Box(450,275,"pink");
    b7=new Box(630,275,"blue");

   
    b8=new Box(480,235,"pink");
    b9=new Box(510,235,"blue");
    b10=new Box(540,235,"pink");
    b11=new Box(570,235,"blue");
    b12=new Box(600,235,"pink");
    b13=new Box(510,195,"blue");
    b14=new Box(530,195,"pink");
    b15=new Box(560,195,"blue");
    b16=new Box(530,155,"pink");
    b17=new Box(800,100,"blue");
    b18=new Box(800,140,"pink");
    b19=new Box(830,140,"blue");
    b20=new Box(770,140,"pink");
    b21=new Box(800,180,"blue");
    b22=new Box(830,180,"pink");
    b23=new Box(860,180,"blue");
    b24=new Box(770,180,"pink");
    b25=new Box(740,180,"blue");

    var options={
        density:2.5,
        restitution:0.5,
        friction:1.2,
      }

    polygon=Bodies.circle(50,200,20,options);
    World.add(world,polygon)

    slingshot= new SlingShot(this.polygon,{x:100,y:200});

    imageMode(CENTER)
    image(polygonImage,polygon.position.x,polygon.position.y,40,40);
}

function draw(){
    background(0)

    ground1.display();
    ground2.display();
    ground3.display();
    
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    b19.display();
    b20.display();
    b21.display();
    b22.display();
    b23.display();
    b24.display();
    b25.display();

    slingshot.display();
   

    fill("white");
    textSize(14);
    text ("Drag the polygon to release it then hit the bricks",100,50);
    
image(polygonImage,this.polygon.position.x,this.polygon.position.y,40,40);
    
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
  }
  function mouseReleased(){
    slingshot.fly();
  }