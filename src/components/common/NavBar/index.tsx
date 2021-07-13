import React from "react";
import {Link} from "react-router-dom";
import * as S from './navBar.styles';

const NavBar = () => {
  const links = [
    {
      "name": "About",
      "destination": "/about"
    }, {
      "name": "Projects",
      "destination": "/projects"
    }, {
      "name": "Contact",
      "destination": "/contact"
    }, {
      "name": "Services",
      "destination": "/services"
    },
  ]
  return (
    <S.NavBarMain>
      <S.NavBarLeftWrapper>
      <S.NavBarLogo>
        <h1>Pixel Studio <div className="red">.</div> </h1>
      </S.NavBarLogo>
      <S.NavBarLinks>
        {
          links.map(link => (
            <li key={link.name}>
              <Link to={`/${link.destination}`}>{link.name}</Link>
            </li>
          ))
        }
      </S.NavBarLinks>
      </S.NavBarLeftWrapper>
      <S.NavBarLang>
        EN|FR
      </S.NavBarLang>
    </S.NavBarMain>
  )
}
export default NavBar;
