import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import Behance from "./Behance"
import Tweet from "./Linkedin"
import Linked from "./Twitter"

function Footer() {
  return (
    <Box background={"#121212"} paddingBlock="4rem" marginTop="5rem">
        <Flex justifyContent={"space-between"} className="footerFlex">
            <Behance/>
            <Tweet/>
            <Linked/>
        </Flex>
        <Box mt="2rem" color="#FFF" fontWeight={500} marginInline="auto" w="80%" textAlign={"center"}>Copyright © Rahul Kumar. All rights reserved</Box>
    </Box>
  )
}

export default Footer