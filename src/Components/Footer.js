import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import linked from "../Assets/linked.png"
import tweet from "../Assets/tweet.png"
import behance from "../Assets/behance.png"

function Footer() {
  return (
    <Box background={"#121212"} paddingBlock="4rem" marginTop="5rem">
        <Flex justifyContent={"center"} className="footerFlex">
            <Image src={behance}/>
            <Image src={linked}/>
            <Image src={tweet}/>
        </Flex>
        <Box mt="2rem" color="#FFF" fontWeight={500} marginInline="auto" w="80%" textAlign={"center"}>Copyright © Rahul Kumar. All rights reserved</Box>
    </Box>
  )
}

export default Footer