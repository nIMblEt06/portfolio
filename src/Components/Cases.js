import { Box, Button, Flex, GridItem, Image, SimpleGrid, VStack } from '@chakra-ui/react'
import React from 'react'
import flint from "../Assets/image.png"
import netflix from "../Assets/netflix.png"
import gaming from "../Assets/gaming.png"
import phone from "../Assets/phone.png"
import phone2 from "../Assets/phone2.png"
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import HomeCaroItem from './HomeCaroItem'

function Cases() {
    return (
        <Box className='studyCont'>
            <SimpleGrid w="80%" marginInline={"auto"} columns={3} gap="8" spacing={"2"}>
                <GridItem colSpan={2} className='wideStudy'>
                    <Flex justifyContent={"space-between"}>
                        <VStack w="50%" className='studyText' alignItems={"baseline"}>
                            <Image w="2rem" src={flint} />
                            <Box className='caseHeading'>Crypto Native</Box>
                            <Box className='caseText'>A case study about the crypto natives their behavior and understanding</Box>
                            <Button className='redirect'>Read case study &nbsp; <AiOutlineArrowRight /></Button>
                        </VStack>
                        <Flex alignItems={"flex-end"} mr="3rem">
                            <Image w="14rem" src={phone} />
                        </Flex>
                    </Flex>
                </GridItem>
                <GridItem colSpan={1} className='wideStudy'>
                    <Flex justifyContent={"space-between"}>
                        <VStack w="90%" className='studyText' alignItems={"baseline"}>
                            <Image w="2rem" src={netflix} />
                            <Box className='caseHeading'>Netflix Documentary</Box>
                            <Box className='caseText'>A case study about the crypto natives their behavior and understanding</Box>
                            <Button className='redirect'>See the docket &nbsp; <AiOutlineArrowRight /></Button>
                        </VStack>
                    </Flex>
                </GridItem>
                <GridItem colSpan={1} className='wideStudy'>
                    <Carousel showStatus={false} infiniteLoop={true} showIndicators={false}>
                        <HomeCaroItem/>
                        <HomeCaroItem/>
                    </Carousel>
                </GridItem>
                <GridItem colSpan={2} className='wideStudy'>
                    <Flex justifyContent={"space-between"}>
                        <VStack w="50%" className='studyText' alignItems={"baseline"}>
                            <Image w="4rem" src={gaming} />
                            <Box className='caseHeading'>Gaming Arena</Box>
                            <Box className='caseText'>A case study about the crypto natives their behavior and understanding</Box>
                            <Button className='redirect'>Read case study &nbsp; <AiOutlineArrowRight /></Button>
                        </VStack>
                        <Flex alignItems={"flex-end"} mr="3rem">
                            <Image w="25rem" src={phone2} />
                        </Flex>
                    </Flex>
                </GridItem>
            </SimpleGrid>
        </Box>
    )
}

export default Cases