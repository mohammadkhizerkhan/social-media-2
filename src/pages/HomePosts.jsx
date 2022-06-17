import React, { useEffect, useState } from "react";
import { Box, useColorModeValue,Flex,Center } from "@chakra-ui/react";
import { PostCard } from "../components";
import { useSelector } from "react-redux";
function HomePosts() {
  const { user } = useSelector((store) => store.auth);
  const { allPost } = useSelector((store) => store.post);
  const [feedPosts, setFeedPosts] = useState([]);
  useEffect(() => {
    setFeedPosts(
      allPost.filter(
        (post) =>
          post?.username === user?.username ||
          user?.following?.find((item) => post?.username === item?.username)
      )
    );
  }, [user, allPost]);
  return (
    <Box as="main" p="4" minH="100vh" bg={useColorModeValue("#F9FAFB", "gray.600")}>
      {feedPosts.length ? (
        feedPosts.map((postItem) => {
          return <PostCard key={postItem.id} post={postItem} />;
        })
      ) : (
        <Flex w="full" alignItems="center" justifyContent="center" mt={4}>
          <Box
            mx="20px"
            px={8}
            py={4}
            rounded="lg"
            shadow="lg"
            //   bg={useColorModeValue("white", "gray.800")}
            bg="gray.800"
            w="full"
            maxW="41rem"
            
          >
            <Center>Please follow some peoples or post something.</Center>
          </Box>
        </Flex>
      )}
    </Box>
  );
}

export default HomePosts;
