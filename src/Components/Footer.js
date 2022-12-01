import { Box, Flex, Image, Link } from '@chakra-ui/react'
import React from 'react'
import Behance from "./Behance"
import Tweet from "./Linkedin"
import Linked from "./Twitter"

function Footer() {
  return (
    <Box background={"#121212"} paddingBlock="4rem" marginTop="5rem">
        <Flex justifyContent={"space-between"} className="footerFlex">
            {/* <Link target={"_blank"} href="https://www.linkedin.com/in/rahul-jaiswal-8b8a341a8"><Behance/></Link> */}
            <Link target={"_blank"} href="https://www.linkedin.com/in/rahul-jaiswal-8b8a341a8"><Tweet/></Link>
            <Link target={"_blank"} href="https://twitter.com/fotuphactory"><Linked/></Link>
        </Flex>
        <Box mt="2rem" color="#FFF" fontWeight={500} marginInline="auto" w="80%" textAlign={"center"}>Copyright © Rahul Kumar. All rights reserved</Box>
    </Box>
  )
}

export default Footer