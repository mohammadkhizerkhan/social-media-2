import React, { useState } from "react";
import {
  chakra,
  Box,
  Avatar,
  Flex,
  useColorModeValue,
  Link,
  Button,
  VStack,
  HStack,
  Heading,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Textarea,
  FormLabel,
  SimpleGrid,
  Input,
  FormControl,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unFollowUser } from "../features/auth/AuthSlice";
import { updateUser } from "../features/auth/AuthSlice";
import { CallToast } from "../services/CallToast";

function ProfileCard({ user, userPost }) {
  const { allUsers } = useSelector((store) => store.user);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { user: mainUser } = useSelector((store) => store.auth);
  const [userData, setUserData] = useState({
    firstName: user?.firstName,
    lastName: user?.lastName,
    bio: user?.bio,
    link: user?.link,
  });
  const changeHandler = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isFollowing = mainUser.following.find(
    (item) => item.userId === user.userId
  );
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
        maxW="80%"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <VStack w="full" alignItems="center">
            <Avatar name="ryan" src="https://bit.ly/ryan-florence" size="lg" />
            <VStack alignItems="center" justifyContent="center">
              <Heading as="h4" size="50px">
                {user?.firstName} {user?.lastName}
              </Heading>
              <p
                marginTop="0px"
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                @{user?.firstName}
              </p>
              <Button
                w="fit-content"
                borderRadius="4px"
                px="25px"
                mr="10px"
                onClick={onOpen}
                display={mainUser.username === user.username ? "block" : "none"}
              >
                Edit Profile
              </Button>
              <Button
                w="fit-content"
                borderRadius="4px"
                px="25px"
                mr="10px"
                onClick={() => {
                  isFollowing
                    ? dispatch(
                        unFollowUser({
                          userId: user._id,
                        })
                      )
                    : dispatch(
                        followUser({
                          userId: user._id,
                        })
                      );
                }}
                display={mainUser.username === user.username ? "none" : "block"}
              >
                {isFollowing ? "- Unfollow" : "+ Follow"}
              </Button>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Edit Profile</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <HStack alignItems="start">
                      <SimpleGrid
                        w="full"
                        columns={1}
                        px={6}
                        py={4}
                        spacing={4}
                        borderBottom="solid 1px"
                        borderColor={useColorModeValue("gray.200", "gray.700")}
                      >
                        <FormControl>
                          <FormLabel>First Name</FormLabel>
                          <Input
                            mt={0}
                            type="text"
                            placeholder="First Name"
                            required="true"
                            name="firstName"
                            value={userData.firstName}
                            onChange={(e) => changeHandler(e)}
                          />
                          <FormLabel>Last Name</FormLabel>
                          <Input
                            mt={0}
                            type="text"
                            placeholder="Last Name"
                            required="true"
                            name="lastName"
                            value={userData.lastName}
                            onChange={(e) => changeHandler(e)}
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Bio</FormLabel>
                          <Textarea
                            placeholder="Enter your bio here"
                            minHeight="120px"
                            name="bio"
                            value={userData.bio}
                            onChange={(e) => changeHandler(e)}
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Website</FormLabel>
                          <Input
                            mt={0}
                            type="text"
                            name="link"
                            placeholder="Enter your website here"
                            required="true"
                            value={userData.link}
                            onChange={(e) => changeHandler(e)}
                          />
                        </FormControl>
                      </SimpleGrid>
                    </HStack>
                  </ModalBody>
                  <ModalFooter p="10px">
                    <Button
                      colorScheme="brand"
                      disabled={
                        (user.firstName === userData.firstName &&
                        user.lastName === userData.lastName &&
                        user.bio === userData.bio &&
                        user.link === userData.link)?true:false
                      }
                      mr={3}
                      onClick={() => {
                        if (
                          userData.bio &&
                          userData.firstName &&
                          userData.lastName &&
                          userData.link
                        ) {
                          dispatch(updateUser({ userData }));
                        } else {
                          CallToast("error", "please fill the details");
                        }
                        onClose();
                      }}
                    >
                      SAVE
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <chakra.p
                mt={2}
                color={useColorModeValue("gray.600", "gray.300")}
              >
                {user?.bio}
              </chakra.p>
              <Flex w="full" justifyContent="center">
                <Button variant="link" mr="20px">
                  {userPost?.length} Posts
                </Button>
                <Button variant="link" mr="20px">
                  {user?.followers?.length} followers
                </Button>
                <Button variant="link" mr="20px">
                  {user?.following?.length} following
                </Button>
              </Flex>
              <Link
                color={useColorModeValue("gray.600", "gray.400")}
                href={user.link}
              >
                {user?.link}
              </Link>
            </VStack>
          </VStack>
        </Flex>
      </Box>
    </Flex>
  );
}

export default ProfileCard;
