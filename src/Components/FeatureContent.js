import { Box, Flex, Image, propNames } from '@chakra-ui/react'
import React from 'react'

function FeatureContent(props) {
    return (
        <Flex mt="2.6rem">
            <Box w="20%">
                <Image w="3.5rem" h="3.5rem" loading='lazy' mt="0.4rem" src={props.img} borderRadius={"10px"} />
            </Box>
            <Box w="100%">
                <Box className='featureHeading'>{props.heading}</Box>
                <Box className='featureInfo'>{props.text}</Box>
            </Box>
        </Flex>
    )
}

export default FeatureContent