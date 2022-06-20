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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
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
  const isUsers = username === user.username;
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
        <Box
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
              <MenuItem
                onClick={() =>
                  dispatch(deleteComment({ postId, commentId: _id }))
                }
              >
                Delete
              </MenuItem>
            </MenuList>
          </Menu>
      </HStack>
    </>
  );
}

export default CommentCard;

// display={username === user.username ? "flex" : "none"}
