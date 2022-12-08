import { Box, Flex, Image, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import FeatureContent from './FeatureContent'
import feed from "../Assets/feed.png"
import personal from "../Assets/personal.png"
import game from "../Assets/game.png"
import t1 from "../Assets/t1.svg"
import t2 from "../Assets/t2.svg"
import t3 from "../Assets/t3.svg"
import t4 from "../Assets/t4.svg"
import t5 from "../Assets/t5.svg"
import t6 from "../Assets/t6.svg"
import t7 from "../Assets/t7.svg"
import t8 from "../Assets/t8.svg"
import t9 from "../Assets/t9.svg"

function Features() {
    const [isSmallerThan450] = useMediaQuery('(max-width:450px)')
    return (
        <Box id="features" color={"#EEE3D3"} marginInline="auto">
            <Box className='sectionHeading'>Features</Box>
            <Box className='name feature'>Gaming</Box>
            <Flex className='featureFlex' justifyContent={"space-between"} mt="1rem">
                <Box w={isSmallerThan450 ? "100%" : "45%"}>
                    <FeatureContent img={t1} heading="Tournament & Scrims" text="We’re giving you a one-stop destination that is designed with gamers in mind. The focus is on tournament and practice tournaments." />
                    <FeatureContent img={t2} heading="Organisers" text="No matter how complicated the tournament you wish to run, we've got tools for the admins." />
                    <FeatureContent img={t3} heading="Guild" text="Organisers can create their own clubs within the app. This means they can curate a club with their own rules, which other people are able to join." />
                </Box>
                <Flex mt={isSmallerThan450 ? "2rem" : "-2rem"} w={isSmallerThan450 ? "100%" : "45%"} justifyContent={"right"}>
                    <Image src={game} />
                </Flex>
            </Flex>
            <Flex className='name feature right' mt="10rem">{isSmallerThan450
                ? "" : <Box> </Box>}<Box w="45%">Feed</Box></Flex>
            <Flex className='featureFlexReverse' justifyContent={"space-between"} mt="1rem">
                <Flex mt="-3rem" w={isSmallerThan450 ? "100%" : "70%"} ml={isSmallerThan450 ? "0" : "-10rem"} justifyContent={"right"}>
                    <Image src={feed} w="95%" />
                </Flex>
                <Box w={isSmallerThan450 ? "100%" : "45%"}>
                    <FeatureContent img={t4} heading="Community building" text="We offer you a feed that you can use to create content and share it with your community. This can be used for building community, gathering feedback, and organizing events." />
                    <FeatureContent img={t5} heading="Announcements" text="Organiser can post their important announcements such as tournament opening of registration, prize giving, statement of event and contact information." />
                    <FeatureContent img={t6} heading="Celebrations" text="Gamers can also share their celebration on the feed or engage with their friends to congratulate them."/>
                </Box>
            </Flex>
            <Box className='name feature' mt="10rem">Personalization</Box>
            <Flex className='featureFlex' justifyContent={"space-between"} mt="1rem">
                <Box w={isSmallerThan450 ? "100%" : "45%"}>
                    <FeatureContent img={t7} heading="Leaderboard" text="Organiser can post their important announcements such as tournament opening of registration, prize giving, statement of event and contact information.
"/>
                    <FeatureContent img={t8} heading="Profile" text="Organiser can post their important announcements such as tournament opening of registration, prize giving, statement of event and contact information." />
                    <FeatureContent img={t9} heading="Communicate" text="Communicate with your friends and guilds to get the latest updates on your team, prizes and progress." />
                </Box>
                <Flex mt="4rem" w={isSmallerThan450 ? "100%" : "55%"} justifyContent={"right"}>
                    <Image src={personal} h="80%" />
                </Flex>
            </Flex>
        </Box>
    )
}

export default Features