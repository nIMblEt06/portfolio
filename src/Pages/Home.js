import { Box, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Cases from '../Components/Cases'
import Hero from '../Components/Hero'
import ChatBot from '../Components/ChatBot'
import Testimonials from '../Components/Testimonials'
import Footer from '../Components/Footer'
import Loader from '../Components/Loader'

function Home() {
  window.scrollTo(0, 0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
      if (document.readyState === "complete") {
        setTimeout(() => setIsLoaded(true), 2000);
        sessionStorage.setItem('hasLoaded', true)
      }
    })
    if (document.readyState === "complete") {
      setTimeout(() => setIsLoaded(true), 2000);
      sessionStorage.setItem('hasLoaded', true)
    }
  },[]);

  return (
    <Box bgColor="#0D0D0D" overflowX={"hidden"}>
      <Loader isLoaded={isLoaded} />
      <Hero />
      <Box width={"90%"} marginInline={"auto"}>
        <Cases />
        <Flex marginInline={"auto"} w="80%" justifyContent="space-between" className="testAndChat">
          <Testimonials />
          <ChatBot />
        </Flex>
      </Box>
      <Footer />
    </Box>
  )
}

export default Home