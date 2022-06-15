import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  Divider,
  VStack,
  Avatar,
  HStack,
} from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { followUser } from "../features/auth/AuthSlice";
import { useNavigate } from "react-router-dom";

function FollowSuggest() {
  // const [suggestUser, setSuggestUser] = useState([]);
  const { allUsers } = useSelector((store) => store.user);
  const { user } = useSelector((store) => store.auth);
 const navigate= useNavigate()
  let suggestUser = allUsers.filter((item) => item.username !== user.username);
  suggestUser=suggestUser.filter((ele) => !user.following.some((ele2) => ele2._id === ele._id))

  const dispatch = useDispatch();
  return (
    <>
      <VStack
        alignItems="start"
        pos="fixed"
        top="0"
        right={20}
        zIndex="sticky"
        h="full"
        p="4"
        overflowX="hidden"
        overflowY="auto"
        bg={useColorModeValue("white", "gray.800")}
        borderColor={useColorModeValue("inherit", "gray.700")}
        borderLeftWidth="1px"
        // mt={8}
        w={60}
        display={{ base: "none", md: "unset" }}
      >
        <Heading as="h1" size="10px" mb="5px">
          Who to follow
        </Heading>
        <Divider />
        {suggestUser.map((user) => {
          const { firstName, lastName,userId } = user;
          return (
            <HStack w="full" key={user._id}>
              <Avatar onClick={()=>navigate(`/user-profile/${userId}`)} cursor="pointer" name="ryan" src="https://bit.ly/ryan-florence" />
              <VStack alignItems="start">
                <Button variant="link" onClick={()=>navigate(`/user-profile/${userId}`)} cursor="pointer" as="h6" size="10px">
                  {firstName} {lastName}
                </Button>
                <Text mt={0}>@{userId}</Text>
              </VStack>
              <Button
                leftIcon={<MdAdd />}
                colorScheme="brand"
                variant="solid"
                size="xs"
                px="10px"
                onClick={() =>
                  dispatch(
                    followUser({
                      userId: user._id,
                      dispatch,
                    })
                  )
                }
              >
                Follow
              </Button>
            </HStack>
          );
        })}
      </VStack>
    </>
  );
}

export default FollowSuggest;
