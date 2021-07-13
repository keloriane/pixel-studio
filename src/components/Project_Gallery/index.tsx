import React from 'react';
import * as S from './project-gallery.styles'
import Text from "../common/Text";
import Gallery from "./Gallery";

const Project_Gallery = ({color , imageGallery}) => {
    return (
        <>

            <S.Project_Gallery_Wrapper
                style={{
                    backgroundColor: color
                }}
            >
                <S.Project_Gallery_Title>

                    <Text
                        as={"h2"}
                        textTransform={"uppercase"}
                        fontWeight={600}
                        fontSize={"144px"}
                        color={"white"}


                    >
                        project gallery
                    </Text>
                </S.Project_Gallery_Title>

            </S.Project_Gallery_Wrapper>
            <Gallery
                gallery={imageGallery}

            />
        </>

    );
};

export default Project_Gallery;
