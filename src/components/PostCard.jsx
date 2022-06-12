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

export default function PostCard() {
  return (
    <Flex
      w="full"
      alignItems="center"
      justifyContent="center"
      mt={4}
    >
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
            <Avatar name="ryan" src="https://bit.ly/ryan-florence" />
            <VStack alignItems="start" justifyContent="center">
              <Heading as="h6" size="10px">
                ryan florence
                <chakra.span
                  ml="4px"
                  fontSize="sm"
                  color={useColorModeValue("gray.600", "gray.400")}
                >
                  @ryan123
                </chakra.span>
              </Heading>
              <Text
                mt={0}
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                Mar 10, 2019
              </Text>
            </VStack>
          </HStack>
          <Button borderRadius="50%" w="20px" mr="10px">
            <Icon as={MdOutlineMoreVert} w="22px" h="22px" />
          </Button>
        </Flex>
        <Box mt={2}>
          <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.300")}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
            enim reprehenderit nisi, accusamus delectus nihil quis facere in
            modi ratione libero!
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
                <Button h="1.75rem" p="15px" size="sm" bg={useColorModeValue("gray.200", "gray.600")}>
                  POST
                </Button>
              </InputRightElement>
            </InputGroup>
          </HStack>
          <VStack mt={3} alignItems="start">
            <HStack alignItems="start">
              <Avatar
                name="Ryan florence"
                size="sm"
                src="https://bit.ly/ryan-florence"
              />
              <Box>
                <chakra.p
                  mt={2}
                  p={2}
                  bg={useColorModeValue("gray.200", "gray.600")}
                  borderRadius="5px"
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempora expedita dicta.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempora expedita dicta.
                </chakra.p>
              </Box>
            </HStack>
            <HStack alignItems="start">
              <Avatar
                name="Ryan florence"
                size="sm"
                src="https://bit.ly/ryan-florence"
              />
              <Box>
                <chakra.p
                  mt={2}
                  p={2}
                  bg={useColorModeValue("gray.200", "gray.600")}
                  borderRadius="5px"
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempora expedita dicta.
                </chakra.p>
              </Box>
            </HStack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
