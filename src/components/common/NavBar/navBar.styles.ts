import styled from "styled-components";


export const NavBarMain = styled.nav `
  width: 90%;
  color: #282038;
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: space-between;
  position: relative;
  z-index: 10;



`;
export const NavBarLeftWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const NavBarLogo = styled.div`
  font-style: normal;
  font-family: "Clash Grotesk" , sans-serif;
  font-weight: 600;
  font-size: 29.44px;
  line-height: 130%;
  color: #282038;
  width: 334px;
  h1 {
    display: flex;
  }
`
export const NavBarLinks = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  max-width: 340px;
  justify-content: space-evenly;
  font-family: "Clash Grotesk" , sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18.86px;
  line-height: 35px;
  text-transform: capitalize;
  color: rgba(0, 0, 0, 0.7);
`;


export const NavBarLang = styled.div`

`;
