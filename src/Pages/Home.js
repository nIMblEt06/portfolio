import { Box } from '@chakra-ui/react'
import React from 'react'
import Cases from '../Components/Cases'
import Hero from '../Components/Hero'
import ChatBot from '../Components/ChatBot'
import Testimonials from '../Components/Testimonials'

function Home() {
  return (
    <Box bgColor="#0D0D0D;" paddingBottom={"3rem"} overflowX={"hidden"}>
        <Hero/>
        <Box width={"80%"} marginInline={"auto"}>
        <Cases/>
        <Testimonials/>
        <ChatBot/>
        </Box>
    </Box>
  )
}

export default Home