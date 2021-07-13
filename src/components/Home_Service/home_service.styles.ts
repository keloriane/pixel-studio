import styled from "styled-components";


export const Service_Wrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url("/blobservice.png");
  background-size: cover;
  margin-top: 200px;

`;

export const Service_Blob_Wrapper = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 40%;
  z-index: -2;

`;
export const Service_Item_Container = styled.div`

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

`;
export const Service_Item_List = styled.ul`
  width: 100%;
  max-width: 510px;
  padding: 3px;
`;
