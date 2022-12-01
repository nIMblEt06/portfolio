import { Box, Flex, Image, Link } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import "../App.css"
// import Globe from "../Assets/Globe.svg"
import Globe from "../Assets/Globe.json"
import Lottie from "lottie-react"
import Cards from './Cards'
import { images } from "../caroImages"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick'

function Hero() {
    // let heading = useRef(null)
    // let subHeading = useRef(null)
    let subHeadingBack = useRef(null)
    let headingBack = useRef(null)
    let greet = useRef(null)
    let ham = useRef(null)
    let wrapper = useRef(null)
    let carousel = useRef(null)
    // let ham1 = useRef(null)
    // let ham2 = useRef(null)
    // let ham3 = useRef(null)
    let ham4 = useRef(null)
    let ham5 = useRef(null)
    let ham6 = useRef(null)
    // let menu1 = useRef(null)
    let menu2 = useRef(null)
    const [showMenu, setShowMenu] = useState(false)
    const [items, setItems] = useState(Array.from(document.getElementsByClassName('caroItem')))
    const [mousePos, setMousePos] = useState({});

    // useEffect(() => {
    //     const handleMouseMove = (event) => {
    //         // if(event.offsetY < 1000){
    //         setMousePos({ x: event.clientX, y: event.clientY });
    //         // }


    //     };
    //     // hero.addEventListener('mouseover',handleMouseMove)
    //     window.addEventListener('mousemove', handleMouseMove);

    //     return () => {
    //         window.removeEventListener(
    //             'mousemove',
    //             handleMouseMove
    //         );
    //     };
    // }, []);
    // useEffect(() => {
    //     wrapper.style.width = `${mousePos.x}px`
    // })
    // useEffect(() => {
    //     const caro = document.querySelector('.heroCarousel')
        // setInterval(() => {
        //     caro.style.transform = "translateX(-24%)"
        // caro.addEventListener('transitionend', () => {
        //     caro.appendChild(caro.firstElementChild)
        //     caro.style.transition = 'none'
        //     caro.style.transform = "translateX(0)"
        //     setTimeout(() => {
        //         caro.style.transition = 'all 3s linear'
        //     })
        // })
        // }, 0);
    // }, [])


    useEffect(() => {
        // updateText("Super pumped","My eyes glowed when I was in the 7th standard, I wanted to be in the ecosystem.")
        setItems(Array.from(document.getElementsByClassName('caroItem')))

    }, [])

    function updateText(head, subHead) {
        // heading.innerText = head;
        // subHeading.innerText = subHead;
        subHeadingBack.innerText = subHead;
        headingBack.innerText = head;
    }

    function updateClass() {
        items.forEach(item => {
            item.classList.add('inactive')
        })
        greet.classList.add('inactive')
        ham.classList.add('inactive')
    }
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
            // menu2.style.display = "block"
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
            // menu1.style.display = "none"
            // menu2.style.display = "none"
        }
    }, [showMenu])

    function removeClass() {
        items.forEach(item => {
            item.classList.remove('inactive')
        })
        greet.classList.remove('inactive')
        ham.classList.remove('inactive')
    }
    const cards = images.map(card => {
        return <Cards updateText={updateText} removeClass={removeClass} updateClass={updateClass} source={card.source} heading={card.heading} subHeading={card.subHeading} />
    })

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: true
    };

    return (
        <Box className='hero'>
            {/* <Box className='heroWrapper'>
                <Flex className='navbar'>
                    <Flex className='greet'><Image w="25%" display={"inline"} mr="0.4rem" src={Globe} />  <Box color={"#EEE3D3"}>Good evening <br /> from Bangalore.</Box></Flex>
                    <Box className='ham' onClick={toggleMenu}>
                        <Box className='hams one' ref={el => ham1 = el}></Box>
                        <Box className='hams two' ref={el => ham2 = el}></Box>
                        <Box className='hams three' ref={el => ham3 = el}></Box>
                        <Box className='menu' ref={el => menu1 = el}>
                            <Box>Home</Box>
                            <Box>About</Box>
                            <Box>Contact</Box>
                        </Box>
                    </Box>

                </Flex>
                <Flex ref={el => headingBack = el} className="heading">
                    Hey, I'm Rahul
                </Flex>
                <Flex ref={el => subHeadingBack = el} className='subHeading'>
                    I am a designer, story teller and a lover of airplane window seats ✈️
                </Flex>
                <Slider {...settings}>
                    {cards}
                </Slider>
            </Box> */}
            <Box ref={el => wrapper = el} className='heroClipper'>
                <Box className='heroWrapper clip'>
                    <Flex className='navbar'>
                        <Flex ref={el => greet = el} className='greet'><Lottie animationData={Globe}/> <Box color={"#EEE3D3"}>Welcome to this corner<br/>of the internet.</Box></Flex>
                        <Box className='ham' ref={el => ham = el} onClick={toggleMenu}>
                            <Box className='hams one' ref={el => ham4 = el}></Box>
                            <Box className='hams two' ref={el => ham5 = el}></Box>
                            <Box className='hams three' ref={el => ham6 = el}></Box>
                            <Box className='menu' ref={el => menu2 = el}>
                            <Link target={"_blank"} href="https://rahuljaiswal.me">Home</Link>
                            <Link target={"_blank"} href="https://read.cv/rahul.design">Resume</Link>
                            <Link href="/motionDesign">Motion Design</Link>
                            <Link target={"_blank"} cursor="help" pointerEvents="none" opacity="50%">NFT-Upcoming</Link>
                            </Box>
                        </Box>

                    </Flex>
                    <Flex ref={el => headingBack = el} className="heading">
                        Hey, I'm Rahul
                    </Flex>
                    <Flex ref={el => subHeadingBack = el} className='subHeading'>
                        I am a designer, story teller and a lover of airplane window seats ✈️
                    </Flex>
                    {/* <Slider {...settings}>
                        {cards}
                    </Slider> */}
                    <Flex className='heroCarousel' ref={el => carousel = el} mt="4vw">
                        {cards}
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}

export default Hero