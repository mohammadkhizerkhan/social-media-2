import React from "react";
import { Box } from "@chakra-ui/react";
import { PostCard } from "../components";
import { useColorModeValue } from "@chakra-ui/react";
import { useSelector } from "react-redux";
function Explore() {
  const { allPost } = useSelector((store) => store.post);
  const { user } = useSelector((store) => store.auth);
  console.log(user)
  return (
    <Box as="main" p="4" bg={useColorModeValue("#F9FAFB", "gray.600")}>
      {allPost.map((postItem) => {
        return <PostCard key={postItem.id} post={postItem}/>;
      })}
    </Box>
  );
}

export default Explore;
