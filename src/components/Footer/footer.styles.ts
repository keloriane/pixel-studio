import styled, { css } from 'styled-components';
import { respondMax } from '../../styles/mixins';

export const Footer = styled.footer`
  width: 100%;
  background-color: black;
`;

export const Footer_Container = styled.div`
  width: 100%;
  max-width: 1200px;
  border-top: 1px solid white;
  margin: auto;
  ${respondMax(
      'sm',
      css`
      bottom: -500px;
      justify-content: center;
    `
  )}
`;


export const Footer_Wrapper = styled.div`
width: 663px;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;


export const Footer_Nav = styled.nav `
  display: flex;
  flex-direction: column;
  color: rgba(255, 255, 255, 0.7);
  
`;

export const Footer_Contact = styled.div`
  display: flex;
  flex-direction: column;

`;


export const Footer_Adress = styled.div`
  display: flex;
  flex-direction: column;

`;


export const Bottom_Footer = styled.div`
display: flex;
  justify-content: space-between;
  width: 1280px;
  margin: auto;

`;

export const Footer_Logo = styled.div`
width: auto;

`;



export const Footer_Copyright = styled.div`
  width: auto;
`;


