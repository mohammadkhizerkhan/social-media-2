import React from "react";
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
import { useSelector } from "react-redux";

function FollowSuggest() {
  const { allUsers } = useSelector((store) => store.user);
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
        {allUsers.map((user) => {
          const {firstName,lastName}=user
          return (
            <HStack w="full">
              <Avatar name="ryan" src="https://bit.ly/ryan-florence" />
              <VStack alignItems="start">
                <Heading as="h6" size="10px">
                  {firstName} {lastName}
                </Heading>
                <Text mt={0}>@{firstName}</Text>
              </VStack>
              <Button
                leftIcon={<MdAdd />}
                colorScheme="brand"
                variant="solid"
                size="xs"
                px="10px"
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
