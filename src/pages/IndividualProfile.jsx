import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Center,Flex } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { PostCard, ProfileCard } from "../components";
import { useSelector } from "react-redux";

function IndividualProfile() {
  const { userId } = useParams();
  const [user, setUser] = useState([]);
  const [userPost, setUserPost] = useState([]);
  const { user: mainUser } = useSelector((store) => store.auth);
  useEffect(() => {
    (async () => {
      try {
        let respose = await axios.get(`/api/users/${userId}`);
        setUser(respose.data.user);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [user, mainUser, userId]);
  useEffect(() => {
    (async () => {
      try {
        let respose = await axios.get(`/api/posts/user/${user.username}`);
        setUserPost(respose.data.posts);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [user, mainUser, userId]);
  return (
    <Box as="main" p="4" bg={useColorModeValue("#F9FAFB", "gray.600")}>
      <ProfileCard user={user} userPost={userPost} />
      {userPost.length ? (
        userPost.map((postItem) => {
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
            <Center>{userId} has not posted yet.</Center>
          </Box>
        </Flex>
      )}
    </Box>
  );
}

export default IndividualProfile;
