import React from "react";
import { Box } from "@chakra-ui/react";
import { PostCard } from "../components";
import { useColorModeValue,Flex,Center } from "@chakra-ui/react";
import { useSelector } from "react-redux";
function Saved() {
  const {userBookmarks}=useSelector(store=>store.post);
  return (
    <Box as="main" p="4" minH="100vh" bg={useColorModeValue("#F9FAFB", "gray.600")}>
      {userBookmarks.length ? (
        userBookmarks.map((postItem) => {
          return <PostCard key={postItem.id} post={postItem} />;
        })
      ) : (
        <Flex w="full" minH="100vh" alignItems="center" justifyContent="center" mt={4}>
          <Box
            mx="20px"
            px={8}
            py={4}
            rounded="lg"
            shadow="lg"
            bg="gray.600"
            w="full"
            maxW="41rem"
            
          >
            <Center color="gray.200">You have not bookmarked any post yet.</Center>
          </Box>
        </Flex>
      )}
    </Box>
  );
}

export default Saved;
