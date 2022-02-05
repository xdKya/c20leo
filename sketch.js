//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world, engine;
var chao;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();

  world = engine.world;

  var chao_options = {
      isStatic: true
  }

  chao = Bodies.rectangle(200,390,400,30,chao_options);
  World.add(world,chao);

  console.log(chao);
}

function draw() {
    background("black");

    Engine.update(engine);

    fill("green");
    rectMode(CENTER);
    rect(chao.position.x,chao.position.y,400,30);
}

