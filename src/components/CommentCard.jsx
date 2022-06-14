import React from "react";
import {
  chakra,
  Box,
  Avatar,
  useColorModeValue,
  HStack,
  Button,
} from "@chakra-ui/react";
import {useSelector} from "react-redux"

function CommentCard({ comment }) {
  const { text, username } = comment;
  const {allUsers} = useSelector(store => store.user)
  const userDetails=allUsers.find(user=>user.username===username)
  return (
    <HStack alignItems="start">
      <Avatar
        name="Ryan florence"
        size="sm"
        src="https://bit.ly/ryan-florence"
      />
      <Box
        mt={2}
        p={2}
        bg={useColorModeValue("gray.200", "gray.600")}
        borderRadius="5px"
        color={useColorModeValue("gray.600", "gray.300")}
      >
        <Button variant="link" display="block" fontWeight="bold">{userDetails?.firstName} {userDetails?.lastName}</Button>
        {text}
      </Box>
    </HStack>
  );
}

export default CommentCard;
