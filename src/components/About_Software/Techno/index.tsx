import React from "react";
import * as S from './techno.styles'



interface Technologies {
    name: string,
    image: string
}
const Techno: React.FC<Technologies> = ({name , image}) => {
    return (
        <S.Techno_Wrapper>
            <img src={image} alt={name}/>
        </S.Techno_Wrapper>

    )
}

export default Techno;
