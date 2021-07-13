import { gsap  } from "gsap/dist/gsap";
import { CSSRulePlugin } from './../utils/CSSRulePlugin';

import { lerp, getMousePos, getSiblings } from "./helpers/";



gsap.registerPlugin(CSSRulePlugin)




export default class Cursor {
    constructor(el) {

        this.Cursor = el;
        this.Cursor.style.opacity = 0;
        this.mouse = {
            x:0,
            y:0
        }
        this.Item = document.querySelectorAll("canvas");
        this.Projects = document.querySelectorAll("a");
        this.Link = document.querySelectorAll(".nav-main-link");
        this.Title = document.querySelectorAll(".red");
        this.Hero = document.querySelector(".hero-inner");
        this.bounds = this.Cursor.getBoundingClientRect();
        this.getMousePosition();
        this.cursorConfigs = {
            x: { previous: 0, current: 0, amt: 0.07 },
            y: { previous: 0, current: 0, amt: 0.07}
        };
        this.onMouseMoveEv = () => {
            this.cursorConfigs.x.previous = this.cursorConfigs.x.current = this.mouse.x;
            this.cursorConfigs.y.previous = this.cursorConfigs.y.previous = this.mouse.y;
            gsap.to(this.Cursor, {
                duration: 1,
                ease: "Power3.easeOut",
                opacity: 1,
            });
            this.onScaleMouse()
            requestAnimationFrame(() => this.render());
            window.removeEventListener("mousemove", this.onMouseMoveEv);
        };
        window.addEventListener("mousemove", this.onMouseMoveEv);
    }

    getMousePosition() {
        window.addEventListener("mousemove", (ev) => (this.mouse = getMousePos(ev)));
    }

    onScaleMouse() {
        this.Item.forEach((link)=> {

            if(link.matches(':hover')) {
                this.Cursor.style.mixBlendMode = "unset"
                this.scaleAnimation(this.Cursor.children[0] , 0.8)
            }

            link.addEventListener("mouseenter" , ()=> {
                this.Cursor.style.mixBlendMode = "unset"
                this.setImage(link)

                this.scaleAnimation(this.Cursor.children[0] , 0.8);
            });
            link.addEventListener('mouseleave' , ()=> {
                this.scaleAnimation(this.Cursor.children[0] , 0);

            })
        })
        this.Link.forEach((link)=> {
            const element = CSSRulePlugin.getRule(`.cursor::before`)
            if(link.matches(':hover')) {
                this.scaleAnimation(element, 1.2)
            }

            link.addEventListener("mouseenter" , ()=> {
                this.scaleAnimation(element , 1.2);
                gsap.to(CSSRulePlugin.getRule('.cursor::before'), {
                    duration:.4,
                    cssRule:{
                        scale: 1.2
                    }
                })




            });
            link.addEventListener('mouseleave' , ()=> {
                gsap.to(CSSRulePlugin.getRule('.cursor::before'), {
                    duration:.4,
                    cssRule:{
                        scale: .2
                    }
                });

            })
        })
        this.Title.forEach((title) => {
            const element = CSSRulePlugin.getRule(`.cursor::before`)
            if(title.matches(':hover')) {
                this.scaleAnimation(element, 1.2)
            }

            title.addEventListener("mouseenter" , ()=> {
                this.scaleAnimation(element , 1.2);
                gsap.to(CSSRulePlugin.getRule('.cursor::before'), {
                    duration:.4,
                    cssRule:{
                        scale: 1.2
                    }
                })




            });
            title.addEventListener('mouseleave' , ()=> {
                gsap.to(CSSRulePlugin.getRule('.cursor::before'), {
                    duration:.4,
                    cssRule:{
                        scale: .2
                    }
                });
            })

        })
        this.Projects.forEach((title) => {
            const element = CSSRulePlugin.getRule(`.cursor::before`)
            if(title.matches(':hover')) {
                this.scaleAnimation(element, 1.2)
            }

            title.addEventListener("mouseenter" , ()=> {
                this.scaleAnimation(element , 1.2);
                gsap.to(CSSRulePlugin.getRule('.cursor::before'), {
                    duration:.4,
                    cssRule:{
                        scale: 1.2
                    }
                })





            });
            title.addEventListener('mouseleave' , ()=> {
                gsap.to(CSSRulePlugin.getRule('.cursor::before'), {
                    duration:.4,
                    cssRule:{
                        scale: .2
                    }
                });
            })

        })
    }

    scaleAnimation(el , amt) {
        gsap.to(el,{
            duration:0.6,
            scale:amt,
            height: 50,
            width:50,
            ease: "Power3.easeOut"

        })
    }

    setImage(e) {
       /* gsap.to(CSSRulePlugin.getRule('.cursor::before'), {
            duration:.4,
                backgroundImage:`url(/vector_blob.svg)`,
            cssRule:{
                scale: .2,
            }
        });*/


    }
    render() {
        this.cursorConfigs.x.current = this.mouse.x;
        this.cursorConfigs.y.current = this.mouse.y;
        for (const key in this.cursorConfigs) {
            this.cursorConfigs[key].previous = lerp(
                this.cursorConfigs[key].previous,
                this.cursorConfigs[key].current,
                this.cursorConfigs[key].amt
            );
        }
        this.Cursor.style.transform = `translateX(${this.cursorConfigs.x.previous}px) translateY(${this.cursorConfigs.y.previous}px)`;
        requestAnimationFrame(() => this.render());
    }
}