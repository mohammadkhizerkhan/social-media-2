import React from "react";
import { Box } from "@chakra-ui/react";
import { PostCard } from "../components";
import { useColorModeValue } from "@chakra-ui/react";
import { useSelector } from "react-redux";
function Explore() {
  const { allPost } = useSelector((store) => store.post);
  const { userBookmarks } = useSelector((store) => store.post);
  // console.log(userBookmarks)
 return (
    <Box as="main" p="4" minH="100vh" bg={useColorModeValue("#F9FAFB", "gray.600")}>
      {allPost.map((postItem) => {
        return <PostCard key={postItem.id} post={postItem}/>;
      })}
    </Box>
  );
}

export default Explore;
