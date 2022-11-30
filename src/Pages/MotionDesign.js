import { Box, Flex, Image } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import Globe from "../Assets/Globe.svg"
import Lottie from "lottie-react"
import Footer from "../Components/Footer"
import experts from "../Assets/Experts.json"
import watch from "../Assets/Watchlist.json"
import splash from "../Assets/Splash.json"
import shield from "../Assets/Shield.json"
import loader from "../Assets/Loader.json"
import gift from "../Assets/Gift.json"
import nft from "../Assets/NFT.mov"
import teaser from "../Assets/Teaser.mov"
import final from "../Assets/FINAL.mov"

function MotionDesign() {
    let ham1 = useRef(null)
    let ham2 = useRef(null)
    let ham3 = useRef(null)
    let menu = useRef(null)
    const [showMenu, setShowMenu] = useState(false)
    function toggleMenu() {
        setShowMenu(showMenu => !showMenu)
    }
    useEffect(() => {
        if (showMenu) {
            ham1.style.transform = "rotate(45deg) translate(4px, 4px)"
            ham3.style.transform = "rotate(-45deg) translate(3px, -3px)"
            ham2.style.opacity = 0
            menu.style.opacity = 1
        }
        else {
            ham1.style.transform = "rotate(0deg)"
            ham3.style.transform = "rotate(0deg)"
            ham2.style.opacity = 1
            menu.style.opacity = 0
        }
    }, [showMenu])

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <Box className='motionBox'>
            <Box className='motionWrapper clip'>
                <Flex className='navbar'>
                    <Flex className='greet'><Image w="25%" display={"inline"} mr="0.4rem" src={Globe} />  <Box color={"#EEE3D3"}>Good evening <br /> from Bangalore.</Box></Flex>
                    <Box className='ham' onClick={toggleMenu}>
                        <Box className='hams one' ref={el => ham1 = el} ></Box>
                        <Box className='hams two' ref={el => ham2 = el} ></Box>
                        <Box className='hams three' ref={el => ham3 = el}></Box>
                        <Box className='menu' ref={el => menu = el}>
                            <Box>Home</Box>
                            <Box>About</Box>
                            <Box>Contact</Box>
                        </Box>
                    </Box>

                </Flex>
                <Flex className="heading">
                    Motion design
                </Flex>
                <Flex className='subHeading'>
                    A video dump of some of my favorite motion graphics I've made.
                </Flex>
            </Box>
            <Flex mt="8rem" flexWrap={"wrap"} w="80%" marginInline={"auto"} justifyContent="space-between">
                <Box className='motionContainer' >
                    <Lottie animationData={experts} />
                    <Box className='titleHeading'>Experts</Box>
                    <Box className='info'>Some thing on the line of experts, what goes around come around</Box>
                </Box>
                <Box className='motionContainer' >
                    <Lottie animationData={splash} />
                    <Box className='titleHeading'>Splash</Box>
                    <Box className='info'>Tells you about the Flint app in detail with </Box>
                </Box>
                <Box className='motionContainer' >
                    <Lottie animationData={loader} />
                    <Box className='titleHeading'>Loader</Box>
                    <Box className='info'>Aadhar card animation that solves for the user anxiety.</Box>
                </Box>
                <Box className='motionContainer' >
                    <Lottie animationData={watch} />
                    <Box className='titleHeading'>Watchlist</Box>
                    <Box className='info'>Aadhar card animation that solves for the user anxiety.</Box>
                </Box>
                <Box className='motionContainer' >
                    <Lottie animationData={shield} />
                    <Box className='titleHeading'>Gaming</Box>
                    <Box className='info'>Aadhar card animation that solves for the user anxiety.</Box>
                </Box>
                <Box className='motionContainer' >
                    <Lottie animationData={gift} />
                    <Box className='titleHeading'>Reward</Box>
                    <Box className='info'>Aadhar card animation that solves for the user anxiety.</Box>
                </Box>
                <Box className='videoContainer' >
                    <video src={nft} muted={true} autoPlay={true} loop={true}></video>
                    <Box pt="3rem" pl="1rem" className='titleHeading'>Experts</Box>
                    <Box pl="1rem" className='info'>Some thing on the line of experts, what goes around come around</Box>
                </Box>
                <Box className='videoContainer'>
                    <video src={final} muted={true} autoPlay={true} loop={true}></video>
                    <Box pt="3rem" pl="1rem" className='titleHeading'>Experts</Box>
                    <Box pl="1rem" className='info'>Some thing on the line of experts, what goes around come around</Box>
                </Box>
                <Box className='bigVideoCont'>
                    <video src={teaser} muted={true} autoPlay={true} loop={true}></video>
                    <Box pt="3rem" pl="3rem" className='titleHeading'>Flint Video Teaser</Box>
                    <Box pl="3rem" className='info'>Aadhar card animation that solves for the user anxiety.</Box>
                </Box>
            </Flex>
            <Footer/>
        </Box>
    )
}

export default MotionDesign