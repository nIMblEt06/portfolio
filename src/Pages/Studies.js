import { Box, Link, Flex, Grid, GridItem, Image, ListItem, UnorderedList } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import nftImage from "../Assets/NFT.svg"
import nft from "../Assets/image.svg"
import { studies } from '../studyContent'
import { useNavigate, useParams } from 'react-router-dom';
function Studies() {
  const params = useParams();
  const name = params.study;
  const navigate = useNavigate();
  const contents = document.querySelectorAll('.navLink')
  const secHead = Array.from(document.querySelectorAll('.sectionHeading'))
  const [study, setStudy] = useState({})

  useEffect(() => {
    window.onscroll = () => {
      var current = 0;

      secHead.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 300) {
          current = secHead.indexOf(section);
        }

      });
      if (window.scrollY < 200) {
        console.log("exec");
        contents[0].classList.remove("active");
      }

      if (window.scrollY > 200) {
        contents.forEach((li) => {
          li.classList.remove("active");
        });
        contents[current].classList.add("active");
      };
    }
  })


  function setActive(e) {
    contents.forEach(element => {
      element.classList.remove('active')
    });
    e.target.classList.add('active')
  }


  useEffect(() => {
    // window.scrollTo(0, 0)



    if (name === 'flint') {
      setStudy(studies[0])
    }
    else if (name == 'netflix') {
      setStudy(studies[2])
    }
    else if (name == 'tournafest') {
      setStudy(studies[1])
    }
    else {
      navigate('/')
    }
  }, [])


  return (
    <Box className='container'>
      <Box className='caseHead'>
        {study.Name}
      </Box>
      <Grid className='caseInfo'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(4, 1fr)'
        gap={6}
      >
        <GridItem colSpan={2}>
          <Box className='head'>DURATION</Box>
          <Box className='info studies'>December 20, 2021 - January 3, 2022</Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box className='head'>STAKEHOLDER</Box>
          <Box className='info studies'>
            <Box>Robinhood</Box>
            <Box>Perkins</Box>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box className='head'>TEAM</Box>
          <Box className='info studies'>
            <Box>Dimitri Knight</Box>
            <Box>Resham Khanna</Box>
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
          <Box className='head'>ROLE</Box>
          <Box className='info studies'>I designed the visual identity for this project, drawing inspiration from Robinhood's current design system. I developed the crypto and business research plan. And, I designed a user interface and experience of the Robinhood NFT marketplace</Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box className='head'>SKILLS</Box>
          <Box className='info studies'>
            <Box>UX Design</Box>
            <Box>UX Research</Box>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box className='head'>TOOLS</Box>
          <Box className='info studies'>
            <Box>Figma</Box>
            <Box>Photoshop</Box>
          </Box>
        </GridItem>
      </Grid>
      <Box className='stickyTop'>
        <UnorderedList className='nav' listStyleType={"none"} marginInlineStart={0}>
          <ListItem onClick={setActive} className='navList'><Link className='navLink' href="#overview"> OVERVIEW</Link></ListItem>
          <ListItem onClick={setActive} className='navList'><Link className='navLink' href="#context"> CONTEXT</Link></ListItem>
          <ListItem onClick={setActive} className='navList'><Link className='navLink' href="#research"> RESEARCH</Link></ListItem>
          {study.Features && <ListItem onClick={setActive} className='navList'><Link className='navLink' href="#features"> FEATURES</Link></ListItem>}
          <ListItem onClick={setActive} className='navList'><Link className='navLink' href="#reflection"> REFLECTION</Link></ListItem>
        </UnorderedList>
      </Box>
      <Grid marginLeft={"16rem"} className='caseInfo cases'
        templateColumns='repeat(6, 1fr)'
        gap={6}
      >
        <GridItem colSpan={5}>
          {/* Overview */}
          <Box className='sectionHeading' id="overview">Overview</Box>
          <Flex className="aboutVision">
            <Box className="about">
              <Box className='name study'>About</Box>
              <Box className='head studies'>WHAT WAS THIS PROJECT?</Box>
              <Box className='info studies'>{study.About}</Box>
            </Box>
            <Box className="vision">
              <Box className='name study'>Product Vision</Box>
              <Box className='head studies'>WHAT DID WE IMAGINE?</Box>
              <Box className='info studies'>{study.Vision}</Box>
              <Box className='info studies'>{study.Vision2}</Box>
            </Box>
          </Flex>
          <Box className="solution">
            <Box className='name study'>Solution </Box>
            <Box className='head studies'>HOW DID WE SOLVE OUR PROBLEM?</Box>
            {/* <Box fontSize={"3rem"} fontWeight="700" mt="1rem">{study.Solution}</Box> */}
          </Box>
          {study.heroImage && <video className='roundVideo' src={study.heroImage} autoPlay={true} muted={true}></video>}
          {/* Context */}
          <Box className='sectionHeading' id="context">Context</Box>

          {study.Background && <Box className="about">
            <Box className='name study'>Background</Box>
            <Box className='head studies'>WHAT'S GOING ON?</Box>
            <Box className='info single studies'>{study.Background}</Box>
          </Box>}
          <Flex className="aboutVision">
            <Box className="vision">
              <Box className='name study'>Problem</Box>
              <Box className='head studies'>WHAT DID WE IMAGINE?</Box>
              <Box className='info studies'>{study.Problem}</Box>
            </Box>
            <Box className="vision">
              <Box className='name study'>Opportunity</Box>
              <Box className='head studies'>WHERE CAN WE GO TO?</Box>
              <Box className='info studies'>{study.Opportunity}</Box>
            </Box>
          </Flex>
          <Box className="solution">
            <Box className='name study'>Challenge </Box>
            <Box fontSize={"3rem"} fontWeight="700" mt="1rem">{study.Challenge}</Box>
          </Box>
          <Image marginBlock={"3rem"} src={nft} />

          {/* Research */}
          <Box className='sectionHeading' id="research">Research</Box>

          <Box className="about">
            <Box className='name study'>{study.ResearchHead}</Box>
            <Box className='info single studies'>{study.Research1} <br />
              {study.ResearchCont}</Box>
            {study.Research2 && <Box className='name study'>{study.ResearchHead2}</Box>}
            {study.Research2 && <Box className='info studies'>{study.Research2}</Box>}
            {study.Research3 && <Box className='name study'>{study.ResearchHead3}</Box>}
            {study.Research3 && <Box className='info studies'>{study.Research3}</Box>}
          </Box>
          <Flex className="aboutVision">
            {study.Head1 && <Box className="vision">
              <Box className='name study'>{study.Head1}</Box>
              <UnorderedList width={"90%"} marginBlock="1rem">
                <ListItem>{study.Discover1}</ListItem>
                <ListItem>{study.Discover2}</ListItem>
                <ListItem>{study.Discover3}</ListItem>
              </UnorderedList>
            </Box>}
            {study.Head2 && <Box className="vision">
              <Box className='name study'>{study.Head2}</Box>
              <UnorderedList width={"90%"} marginBlock="1rem">
                <ListItem>{study.Minimal1}</ListItem>
                <ListItem>{study.Minimal2}</ListItem>
                <ListItem>{study.Minimal3}</ListItem>
              </UnorderedList>
            </Box>}
          </Flex>
          <Flex className="aboutVision">
            {study.Head3 && <Box className="vision">
              <Box className='name study'>{study.Head3}</Box>
              <UnorderedList width={"90%"} marginBlock="1rem">
                <ListItem>{study.Education1}</ListItem>
                <ListItem>{study.Education2}</ListItem>
                <ListItem>{study.Education3}</ListItem>
              </UnorderedList>
            </Box>}
            {study.Head4 && <Box className="vision">
              <Box className='name study'>{study.Head4}</Box>
              <UnorderedList width={"90%"} marginBlock="1rem">
                <ListItem>{study.Security1}</ListItem>
                <ListItem>{study.Security2}</ListItem>
                <ListItem>{study.Security3}</ListItem>
              </UnorderedList>
            </Box>}
          </Flex>

          {/* Features */}
          {study.Features && <Box className='sectionHeading' id="features">Features</Box>}
          {study.Features && <Box className="about">
            <Box className='name study'>{study.FeatureHead}</Box>
            <Box className='info studies'>{study.Feature1} <br /> <br />
              {study.ResearchCont}</Box>
            {study.Feature2 && <Box className='name study'>{study.FeatureHead2}</Box>}
            {study.Feature2 && <Box className='info studies'>{study.Feature2}</Box>}
            {study.Feature3 && <Box className='name study'>{study.FeatureHead3}</Box>}
            {study.Feature3 && <Box className='info studies'>{study.Feature3}</Box>}
          </Box>}

          {/* REFLECTION */}
          <Box className='sectionHeading' id="reflection">Reflection</Box>

          <Flex className="aboutVision">
            <Box className="vision">
              <Box className='name study'>{study.Reflection1}</Box>
              <Box className='info studies'>{study.Reflection1Text}</Box>
            </Box>
            {/* <Box className="vision">
              <Box className='name study'>What would I have done differently?</Box>
              <Box className='info studies'>I wouldn’t have overworked myself. We likely would have completed this project faster if I hadn’t pulled all-nighters on the first two days. Also, we were pretty scattered with our research plan, mainly owing to our lack of experience doing such an expansive project. Moving forward, I believe we have a solid basis for Crypto research and case study presentation.</Box>
            </Box> */}
          </Flex>
          {/* <Flex className="aboutVision">
            <Box className="vision">
              <Box className='name study'>What did I learn about each other from this project?</Box>
              <Box className='info studies'>I felt invigorated working on such an exciting, impactful project. We were overwhelmed with the amount of work we had ahead studies of us. And, at times, I even overworked myself to the point of suffering from COVID for an entire week. Nonetheless, I’m incredibly proud to have made an entire case study encompassing a whole app design and supporting research.</Box>
            </Box>
            <Box className="vision">
              <Box className='name study'>What did I learn about myself from this project?</Box>
              <Box className='info studies'>I wouldn’t have overworked myself. We likely would have completed this project faster if I hadn’t pulled all-nighters on the first two days. Also, we were pretty scattered with our research plan, mainly owing to our lack of experience doing such an expansive project. Moving forward, I believe we have a solid basis for Crypto research and case study presentation.</Box>
            </Box>
          </Flex> */}
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Studies