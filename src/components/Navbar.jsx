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
import {useNavigate} from "react-router-dom"
import { IoSunnyOutline,IoMoonOutline } from "react-icons/io5";

import { MdOutlineSearch } from "react-icons/md";
import { useDispatch } from "react-redux";
import { logoutUser } from "../features/auth/AuthSlice";
function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch=useDispatch();
  const navigate=useNavigate();
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
      mt="10px"
    >
      <Flex
        // position="fixed"
        // sx={{ zIndex: 3 }}
        align="center"
        justify="flex-end"
      >
        <Button
          onClick={toggleColorMode}
          colorScheme="brand"
          py={2}
          mr={4}
          type="button"
        >
          <Icon
              as={colorMode==="light"?IoSunnyOutline:IoMoonOutline}
              w="22px"
              h="22px"
            />
          {/* {colorMode === "light" ? "dark mode" : "light mode"} */}
        </Button>
        <Button colorScheme="brand" py={2} mr={4} onClick={()=>dispatch(logoutUser({navigate}))}>
          logout
        </Button>
      </Flex>
    </Box>
  );
}

export default Navbar;
