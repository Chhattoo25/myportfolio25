import { ExternalLinkIcon,LinkIcon } from '@chakra-ui/icons'
import { Box,VStack, Image,HStack, Divider,Button, Text, Stack, SimpleGrid, useColorMode } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'
import React from 'react'

const Project = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === "dark"
  return (
    <Box >

   {/* //Card 1 */}

   <Stack
      // border="1px solid red"
      id="project"
      p={[2, 10]}
      maxWidth="100vw"
      fontWeight={isDark ? "thin" : "hairline"}
      letterSpacing="2px"
    >
      <Text
        // border="1px solid red"
        fontSize="3xl"
        align="center"
        fontWeight="bold"
      >
        Projects
      </Text>
      <SimpleGrid
        columns={[1, 1, 2, 2]}
        spacing="40px"
        //  border="1px solid red"
      >
   <Box>
 <VStack
          data-aos="fade-right"
          p={[2, 5]}
          spacing={2}
          borderRadius="10px"
          boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"
        >
          <Text align="left" fontSize="2xl" fontWeight="semibold">
         Calendly Clone
          </Text>
          <Box className="image-container1">
            <img src='https://user-images.githubusercontent.com/95302680/187042891-b136640e-f30f-4edb-a175-987b2dc55ec5.png'  alt="img" />
          </Box>

          <Text align="left">
            Bestbuy is an american electronics product website
          </Text>
          <HStack >
            <Text color="red.600" fontWeight="bold">
              Text Stack:
            </Text>
            <Text>HTML5</Text>
            <Divider
              orientation="vertical"
              border="2px"
              height="10px"
              bgColor="skyblue"
            />
            <Text>CSS3</Text>
            <Divider
              orientation="vertical"
              bgColor="skyblue"
              border="2px"
              height="10px"
            />
            <Text>JavaScript</Text>
          </HStack>
          <Text>a collobarotive project built in 4 day team lead by me</Text>
          <HStack>
            <Button leftIcon={<FaGithub />} colorScheme="blue" variant="solid">
              Github
            </Button>
            <Button leftIcon={<LinkIcon />} colorScheme="blue" variant="solid">
              Live
            </Button>
          </HStack>
        </VStack>
   </Box>
   
   {/* card 1 */}


   {/* //Card 2*/}
   <Box>
 <VStack
          data-aos="fade-right"
          p={[2, 5]}
          spacing={2}
          borderRadius="10px"
          boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"
        >
          <Text align="left" fontSize="2xl" fontWeight="semibold">
         Calendly Clone
          </Text>
          <Box className="image-container2">
            <img src='https://cdn.hashnode.com/res/hashnode/image/upload/v1643862334980/Tc8N1bH7l.png'  alt="img" />
          </Box>

          <Text align="left">
            Bestbuy is an american electronics product website
          </Text>
          <HStack >
            <Text color="red.600" fontWeight="bold">
              Text Stack:
            </Text>
            <Text>HTML5</Text>
            <Divider
              orientation="vertical"
              border="2px"
              height="10px"
              bgColor="skyblue"
            />
            <Text>CSS3</Text>
            <Divider
              orientation="vertical"
              bgColor="skyblue"
              border="2px"
              height="10px"
            />
            <Text>JavaScript</Text>
          </HStack>
          <Text>a collobarotive project built in 4 day team lead by me</Text>
          <HStack>
            <Button leftIcon={<FaGithub />} colorScheme="blue" variant="solid">
              Github
            </Button>
            <Button leftIcon={<LinkIcon />} colorScheme="blue" variant="solid">
              Live
            </Button>
          </HStack>
        </VStack>
   </Box>
   
   {/* card  */}
   </SimpleGrid>
   </Stack>
    </Box>
  )
}

export default Project