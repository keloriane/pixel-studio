import React from 'react';
import * as S from "./home-contact.styles";
import Text from "../common/Text";
import {url} from "inspector";


const Home_Contact = () => {
    return (
        <S.Home_Contact_Section

        >
            <S.Home_Contact_Wrapper>
                <S.Home_Contact_Small_Contact>
                    <Text
                        as={"h4"}
                        letterSpacing={"0.04em"}
                        fontSize={"12px"}
                        fontWeight={800}
                        lineHeight={"98.5%"}
                        color={"#FFFFFF"}

                    >
                        Contact us
                    </Text>
                </S.Home_Contact_Small_Contact>
                <S.Home_Contact_Call_To_Action>
                    <Text
                        as={"h3"}
                        fontWeight={500}
                        fontSize={"36px"}
                        lineHeight={"102%"}
                        color={"#ffffff"}

                    >
                        If you want to get in touch or want to know more, please contact us.
                    </Text>
                </S.Home_Contact_Call_To_Action>
            </S.Home_Contact_Wrapper>
        </S.Home_Contact_Section>
    )
}
export default Home_Contact;
