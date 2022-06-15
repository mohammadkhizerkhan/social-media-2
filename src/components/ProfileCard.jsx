import React from "react";
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
  InputGroup,
  InputLeftElement,
  visuallyHidden,
  Checkbox,
  FormLabel,
  SimpleGrid,
  Input,
  VisuallyHidden,
  FormControl,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unFollowUser } from "../features/auth/AuthSlice";

function ProfileCard({ user, userPost }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { user: mainUser } = useSelector((store) => store.auth);

  const isFollowing = mainUser.following.find(item=>item.userId===user.userId)
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
            <Avatar  name="ryan" src="https://bit.ly/ryan-florence" size="lg" />
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
                // onClick={()=>console.log("click")}
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
                          <FormLabel>Name</FormLabel>
                          <Input
                            mt={0}
                            type="text"
                            placeholder="Name"
                            required="true"
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Bio</FormLabel>
                          <Textarea
                            placeholder="Enter your bio here"
                            minHeight="120px"
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Website</FormLabel>
                          <Input
                            mt={0}
                            type="text"
                            placeholder="Enter your website here"
                            required="true"
                          />
                        </FormControl>
                      </SimpleGrid>
                    </HStack>
                  </ModalBody>
                  <ModalFooter p="10px">
                    <Button colorScheme="brand" mr={3}>
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
                href="https://peerlist.io/khizerkhan"
              >
                https://peerlist.io/khizerkhan
              </Link>
            </VStack>
          </VStack>
        </Flex>
      </Box>
    </Flex>
  );
}

export default ProfileCard;
