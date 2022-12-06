import { Box, Flex, Image, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import FeatureContent from './FeatureContent'
import dummy from "../Assets/featureAsset.png"

function Features() {
  const [isSmallerThan450] = useMediaQuery('(max-width:450px)')
  return (
    <Box id="features" color={"#EEE3D3"} marginInline="auto">
      <Box className='sectionHeading'>Features</Box>
      <Box className='name feature'>Education</Box>
      <Flex justifyContent={"space-between"} mt="1rem">
        <Box w="45%">
          <FeatureContent />
          <FeatureContent />
          <FeatureContent />
        </Box>
        <Flex mt="-3rem" w='48%' justifyContent={"right"}>
          <Image src={dummy} />
        </Flex>
      </Flex>
      <Flex className='name feature' justifyContent={"center"} mt="4rem" ml="15rem">Education</Flex>
      <Flex justifyContent={"space-between"} mt="1rem">
        <Flex mt="-3rem" w='48%' justifyContent={"right"}>
          <Image src={dummy} />
        </Flex>
        <Box w="45%">
          <FeatureContent />
          <FeatureContent />
          <FeatureContent />
        </Box>
      </Flex>
    </Box>
  )
}

export default Features