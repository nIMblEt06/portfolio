import { Box, Flex, Image, Link, useMediaQuery } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import ae from "../Assets/AE.svg"
import blend from "../Assets/Blender.svg"
import Lottie from "lottie-react"
import MotionSVG from "../Components/MotionSVG"
import experts from "../Assets/Experts.json"
import Footer from "../Components/Footer"
import watch from "../Assets/Watchlist.json"
import splash from "../Assets/Splash2.json"
import cardPoster from "../Assets/cardPoster.png"
import revealPoster from "../Assets/revealPoster.png"
// import splash from "../Assets/splash.lottie"
// import splash from "../Assets/Splash.json"
import shield from "../Assets/Shield.json"
import loader from "../Assets/Loader.json"
import gift from "../Assets/Gift.json"
import nft from "../Assets/NFT.mov"
import teaser from "../Assets/Teaser.mov"
import final from "../Assets/FINAL.mov"
import Loader from '../Components/Loader'

function MotionDesign() {
    const [isSmallerThan450] = useMediaQuery('(max-width:450px)')
    let vid1 = useRef(null)
    let vid2 = useRef(null)
    // const [isLoaded, setIsLoaded] = useState(false)

    // useEffect(() => {
    //   document.addEventListener("readystatechange", () => {
    //     if (document.readyState === "complete") {
    //       setTimeout(() => setIsLoaded(true), 2000);
    //     }
    //   });
    // }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
        vid1.currentTime = 1
        vid2.currentTime = 1
        vid1.play()
        vid2.play()
        setTimeout(() => {
            vid1.pause()
            vid2.pause()
        });
    }, [])

    return (
        <Box className='motionBox'>
            {/* <Loader isLoaded = {isLoaded}/> */}
            <Box className='motionWrapper clip'>
                <Flex className="heading motion">
                    Motion design
                </Flex>
                <Flex className='subHeading'>
                I created the following animations from scratch to simplify the special buttons and features on the Flint app.
                </Flex>
            </Box>
            <Flex mt="8rem" className='lottieWrapper' flexWrap={"wrap"} w="70%" marginInline={"auto"} justifyContent="space-between">
                <Box className='motionContainer'>
                    <Lottie animationData={experts} />
                    <MotionSVG />
                    <Box className='titleHeading'>Expert recommendations</Box>
                    <Box className='info'>To signal the reliability of Flint’s on-app experts.</Box>
                </Box>
                <Box className='motionContainer' >
                    <Lottie animationData={splash} />
                    <MotionSVG />
                    <Box className='titleHeading'>Splash</Box>
                    <Box className='info'>A memorable intro every time you open the app. </Box>
                </Box>
                <Box className='motionContainer' >
                    <Lottie animationData={loader} />
                    <MotionSVG />
                    <Box className='titleHeading'>Loader</Box>
                    <Box className='info'>Waiting can be frustrating, only if the designer isn’t up to the task.</Box>
                </Box>
                <Box className='motionContainer' >
                    <Lottie animationData={watch} />
                    <MotionSVG />
                    <Box className='titleHeading'>Watchlist</Box>
                    <Box className='info'>Giving more information visually so the user has to spend less time.</Box>
                </Box>
                <Box className='motionContainer' >
                    <Lottie animationData={shield} />
                    <MotionSVG />
                    <Box className='titleHeading'>Security</Box>
                    <Box className='info'>Instilling a sense of security to gain user trust.</Box>
                </Box>
                <Box className='motionContainer' >
                    <Lottie animationData={gift} />
                    <MotionSVG />
                    <Box className='titleHeading'>Rewards</Box>
                    <Box className='info'>Making the rewards section more exciting to drive desirable action.</Box>
                </Box>
                <Box className='videoContainer' >
                    <Flex className='videoFlex' overflow={"hidden"} h="18rem">
                        <video poster={cardPoster} ref={el => vid1 = el} onMouseOver={event => event.target.play()} onMouseOut={event => event.target.pause()} src={nft} loop={true}></video>
                    </Flex>
                    <Box pt="3rem" pl="1rem" className='titleHeading'>NFT Airdrop</Box>
                    <Box pl="1rem" className='info' w="80%">Creating hype around the product by distributing unique digital art.</Box>
                    <Flex alignItems={"center"} pl="1rem" className='info'>Tools: <Image paddingInline="0.6rem" src={ae} /> <Image src={blend} /> </Flex>
                </Box>
                <Box className='videoContainer'>
                    <video poster={revealPoster} ref={el => vid2 = el} onMouseOver={event => event.target.play()} onMouseOut={event => event.target.pause()} src={final} loop={true}></video>
                    <Box pt="3rem" pl="1rem" className='titleHeading'>Feature Teaser</Box>
                    <Box pl="1rem" className='info' w="80%">Informing users to a new product feature via a short video.</Box>
                    <Flex alignItems={"center"} pl="1rem" className='info'>Tools: <Image paddingInline="0.6rem" src={ae} /> <Image src={blend} /> </Flex>
                </Box>
                <Box className='bigVideoCont'>
                    <video src={teaser} controls ></video>
                    <Box pt="3rem" pl={isSmallerThan450 ? "1rem" : "2rem"} className='titleHeading'>Flint 2.0 Launch Video</Box>
                    <Box pl={isSmallerThan450 ? "1rem" : "2rem"} className='info'>Walking users through the revamped app and all its features.</Box>
                    <Flex alignItems={isSmallerThan450 ? "baseline" : "center"} flexDir={isSmallerThan450 ? "column" : "row"} pl={isSmallerThan450 ? "1rem" : "2rem"} className='info'><Flex alignItems={"center"}>Tools: <Image paddingInline="0.6rem" src={ae} /> <Image src={blend} marginRight="2rem" /></Flex> <Box mt={isSmallerThan450 ? "1rem" : "0"}>Collaborators: {isSmallerThan450 ? <br/> : ""} <Link target="_blank" marginInline={isSmallerThan450 ? "0" : "1.2rem"} textDecor={"underline"} href='https://www.linkedin.com/in/kansalaadeesh'>Aadeesh</Link> <Link target="_blank" textDecor={"underline"} href='https://www.linkedin.com/in/garvdeep-singh-a19703123/'>Garvdeep</Link></Box> </Flex>
                </Box>
            </Flex>
            <Footer />
        </Box>
    )
}

export default MotionDesign
