import { Box, Flex, Image, Link } from '@chakra-ui/react'
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
    const [left, setLeft] = useState(false)
    const [right, setRight] = useState(false)
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
                            <Link target={"_blank"} href="https://rahuljaiswal.me">Home</Link>
                            <Link target={"_blank"} href="https://read.cv/rahul.design">Resume</Link>
                            <Link target={"_blank"} href="https://rahuljaiswal.me/motionDesign">Motion Design</Link>
                            <Link target={"_blank"} cursor="help" pointerEvents="none" opacity="50%">NFT-Upcoming</Link>
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
                    <Box className='titleHeading'>Expert recommendations</Box>
                    <Box className='info'>To signal the reliability of Flint’s on-app experts.</Box>
                </Box>
                <Box className='motionContainer' >
                    <Lottie animationData={splash} />
                    <Box className='titleHeading'>Splash</Box>
                    <Box className='info'>A memorable intro every time you open the app. </Box>
                </Box>
                <Box className='motionContainer' >
                    <Lottie animationData={loader} />
                    <Box className='titleHeading'>Loader</Box>
                    <Box className='info'>Waiting can be frustrating, only if the designer isn’t up to the task.</Box>
                </Box>
                <Box className='motionContainer' >
                    <Lottie animationData={watch} />
                    <Box className='titleHeading'>Watchlist</Box>
                    <Box className='info'>Giving more information visually so the user has to spend less time.</Box>
                </Box>
                <Box className='motionContainer' >
                    <Lottie animationData={shield} />
                    <Box className='titleHeading'>Security</Box>
                    <Box className='info'>Instilling a sense of security to gain user trust.</Box>
                </Box>
                <Box className='motionContainer' >
                    <Lottie animationData={gift} />
                    <Box className='titleHeading'>Rewards</Box>
                    <Box className='info'>Making the rewards section more exciting to drive desirable action.</Box>
                </Box>
                <Box className='videoContainer' >
                    <video onMouseOver={event => event.target.play()} onMouseOut={event => event.target.pause()} src={nft} loop={true}></video>
                    <Box pt="3rem" pl="1rem" className='titleHeading'>NFT Airdrop</Box>
                    <Box pl="1rem" className='info'>Creating hype around the product by distributing unique digital art.</Box>
                </Box>
                <Box className='videoContainer'>
                    <video onMouseOver={event => event.target.play()} onMouseOut={event => event.target.pause()} src={final} loop={true}></video>
                    <Box pt="3rem" pl="1rem" className='titleHeading'>Feature Teaser</Box>
                    <Box pl="1rem" className='info'>Informing users to a new product feature via a short video.</Box>
                </Box>
                <Box className='bigVideoCont'>
                    <video src={teaser} controls ></video>
                    <Box pt="3rem" pl="3rem" className='titleHeading'>Flint 2.0 Launch Video</Box>
                    <Box pl="3rem" className='info'>Walking users through the revamped app and all its features.</Box>
                </Box>
            </Flex>
            <Footer/>
        </Box>
    )
}

export default MotionDesign