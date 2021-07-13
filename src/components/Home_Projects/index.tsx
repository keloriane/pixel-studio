import React, {useEffect, useRef} from 'react';
import * as S from './home_projects.styles'
import Text from "../common/Text";
import Project_Item from "./Project_Item";
import {Swiper, SwiperSlide} from "swiper/react";
import gsap from 'gsap';
import ScrollTrigger from "./../../utils/ScrollTrigger";
import {Link, useHistory} from 'react-router-dom';
import {projects} from "../../utils/projects";

gsap.registerPlugin(ScrollTrigger);


const Home_Projects = () => {
    const history = useHistory();
    const textLayer = useRef();
    const projectContainer = useRef();


    useEffect(() => {
        gsap.from(textLayer.current, {
            scrollTrigger: {
                trigger: projectContainer.current,
                end: 'top 100px',
                scrub: 3,
            },
            x: '-150%',
            duration: 15,
        });

        const cards = document.querySelectorAll('.project-card');
        gsap.from(cards, {
            duration: 1, opacity: 0, stagger: 0.2, rotate: 10, transformOrigin: "top right", scrollTrigger: {
                trigger: ".project-section",


            }
        })
    }, [])
    const handleLink = (destination) => {
        history.push(destination)
    }
    return (
        <S.Home_Project_Container
            ref={projectContainer}
        >
            <S.Home_Project_Title_Layer
                ref={textLayer}
            >
                <Text
                    as={"h2"}
                    fontSize={"170px"}
                    fontWeight={600}
                    lineHeight={"198%"}
                    letterSpacing={"-0.02rem"}

                    color={"#000000"}
                >
                    Recent Projects
                </Text>
            </S.Home_Project_Title_Layer>
            <S.Home_Project_Wrapper className={"project-section"}>

                <S.Home_Project_List>
                    <Swiper
                        spaceBetween={37}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        centeredSlides={true}
                        pagination={{"clickable": true}}
                        breakpoints={{
                            315: {
                                width: 343,
                                slidesPerView: 1,
                                centeredSlides: false
                            },
                            480: {
                                width: 337,
                                slidesPerView: 1,
                                centeredSlides: false
                            },
                            640: {
                                width: 740,
                                slidesPerView: 2,
                                centeredSlides: true
                            },
                            768: {
                                width: 1170,
                                slidesPerView: 3,
                                centeredSlides: true

                            }, 1100: {
                                width: 1100,
                                slidesPerView: 3,
                                centeredSlides: true
                            },

                        }}
                    >
                        {
                            projects.map((project, i) => (
                                <SwiperSlide
                                    key={i}
                                    className={"project-card"}
                                >
                                    <Link
                                        to={`/project/${project.link}`}
                                    >
                                        <Project_Item
                                            image={project.image}
                                            discipline={project.discipline}
                                            title={project.name}
                                            index={`${i + 1}/${projects.length}`}
                                            link={project.image}/>

                                    </Link>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                </S.Home_Project_List>
            </S.Home_Project_Wrapper>
        </S.Home_Project_Container>
    )
}

export default Home_Projects;
