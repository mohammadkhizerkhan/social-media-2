import React from "react";
import { chakra, GridItem, useColorModeValue, Stack, Text, Flex } from "@chakra-ui/react";

function Hero() {
  return (
    <GridItem
      colSpan={{ sm: 3, md: 5, lg: 7 }}
      textAlign={{ base: "center", lg: "left" }}
    >
      <chakra.h1
        mb={10}
        fontSize={{ base: "6xl", md: "8xl" }}
        fontWeight="bold"
        lineHeight={{ base: "shorter", md: "none" }}
        color={useColorModeValue("brand.600", "brand.300")}
        letterSpacing={{ base: "normal", md: "tight" }}
      >
        AMIGOS
      </chakra.h1>
      <Flex direction={["column", "row"]}>
        <chakra.h1
          mb={{base:"10px",md:"1rem"}}
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="bold"
          lineHeight={{ base: "shorter", md: "none" }}
          color={useColorModeValue("gray.900", "gray.200")}
          letterSpacing={{ base: "normal", md: "tight" }}
          mr="10px"
        >
          FOLLOW
        </chakra.h1>
        <chakra.h1 alignSelf="center" marginTop={{base:"10px",md:"0"}} marginBottom={{base:"1rem",md:"0px"}}>
          PEOPLE AROUND THE GLOBE.
        </chakra.h1>
      </Flex>
      <Flex direction={["column", "row"]}>
        <chakra.h1
           mb={{base:"10px",md:"1rem"}}
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="bold"
          lineHeight={{ base: "shorter", md: "none" }}
          color={useColorModeValue("gray.900", "gray.200")}
          letterSpacing={{ base: "normal", md: "tight" }}
          mr="10px"
        >
          CONNECT
        </chakra.h1>
        <chakra.p alignSelf="center" marginTop={{base:"10px",md:"0"}} marginBottom={{base:"1rem",md:"0px"}}>
          WITH YOUR FRIENDS.
        </chakra.p>
      </Flex>
      <Flex direction={["column", "row"]} >
        <chakra.h1
           mb={{base:"10px",md:"1rem"}}
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="bold"
          lineHeight={{ base: "shorter", md: "none" }}
          color={useColorModeValue("gray.900", "gray.200")}
          letterSpacing={{ base: "normal", md: "tight" }}
          mr="10px"
        >
          SHARE
        </chakra.h1>
        <chakra.p alignSelf="center" marginTop={{base:"10px",md:"0"}} marginBottom={{base:"1rem",md:"0px"}}>
          WHAT YOU THINK.
        </chakra.p>
      </Flex>
    </GridItem>
  );
}

export default Hero;
