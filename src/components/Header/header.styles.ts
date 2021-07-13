import styled from "styled-components";


export const Header_Wrapper = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-items: center;
  height: 99vh;
  max-width: 1280px;
  margin: auto;

`;

export const Header_Title_Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

`;
export const Header_Title = styled.h2`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 600px;
  top: 20%;
  left: 0;
  mix-blend-mode: difference;
  font-family: Clash Grotesk, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 64.2881px;
  line-height: 98.5%;
  color: #100b2b;

  text-transform: capitalize;

  &.red {
    color: #EB5757;
  }

  .chars {
    margin: 5px;
    overflow: hidden;
  }
`;


export const Header_Image_Wrapper = styled.div`

`;
