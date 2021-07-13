import React, {useEffect} from 'react';
import * as S from "./project-header.styles"
import Text from "../common/Text";
import {Link} from 'react-router-dom';
import {Blob} from "react-blob";
import {Sketch} from "../../utils/header.skecth";





const Project_Header = ({color, title, expertise, technologies, site, image}) => {
    useEffect(() => {
        /*new Sketch(
            document.querySelector('.sketch-project'),
            "M292.102 7.45268C355.488 7.14553 429.36 -17.4874 476.822 24.5282C524.319 66.5749 501.382 144.272 516.302 205.927C529.594 260.854 567.065 309.627 559.361 365.612C550.832 427.591 528.682 499.77 472.171 526.618C415.612 553.49 354.409 498.822 292.102 492.588C239.176 487.293 185.649 513.212 136.438 493.027C79.3422 469.607 12.834 433.895 1.23501 373.282C-10.4389 312.279 64.0266 269.968 82.3991 210.637C101.218 149.864 62.9872 70.5824 108.678 26.3121C153.927 -17.5308 229.097 7.75797 292.102 7.45268Z",
            '/startcreation.png'

        )*/
    }, []);

    return (
        <S.Project_Header_Wrapper>
            <S.Project_Title_Wrapper>
                <Text
                    as={"h2"}
                    color={color}
                    fontSize={"80px"}
                    fontWeight={600}
                    lineHeight={"84.5%"}
                >{title}</Text>
                <div>
                    <Text
                        as={"h3"}
                        color={color}
                        fontSize={"12px"}
                        fontWeight={800}
                        lineHeight={"98.5%"}
                    >EXPERTISE</Text>
                    <Text>
                        {expertise}
                    </Text>
                </div>
                <div>
                    <Text
                        as={"h3"}
                        color={color}
                        fontSize={"12px"}
                        fontWeight={800}
                        lineHeight={"98.5%"}
                    >Platform</Text>
                    <Text>
                        {expertise}
                    </Text>
                </div>
                <div>
                    <Text
                        as={"h3"}
                        color={color}
                        fontSize={"12px"}
                        fontWeight={800}
                        lineHeight={"98.5%"}
                    >Technology</Text>
                    <Text>
                        {technologies}
                    </Text>
                </div>
                <div>
                    <Text
                        as={"h3"}
                        color={color}
                        fontSize={"12px"}
                        fontWeight={800}
                        lineHeight={"98.5%"}
                    >Link</Text>
                    <Text>
                        <Link to={site}>
                            <Text
                            textDecoration={"underline"}
                            fontSize={"16px"}
                            color={color}
                            >
                                See Project
                            </Text>
                        </Link>
                    </Text>
                </div>

            </S.Project_Title_Wrapper>
            <div className="sketch-project">

            </div>
            <canvas id="paper">

            </canvas>
        </S.Project_Header_Wrapper>

    )
}

export default Project_Header;