import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import {BsDot} from 'react-icons/bs'
import Mark from "../Assets/mark.png"

function HomeCaroItem(props) {
  return (
    <Box overflow={"hidden"} height="100%" textAlign={"left"}  color="#EEE3D3"  backgroundImage={props.img} backgroundSize="cover">
        <Box pl="2rem" height="100%" w="100%" background="linear-gradient(357.91deg, #000000 1.84%, rgba(0, 0, 0, 0) 61.55%);">
        <Box pt="11rem" fontSize={"1.6rem"} fontWeight={"600"}>{props.place}</Box>
        <Flex textTransform={"uppercase"} fontSize={"0.8rem"} alignItems="center">{props.where} <BsDot fontSize="2rem"/> {props.when}</Flex>
        </Box>
    </Box>
  )
}
export default HomeCaroItem