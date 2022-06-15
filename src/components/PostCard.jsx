import React from "react";
import {
  chakra,
  Box,
  Image,
  Avatar,
  Flex,
  useColorModeValue,
  Link,
  Input,
  Text,
  Button,
  VStack,
  HStack,
  Heading,
  InputRightElement,
  InputGroup,
  Icon,
} from "@chakra-ui/react";
import { MdOutlineBookmarkBorder, MdOutlineMoreVert } from "react-icons/md";
import { IoHeartOutline } from "react-icons/io5";
import CommentCard from "./CommentCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function PostCard({ post }) {
 const navigate= useNavigate();
  const {allUsers} = useSelector(store => store.user)
  const {user}=useSelector(store=>store.auth)
  const { comments, content, username, likes,userId } = post;
  const userDetails=allUsers.find(user=>user.username===username)
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
            <Avatar cursor="pointer" onClick={()=>navigate(`/user-profile/${userId}`)} name="ryan" src="https://bit.ly/ryan-florence" />
            <VStack alignItems="start" justifyContent="center">
              <Button variant="link" cursor="pointer" as="h6" size="10px" onClick={()=>navigate(`/user-profile/${userId}`)}>
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
                Mar 10, 2019
              </Text>
            </VStack>
          </HStack>
          <Button display={post.username===user.username?"flex":"none"} borderRadius="50%" w="20px" mr="10px">
            <Icon as={MdOutlineMoreVert} w="22px" h="22px" />
          </Button>
        </Flex>
        <Box mt={2}>
          <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.300")}>
            {content}
          </chakra.p>
        </Box>
        <Flex justifyContent="start" alignItems="center" mt={4}>
          <Button borderRadius="50%" w="20px" mr="10px">
            <Icon as={IoHeartOutline} w="22px" h="22px" />
          </Button>
          <Button borderRadius="50%" w="20px">
            <Icon as={MdOutlineBookmarkBorder} w="22px" h="22px" />
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
              <Input pr="4.5rem" placeholder="Enter Comment" />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  p="15px"
                  size="sm"
                  bg={useColorModeValue("gray.200", "gray.600")}
                >
                  POST
                </Button>
              </InputRightElement>
            </InputGroup>
          </HStack>
          <VStack mt={3} alignItems="start">
            {comments.map((comment) => <CommentCard comment={comment}/>)}
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
