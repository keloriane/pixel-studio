import styled from "styled-components";


export const Project_Header_Wrapper = styled.header`
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .blob {
    width: 500px;
    height: 400px;
    border-radius: 55% 45% 60% 45% / 40% 40% 70% 55%;
    background-color: red;
    background-image: url("/blob-project.svg");
  }
  .sketch-project {
    opacity: 0;
  }

`;
export const Project_Title_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 345px;
  gap:30px;
  
`;

