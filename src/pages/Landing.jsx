import React from "react";
import {
  Box,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import { Hero } from "../components";
import Signup from "./Signup";

export default function Landing() {
  const bgColor = useColorModeValue("black", "white");
  return (
    <Box px={{base:"3rem",md:"7rem"}} py={{base:"3rem",md:"7rem"}} mx="auto">
      <SimpleGrid
        alignItems="center"
        w={{ base: "full", xl: 11 / 12 }}
        columns={{ base: 1, lg: 11 }}
        gap={{ base: 0, lg: 24 }}
        mx="auto"
      >
        <Hero/>
        <Signup/>
      </SimpleGrid>
    </Box>
  );
}
