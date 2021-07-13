import React from 'react';
import * as S from './about-technologies.styles';
import {About_Technologies_Title_Container} from "./about-technologies.styles";
import Text from "../common/Text";
import Techno from "./Techno";


const software = [
    { "name": "Illustrator" ,
        "image": "/illustrator.png",
    },{ "name": "Adobe Xd" ,
        "image": "/xd.png",
    },{ "name": "Photoshop" ,
        "image": "/photoshop.png",
    },{ "name": "Figma" ,
        "image": "/figma.png",
    }
]


const About_Technologies = () => {
    return (
        <S.About_Technologies_Wrapper>
            <S.About_Technologies_Title_Container>
                <Text
                    as={'h2'}
                    fontWeight={600}
                    fontSize={"50px"}
                    color={"#000000"}
                    maxWidth={425}
                    textAlign={"center"}
                    lineHeight={"100%"}

                >
                    Design tools we work with
                </Text>
                <Text
                    as={"p"}
                    color={"rgba(0, 0, 0, 0.5);"}
                    fontSize={"16px"}
                    lineHeight={"140%"}
                    maxWidth={515}
                    textAlign={"center"}


                >
                  <span className="red">Each website we design is unique</span>, meaning no templates and no recycled work. We want to make sure each client’s vision is represented in its truest form, so we start from the beginning. Our process varies from client to client and is broken up into curated phases. It goes something like this: <span className="red">discovery, web structure,  web design and web development</span> . Don’t worry, we’ll explain all of this to you during the process.                </Text>

            </S.About_Technologies_Title_Container>
            <S.Techno_Container>
            {
                software.map(techno=>(
                    <Techno name={techno.name} image={techno.image} key={techno.name}/>
                ))

            }
            </S.Techno_Container>

        </S.About_Technologies_Wrapper>
    )
}

export default About_Technologies;
