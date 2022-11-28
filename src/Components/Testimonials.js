import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import TestimonialCard from './TestimonialCard'

function Testimonials() {
  return (
    <Flex ml="9rem" width={"max-content"} marginBlock="3rem">
        <TestimonialCard/>
        <TestimonialCard/>
        <TestimonialCard/>
        <TestimonialCard/>
        <TestimonialCard/>
    </Flex>
  )
}

export default Testimonials