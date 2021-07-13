import React, {useEffect} from 'react';
import * as S from './gallery.styles';


const Gallery = ({gallery}) => {

    let galleryOdd= []
    let galleryEven= []
    useEffect(()=> {

    })
    if(gallery) {
     galleryOdd = gallery.filter((item , i)=> {
        return i % 2 === 0 && item
    });
    galleryEven = gallery.filter((item , i)=> {
        return i % 2 !== 0 && item
    });

    }


    return (
        <S.Gallery_Container>
            <S.Gallery_Wrapper>
                        <div className={"gallery-odd"}>

                { gallery&&
                    galleryOdd.map((image , i ) => (
                        <img src={image} className={`image-card${i+1}`} key={i+1} alt=""/>

                    ))
                }
                        </div>
                        <div className={"gallery-even"}>
                { gallery&&
                    galleryEven.map((image , i ) => (
                        <img src={image} className={`image-card${i+1}`} key={i+1} alt=""/>

                    ))
                }
                        </div>
            </S.Gallery_Wrapper>
        </S.Gallery_Container>
    )
}
export default Gallery;
