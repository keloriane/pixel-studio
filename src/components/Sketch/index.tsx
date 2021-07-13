import React from "react";
import {Scene} from './utils/Scene'
import {useEffect} from "react";




const Sketch = () =>{
  useEffect(()=> {
    const scene = new Scene({
      dom: document.getElementById("webgl")
    });
  })


  return (
    <section id={"webgl"}>

    </section>
  )
}
export default Sketch
