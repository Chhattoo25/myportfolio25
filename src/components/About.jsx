import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import profilepic from '../Images/Profilepic.png'
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
<Text color={'gray.400'} >Full Stack Web Developer</Text>
<Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptas non ipsa, odit at quidem placeat expedita libero eveniet consequuntur. Eos suscipit molestiae, facere odio totam eligendi dolor inventore reprehenderit? </Text>


<Flex mt={'20px'}><button className='Resumebtn' >Dowload Resume</button></Flex>

</Flex>



 
</Flex>



    </Box>
  )
}

export default About