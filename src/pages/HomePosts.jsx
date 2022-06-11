import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { PostCard } from "../components";
function HomePosts() {
  return (
    <Box as="main" p="4" bg={useColorModeValue("#F9FAFB", "gray.600")}>
      <PostCard />
      <PostCard />
    </Box>
  );
}

export default HomePosts;
