import Matter from "matter-js";
import Paper from "paper";


const blob = "M1497.03 385.428C1526.69 540.326 1514 872.5 1263.5 794C1102.33 743.492 860.635 875.999 672 835.999C447.999 788.499 229.494 885.793 6.00057 835.999C-124.533 806.916 -125.989 407.24 21.6364 154.648C109.557 4.21284 299.982 144.511 520.452 30.1922C747.404 -52.0512 909.454 54.3512 1093 130.5C1274.59 205.837 1469.94 243.951 1497.03 385.428Z"

export class Blob {
  constructor() {
    this.Engine = Matter.Engine;
    this.Render = Matter.Render;
    this.Runner = Matter.Runner;
    this.World = Matter.World;
    this.MouseConstraint = Matter.MouseConstraint;
    this.Mouse = Matter.Mouse;
    this.mouse = {
      x: 0,
      y: 0
    }
    this.Composite = Matter.Composite;
    this.Constraint = Matter.Constraint;
    this.Bodies = Matter.Bodies;
    this.Body = Matter.Body;
    this.time = 0;
    this.width = 800;
    this.height = 800;

    this.initPaper();
    this.physics();
    this.addObject();
    this.mouseEvents()
    this.renderLoop();
  }

  mouseEvents() {
    this.render.canvas.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX - this.cursor.positionPrev.x;
      this.mouse.y = e.clientY - this.cursor.positionPrev.y;
    })
  }

  resize() {
    window.addEventListener('resize' , () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    })
  }
  physics() {
    this.engine = this.Engine.create()
    this.world = this.engine.world;
    this.engine.world.gravity.x = 0;
    this.engine.world.gravity.y = 0;
    this.render = this.Render.create({
      element: document.querySelector('.blob-canvas'),
      engine: this.engine,
      options: {
        width: this.width,
        height: this.height,
        showVelocity: true
      }
    });
    this.Render.run(this.render);
    this.runner = this.Runner.create();
    this.Runner.run(this.runner, this.engine)

  }

  addObject() {
    this.shadow = new Paper.Path(blob);

    this.shadow.shadowBlur = 30;
    this.pathLine = new Paper.Path(blob);

    this.number = this.pathLine.segments.length;
    this.circles = []
    this.anchors = []
    this.links = []
    this.cursor = this.Bodies.circle(100, 100, 80, {
      isStatic: false,

    });
    this.center = this.Bodies.circle(100 , 100 , 100, {
      isStatic: false,
    })


    this.group = new Paper.Group([this.pathLine]);
    this.group.clipped = true;

    let img = new Image();

    img.onload = () =>{
      const paper = Paper.view;
      let rasterImg = new Paper.Raster(img , paper.bounds);


      rasterImg.fitBounds(Paper.view.bounds , true)
      /*rasterImg.width = 550
      rasterImg.height = 480*/
      this.group.addChild(rasterImg)
    }
    img.src = `https://images.unsplash.com/photo-1598636410700-e34f8e29fe03?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80`


    for (let i = 0; i < this.number; i++) {
      this.circles.push(
        this.Bodies.circle(
          this.pathLine.segments[i].point.x + 100,
          this.pathLine.segments[i].point.y +3000,
          8,{
            density:0.005,
            restitution:1
          }
        )
      )
      this.anchors.push(
        this.Bodies.circle(
          this.pathLine.segments[i].point.x +100,
          this.pathLine.segments[i].point.y + 3000,
          100,{
            density:0.005,
            restitution:1
          }
        )
      )
    }
    for (let i = 0; i < this.number; i++) {
      let next = this.circles[i+1]?this.circles[i+1]:this.circles[1]
      this.links.push(
        this.Constraint.create({
          bodyA: this.circles[i],
          bodyB: this.anchors[i],
          stiffness: 0.001
        })
      )
      this.links.push(
        this.Constraint.create({
          bodyA: this.circles[i] + 100,
          bodyB: next,
          stiffness: 1.5
        })
      )
      /* this.links.push(
         this.Constraint.create({
           bodyA: this.circles[i],
           bodyB: this.center,
           stiffness: 0.05
         })
       )*/
      let nextnext = this.circles[(i+10)%this.number];
      this.links.push(
        this.Constraint.create({
          bodyA: this.circles[i],
          bodyB: nextnext,
          stiffness: 0.005
        })
      )
    }


    this.World.add(this.engine.world, this.circles)
    this.World.add(this.engine.world, this.cursor)
    this.World.add(this.engine.world, this.links)
    this.World.add(this.engine.world, this.center)


  }

  initPaper() {
    this.paperCanvas = document.getElementById("canvas__blob")
    this.project = new Paper.Project(this.paperCanvas);


  }

  renderLoop() {
    this.time += 0.05;
    this.pathLine.smooth();
    for (let i = 0; i < this.number ; i++) {
      this.pathLine.segments[i].point.x = this.circles[i].position.x;
      this.pathLine.segments[i].point.y = this.circles[i].position.y;
      this.shadow.segments[i].point.x = this.circles[i].position.x;
      this.shadow.segments[i].point.y = this.circles[i].position.y;
    }
    this.Body.translate(this.cursor, {
      x: this.mouse.x,
      y: this.mouse.y
    })
    requestAnimationFrame(this.renderLoop.bind(this))
  }

}
