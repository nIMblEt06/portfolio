import { Box, Flex, Image, Link, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import linkedin from "../Assets/linkedin.png" 
import twitter from "../Assets/twitter.png" 
import { BsDot } from 'react-icons/bs'


function TestimonialCard(props) {
  const [isSmallerThan450] = useMediaQuery('(max-width:450px)')
  return (
    <Box position={"relative"} flexShrink={0} bgColor="#121212" color= "#EEE3D3" padding="1.6rem" borderRadius={"24px"} w={isSmallerThan450 ? "19rem" : "30rem"}>
        <Image src={props.img} borderRadius="50%" w="5rem" h="5rem"/>
        <Box mt="0.6rem" fontWeight="600" fontSize={"1.6rem"}>{props.name}</Box>
        <Flex fontSize={"1.15rem"} alignItems="center">{props.post} <BsDot fontSize="1.6rem"/> {props.company}</Flex>
        <Box mt="1.2rem" fontWeight="500" fontSize={"1.2rem"} fontStyle="italic">
       {props.text}
        </Box>
        <Flex mt="1.4rem">
          <Link target={"_blank"} href={props.linkedin}><Image w="2.4rem" marginRight={"0.6rem"} src={linkedin}/></Link>
          <Link target={"_blank"} href={props.twitter}><Image w="2.4rem" src={twitter}/></Link>
        </Flex>
    </Box>
  )
}

export default TestimonialCard