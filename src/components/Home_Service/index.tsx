import React,{useEffect} from "react";
import {Blob} from "../../utils/blob.paper";
import * as S from "./home_service.styles"
import Service_Item from "./Service_Item";
import Service_Item_Image from "./Service_Item_Image";


const services =  [
  {"name" : "UI/UX Design",
    "description": "Since we’re creative thinkers, our code is always customized. We leverage custom development to make sure your website is supported oSince we’re creative thinkers, our code is always customized. We leverage custom development to make sure your website is supported on all browsers/devices with fun and engaging interactions. ",
    "image":"/computer.png"
  },
  {
    "name": "Web Development",
    "description": "Since we’re creative thinkers, our code is always customized. We leverage custom development to make sure your website is supported oSince we’re creative thinkers, our code is always customized. We leverage custom development to make sure your website is supported on all browsers/devices with fun and engaging interactions. "
  },
  {
    "name": "Sys-Admin & Devops",
    "description": "Since we’re creative thinkers, our code is always customized. We leverage custom development to make sure your website is supported oSince we’re creative thinkers, our code is always customized. We leverage custom development to make sure your website is supported on all browsers/devices with fun and engaging interactions. "

  },
  {
    "name": "Branding",
    "description": "Since we’re creative thinkers, our code is always customized. We leverage custom development to make sure your website is supported oSince we’re creative thinkers, our code is always customized. We leverage custom development to make sure your website is supported on all browsers/devices with fun and engaging interactions. "

  },
  {
    "name": "SEO/SEA",
    "description": "Since we’re creative thinkers, our code is always customized. We leverage custom development to make sure your website is supported oSince we’re creative thinkers, our code is always customized. We leverage custom development to make sure your website is supported on all browsers/devices with fun and engaging interactions. "

  },
]

const Home_Service = () =>{
  useEffect(()=>{

  },[])

  return (
    <S.Service_Wrapper className={"service"}>
      <S.Service_Blob_Wrapper>

      </S.Service_Blob_Wrapper>
      <S.Service_Item_Container>
        <S.Service_Item_List>
          {
            services.map((service , i)=>(

              <Service_Item key={i} name={service.name} description={service.description} />
            ))
          }
        </S.Service_Item_List>
          {
            services.map((service , i)=>(

                <Service_Item_Image key={i} image={service.image} />
            ))
          }
      </S.Service_Item_Container>
    </S.Service_Wrapper>
  )
}

export default Home_Service
