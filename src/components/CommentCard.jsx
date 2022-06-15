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
import { useNavigate } from "react-router-dom";

function CommentCard({ comment }) {
  const { text, username } = comment;
  const {allUsers} = useSelector(store => store.user)
  const userDetails=allUsers.find(user=>user.username===username)
  const navigate=useNavigate();
  return (
    <HStack alignItems="start">
      <Avatar
      cursor="pointer" onClick={()=>navigate(`/user-profile/${userDetails.userId}`)}
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
        <Button variant="link" cursor="pointer" onClick={()=>navigate(`/user-profile/${userDetails.userId}`)} display="block" fontWeight="bold">{userDetails?.firstName} {userDetails?.lastName}</Button>
        {text}
      </Box>
    </HStack>
  );
}

export default CommentCard;
