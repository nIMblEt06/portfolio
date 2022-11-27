import { Box } from '@chakra-ui/react'
import React from 'react'
import Cases from '../Components/Cases'
import Hero from '../Components/Hero'
import ChatBot from '../Components/ChatBot'

function Home() {
  return (
    <Box bgColor="#0D0D0D;">
        <Hero/>
        <Cases/>
        <ChatBot/>
    </Box>
  )
}

export default Home