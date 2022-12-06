import { Box, Flex, FormControl, Image, Input, Link } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import message from "../Assets/message.json"
import Lottie from "lottie-react"
import ArrowTop from "./ArrowTop"

function ChatBot() {

  let bot = useRef(null)
  let upper = useRef(null)
  let name = useRef(null)
  let subject = useRef(null)
  let phone = useRef(null)
  let email = useRef(null)
  let sendButton = useRef(null)
  let chat1 = useRef(null)
  let text1 = useRef(null)
  let text2 = useRef(null)
  let text3 = useRef(null)
  let chat2 = useRef(null)
  let chat3 = useRef(null)
  const [clicked, setClicked] = useState(false)
  const [count, setCount] = useState(1)
  const [number, setNumber] = useState(0)
  const [array, setArray] = useState([])
  const [userData, setUserData] = useState({
    name: "",
    subject: "",
    phone: "",
    email: "",
  })
  function check() {
    if (!clicked) {
      upper.style.transform = "translateY(-1.5rem)"
      hideChat(chat1, text1)
      setClicked(true)
    }
  }
  function hideChat(lottie, text) {
    setTimeout(() => {
      lottie.style.display = "none"
      text.style.display = "block"
    }, 1000);
  }
  useEffect(() => {
    setArray([name, subject, phone, email])
    upper.style.transform = "translateY(6rem)"
  }, [])


  function handleChange(event) {
    const { name, value } = event.target
    setUserData(prevUserData => {
      return {
        ...prevUserData,
        [name]: value
      }
    })
  }

  function handleSubmit(e) {
    // console.log(array[number].value != undefined) 
    // console.log(array[number].value) 
    // console.log(number);
    if (array[number].value != "") {
      setNumber(prevNumber => prevNumber + 1)
      upper.style.transform = `translateY(-${11.9 * count}rem)`
      if (count == 1) {
        // upper.style.transform = `translateY(-${9*count}rem)`
        hideChat(chat2, text2)
        name.style.display = "none"
        name.style.opacity = 0
        subject.style.display = "block"
        subject.style.opacity = 1
        subject.focus()
      }
      else if (count == 2) {
        hideChat(chat3, text3)
        subject.style.display = "none"
        sendButton.style.display = "none"
        subject.style.opacity = 0
        upper.style.transform = `translateY(-${15 * count}rem)`
        // phone.style.display = "block"
        // phone.style.opacity = 1
        // phone.focus()
      }
      // else if (count == 3) {
      //   phone.style.display = "none"
      //   phone.style.opacity = 0
      //   email.style.display = "block"
      //   email.style.opacity = 1
      //   email.focus()
      // }
      setCount(count => count + 1);
    }
  }

  return (
    <Box id="chatBot" ref={el => bot = el} onClick={check}>
      <Box className='upperBox' >
        <Box className='textContainer' ref={el => upper = el}>
          <Box className="awayText">
            <Box className='chatName'>Rahul</Box>
            <Box className="chatText">Hey there! How can I help you?</Box>
          </Box>
          <Box className='ownText'>
            <Box className="own chatText">There's this one thing I could use some help with!</Box>
          </Box>
          <Box className="awayText">
            <Box className='chatName'>Rahul</Box>
            <Box ref={el => chat1 = el} className='chatText'><Lottie animationData={message} /></Box>
            <Box ref={el => text1 = el} display="none" className="chatText">Interesting! What's your name?</Box>
          </Box>
          <Box className='ownText'>
            <Box className="own chatText">{userData.name}</Box>
          </Box>
          <Box className="awayText">
            <Box className='chatName'>Rahul</Box>
            <Box ref={el => chat2 = el} className='chatText'><Lottie animationData={message} /></Box>
            <Box ref={el => text2 = el} display="none" className="chatText">Nice to meet you! What's the help you need?</Box>
          </Box>
          <Box className='ownText'>
            <Box className="own chatText">{userData.subject}</Box>
          </Box>
          <Box className="awayText">
            <Box className='chatName'>Rahul</Box>
            <Box ref={el => chat3 = el} className='chatText'><Lottie animationData={message} /></Box>
            <Box ref={el => text3 = el} display="none" className="chatText">Got it. Please book a slot with me <Link textDecoration={"underline"} href="https://calendly.com/rahul-187/30min" target={"_blank"}>here.</Link></Box>
            {/* <Box mt="1rem" className="chatText">Meet me on Calendly</Link></Box> */}
          </Box>
          {/* <Box className='ownText'>
            <Box className="own chatText">{userData.phone}</Box>
          </Box> */}
        </Box>
      </Box>
      <Box className='lowerBox'>
        {/* <Image className='logo' src={"https://uploads-ssl.webflow.com/62c89bdb7c26b515f632de67/62f5dbe13ef14900c4c5e5f5_email-contact-icon.svg"} />
        <Image className='logo' src={"https://uploads-ssl.webflow.com/62c89bdb7c26b515f632de67/62f5dbe10a419234e527d174_twitter-contact-icon.svg"} /> */}
        <Box className='messageForm'>
          <FormControl>
            <Flex className='messageContainer' onKeyPress={e => {
              if (e.key === 'Enter') {
                handleSubmit()
              }
            }}>
              <Input ref={el => name = el} id="name" name="name" onChange={handleChange} placeholder='iMessage'></Input>
              <Input ref={el => subject = el} id="subject" name="subject" onChange={handleChange} placeholder='iMessage'></Input>
              <Input ref={el => phone = el} id="phone" name="phone" onChange={handleChange} placeholder='iMessage'></Input>
              <Input ref={el => email = el} id="email" name="email" onChange={handleChange} placeholder='iMessage'></Input>
              <Box ref={el => sendButton = el} className='sendButton' onClick={handleSubmit}><ArrowTop /></Box>
            </Flex>
          </FormControl>
        </Box>
      </Box>
    </Box>
  )
}

export default ChatBot