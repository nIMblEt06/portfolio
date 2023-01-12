import { Box, Flex, Image, Link, useMediaQuery } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import ae from "../Assets/AE.svg"
import blend from "../Assets/Blender.svg"
import Lottie from "lottie-react"
import MotionSVG from "../Components/MotionSVG"
import experts from "../Assets/Experts.json"
import Footer from "../Components/Footer"
import Globe from "../Assets/Globe.json"
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
import { useNavigate } from 'react-router-dom';
import final from "../Assets/FINAL.mov"
import Loader from '../Components/Loader'

function MotionDesign() {
    const [isSmallerThan450] = useMediaQuery('(max-width:450px)')
    let vid1 = useRef(null)
    let vid2 = useRef(null)
    let greet = useRef(null)
    let ham = useRef(null)
    let ham4 = useRef(null)
    let ham5 = useRef(null)
    const [showMenu, setShowMenu] = useState(false)
    let ham6 = useRef(null)
    let menu2 = useRef(null)
    const navigate = useNavigate()

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

    function toggleMenu() {
        setShowMenu(showMenu => !showMenu)
      }
      useEffect(() => {
        if (showMenu) {
          // ham1.style.transform = "rotate(45deg) translate(4px, 4px)"
          ham4.style.transform = "rotate(45deg) translate(4px, 4px)"
          // ham3.style.transform = "rotate(-45deg) translate(3px, -3px)"
          ham6.style.transform = "rotate(-45deg) translate(3px, -3px)"
          // ham2.style.opacity = 0
          ham5.style.opacity = 0
          // menu1.style.display = "block"
          // menu1.style.opacity = 1
          menu2.style.opacity = 1
          menu2.style.display = "block"
        }
        else {
          // ham1.style.transform = "rotate(0deg)"
          // ham3.style.transform = "rotate(0deg)"
          // ham2.style.opacity = 1
          ham4.style.transform = "rotate(0deg)"
          ham6.style.transform = "rotate(0deg)"
          ham5.style.opacity = 1
          // menu1.style.opacity = 0
          menu2.style.opacity = 0
          menu2.style.display = "none"
          // menu1.style.display = "none"
        }
      }, [showMenu])
      function backToHome() {
        navigate('/')
      }

    return (
        <Box className='motionBox'>
            {/* <Loader isLoaded = {isLoaded}/> */}
            <Box className='motionWrapper clip'>
            <Flex className='navbar'>
                        <Flex ref={el => greet = el} className='greet'><Lottie animationData={Globe} /> <Box className="greetText" color={"#EEE3D3"}>Welcome to this corner<br />of the internet.</Box></Flex>
                        <Box className='ham' ref={el => ham = el} onClick={toggleMenu}>
                            <Box className='hams one' ref={el => ham4 = el}></Box>
                            <Box className='hams two' ref={el => ham5 = el}></Box>
                            <Box className='hams three' ref={el => ham6 = el}></Box>
                            <Box className='menu' ref={el => menu2 = el}>
                                <Link target={"_blank"} href="https://rahuljaiswal.me">Home</Link>
                                <Link target={"_blank"} href="https://read.cv/rahul.design">Resume</Link>
                                <Link className='link' href="/motionDesign">Motion Design ●</Link>
                                <Link target={"_blank"} cursor="help" pointerEvents="none" opacity="50%">NFT-Upcoming</Link>
                            </Box>
                        </Box>
                    </Flex>
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
