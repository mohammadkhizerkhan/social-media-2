import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  useColorModeValue,
  Center,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  HStack,
  Avatar,
  Textarea,
} from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import { AiFillGift } from "react-icons/ai";
import { MdHome, MdOutlineBookmark, MdExplore } from "react-icons/md";
import NavItem from "./components/NavItem";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createPost } from "../../features/post/PostSlice";
import { CallToast } from "../../services/CallToast";
import { getPostHandler } from "../../backend/controllers/PostController";
function SidebarContent(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [postData, setPostData] = useState({ content: "" });
  const dispatch = useDispatch();
  const getPostHandler = (onClose) => {
    if (postData.content) {
      dispatch(createPost(postData));
      setPostData({ content: "" })
    } else {
      CallToast("error", "Please write something");
    }
    onClose();
  };
  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left={20}
      zIndex="sticky"
      h="full"
      pb="10"
      px="10px"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue("inherit", "gray.800")}
      borderColor={useColorModeValue("inherit", "gray.700")}
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        <Text
          fontSize="5xl"
          color={useColorModeValue("brand.500", "white")}
          fontWeight="bold"
        >
          AMIGOS
        </Text>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <NavItem
          as={NavLink}
          to="/home"
          borderRadius="3xl"
          _activeLink={{
            fontWeight: "bold",
            color: "brand.500",
            backgroundColor: "brand.100",
          }}
          icon={MdHome}
          fontSize="2xl"
          fontWeight="bold"
        >
          Feed
        </NavItem>
        <NavItem
          as={NavLink}
          to="/explore"
          borderRadius="3xl"
          _activeLink={{
            fontWeight: "bold",
            color: "brand.500",
            backgroundColor: "brand.100",
          }}
          icon={MdExplore}
          fontSize="2xl"
          fontWeight="bold"
        >
          Explore
        </NavItem>
        <NavItem
          as={NavLink}
          to="/saved"
          borderRadius="3xl"
          _activeLink={{
            fontWeight: "bold",
            color: "brand.500",
            backgroundColor: "brand.100",
          }}
          icon={MdOutlineBookmark}
          fontSize="2xl"
          fontWeight="bold"
        >
          Saved
        </NavItem>
        <NavItem
          as={NavLink}
          to="/profile"
          borderRadius="3xl"
          _activeLink={{
            fontWeight: "bold",
            color: "brand.500",
            backgroundColor: "brand.100",
          }}
          fontSize="1.5rem"
          fontWeight="bold"
          icon={FaUserCircle}
        >
          Profile
        </NavItem>
        <Button
          align="center"
          p={4}
          mt={4}
          cursor="pointer"
          color={useColorModeValue("gray.200", "gray.800")}
          fontWeight="semibold"
          transition=".15s ease"
          size="lg"
          borderRadius="3xl"
          onClick={onOpen}
          colorScheme="brand"
        >
          Add a Post
        </Button>
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
                onClick={() => getPostHandler(onClose)}
              >
                Post
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </Box>
  );
}

export default SidebarContent;
