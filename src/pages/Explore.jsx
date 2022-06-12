import React from "react";
import { Box } from "@chakra-ui/react";
import { PostCard } from "../components";
import { useColorModeValue } from "@chakra-ui/react";
function Explore() {
  return (
    <Box as="main" p="4"  bg={useColorModeValue("#F9FAFB", "gray.600")}>
      <PostCard/>
      <PostCard/>
    </Box>
  );
}

export default Explore;
