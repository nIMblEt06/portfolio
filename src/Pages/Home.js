import { Box } from '@chakra-ui/react'
import React from 'react'
import Cases from '../Components/Cases'
import Hero from '../Components/Hero'

function Home() {
  return (
    <Box>
        <Hero/>
        <Cases/>
    </Box>
  )
}

export default Home