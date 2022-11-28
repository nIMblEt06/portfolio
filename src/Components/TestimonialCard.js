import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import rahulImage from "../Assets/rahulImage.png" 
import pins from "../Assets/pins.png" 


function TestimonialCard() {
  return (
    <Box marginInline={"1rem"} position={"relative"} bgColor="#EEE3D3" padding="1.2rem" borderRadius={"24px"} w="20rem">
        <Image src={rahulImage} w="5rem" h="5rem"/>
        <Image src={pins} position="absolute" w="0.4rem" top="0" right="25%" />
        <Image src={pins} position="absolute" w="0.4rem" top="0" right="22%" />
        <Box mt="1.2rem" fontWeight="500" fontSize={"0.9rem"} fontStyle="italic">
        Rahul is a self-motivated designer, full of energy! His love and passion for his craft is evidently seen in all his work, be it UX Design, podcasting or Video making Ansh simply nails it.
        </Box>
        <Box mt="1.2rem" fontWeight="600">Akshit Bordia, CEO at Flint</Box>
    </Box>
  )
}

export default TestimonialCard