import { Box, Flex, useMediaQuery } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Cases from '../Components/Cases'
import Hero from '../Components/Hero'
import ChatBot from '../Components/ChatBot'
import Testimonials from '../Components/Testimonials'
import Footer from '../Components/Footer'
import Features from '../Components/Features'
// import Loader from '../Components/Loader'

function Home() {
  // window.scrollTo(0, 0)
  const [isSmallerThan450] = useMediaQuery('(max-width:450px)')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    document.addEventListener("readystatechange", () => {
      if (document.readyState === "complete") {
        setTimeout(() => setIsLoaded(true), 2000);
        sessionStorage.setItem('hasLoaded', true)
      }
    })
    if (document.readyState === "complete") {
      setTimeout(() => setIsLoaded(true), 2000);
      sessionStorage.setItem('hasLoaded', true)
    }
  }, []);

  return (
    <Box bgColor="#0D0D0D" overflowX={"hidden"}>
      {/* <Loader isLoaded={isLoaded} /> */}
      <Hero />
      <Box width={isSmallerThan450 ? "95%" : "90%"} marginInline={"auto"}>
        <Cases />
        <Flex marginInline={"auto"} w={isSmallerThan450 ? "90%" : "80%"} justifyContent="space-between" className="testAndChat">
          <Testimonials />
          <ChatBot />
        </Flex>
      </Box>
      <Footer />
    </Box>
  )
}

export default Home