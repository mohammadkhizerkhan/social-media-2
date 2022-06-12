import React from "react";
import { Box } from "@chakra-ui/react";
import { PostCard, ProfileCard } from "../components";
import { useColorModeValue } from "@chakra-ui/react";
function Profile() {
  return (
    <Box as="main" p="4"  bg={useColorModeValue("#F9FAFB", "gray.600")}>
      <ProfileCard/>
      <PostCard/> 
      <PostCard/> 
    </Box>
  );
}

export default Profile;
