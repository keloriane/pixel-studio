import React from 'react';
import * as S from './about-header.styles';
import ImageResponsive from "../common/ImageResponsive";
import Svg_Scroll_Down_Image from './Svg_Scroll_Down_Image';
import Text from "../common/Text";


const About_Header = () =>{
    return (
        <S.About_Header_Wrapper>
            <S.About_Header_Image_Wrapper>
                <ImageResponsive
                    src={"/about-header.png"}
                />

            </S.About_Header_Image_Wrapper>
            <Svg_Scroll_Down_Image  />
            <S.About_Header_Text_Wrapper>
                <Text
                    as={"h2"}
                    color={"#000000"}
                    fontWeight={600}
                    fontSize={"80px"}
                    lineHeight={"87%"}
                >
                    Who we are
                    & how we do it
                </Text>
                <Text
                as={"p"}
                color={"rgba(0, 0, 0, 0.6);"}
                fontSize={"18px"}
                lineHeight={"140%"}
                maxWidth={386}

                />
                <Text

                >
                    We don’t want to BS you with some technology name dropping. So i’ll just give you the tech icon. The guy on the left is kevin and the guy on the right is kevin. Confusing right ? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                </Text>
            </S.About_Header_Text_Wrapper>
        </S.About_Header_Wrapper>
    )
}

export default About_Header;
