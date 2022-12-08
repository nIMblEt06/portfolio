import { Box, Button, Flex, GridItem, Image, SimpleGrid, useMediaQuery, VStack } from '@chakra-ui/react'
import React from 'react'
import flint from "../Assets/image.png"
import netflix from "../Assets/netflix.png"
import gaming from "../Assets/gaming.png"
import phone from "../Assets/phone.png"
import phone2 from "../Assets/phone2.png"
import picone from "../Assets/1.jpeg"
import pictwo from "../Assets/2.jpeg"
import picthree from "../Assets/3.jpeg"
import picfour from "../Assets/4.jpeg"
import picfive from "../Assets/5.png"
import motion from "../Assets/Motion.json"
import Lottie from 'lottie-react'
// import { Arrow } from 'react-icons/ai'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import HomeCaroItem from './HomeCaroItem'
import Arrow from './Arrow'
import { useNavigate } from 'react-router-dom'

function Cases() {
    const navigate = useNavigate();
    const [isSmallerThan1200] = useMediaQuery('(max-width:1200px)')
    const [isSmallerThan450] = useMediaQuery('(max-width:450px)')
    function goToFlint(){
        navigate(`/studies/flint`)
    }
    function goToMotion(){
        navigate(`/motionDesign`)
    }
    function goToGaming(){
        navigate(`/studies/tournafest`)
    }
    return (
        <Box className='studyCont'>
            <SimpleGrid w="80%" marginInline={"auto"} columns={isSmallerThan1200 ? 2 : 3} gap="8" spacing={"2"}>
                <GridItem colSpan={2} className='wideStudy' onClick={goToFlint}>
                    <Flex justifyContent={"space-between"} className="caseStudyFlex">
                        <VStack w="50%" className='studyText' alignItems={"baseline"}>
                            <Image w="2rem" src={flint} />
                            <Box className='caseHeading'>Flint Money</Box>
                            <Box className='caseText'>Making crypto investing user friendly and less intimidating.</Box>
                            <Button onClick={goToFlint} className='redirect'>Read case study &nbsp; <Arrow /></Button>
                        </VStack>
                        <Flex className="caseImageContainer" alignItems={"flex-end"} mr="3rem">
                            <Image w="14rem" src={phone} />
                        </Flex>
                    </Flex>
                </GridItem>
                <GridItem colSpan={isSmallerThan450 ? 2 : 1} onClick={goToMotion} className='wideStudy'>
                    <Flex justifyContent={"space-between"}>
                        <VStack w="90%" className='studyText lottieContainer' alignItems={"baseline"}>
                            {/* <Image w="2rem" src={netflix} /> */}
                            <Lottie animationData={motion}/>
                            <Box className='caseHeading'>Motion Design</Box>
                            <Box className='caseText'>Conveying more visually by bringing icons to life.</Box>
                            <Button onClick={goToMotion} className='redirect'>Browse through &nbsp; <Arrow/></Button>
                        </VStack>
                    </Flex>
                </GridItem>
                {!isSmallerThan450 ? <GridItem colSpan={1} className='wideStudy'>
                    <Carousel showStatus={false} infiniteLoop={true} showIndicators={false}>
                        <HomeCaroItem place="Istanbul Blockchain.." where="Turkey" when="2022" img={picfive}/>
                        <HomeCaroItem place="India in Black" where="NGO Non profit" when="2018" img={picthree}/>
                        <HomeCaroItem place="SCIMUN" where="Scindia" when="2019" img={pictwo}/>
                        <HomeCaroItem place="Best Photographer" where="National photography day" when="2020" img={picone}/>
                        {/* <HomeCaroItem img={picfour}/> */}
                    </Carousel>
                </GridItem> : ""}
                <GridItem colSpan={2} onClick={goToGaming} className='wideStudy'>
                    <Flex justifyContent={"space-between"} className="caseStudyFlex">
                        <VStack w="65%" className='studyText' alignItems={"baseline"}>
                            <Image w="4rem" src={gaming} />
                            <Box className='caseHeading'>Tournafest</Box>
                            <Box className='caseText'>A one stop destination for gamers and organisers.</Box>
                            <Button onClick={goToGaming} className='redirect'>Read case study &nbsp; <Arrow /></Button>
                        </VStack>
                        <Flex alignItems={"flex-end"} justifyContent="right">
                            <Image w={isSmallerThan450 ? "90%" : "25rem"} src={phone2} objectFit={isSmallerThan450 ? "cover" : ""} height={isSmallerThan450 ? "8rem" : ""} objectPosition={isSmallerThan450 ? "0rem -2rem" : ""}/>
                        </Flex>
                    </Flex>
                </GridItem>
                {isSmallerThan450 ? <GridItem colSpan={2} className='wideStudy'>
                    <Carousel showStatus={false} infiniteLoop={true} showIndicators={false}>
                        <HomeCaroItem img={picone}/>
                        <HomeCaroItem img={pictwo}/>
                        <HomeCaroItem img={picthree}/>
                        <HomeCaroItem img={picfour}/>
                        <HomeCaroItem img={picfive}/>
                    </Carousel>
                </GridItem> : ""}
            </SimpleGrid>
        </Box>
    )
}

export default Cases