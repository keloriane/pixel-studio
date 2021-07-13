import styled from "styled-components";


export const About_Technologies_Wrapper = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: auto;
`;

export const About_Technologies_Title_Container = styled.section`
  display: flex;
  flex-direction: column;
  place-items: center;
  p{
    margin-top: 20px;
  }
`;
export const Techno_Container = styled.div`
  display: flex;
  place-items: center;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  width: 100%;
  max-width: 915px;
  margin: 65px auto;
  div{
    display: flex;
    max-height: 80px;
    flex-direction: column;
    place-items: center;
    object-fit: contain;
    padding: 4px;
  }
`;

