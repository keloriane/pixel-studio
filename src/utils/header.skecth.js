import Matter from 'matter-js';
import Paper from 'paper'


export class Sketch {
    constructor(options, el, imgUrl) {
        this.Engine = Matter.Engine;
        this.options = options;
        this.path = el;
        this.imgUrl = imgUrl;
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
        this.width = window.innerWidth;
        this.height = window.innerHeight;

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

    }

    physics() {
        this.engine = this.Engine.create()
        this.world = this.engine.world;
        this.engine.world.gravity.x = 0;
        this.engine.world.gravity.y = 0;
        this.render = this.Render.create({
            element: this.options,
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
        this.shadow = new Paper.Path(this.path);

        this.shadow.shadowBlur = 30;
        this.pathLine = new Paper.Path(this.path);
        this.pathLine.fillColor = '#000000'
        this.number = this.pathLine.segments.length;
        this.circles = []
        this.anchors = []
        this.links = []
        this.cursor = this.Bodies.circle(100, 100, 80, {
            isStatic: false,

        });
        this.center = this.Bodies.circle(100, 100, 100, {
            isStatic: false,
        })


        this.group = new Paper.Group([this.pathLine]);
        this.group.clipped = true;

        let img = new Image();

        img.onload = () => {
            const paper = Paper.view;
            let rasterImg = new Paper.Raster(img, paper.center);


            rasterImg.fitBounds(Paper.view.bounds, true)
            /*rasterImg.width = 550
            rasterImg.height = 480*/
            this.group.addChild(rasterImg)
        }

        img.src = this.imgUrl


        for (let i = 0; i < this.number; i++) {

            if (this.width > 1200) {
                this.circles.push(
                    this.Bodies.circle(
                        this.pathLine.segments[i].point.x + this.width / 2.3,
                        this.pathLine.segments[i].point.y + this.height / 7,
                        8, {
                            density: 0.005,
                            restitution: 1
                        }
                    )
                )
            } else if (this.width < 1200) {
                this.circles.push(
                    this.Bodies.circle(
                        this.pathLine.segments[i].point.x + this.width / 2.5,
                        this.pathLine.segments[i].point.y + this.height / 8,
                        8, {
                            density: 0.005,
                            restitution: 1
                        }
                    )
                )

            }
            if (this.width > 1200) {
                this.anchors.push(
                    this.Bodies.circle(
                        this.pathLine.segments[i].point.x + this.width / 2.5,
                        this.pathLine.segments[i].point.y + this.height / 3,
                        100, {
                            density: 0.005,
                            restitution: 1
                        }
                    )
                )
            } else if (this.width < 1200) {
                this.anchors.push(
                    this.Bodies.circle(
                        this.pathLine.segments[i].point.x + this.width / 2.5,
                        this.pathLine.segments[i].point.y + this.height / 2,
                        100, {
                            density: 0.005,
                            restitution: 1
                        }
                    )
                )

            }
        }
        for (let i = 0; i < this.number; i++) {

            let next = this.circles[i + 1] ? this.circles[i + 1] : this.circles[1]
            this.links.push(
                this.Constraint.create({
                    bodyA: this.circles[i],
                    bodyB: this.anchors[i],
                    stiffness: 0.001

                })
            )
            this.links.push(
                this.Constraint.create({
                    bodyA: this.circles[i],
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
            let nextnext = this.circles[(i + 2) % this.number];
            this.links.push(
                this.Constraint.create({
                    bodyA: this.circles[i],
                    bodyB: nextnext,
                    stiffness: 0.005
                })
            )
        }
        /*    this.text = new Paper.PointText(new Paper.Point(this.width/10, 400 ));
            this.text.bringToFront();
            this.text.justification = 'center';
            this.text.fillColor = 'black';
            this.text.content = `
                Creating Quality
                Experiences For
                Clients Looking
                For the Best
                Solution.
            `;
            this.text.fontSize = 65;
            this.text.justification="left"
            this.text.blendMode = "overlay";

            this.text.fontWeight = 800*/
        this.World.add(this.engine.world, this.circles)
        this.World.add(this.engine.world, this.cursor)
        this.World.add(this.engine.world, this.links)
        this.World.add(this.engine.world, this.center)


    }

    initPaper() {
        this.paperCanvas = document.getElementById("paper")
        this.project = new Paper.Project(this.paperCanvas);


    }

    renderLoop() {
        this.time += 0.05;
        this.pathLine.smooth();
        for (let i = 0; i < this.number; i++) {
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

/*

// create renderer


Render.run(render);

// create runner
const runner = Runner.create();
Runner.run(runner, engine);
*/

// add bodies


// add mouse control


// keep the mouse in sync with rendering
/*
  render.mouse = mouse;
*/

// fit the render viewport to the scene


// context for MatterTools.Demo

