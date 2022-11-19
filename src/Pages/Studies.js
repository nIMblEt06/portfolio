import { Box, Flex, Grid, GridItem, Image, ListItem, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import nftImage from "../Assets/NFT.svg"
import nft from "../Assets/image.svg"
import ChatBot from '../Components/ChatBot'
function Studies() {
  return (
    <Box className='container'>
      <Box className='caseHead'>
        Template Case Study
      </Box>
      <Grid className='caseInfo'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(4, 1fr)'
        gap={6}
      >
        <GridItem colSpan={2}>
          <Box className='head'>DURATION</Box>
          <Box className='info'>December 20, 2021 - January 3, 2022</Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box className='head'>STAKEHOLDER</Box>
          <Box className='info'>
            <Box>Robinhood</Box>
            <Box>Perkins</Box>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box className='head'>TEAM</Box>
          <Box className='info'>
            <Box>Dimitri Knight</Box>
            <Box>Resham Khanna</Box>
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
          <Box className='head'>ROLE</Box>
          <Box className='info'>I designed the visual identity for this project, drawing inspiration from Robinhood's current design system. I developed the crypto and business research plan. And, I designed a user interface and experience of the Robinhood NFT marketplace</Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box className='head'>SKILLS</Box>
          <Box className='info'>
            <Box>UX Design</Box>
            <Box>UX Research</Box>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box className='head'>TOOLS</Box>
          <Box className='info'>
            <Box>Figma</Box>
            <Box>Photoshop</Box>
          </Box>
        </GridItem>
      </Grid>
      <Grid className='caseInfo'
        templateColumns='repeat(4, 1fr)'
        gap={6}
      >
        <GridItem className='stickyTop' colSpan={1}>
          <Box className='head'>CONTENTS</Box>
          <UnorderedList className='nav' listStyleType={"none"} marginInlineStart={0}>
            <ListItem className='navList'>OVERVIEW</ListItem>
            <ListItem className='navList'>CONTEXT</ListItem>
            <ListItem className='navList'>RESEARCH</ListItem>
            <ListItem className='navList'>REFLECTION</ListItem>
          </UnorderedList>
        </GridItem>
        <GridItem colSpan={3}>
          {/* Overview */}
          <Box className='sectionHeading'>Overview</Box>
          <Flex className="aboutVision">
            <Box className="about">
              <Box className='name'>About</Box>
              <Box className='head'>WHAT WAS THIS PROJECT?</Box>
              <Box className='info'>NFTs, or non-fungible tokens, are digital assets that represent real-world objects like art, music, in-game items, and videos. They are one of a kind and can be bought and sold online using cryptocurrency. Robinhood NFT Marketplace aims to be a peer-to-peer NFT marketplace that makes discovering, selling, buying, and learning about NFTs effortless and enjoyable through beginner-friendly designs.</Box>
            </Box>
            <Box className="vision">
              <Box className='name'>Product Vision</Box>
              <Box className='head'>WHAT DID WE IMAGINE?</Box>
              <Box className='info'>Robinhood NFT Marketplace aims to bring down barriers for non-technical users to interact with blockchain technologies and explore new forms of investments with user-friendly and familiar interfaces. Our product vision aligns with Robinhood’s overarching mission statement to democratize finance for all and facilitate creator economies' expansion.</Box>
            </Box>
          </Flex>
          <Box className="solution">
            <Box className='name'>Solution </Box>
            <Box className='head'>HOW DID WE SOLVE OUR PROBLEM?</Box>
            <Box fontSize={"3rem"} fontWeight="700" mt="1rem">Make NFT investing user friendly and less intimidating</Box>
          </Box>
          <Image marginBlock={"3rem"} src={nftImage} />
          {/* Context */}
          <Box className='sectionHeading'>Context</Box>

          <Box className="about">
            <Box className='name'>Background</Box>
            <Box className='head'>WHAT'S GOING ON?</Box>
            <Box className='info'>Non-fungible tokens play a crucial role in helping people achieve increased economic freedom by enabling creators and artists to explore novel ways of establishing creativity and ownership. Although they have been around for years, NFTs exploded in popularity in 2021, and their global market valuation reached a whopping $52 billion (according to crypto.com).</Box>
          </Box>
          <Flex className="aboutVision">
            <Box className="vision">
              <Box className='name'>Problem</Box>
              <Box className='head'>WHAT DID WE IMAGINE?</Box>
              <Box className='info'>Robinhood NFT Marketplace aims to bring down barriers for non-technical users to interact with blockchain technologies and explore new forms of investments with user-friendly and familiar interfaces. Our product vision aligns with Robinhood’s overarching mission statement to democratize finance for all and facilitate creator economies' expansion.</Box>
            </Box>
            <Box className="vision">
              <Box className='name'>Problem</Box>
              <Box className='head'>WHAT DID WE IMAGINE?</Box>
              <Box className='info'>Robinhood NFT Marketplace aims to bring down barriers for non-technical users to interact with blockchain technologies and explore new forms of investments with user-friendly and familiar interfaces. Our product vision aligns with Robinhood’s overarching mission statement to democratize finance for all and facilitate creator economies' expansion.</Box>
            </Box>
          </Flex>
          <Box className="solution">
            <Box className='name'>Challenge </Box>
            <Box fontSize={"3rem"} fontWeight="700" mt="1rem">How might we help investors confidently and effortlessly invest in NFT’s on Robinhood ?</Box>
          </Box>
          <Image marginBlock={"3rem"} src={nft} />

          {/* Research */}
          <Box className='sectionHeading'>Research</Box>

          <Box className="about">
            <Box className='name'>Design Goal for Blockchain</Box>
            <Box className='head'>SETTING STANDARDS</Box>
            <Box className='info'>Blockchain's user experience issues need to be addressed. As is often with technology, jargon creates friction for the user experience and can lead to wasted funds and time, leaving new investors confused and frustrated. Experiencing high commission fees and slow transaction speed discourages investors from trading or using the platform often. Address names are unnecessarily complex and usually not customized by their holder. <br /> <br />

              Blockchain’s famed transparency is hardly usable for people unfamiliar with technology. Overall, the current state of blockchain causes it to be used by a small group of users, who are forced to deal with relatively high entry barriers and numerous questions and problems than meeting user needs. Keeping these pain points in mind, we came up with four key design goals to follow during this redesign process: Discoverability, Awareness, Education, and Security.</Box>
          </Box>
          <Flex className="aboutVision">
            <Box className="vision">
              <Box className='name'>Discoverability</Box>
              <UnorderedList width={"90%"} marginBlock="1rem">
                <ListItem>Enable users to explore newly added, featured, and trending creators and creations through a variety of filtering options</ListItem>
                <ListItem>Enable users to explore newly added, featured, and trending creators and creations through a variety of filtering options</ListItem>
                <ListItem>Enable users to explore newly added, featured, and trending creators and creations through a variety of filtering options</ListItem>
              </UnorderedList>
            </Box>
            <Box className="vision">
              <Box className='name'>Awareness</Box>
              <UnorderedList width={"90%"} marginBlock="1rem">
                <ListItem>Enable users to explore newly added, featured, and trending creators and creations through a variety of filtering options</ListItem>
                <ListItem>Enable users to explore newly added, featured, and trending creators and creations through a variety of filtering options</ListItem>
                <ListItem>Enable users to explore newly added, featured, and trending creators and creations through a variety of filtering options</ListItem>
              </UnorderedList>
            </Box>
          </Flex>

          {/* REFLECTION */}
          <Box className='sectionHeading'>Reflection</Box>

          <Flex className="aboutVision">
            <Box className="vision">
              <Box className='name'>How did I feel when working on the design challenge?</Box>
              <Box className='info'>I felt invigorated working on such an exciting, impactful project. We were overwhelmed with the amount of work we had ahead of us. And, at times, I even overworked myself to the point of suffering from COVID for an entire week. Nonetheless, I’m incredibly proud to have made an entire case study encompassing a whole app design and supporting research.</Box>
            </Box>
            <Box className="vision">
              <Box className='name'>What would I have done differently?</Box>
              <Box className='info'>I wouldn’t have overworked myself. We likely would have completed this project faster if I hadn’t pulled all-nighters on the first two days. Also, we were pretty scattered with our research plan, mainly owing to our lack of experience doing such an expansive project. Moving forward, I believe we have a solid basis for Crypto research and case study presentation.</Box>
            </Box>
          </Flex>
          <Flex className="aboutVision">
            <Box className="vision">
              <Box className='name'>What did I learn about each other from this project?</Box>
              <Box className='info'>I felt invigorated working on such an exciting, impactful project. We were overwhelmed with the amount of work we had ahead of us. And, at times, I even overworked myself to the point of suffering from COVID for an entire week. Nonetheless, I’m incredibly proud to have made an entire case study encompassing a whole app design and supporting research.</Box>
            </Box>
            <Box className="vision">
              <Box className='name'>What did I learn about myself from this project?</Box>
              <Box className='info'>I wouldn’t have overworked myself. We likely would have completed this project faster if I hadn’t pulled all-nighters on the first two days. Also, we were pretty scattered with our research plan, mainly owing to our lack of experience doing such an expansive project. Moving forward, I believe we have a solid basis for Crypto research and case study presentation.</Box>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
      <ChatBot/>
    </Box>
  )
}

export default Studies