import { Box, Flex, Image, Link } from '@chakra-ui/react'
import React from 'react'
import rahulImage from "../Assets/rahulImage.png" 
import pins from "../Assets/pins.png" 
import linkedin from "../Assets/linkedin.png" 
import twitter from "../Assets/twitter.png" 
import { BsDot } from 'react-icons/bs'


function TestimonialCard(props) {
  return (
    <Box marginInline={"1rem"} position={"relative"} bgColor="#121212" color= "#EEE3D3" padding="1.2rem" borderRadius={"24px"} w="20rem">
        <Image src={props.img} w="5rem" h="5rem"/>
        <Box mt="0.6rem" fontWeight="600" fontSize={"1.3rem"}>{props.name}</Box>
        <Flex fontSize={"0.7rem"} alignItems="center">{props.post} <BsDot fontSize="1.6rem"/> {props.company}</Flex>
        <Box mt="1.2rem" fontWeight="500" fontSize={"0.9rem"} fontStyle="italic">
       {props.text}
        </Box>
        <Flex mt="1.4rem">
          <Link target={"_blank"} href='https://linkedin.com'><Image w="1.6rem" marginRight={"0.6rem"} src={linkedin}/></Link>
          <Link target={"_blank"} href='https://twitter.com'><Image w="1.6rem" src={twitter}/></Link>
        </Flex>
    </Box>
  )
}

export default TestimonialCard