import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import {BsDot} from 'react-icons/bs'
import Mark from "../Assets/mark.png"

function HomeCaroItem(props) {
  return (
    <Box height="100%" textAlign={"left"} pl="2rem" color="#EEE3D3" background="linear-gradient(357.91deg, #000000 1.84%, rgba(0, 0, 0, 0) 61.55%);" backgroundImage={Mark} backgroundSize="cover">
        <Box pt="14rem" fontSize={"1.6rem"} fontWeight={"600"}>IBW</Box>
        <Box fontSize={"0.8rem"} display={"inline"}>TURKEY 2022</Box>
    </Box>
  )
}
export default HomeCaroItem