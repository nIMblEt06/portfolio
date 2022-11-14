import { Box, Flex, Image } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import "../App.css"
import Globe from "../Assets/Globe.svg"
import Cards from './Cards'
import { images } from "../caroImages"

function Hero() {
    let heading = useRef(null)
    let subHeading = useRef(null)
    let subHeadingBack = useRef(null)
    let headingBack = useRef(null)
    const [items, setItems] = useState(Array.from(document.getElementsByClassName('caroItem')))
    useEffect(() => {
        // updateText("Super pumped","My eyes glowed when I was in the 7th standard, I wanted to be in the ecosystem.")
        setItems(Array.from(document.getElementsByClassName('caroItem')))
    }, [])
    function updateText(head, subHead) {
        heading.innerText = head;
        subHeading.innerText = subHead;
        subHeadingBack.innerText = subHead;
        headingBack.innerText = head;
    }

    function updateClass() {
        items.forEach(item => {
            console.log('done');
            item.classList.add('inactive')
        })
    }
    function removeClass() {
        items.forEach(item => {
            item.classList.remove('inactive')
        })
    }
    const cards = images.map(card => {
        return <Cards updateText={updateText} removeClass={removeClass} updateClass={updateClass} heading={card.heading} subHeading={card.subHeading} />
    })

    return (
        <Box className='hero'>
            <Box className='heroWrapper'>
                <Flex className='navbar'>
                    <Flex className='greet'><Image w="25%" display={"inline"} mr="0.4rem" src={Globe} />  <Box color={"#EEE3D3"}>Good evening <br /> from Bangalore.</Box></Flex>
                    <Box className='ham'>
                        <Box className='hams one'></Box>
                        <Box className='hams two'></Box>
                        <Box className='hams three'></Box>
                    </Box>

                </Flex>
                <Flex ref={el => headingBack = el} className="heading">
                    Hey, I'm Rahul
                </Flex>
                <Flex ref={el => subHeadingBack = el} className='subHeading'>
                    I am a designer, story teller and a lover of airplane window seats ✈️
                </Flex>
                <Flex className='carousel'>
                    {cards}
                </Flex>
            </Box>
            <Box className='heroClipper'>
            <Box className='heroWrapper clip'>
                <Flex className='navbar'>
                    <Flex className='greet'><Image w="25%" display={"inline"} mr="0.4rem" src={Globe} />  <Box color={"#EEE3D3"}>Good evening <br /> from Bangalore.</Box></Flex>
                    <Box className='ham'>
                        <Box className='hams one'></Box>
                        <Box className='hams two'></Box>
                        <Box className='hams three'></Box>
                    </Box>

                </Flex>
                <Flex ref={el => headingBack = el} className="heading">
                    Hey, I'm Rahul
                </Flex>
                <Flex ref={el => subHeadingBack = el} className='subHeading'>
                    I am a designer, story teller and a lover of airplane window seats ✈️
                </Flex>
                <Flex className='carousel'>
                    {cards}
                </Flex>
            </Box>
            </Box>
        </Box>
    )
}

export default Hero