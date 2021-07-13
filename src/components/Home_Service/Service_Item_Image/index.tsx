import React, {useRef, useState} from 'react';



const Service_Item_Image = ({image}) => {
    const serviceImage  = useRef();
    const [active , setActive] = useState(false);


    const handleInactive = () => {
        setActive(false)
    }
    const handleActive = () => {
        setActive(true)
    }

    return (
        <div ref={serviceImage}
        >
            <img src={image} alt=""/>
        </div>
    )
}
export default Service_Item_Image;
