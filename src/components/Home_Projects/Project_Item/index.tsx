import React from "react";
import * as S from "./project_item.styles";
import ImageResponsive from "../../common/ImageResponsive";
import Text from "../../common/Text";

  interface ProjectCard {
    image?: string;
    discipline?: string;
    title?: string;
    index?: string;
    link?: string;

  }
const Project_Item: React.FC<ProjectCard> = ({image , discipline , index , link , title}) => {
  return (
      <S.Project_Item_Card>
        <img src={image} alt=""/>
        <S.Project_Item_Layer>
          <S.Project_Item_Layer_Content>
            <S.Project_Item_Layer_Content_Discipline>
              { discipline }
            </S.Project_Item_Layer_Content_Discipline>
            <S.Project_Item_Layer_Content_Title>
              <Text
                as={"h2"}
                fontStyle={"normal"}
                fontWeight={600}
                fontSize={'50px'}
                lineHeight={"90%"}
                letterSpacing={"-0.05rem"}
                color={"white"}
              >
                {
                  title
                }

              </Text>
            </S.Project_Item_Layer_Content_Title>
            <S.Project_Item_Layer_Content_Index>
              <Text
                fontSize={"14px"}
                lineHeight={"98%"}
                letterSpacing={"0.2rem"}
                color={"white"}
              >
              {
                index
              }

              </Text>
            </S.Project_Item_Layer_Content_Index>
            <S.Project_Item_Layer_Content_Link>


              <a href={link}>Case Study</a>

            </S.Project_Item_Layer_Content_Link>
          </S.Project_Item_Layer_Content>
        </S.Project_Item_Layer>
      </S.Project_Item_Card>
  )
}

export default Project_Item;
