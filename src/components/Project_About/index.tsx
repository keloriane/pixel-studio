import React from 'react';
import * as S from './project-about.styles';
import Text from "../common/Text";


const Project_About = () => {
    return (
        <S.Project_About_Wrapper>
            <S.Project_About_Wrapper_Layer>

            </S.Project_About_Wrapper_Layer>
            <S.Project_History_Wrapper>
                <S.Project_History_Text_Container>
                    <Text
                    as={"h2"}
                    fontWeight={600}
                    fontSize={"50px"}
                    color={"#F2F2F2"}
                    textAlign={"center"}
                    >
                        Story

                    </Text>
                    <Text
                        as={"p"}
                    fontSize={"17px"}
                    color={"#F2F2F2"}



                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae consequatur corporis cupiditate deserunt dolorum earum eum iste iure nisi, nobis perspiciatis quam quas, reprehenderit saepe veritatis vitae voluptatibus? Exercitationem?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae consequatur corporis cupiditate deserunt dolorum earum eum iste iure nisi, nobis perspiciatis quam quas, reprehenderit saepe veritatis vitae voluptatibus? Exercitationem?
                    </Text>
                </S.Project_History_Text_Container>
            </S.Project_History_Wrapper>
            <S.Project_Challenges_Wrapper>
                <Text
                    as={"h2"}
                    fontWeight={600}
                    fontSize={"50px"}
                    color={"#F2F2F2"}
                    textAlign={"center"}
                >
                    Story

                </Text>
                <Text
                    fontSize={"17px"}
                    color={"#F2F2F2"}


                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae consequatur corporis cupiditate deserunt dolorum earum eum iste iure nisi, nobis perspiciatis quam quas, reprehenderit saepe veritatis vitae voluptatibus? Exercitationem?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda beatae consequatur corporis cupiditate deserunt dolorum earum eum iste iure nisi, nobis perspiciatis quam quas, reprehenderit saepe veritatis vitae voluptatibus? Exercitationem?
                </Text>
            </S.Project_Challenges_Wrapper>
        </S.Project_About_Wrapper>
    );
};

export default Project_About;
