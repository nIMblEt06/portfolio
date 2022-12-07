import { Box, Flex, Image, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import FeatureContent from './FeatureContent'
import security from "../Assets/security.png"
import mini from "../Assets/minimalis.png"
import edu from "../Assets/education.png"
import discover from "../Assets/discover.png"
import f1 from "../Assets/f1.svg"
import f2 from "../Assets/f2.svg"
import f3 from "../Assets/f3.svg"
import f4 from "../Assets/f4.svg"
import f5 from "../Assets/f5.svg"
import f6 from "../Assets/f6.svg"
import f7 from "../Assets/f7.svg"
import f8 from "../Assets/f8.svg"
import f9 from "../Assets/f9.svg"
import f10 from "../Assets/f10.svg"
import f11 from "../Assets/f11.svg"
import f12 from "../Assets/f12.svg"

function Features() {
  const [isSmallerThan450] = useMediaQuery('(max-width:450px)')
  return (
    <Box id="features" color={"#EEE3D3"} marginInline="auto">
      <Box className='sectionHeading'>Features</Box>
      <Box className='name feature'>Education</Box>
      <Flex className='featureFlex' justifyContent={"space-between"} mt="1rem">
        <Box w={isSmallerThan450 ? "100%" : "45%"}>
          <FeatureContent img={f1} heading="Yield Product" text="Users can earn passive income on their cryptocurrency by investing into the lending protocol and see their investment growing every second."/>
          <FeatureContent img={f2} heading="News and Learn" text="The News & Learn section introduces an increasing variety of new information sources, allowing investors to make informed decision while they are trading."/>
          <FeatureContent img={f3} heading="Watch List & Tracker" text="Our interface is designed to present the most relevant and up-to-date information from the crypto world."/>
        </Box>
        <Flex mt={isSmallerThan450 ? "2rem" : "-2rem"} w={isSmallerThan450 ? "100%" : "45%"} justifyContent={"right"}>
          <Image src={edu} />
        </Flex>
      </Flex>
      <Flex className='name feature right' mt="10rem">{isSmallerThan450
      ? "" :<Box> </Box>}<Box w="45%">Security</Box></Flex>
      <Flex className='featureFlexReverse' justifyContent={"space-between"} mt="1rem">
        <Flex mt="-3rem" w={isSmallerThan450 ? "100%" : "70%"} ml={isSmallerThan450 ? "0" : "-10rem"} justifyContent={"right"}>
          <Image src={security} w="95%" />
        </Flex>
        <Box w={isSmallerThan450 ? "100%" : "45%"}>
        <FeatureContent img={f4} heading="Two factor Authentication" text="Enabling two factor authentication, so we know it’s you when you initiate a transfer, and transaction checks."/>
        <FeatureContent img={f5} heading="Contextual nudge" text="To reduce the risk of phishing and identity theft in these times, we’ve created different social proofing touch points in the user journey to ensure trust and security."/>
        <FeatureContent img={f6} heading="Permission & Consent" text="Always make sure to obtain consent for acknowledgment before you start your investment & withdrawals.
"/>
        </Box>
      </Flex>
      <Box className='name feature' mt="10rem">Minimalism</Box>
      <Flex className='featureFlex' justifyContent={"space-between"} mt="1rem">
        <Box w={isSmallerThan450 ? "100%" : "45%"}>
          <FeatureContent img={f7} heading="Enchanting" text="Minimal designs enable investor to make their decision in a much simple and faster way. They can clearly see what they are investing in, which helps them make a better decision on the investment.
"/>
          <FeatureContent img={f8} heading="Glance-able" text="The guideline was designed and built to emphasize the clear proximity and aesthetics of the visuals, in addition to other important aspects such as brand consistency, color scheme and scale."/>
          <FeatureContent img={f9} heading="One action" text="Principles focused on choosing less and focusing on those things that matter most."/>
        </Box>
        <Flex mt="4rem" w={isSmallerThan450 ? "100%" : "55%"} justifyContent={"right"}>
          <Image src={mini} h="80%" />
        </Flex>
      </Flex>
      <Flex className='name feature right' mt="10rem">{isSmallerThan450
      ? "" :<Box> </Box>}<Box w="45%">Discoverability</Box></Flex>
      <Flex className='featureFlexReverse' justifyContent={"space-between"} mt="1rem">
        <Flex mt={isSmallerThan450 ? "0rem" : "-6rem"} w={isSmallerThan450 ? "100%" : "55%"} justifyContent={"center"}>
          <Image src={discover} h="80%" />
        </Flex>
        <Box w={isSmallerThan450 ? "100%" : "45%"}>
        <FeatureContent img={f10} heading="Seamless Navigation" text="New users can actually see the main product offering in the home page itself for easy navigation such as interest rate, watchllist.
"/>
        <FeatureContent img={f11} heading="Localisation" text="Localizing the application into the native language of the target users helps users understand and use the application better."/>
        <FeatureContent img={f12} heading="Personalization" text="Our interface is designed to present the most relevant and up-to-date information from the crypto world to provide you with the option to explore cryptocurrencies in real time.

"/>
        </Box>
      </Flex>
    </Box>
  )
}

export default Features