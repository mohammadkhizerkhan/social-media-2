import React, { useState } from "react";
import {
  chakra,
  Box,
  Avatar,
  useColorModeValue,
  HStack,
  Button,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdOutlineMoreVert } from "react-icons/md";
import { deleteComment } from "../features/post/PostSlice";
import { EmailIcon } from "@chakra-ui/icons";
import { IoCloseCircleOutline } from "react-icons/io5";

function CommentCard({ comment, postId }) {
  const { text, username, _id } = comment;
  const { allUsers } = useSelector((store) => store.user);
  const userDetails = allUsers.find((user) => user.username === username);
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [editComment, setEditComment] = useState({ text: text });
  return (
    <>
      <HStack alignItems="start" w="full">
        <Avatar
          cursor="pointer"
          onClick={() => navigate(`/user-profile/${userDetails.userId}`)}
          name="Ryan florence"
          size="sm"
          src="https://bit.ly/ryan-florence"
        />
        <VStack
          alignItems="flex-start"
          mt={2}
          p={2}
          bg={useColorModeValue("gray.200", "gray.600")}
          borderRadius="5px"
          color={useColorModeValue("gray.600", "gray.300")}
          w="full"
        >
          <Button
            variant="link"
            cursor="pointer"
            onClick={() => navigate(`/user-profile/${userDetails.userId}`)}
            display="block"
            fontWeight="bold"
          >
            {userDetails?.firstName} {userDetails?.lastName}
          </Button>
          <span>{text}</span>
          <button
            style={{
              margin: 0,
              width: "2.5rem",
              height: "2.5rem",
              backgroundColor: "lightgrey",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              color: "black",
            }}
          >
            <IoCloseCircleOutline />
          </button>
        </VStack>
      </HStack>
    </>
  );
}

export default CommentCard;
