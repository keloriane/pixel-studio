import styled from "styled-components";

export const Gallery_Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: auto;
  position: relative;
  height: 100vh;
`;


export const Gallery_Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: absolute;
  top: -18%;
  
  .gallery-even {
    
    margin-top: 50px;
  }
`;

