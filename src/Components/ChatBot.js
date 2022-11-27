import { Box, Flex, FormControl, Image, Input } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'

function ChatBot() {

  let bot = useRef(null)
  let upper = useRef(null)
  let name = useRef(null)
  let subject = useRef(null)
  let phone = useRef(null)
  let email = useRef(null)
  const [clicked, setClicked] = useState(false)
  const [count, setCount] = useState(2)
  const [userData, setUserData] = useState({
    name: "",
    subject: "",
    phone: "",
    email: "",
  })
  function check() {
    if (!clicked) {
      upper.style.transform = "translateY(-7rem)"
      setClicked(true)
    }
  }


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
    console.log(e);
    upper.style.transform = `translateY(-${9.2 * count}rem)`
    if (count == 2) {
      // upper.style.transform = `translateY(-${9*count}rem)`
      name.style.display = "none"
      name.style.opacity = 0
      subject.style.display = "block"
      subject.style.opacity = 1
    }
    else if (count == 3) {
      subject.style.display = "none"
      subject.style.opacity = 0
      phone.style.display = "block"
      phone.style.opacity = 1
    }
    else if (count == 4) {
      phone.style.display = "none"
      phone.style.opacity = 0
      email.style.display = "block"
      email.style.opacity = 1
    }
    setCount(count => count + 1);
  }

  return (
    <Box id="chatBot" ref={el => bot = el} onClick={check}>
      <Box className='upperBox' >
        <Box className='textContainer' ref={el => upper = el}>
          <Box className="awayText">
            <Box className='chatName'>Rahul</Box>
            <Box className="chatText">want to work together?</Box>
          </Box>
          <Box className='ownText'>
            <Box className="own chatText">sounds awesome!</Box>
          </Box>
          <Box className="awayText">
            <Box className='chatName'>Rahul</Box>
            <Box className="chatText">what's your name?</Box>
          </Box>
          <Box className='ownText'>
            <Box className="own chatText">{userData.name}</Box>
          </Box>
          <Box className="awayText">
            <Box className='chatName'>Rahul</Box>
            <Box className="chatText">nice to meet you! what did you want to talk about?</Box>
          </Box>
          <Box className='ownText'>
            <Box className="own chatText">{userData.subject}</Box>
          </Box>
          <Box className="awayText">
            <Box className='chatName'>Rahul</Box>
            <Box className="chatText">i see 👀! what's your phone number?</Box>
          </Box>
          <Box className='ownText'>
            <Box className="own chatText">{userData.phone}</Box>
          </Box>
        </Box>
      </Box>
      <Box className='lowerBox'>
        <Image className='logo' src={"https://uploads-ssl.webflow.com/62c89bdb7c26b515f632de67/62f5dbe13ef14900c4c5e5f5_email-contact-icon.svg"} />
        <Image className='logo' src={"https://uploads-ssl.webflow.com/62c89bdb7c26b515f632de67/62f5dbe10a419234e527d174_twitter-contact-icon.svg"} />
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
              <Image className='logo' onClick={handleSubmit} src={"https://uploads-ssl.webflow.com/62c89bdb7c26b515f632de67/62f5dd67764027734d11104e_imessage-send.svg"} />
            </Flex>
          </FormControl>
        </Box>
      </Box>
    </Box>
  )
}

export default ChatBot