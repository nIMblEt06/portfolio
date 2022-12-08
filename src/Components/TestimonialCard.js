import { Box, Flex, Image, Link, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import linkedin from "../Assets/linked.svg" 
// import twitter from "../Assets/twitter.png" 
import { BsDot } from 'react-icons/bs'


function TestimonialCard(props) {
  const [isSmallerThan450] = useMediaQuery('(max-width:450px)')
  const [isSmallerThan800] = useMediaQuery('(max-width:800px)')
  return (
    <Box h={isSmallerThan800? isSmallerThan450 ? "39rem" : "26rem" : "29rem"} position={"relative"} flexShrink={0} bgColor="#121212" color= "#EEE3D3" padding="1.6rem" borderRadius={"24px"} w="100%" >
        <Image src={props.img} borderRadius="50%" w="5rem" h="5rem"/>
        <Box mt="0.6rem" fontWeight="600" fontSize={"1.6rem"}>{props.name}</Box>
        <Flex fontSize={"1.15rem"} w="max-content" alignItems="center">{props.post} <BsDot fontSize="1.6rem"/> {props.company}</Flex>
        <Box mt="1.2rem" fontWeight="500" fontSize={"1.2rem"} fontStyle="italic" w="100%">
       {props.text}
        </Box>
        <Flex mt="1.4rem">
          <Link target={"_blank"} href={props.linkedin}><Image w="2.4rem" marginRight={"0.6rem"} src={linkedin}/></Link>
          {/* <Link target={"_blank"} href={props.twitter}><Image w="2.4rem" src={twitter}/></Link> */}
        </Flex>
    </Box>
  )
  // w={isSmallerThan800 ? isSmallerThan450 ? "30%" : "47%" : "35%"}
}

export default TestimonialCard