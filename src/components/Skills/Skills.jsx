import React from "react";

import {
  Box,
  Flex,
  Grid,
  GridItem,
  Icon,
  Image,
  Img,
  SimpleGrid,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import giphy from "./giphy.gif";
function Skills() {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === "dark";

  React.useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <Stack py="50px" px="10px" border="1px solid red" id="skills">
      <Flex
        data-aos="zoom-in"
        data-aos-duration="1000"
        direction={["column", "row"]}
        gap="20px"
        align={"center"}
        justifyContent="center"
        mb={"50px"}
        bg="#FFFFFF"
        w={"40%"}
        m="auto"
        boxShadow="0px 5px 15px 0px #bbbbbb"
      >
        <Text
          data-aos="flip-up"
          data-aos-duration="1500"
          fontSize={["30px", "30px", "40px"]}
          fontWeight="bold"
        >
          Skills
        </Text>
        <Image
          src={giphy}
          alt="code_gif"
          data-aos="flip-up"
          data-aos-duration="1500"
          width={"100px"}
        />
      </Flex>

      <h1>{`Front-End`}</h1>
      <SimpleGrid
        bg="#FFFFFF"
        boxShadow="0px 5px 15px 5px #bbbbbb"
        padding={"10px"}
        columns={[2, 3, 4, 5]}
        spacing={5}
        data-aos="fade-left"
        data-aos-duration="1500"
      >
               
        <Box align="center">
          <Img
            boxSize="100px"
            src="https://cdn-icons-png.flaticon.com/512/732/732212.png?w=360"
          />
          <Text p="4" fontSize="xl" fontWeight="semibold">
            HTML
          </Text>
        </Box>
        <Box align="center">
          <Img
            boxSize="100px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
          />
          <Text p="4" fontSize="xl" fontWeight="semibold">
            CSS
          </Text>
        </Box>
        <Box align="center">
          <Img
            boxSize="100px"
            src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
          />
          <Text
            color={isDark ? "gray.200" : "gray.600"}
            p="4"
            fontSize="xl"
            fontWeight="semibold"
          >
            JAVASCRIPT
          </Text>
        </Box>

        <Box align="center">
          <Img
            boxSize="100px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          />
          <Text
            color={isDark ? "gray.200" : "gray.600"}
            p="4"
            fontSize="xl"
            fontWeight="semibold"
          >
            REACT
          </Text>
        </Box>
        <Box align="center">
          <Img
            boxSize="100px"
            src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
          />
          <Text
            color={isDark ? "gray.200" : "gray.600"}
            p="4"
            fontSize="xl"
            fontWeight="semibold"
          >
            REDUX
          </Text>
        </Box>

        <Box align="center">
          <Img
            boxSize="100px"
            src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg"
          />
          <Text
            color={isDark ? "gray.200" : "gray.600"}
            p="4"
            fontSize="xl"
            fontWeight="semibold"
          >
            GIT/BASH
          </Text>
        </Box>

        <Box align="center">
          <Img
            boxSize="100px"
            src="https://user-images.githubusercontent.com/95302680/190494434-7bfcd38a-7260-4089-b6f0-7dc72afecf35.png"
          />
          <Text
            color={isDark ? "gray.200" : "gray.600"}
            p="4"
            fontSize="xl"
            fontWeight="semibold"
          >
            NPM
          </Text>
        </Box>

        <Box align="center">
          <Img
            boxSize="100px"
            src="https://user-images.githubusercontent.com/95302680/190494844-422fa96f-1710-4379-a775-f135d7ab3e00.png"
          />
          <Text
            color={isDark ? "gray.200" : "gray.600"}
            p="4"
            fontSize="xl"
            fontWeight="semibold"
          >
            CLI
          </Text>
        </Box>

        <Box align="center">
          <Img
            boxSize="100px"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          />
          <Text
            color={isDark ? "gray.200" : "gray.600"}
            p="4"
            fontSize="xl"
            fontWeight="semibold"
          >
            GITHUB
          </Text>
        </Box>
        <Box align="center">
          <Img
            boxSize="100px"
            borderRadius="50%"
            src="https://images.opencollective.com/chakra-ui-pro/61bd1dd/logo/256.png"
          />
          <Text
            color={isDark ? "gray.200" : "gray.600"}
            p="4"
            fontSize="xl"
            fontWeight="semibold"
          >
            CHAKRA-UI
          </Text>
        </Box>

        <Box align="center">
          <Img
            boxSize="100px"
            src="https://user-images.githubusercontent.com/95302680/190498803-78767b2b-7faf-4882-bd54-aaca0ca39b4b.png"
          />
          <Text p="4" fontSize="xl" fontWeight="semibold">
            TYPESCRIPT
          </Text>
        </Box>

        <Box align="center">
          <Img
            boxSize="100px"
            src="https://user-images.githubusercontent.com/95302680/190499289-8ab72f1f-e98e-4cc0-af81-50b196eae0b9.png"
          />
          <Text p="4" fontSize="xl" fontWeight="semibold">
            BOOTSTRAP
          </Text>
        </Box>

        <Box align="center">
          <Img
            boxSize="100px"
            src="https://user-images.githubusercontent.com/95302680/190499679-db4f4191-3457-4aea-aa74-dc34b400d09e.png"
          />
          <Text p="4" fontSize="xl" fontWeight="semibold">
            CYPRESS
          </Text>
        </Box>

        <Box align="center">
          <Img
            boxSize="100px"
            src="https://images.credly.com/images/e4e5214a-e9f3-414c-9ebc-d10467a92816/Data_Structures_and_Algorithms.png"
          />
          <Text
            color={isDark ? "gray.200" : "gray.600"}
            p="4"
            fontSize="xl"
            fontWeight="semibold"
          >
            DSA
          </Text>
        </Box>
      </SimpleGrid>

      <SimpleGrid
        bg="#FFFFFF"
        boxShadow="0px 5px 15px 5px #bbbbbb"
        padding={"10px"}
        columns={[1,2, 3, 4, 5]}
        spacing={5}
        data-aos="fade-right"
        data-aos-duration="1500"
      >
  

       
       

          <Box align="center" mt={'10px'}>
            <Img
              boxSize="100px"
              src="https://user-images.githubusercontent.com/95302680/190500363-0ca048f2-7185-48c2-b802-13d10dfbeb88.png"
            />
            <Text
              color={isDark ? "gray.200" : "gray.600"}
              p="4"
              fontSize="xl"
              fontWeight="semibold"
            >
           NODE JS
            </Text>
          </Box>

          <Box align="center" mt={'10px'}>
            <Img
              boxSize="100px"
              src="https://user-images.githubusercontent.com/95302680/190502346-46c6c096-37f3-4ce2-bdf2-5ce072c1c6ad.png"
            />
            <Text
              color={isDark ? "gray.200" : "gray.600"}
              p="4"
              fontSize="xl"
              fontWeight="semibold"
            >
         EXPRESS
            </Text>
          </Box>

          <Box align="center" mt={'10px'}>
            <Img
              boxSize="100px"
              src="https://user-images.githubusercontent.com/95302680/190502448-f4e87d70-79a2-47cc-a5c7-22adccf689f8.png"
            />
            <Text
              color={isDark ? "gray.200" : "gray.600"}
              p="4"
              fontSize="xl"
              fontWeight="semibold"
            >
           MONGO DB
            </Text>
          </Box>


          <Box align="center" mt={'10px'}>
            <Img
              boxSize="100px"
              src="https://user-images.githubusercontent.com/95302680/190502859-1695facb-b52d-4e4e-a467-62fc86394cc9.png"
            />
            <Text
              color={isDark ? "gray.200" : "gray.600"}
              p="4"
              fontSize="xl"
              fontWeight="semibold"
            >
           MYSQL
            </Text>
          </Box>


      
      
      </SimpleGrid>
    </Stack>
  );
}

export default Skills;
