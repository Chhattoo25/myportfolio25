
import { Box, HStack } from '@chakra-ui/react';
import './App.css';

import  Skills  from './components/Skills/Skills';
import Home from './Pages/Home';
// import GitHubCalendar from "react-github-calendar";
;


function App() {
  return (
    <Box>
    <Home/>
   
    {/* <HStack w="100%" justify="center" p={10} data-aos="fade-up">
          <GitHubCalendar username="Chhattoo25" />
        </HStack> */}
    </Box>
  );
}

export default App;
