import { DownloadIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import profilepic from '../../Images/Profilepic.png'
import pdf from '../../Resume/Chhatrapal_Ahirwar_Resume_FSWD.pdf'
import Type from './Type'
const About = () => {
  return (
    <Box mt={'100px'}>
<Flex gap={'50px'} align={'center'} w={{base:"90%",md:'80%',lg:"60%"}} m={'auto'} h='400px' direction={{base:'column',md:'column',lg:'row'}}>

 
<Box borderRadius='50%' border='5px solid grey' padding='5px'  >
<Image src={profilepic} width='250px' borderRadius='50%' />
</Box>
<Flex direction={'column'}flex={1} margin='auto' w={{base:'50%'}} >

<Text fontSize={'35px'}> Hey I'm </Text>
<Text fontWeight={'bold'} fontSize='44px' >Chhatrapal Ahirwar</Text>
<Text fontWeight={'bold'} color={'blue.400'}><Type color={'blue.400'} >Full Stack Web Developer</Type></Text>
<Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptas non ipsa, odit at quidem placeat expedita libero eveniet consequuntur. Eos suscipit molestiae, facere odio totam eligendi dolor inventore reprehenderit? </Text>


<Flex mt={'20px'}> <a  download href={pdf} target='_blank'><button  className='Resumebtn' ><DownloadIcon/> Dowload Resume</button></a></Flex>

</Flex>



 
</Flex>



    </Box>
  )
}

export default About