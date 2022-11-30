import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Cases from '../Components/Cases'
import Hero from '../Components/Hero'
import ChatBot from '../Components/ChatBot'
import Testimonials from '../Components/Testimonials'
import Footer from '../Components/Footer'
// import Loader from '../Components/Loader'

function Home() {
  return (
    <Box bgColor="#0D0D0D" overflowX={"hidden"}>
      {/* <Loader /> */}
      <Hero />
      <Box width={"90%"} marginInline={"auto"}>
        <Cases />
        <Flex w="90%" justifyContent="space-between" className="testAndChat">
          <Testimonials />
          <ChatBot />
        </Flex>
      </Box>
      <Footer />
    </Box>
  )
}

export default Home