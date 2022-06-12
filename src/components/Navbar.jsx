import React from "react";
import {
  Box,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  useColorMode,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

import { MdOutlineSearch } from "react-icons/md";
import { useDispatch } from "react-redux";
import { logoutUser } from "../features/auth/AuthSlice";
function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch=useDispatch();
  return (
    <Box
      as="header"
      // position="relative"
      px="4"
      bg={useColorModeValue("white", "gray.800")}
      borderBottomWidth="1px"
      borderColor={useColorModeValue("inherit", "gray.700")}
      h="14"
      w="full"
    >
      <Flex
        // position="fixed"
        // sx={{ zIndex: 3 }}
        align="center"
        justify="space-between"
      >
        <InputGroup mx={8} w="full" display={{ base: "unset", md: "flex" }}>
          <InputLeftElement color="gray.500">
            <Icon as={MdOutlineSearch} w="25px" h="25px" mt="8px" />
          </InputLeftElement>
          <Input
            w="full"
            size="lg"
            bg={useColorModeValue("white", "gray.800")}
            placeholder="Search for articles..."
          />
        </InputGroup>
        <Button
          onClick={toggleColorMode}
          colorScheme="brand"
          py={2}
          mr={4}
          type="button"
        >
          {colorMode === "light" ? "dark mode" : "light mode"}
        </Button>
        <Button colorScheme="brand" py={2} mr={4} onClick={()=>dispatch(logoutUser())}>
          logout
        </Button>
      </Flex>
    </Box>
  );
}

export default Navbar;
