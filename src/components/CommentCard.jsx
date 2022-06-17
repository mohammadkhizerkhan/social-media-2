import React from "react";
import {
  chakra,
  Box,
  Avatar,
  useColorModeValue,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdOutlineMoreVert } from "react-icons/md";
import { deleteComment } from "../features/post/PostSlice";

function CommentCard({ comment,postId }) {
  const { text, username,_id } = comment;
  // console.log(comment)
  const { allUsers } = useSelector((store) => store.user);
  const userDetails = allUsers.find((user) => user.username === username);
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(postId,_id)
  return (
    <HStack alignItems="start" w="full">
      <Avatar
        cursor="pointer"
        onClick={() => navigate(`/user-profile/${userDetails.userId}`)}
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
        {text}
      </Box>
      <Menu placement="bottom-end">
        <MenuButton
          as={IconButton}
          w="22px"
          h="22px"
          aria-label="Options"
          icon={<MdOutlineMoreVert />}
          variant="outline"
          display={username === user.username ? "flex" : "none"}
        />
        <MenuList>
          <MenuItem>Edit</MenuItem>
          <MenuItem onClick={()=>dispatch(deleteComment({postId:postId,commentId:_id}))}>Delete</MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
}

export default CommentCard;
