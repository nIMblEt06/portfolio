import { Box } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import Mark from "../Assets/mark.png"
import Lottie from 'lottie-react'
import scribble from "../Assets/scribble.json"

function Cards(props) {
  const {heading, subHeading, updateText, updateClass, removeClass, source} = props;
  const [hover, setHover] = useState(false)
  let item = useRef(null)

  useEffect(()=>{
    console.log(source);
    item.style.background= `url(${source})`
    if(hover){
      updateClass();
      item.classList.remove('inactive')
    }
    else{
      removeClass();
    }
  },[item, hover])

  
  function enter(){
    setHover(true)
    updateText(heading,subHeading)
    
  }
  function leave(){
    updateText("Hey, I'm Rahul", "I am a designer, story teller and a lover of airplane window seats ✈️")
    setHover(false)
  }

  return (
    <Box backgroundSize={"cover !important"} backgroundPosition="center !important" backgroundRepeat="no-repeat" position={"relative"} onMouseOver={enter} onMouseLeave={leave} ref={el => item = el} className="caroItem">
    {hover && <Lottie animationData={scribble}/>}
    </Box>
  )
}

export default Cards