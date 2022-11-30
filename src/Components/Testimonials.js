import { Box, Flex } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import TestimonialCard from './TestimonialCard'
import chetan from '../Assets/chetan.jpeg'
import mohit from '../Assets/mohit.jpeg'
import samrat from '../Assets/samrat.jpeg'
import himanshu from '../Assets/himanshu.jpeg'
import chirag from '../Assets/chirag.jpeg'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

function Testimonials() {
  let testimonial = useRef(null)

  function moveCarousel() {
    testimonial.style.transform = "translateX(-30rem)"
  }
  useEffect(() => {
    testimonial.addEventListener('transitionend', () => {
      testimonial.appendChild(testimonial.firstElementChild)
      testimonial.style.transition = 'none';
      testimonial.style.transform = 'translateX(0)';
      setTimeout(() => {
        testimonial.style.transition = 'all 0.4s ease-out';
      })
    })
  },[testimonial])


  return (
    <Flex className='testimonial' cursor={"pointer"} onClick={moveCarousel}>
      <Flex className='testWrapper' ref={el => testimonial = el}>
        <TestimonialCard name="Chetan Sahu" img={chetan} post="Product" company="INDMoney" text="I have collaborated with Rahul on multiple projects, and working with him is a delight. 
Rahul is not someone who would ever build a product just for the sake of design. Instead, his understanding of user behaviour and product design makes him incredibly effective." linkedin="https://www.linkedin.com/in/chetansahu98/" twitter="" />
        <TestimonialCard name="Chirag Mittal" img={chirag} post="Software Engineer" company="CRED" text="Rahul has an understanding of how the frontend system works and how things are built and because of this collaborating with him becomes an absolute piece of cake which ultimately results in a better product." linkedin="https://www.linkedin.com/in/mittalchirag/" twitter="" />
        <TestimonialCard name="Himanshu Singh" img={himanshu} post="Frontend Lead" company="FLINT" text="Not only did Rahul show initiative in building out our UI/UX architecture from scratch, but he also played a huge role in pushing our product forward from a design perspective. Rahul's attention to detail and general UI creativity made a huge impact on Flint as a whole" linkedin="https://www.linkedin.com/in/him2312/" twitter="" />
        <TestimonialCard name="Samrat K." img={samrat} post="Software Engineer" company="Ex-Gojek" text="I had the pleasure of working with Rahul on 2 Projects. In both projects, Rahul has been the Lead Designer from requirements gathering to delivering the complete system. He is proactive in his work and has taken multiple responsibilities in the projects he has been part of." linkedin="https://www.linkedin.com/in/samratkashipathi/" twitter="" />
        <TestimonialCard name="Mohit Sidhwani" img={mohit} post="Founding Team" company="FLINT" text="Rahul possesses some of the more important qualities that make a good designer, great - the tenacity to ask tough questions to internal stakeholders and the ability to empathize even with the most under-represented user cohort." linkedin="https://www.linkedin.com/in/mohit-sidhwani-3b0100b0/" twitter="" />
      </Flex>
    </Flex>
  )
}

export default Testimonials