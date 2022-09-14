import { Flex, Heading, IconButton, useColorMode, VStack } from '@chakra-ui/react'
import React from 'react'
import {FaSun,FaMoon,FaInstagram,FaLinkedin,FaGihub} from 'react-icons/fa'
const DarkMode = () => {
const {colorMode,toggleColorMode}= useColorMode()
 const isDark = colorMode ==='dark'
  return (
    <>


 <IconButton ml={8} icon={isDark?<FaSun/>:<FaMoon/>} isRound={true} onClick={toggleColorMode} > </IconButton>

    </>
  )
}

export default DarkMode