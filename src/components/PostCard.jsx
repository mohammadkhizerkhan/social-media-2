import React, { useState } from "react";
import {
  chakra,
  Box,
  Avatar,
  Flex,
  useColorModeValue,
  Input,
  Text,
  Button,
  VStack,
  HStack,
  InputRightElement,
  InputGroup,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Textarea,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import {
  MdOutlineBookmarkBorder,
  MdOutlineMoreVert,
  MdOutlineBookmark,
} from "react-icons/md";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import CommentCard from "./CommentCard";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addComment,
  addPostToBookmark,
  deletePost,
  dislikePost,
  editPost,
  likePost,
  removePostFromBookmark,
} from "../features/post/PostSlice";
import { FaSadCry } from "react-icons/fa";

export default function PostCard({ post }) {
  const { comments, content, username, userId, _id, likes, createdAt } = post;
  const date = new Date(createdAt);
  const [month, day, year, hour, minutes] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
    date.getHours(),
    date.getMinutes(),
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { allUsers } = useSelector((store) => store.user);
  const { user } = useSelector((store) => store.auth);
  const { userBookmarks } = useSelector((store) => store.post);
  const [postData, setPostData] = useState({ content: content });
  const [comment, setComment] = useState({ text: "" });
  const userDetails = allUsers.find((user) => user.username === username);
  const isLiked = likes.likedBy.some((like) => like.username === user.username);
  const isBookmarked = userBookmarks.some((bookmark) => bookmark._id === _id);
  return (
    <Flex w="full" alignItems="center" justifyContent="center" mt={4}>
      <Box
        mx="20px"
        px={8}
        py={4}
        rounded="lg"
        shadow="lg"
        bg={useColorModeValue("white", "gray.800")}
        w="full"
        maxW="41rem"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <HStack w="full">
            <Avatar
              cursor="pointer"
              onClick={() => navigate(`/user-profile/${userId}`)}
              name="ryan"
              src="https://bit.ly/ryan-florence"
            />
            <VStack alignItems="start" justifyContent="center">
              <Button
                variant="link"
                cursor="pointer"
                as="h6"
                size="10px"
                onClick={() => navigate(`/user-profile/${userId}`)}
              >
                {userDetails?.firstName} {userDetails?.lastName}
                <chakra.span
                  ml="4px"
                  fontSize="sm"
                  color={useColorModeValue("gray.600", "gray.400")}
                >
                  @{userDetails?.firstName}
                </chakra.span>
              </Button>
              <Text
                mt={0}
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                {`${day}/${month}/${year}`} {`${hour}:${minutes}`}
              </Text>
            </VStack>
          </HStack>
          <Menu placement="bottom-end">
            <MenuButton
              as={IconButton}
              w="22px"
              h="22px"
              aria-label="Options"
              icon={<MdOutlineMoreVert />}
              variant="outline"
              display={post.username === user.username ? "flex" : "none"}
            />
            <MenuList>
              <MenuItem onClick={onOpen}>Edit</MenuItem>
              <MenuItem onClick={() => dispatch(deletePost(_id))}>
                Delete
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Box mt={2}>
          <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.300")}>
            {content}
          </chakra.p>
        </Box>
        <Flex justifyContent="start" alignItems="center" mt={4}>
          <Button
            // borderRadius="50%"
            w="20px"
            mr="10px"
            onClick={() =>
              isLiked ? dispatch(dislikePost(_id)) : dispatch(likePost(_id))
            }
          >
            <Icon
              as={isLiked ? IoHeartSharp : IoHeartOutline}
              w="22px"
              h="22px"
            />
            <span px="10px">{likes.likeCount}</span>
          </Button>
          <Button
            borderRadius="50%"
            w="20px"
            onClick={() =>
              isBookmarked
                ? dispatch(removePostFromBookmark(_id))
                : dispatch(addPostToBookmark(_id))
            }
          >
            <Icon
              as={isBookmarked ? MdOutlineBookmark : MdOutlineBookmarkBorder}
              w="22px"
              h="22px"
            />
          </Button>
        </Flex>
        <Box mt={2}>
          <HStack>
            <Avatar
              name="Ryan florence"
              size="sm"
              src="https://bit.ly/ryan-florence"
            />
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                value={comment.text}
                onChange={(e) =>
                  setComment((prev) => ({ ...prev, text: e.target.value }))
                }
                placeholder="Enter Comment"
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  p="15px"
                  size="sm"
                  bg={useColorModeValue("gray.200", "gray.600")}
                  disabled={comment.text ? false : true}
                  onClick={() => {
                    dispatch(addComment({ postId: _id, commentData: comment }));
                    setComment({ text: "" });
                  }}
                >
                  POST
                </Button>
              </InputRightElement>
            </InputGroup>
          </HStack>
          <VStack mt={3} alignItems="start">
            {comments.map((comment) => (
              <CommentCard comment={comment} postId={_id} />
            ))}
          </VStack>
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack alignItems="start">
              <Avatar
                name="ryan"
                src="https://bit.ly/ryan-florence"
                size="sm"
              />
              <Textarea
                placeholder="write something here..."
                minHeight="120px"
                value={postData.content}
                onChange={(e) =>
                  setPostData((prev) => ({
                    ...prev,
                    content: e.target.value,
                  }))
                }
              />
            </HStack>
          </ModalBody>
          <ModalFooter p="10px">
            <Button
              colorScheme="brand"
              mr={3}
              disabled={content === postData.content ? true : false}
              onClick={() => {
                dispatch(editPost({ postData, postId: _id }));
                onClose();
              }}
            >
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
