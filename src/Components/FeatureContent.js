import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import mohit from "../Assets/samrat.jpeg"

function FeatureContent() {
    return (
        <Flex mt="2.6rem">
            <Box w="30%">
                <Image loading='lazy' mt="0.4rem" src={mohit} w="100%" borderRadius={"10px"} />
            </Box>
            <Box ml="2rem">
                <Box className='featureHeading'>News and Learn</Box>
                <Box className='featureInfo'>Helping users create a visual mental model for all our product lines with the help of information architecture.</Box>
            </Box>
        </Flex>
    )
}

export default FeatureContent