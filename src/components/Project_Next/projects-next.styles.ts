import styled from "styled-components";

export const Project_Next_Container = styled.section`
  width: 100vw;
  height: 400px;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;



export const Project_Next_Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  filter: opacity(0.5);
  background-image: url(/next-buddy.png);

  background-size: cover;
  top: 24%;
  z-index: -2;
  
`;

export const Project_Next_Title = styled.div`
    
    width: 100%;
  max-width: 350px;
    
`;

export const Project_Action_Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  top: 50%;
  align-items: center;
  
`;

export const Project_Next_Call_To_Action = styled.div`
  

`;
