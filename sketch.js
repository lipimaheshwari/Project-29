const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
    polygonImg =loadImage("polygon.png");
}

function setup(){

    createCanvas(1200, 500);

	engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,490,1200,20);
    base1 = new Ground(405,350,355,15);
    base2 = new Ground(885,200,250,15);

    // Base 1 -

        // level one
        block1 = new Block(280,315,40,60, 103,209,234);
        block2 = new Block(322,315,40,60, 103,209,234);
        block3 = new Block(364,315,40,60, 103,209,234);
        block4 = new Block(406,315,40,60, 103,209,234);
        block5 = new Block(448,315,40,60, 103,209,234);
        block6 = new Block(490,315,40,60, 103,209,234);
        block7 = new Block(532,315,40,60, 103,209,234);

        //level two
        block8 = new Block(322,255,40,60, 255,190,196);
        block9 = new Block(364,255,40,60, 255,190,196);
        block10 = new Block(406,255,40,60, 255,190,196);
        block11 = new Block(448,255,40,60, 255,190,196);
        block12 = new Block(490,255,40,60, 255,190,196);

        //level three
        block13 = new Block(364,190,40,60, 0,228,208);
        block14 = new Block(406,190,40,60, 0,228,208);
        block15 = new Block(448,190,40,60, 0,228,208);

        //level four
        block16 = new Block(406,125,40,60, 128,125,120);

    // Base 2 -
    
        //level one
        block17 = new Block(800,150,40,60, 103,209,234);
        block18 = new Block(842,150,40,60, 103,209,234);
        block19 = new Block(884,150,40,60, 103,209,234);
        block20 = new Block(926,150,40,60, 103,209,234);
        block21 = new Block(968,150,40,60, 103,209,234);

        //level two
        block22 = new Block(842,100,40,60, 0,228,208);
        block23 = new Block(884,100,40,60, 0,228,208);
        block24 = new Block(926,100,40,60, 0,228,208);

        //level three
        block25 = new Block(884,50,40,60, 255,190,196);
    
    //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

    text('Drag the hexagonal Stone and Release it, to launch it towards the block', 100,300);

    Engine.run(engine);
}

function draw(){

    background(60,46,46);
    rectMode(CENTER);
    
    Engine.update(engine);
    drawSprites();

//     push();
//     imageMode(CENTER);
//     image(polygonImg,polygon.position.x,polygon.position.y,40,40);
//     pop();
    
    ground.display();
    base1.display();
    base2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();


    fill("gold");
    imageMode(CENTER)
    image(polygonImg ,ball.position.x,ball.position.y,40,40);

    slingShot.display();

}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    slingShot.fly();
  }