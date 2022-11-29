import { Box } from '@chakra-ui/react'
import React from 'react'
import Cases from '../Components/Cases'
import Hero from '../Components/Hero'
import ChatBot from '../Components/ChatBot'
import Testimonials from '../Components/Testimonials'
import Footer from '../Components/Footer'

function Home() {
  return (
    <Box bgColor="#0D0D0D" overflowX={"hidden"}>
        <Hero/>
        <Box width={"90%"} marginInline={"auto"}>
        <Cases/>
        <Testimonials/>
        <ChatBot/>
        </Box>
        <Footer/>
    </Box>
  )
}

export default Home