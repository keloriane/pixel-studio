import React from 'react';
import * as S from './about-technologies.styles';
import {About_Technologies_Title_Container} from "./about-technologies.styles";
import Text from "../common/Text";
import Techno from "./Techno";


const technologies = [
    { "name": "React JS" ,
        "image": "/react.png",
    },{ "name": "Git" ,
        "image": "/git.png",
    },{ "name": "PHP" ,
        "image": "/php.png",
    },{ "name": "Node JS" ,
        "image": "/nodejs.png",
    },{ "name": "TypeScript" ,
        "image": "/typescript.png",
    },{ "name": "Docker" ,
        "image": "/docker.png",
    },{ "name": "Webgl" ,
        "image": "/webgl.png",
    },{ "name": "Vue" ,
        "image": "/vuejs.png",
    },{ "name": "Wordpress" ,
        "image": "/wordpress.png",
    },{ "name": "GraphQL" ,
        "image": "/graphql.png",
    }
]


const About_Technologies = () => {
    return (
        <S.About_Technologies_Wrapper>
            <S.About_Technologies_Title_Container>
                <Text
                    as ={'h2'}
                    fontWeight={600}
                    fontSize={"50px"}
                    color={"#000000"}
                    maxWidth={297}
                    textAlign={"center"}
                    lineHeight={"100%"}
                >
                    Technologies we uses
                </Text>
                <Text
                    as={"p"}
                    color={"rgba(0, 0, 0, 0.5);"}
                    fontSize={"16px"}
                    lineHeight={"140%"}
                    maxWidth={515}
                    textAlign={"center"}


                >
                    Since we’re <span className="red"> creative thinkers</span>, our code is always customized. We leverage custom development to make sure your website is supported on all browsers/devices with fun and engaging interactions. Our services are flexible for both your users and your business. We provide seamless integrations and automations to <span className="red"> meet your marketing goals</span>, a precise content management system for your growing business.
                </Text>

            </S.About_Technologies_Title_Container>
            <S.Techno_Container>
            {
                technologies.map(techno=>(
                    <Techno name={techno.name} image={techno.image} key={techno.name}/>
                ))

            }
            </S.Techno_Container>

        </S.About_Technologies_Wrapper>
    )
}

export default About_Technologies;
