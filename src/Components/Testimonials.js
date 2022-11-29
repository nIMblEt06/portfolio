import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import TestimonialCard from './TestimonialCard'
import anshu from '../Assets/anshu.png'
import kastubh from '../Assets/kastubh.png'
import abhinav from '../Assets/abhinav.png'
import rahul from '../Assets/rahulImage.png'

function Testimonials() {
  return (
    <Flex ml="7rem" width={"max-content"} marginBlock="3rem">
        <TestimonialCard name="Anshu Agrawal" img={anshu} post="CEO" company="FLINT" text="Rahul is a self-motivated designer, full of energy! His love and passion for his craft is evidently seen in all his work, be it UX Design, podcasting or Video making -- Ansh simply nails it" linkedin="" twitter=""/>
        <TestimonialCard name="Kastubh Trivedi" img={kastubh} post="CEO" company="TOURNAFEST" text="Rahul is a self-motivated designer, full of energy! His love and passion for his craft is evidently seen in all his work, be it UX Design, podcasting or Video making -- Ansh simply nails it" linkedin="" twitter=""/>
        <TestimonialCard name="Abhinav Chikkara" img={abhinav} post="FOUNDER" company="10K DESIGNERS" text="Rahul is a self-motivated designer, full of energy! His love and passion for his craft is evidently seen in all his work, be it UX Design, podcasting or Video making -- Ansh simply nails it" linkedin="" twitter=""/>
        <TestimonialCard name="Rahul Jaiswal" img={rahul} post="CEO" company="FLINT" text="Rahul is a self-motivated designer, full of energy! His love and passion for his craft is evidently seen in all his work, be it UX Design, podcasting or Video making -- Ansh simply nails it" linkedin="" twitter=""/>
        <TestimonialCard name="Rahul Jaiswal" img={rahul} post="CEO" company="FLINT" text="Rahul is a self-motivated designer, full of energy! His love and passion for his craft is evidently seen in all his work, be it UX Design, podcasting or Video making -- Ansh simply nails it" linkedin="" twitter=""/>
    </Flex>
  )
}

export default Testimonials