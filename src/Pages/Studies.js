import { Box, Link, Flex, Grid, GridItem, Image, ListItem, UnorderedList, useMediaQuery } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import nftImage from "../Assets/NFT.svg"
import nft from "../Assets/image.svg"
import { studies } from '../studyContent'
import { useNavigate, useParams } from 'react-router-dom';
import Features from '../Components/Features'
import FeatureTournafest from '../Components/FeatureTournafest'

function Studies() {
  const params = useParams();
  const name = params.study;
  const navigate = useNavigate();
  const contents = document.querySelectorAll('.navLink')
  const [study, setStudy] = useState({})
  const [secHead, setSecHead] = useState([])
  const [isSmallerThan450] = useMediaQuery('(max-width:450px)')


  useEffect(() => {
    window.onscroll = () => {
      var current = 0;
      setSecHead(Array.from(document.querySelectorAll('.sectionHeading')))
      secHead.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 300) {
          current = secHead.indexOf(section);
        }

      });
      if (window.scrollY < 200) {
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


  // function setActive(e) {
  //   contents.forEach(element => {
  //     element.classList.remove('active')
  //   });
  //   e.target.classList.add('active')
  // }


  useEffect(() => {
    window.scrollTo(0, 0)



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
        templateColumns={isSmallerThan450 ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)'}
        gap={6}
      >
        <GridItem colSpan={2}>
          <Box className='head'>DURATION</Box>
          <Box className='info studies'>{study.Duration}</Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box className='head'>STAKEHOLDER</Box>
          <Box className='info studies'>
            <Box>{study.Stakeholder}</Box>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box className='head'>AUTHOR</Box>
          <Box className='info studies'>
            <Box>{study.Author}</Box>
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
          <Box className='head'>ROLE</Box>
          <Box className='info studies'>{study.Role}</Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box className='head'>SKILLS</Box>
          <Box className='info studies'>
            <Box>UX Design</Box>
            <Box>UX Research</Box>
            <Box>Motion Design</Box>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box className='head'>TOOLS</Box>
          <Box className='info studies'>
            <Box>Figma</Box>
            <Box>Photoshop</Box>
            <Box>After Effects</Box>
          </Box>
        </GridItem>
      </Grid>
      <Box className='stickyTop'>
        <UnorderedList className='nav' listStyleType={"none"} marginInlineStart={0}>
          <ListItem className='navList'><Link className='navLink' href="#overview"> OVERVIEW</Link></ListItem>
          <ListItem className='navList'><Link className='navLink' href="#context"> CONTEXT</Link></ListItem>
          <ListItem className='navList'><Link className='navLink' href="#research"> RESEARCH</Link></ListItem>
          <ListItem className='navList'><Link className='navLink' href="#features"> FEATURES</Link></ListItem>
          <ListItem className='navList'><Link className='navLink' href="#reflection"> REFLECTION</Link></ListItem>
        </UnorderedList>
      </Box>
      <Grid marginLeft={isSmallerThan450 ? "0" : "16rem"} className='caseInfo cases'
        templateColumns={isSmallerThan450 ? 'repeat(4, 1fr)' : 'repeat(6, 1fr)'}
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
          {/* <Box className="solution">
            <Box className='head studies'>HOW DID WE SOLVE OUR PROBLEM?</Box>
            <Box fontSize={"3rem"} fontWeight="700" mt="1rem">{study.Solution}</Box>
          </Box> */}
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
          {study.heroImage && <video className='roundVideo' src={study.heroImage} autoPlay={true} muted={true}></video>}
          {/* Context */}

          {/* Research */}
          {/* <Box >Research</Box> */}
          <Box className="solution">
            <Box className='sectionHeading' id="research" fontSize={"3rem"} fontWeight="700" mt="1rem">{study.Challenge}</Box>
          </Box>
          <Box className="about">
            <Box className='name study'>{study.ResearchHead}</Box>
            {study.image1 && <Image src={study.image1} w="30%" />}
            <Box className='info single studies'>{study.Research1} <br />
              {study.ResearchCont}</Box>
            {study.Research2 && <Box className='name study'>{study.ResearchHead2}</Box>}
            {study.image2 && <Image src={study.image2} w="30%" marginBlock={"2rem"} />}
            {study.Research2 && <Box className='info single studies'>{study.Research2}</Box>}
            {study.Link && <Link textUnderlineOffset={"0.2rem"} textDecoration={"underline"} className='info single studies' href={study.Link}>Link to Figma File</Link>}
            {study.Research3 && <Box paddingTop="2rem" className='name study'>{study.ResearchHead3}</Box>}
            {study.image3 && <Image src={study.image3} w="30%" marginBlock={"2rem"} />}
            {study.Research3 && <Box className='info single studies'>{study.Research3}</Box>}
          </Box>
          {/* {name == "tournafest" && <Flex className="aboutVision">
            {study.Head1 && <Box className="vision">
              <Box className='name study'>{study.Head1}</Box>
              <UnorderedList className="points" width={"90%"} marginBlock="1rem">
                <ListItem>{study.Discover1}</ListItem>
                <ListItem>{study.Discover2}</ListItem>
                <ListItem>{study.Discover3}</ListItem>
              </UnorderedList>
            </Box>}
            {study.Head2 && <Box className="vision">
              <Box className='name study'>{study.Head2}</Box>
              <UnorderedList className="points" width={"90%"} marginBlock="1rem">
                <ListItem>{study.Minimal1}</ListItem>
                <ListItem>{study.Minimal2}</ListItem>
                <ListItem>{study.Minimal3}</ListItem>
              </UnorderedList>
            </Box>}
          </Flex>}
          {name == "tournafest" && <Flex className="aboutVision">
            {study.Head3 && <Box className="vision">
              <Box className='name study'>{study.Head3}</Box>
              <UnorderedList className="points" width={"90%"} marginBlock="1rem">
                <ListItem>{study.Education1}</ListItem>
                <ListItem>{study.Education2}</ListItem>
                <ListItem>{study.Education3}</ListItem>
              </UnorderedList>
            </Box>}
            {study.Head4 && <Box className="vision">
              <Box className='name study'>{study.Head4}</Box>
              <UnorderedList className="points" width={"90%"} marginBlock="1rem">
                <ListItem>{study.Security1}</ListItem>
                <ListItem>{study.Security2}</ListItem>
                <ListItem>{study.Security3}</ListItem>
              </UnorderedList>
            </Box>} 
          </Flex>}

           Features 
           <Box className='sectionHeading' id="features">Features</Box> 
          {study.Features && <Box className="about">
            <Box className='name study'>{study.FeatureHead}</Box>
            <Box className='info single studies'>{study.Feature1} <br /> <br />
              {study.ResearchCont}</Box>
            {study.Feature2 && <Box className='name study'>{study.FeatureHead2}</Box>}
            {study.Feature2 && <Box className='info single studies'>{study.Feature2}</Box>}
            {study.Feature3 && <Box className='name study'>{study.FeatureHead3}</Box>}
            {study.Feature3 && <Box className='info single studies'>{study.Feature3}</Box>}
          </Box>}*/}
          {/* Flint Features */}
          {study.Name == "Flint Money" ? <Features /> : <FeatureTournafest/>}

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