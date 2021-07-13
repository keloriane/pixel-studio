import React,{useEffect, useRef, useState} from "react";
import * as S from "./service_item.styles"
import Text from "../../common/Text";

const Service_Item = ({name , description}) => {
  const serviceItem  = useRef();
  const [active , setActive] = useState(false);


  const handleInactive = () => {
    setActive(false)
  }
  const handleActive = () => {
    setActive(true)
  }


  return(

      <S.Service_Item ref={serviceItem} className={"service"}
                      onMouseEnter={handleActive}
                      onMouseLeave={handleInactive}
      >
        <Text

          as={"h3"}
          color={"#ffffff"}
          fontWeight={500}
          fontSize={"56px"}
          letterSpacing={"-0.01rem"}
/*          color={active===true? "rgba(235, 87, 87, 1)" : "white"}*/

        >
          {
            name
          }
        </Text>

        {
          active === true?
           ( <Text
              color={"#FFFFFF"}
              fontWeight={300}
              fontSize={"16px"}
              lineHeight={"140%"}
           >
             {
               description
             }
            </Text>): ""
        }


      </S.Service_Item>
  )
}
export default Service_Item ;
