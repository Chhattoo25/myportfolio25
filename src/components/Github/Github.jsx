import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Box } from "@chakra-ui/react";

function Github() {
  return (
    <Box justifyContent={'center'} align='center'>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Gitub <strong style={{color:'purple'}}>Status</strong>
      </h1>
      <GitHubCalendar
        username="Chhattoo25"
        
   
        color="purple"
        fontSize={16}
      />
    </Box>
  );
}

export default Github;
