import React from 'react';
import * as S from './footer.styles';
import {Link} from 'react-router-dom';
import {Text} from "../common/Text/text.styles";


const Footer = () => {
  return (
    <S.Footer>
      <S.Footer_Container>
      <S.Footer_Wrapper>

      <S.Footer_Nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to={"/projects"}>Projects</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </S.Footer_Nav>
      <S.Footer_Contact>

        <Text
          color={"rgba(235, 87, 131, 1)"}
        >
          Mobile
        </Text>
          <Text
            fontSize={"16px"}
            color={"rgba(255, 255, 255, 0.7)"}
          >
            +32 494 43 43 47
          </Text>
          <Text
            fontSize={"16px"}
            color={"rgba(255, 255, 255, 0.7)"}
          >
            +32 499 87 98 96
          </Text>
        <Text
            color={"rgba(235, 87, 131, 1)"}
        >
          Email
        </Text>
        <Text
            fontSize={"16px"}
            color={"rgba(255, 255, 255, 0.7)"}
        >
          kevin@pxlstudio.com
        </Text>
      </S.Footer_Contact>
      <S.Footer_Adress>
        <Text
            color={"rgba(235, 87, 131, 1)"}
        >
          Adress
        </Text>
        <Text
            fontSize={"16px"}
            color={"rgba(255, 255, 255, 0.7)"}
        >
          Avenue Emile de Béco 83 <br/>
          1050 IXELLES
        </Text>
      </S.Footer_Adress>
      </S.Footer_Wrapper>

      </S.Footer_Container>
      <S.Bottom_Footer>
        <Text
          fontWeight={600}
          fontSize={"25xp"}
          color={"#FFFFFF"}
          lineHeight={"130%"}
        >
          PXL studio <span className={"red"}>.</span>
        </Text>
        <Text
          color={"rgba(255, 255, 255, 0.7)"}
          fontSize={"16px"}
          lineHeight={"35px"}

        >
          © 2021 All Rights Reserved - pxlstudio.
        </Text>
      </S.Bottom_Footer>
    </S.Footer>
  );
};
export default Footer;
