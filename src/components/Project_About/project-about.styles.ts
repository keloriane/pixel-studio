import styled from "styled-components";


export const Project_About_Wrapper = styled.section`
  width: 100vw;
  height: 100%;
  background-color: #1B1B1B;
  position: relative;
`;
export const Project_About_Wrapper_Layer = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-image: url("/patterns-background.png");
  background-size: cover;

`;

export const Project_History_Wrapper = styled.div`
width: 100%;
  max-width: 555px;
  margin: auto;
  padding-top: 95px;
  p {
    margin-top: 60px;
  }
  

`;

export const Project_History_Text_Container = styled.div`
  display: flex;
  flex-direction: column;
  
`;


export const Project_Challenges_Wrapper = styled.div`
  width: 100%;
  max-width: 555px;
  margin: auto;
  padding-top: 95px;
  padding-bottom: 95px;
`;
