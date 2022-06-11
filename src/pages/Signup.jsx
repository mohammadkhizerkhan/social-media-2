import React from 'react'
import {
    chakra,
    Box,
    GridItem,
    useColorModeValue,
    Button,
    Center,
    Flex,
    SimpleGrid,
    VisuallyHidden,
    Input,
    InputGroup,
    InputLeftElement
  } from "@chakra-ui/react";
  import { MdOutlineLock, MdOutlineMail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate=useNavigate();
    return (
        <GridItem colSpan={{ base: "auto", md: 4 }}>
          <Box as="form" mb={6} rounded="lg" shadow="xl">
            <SimpleGrid
              columns={1}
              px={6}
              py={4}
              spacing={4}
              borderBottom="solid 1px"
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <Center fontSize="2rem" fontWeight="bold">SIGN UP</Center>
              <Flex>
                <VisuallyHidden>First Name</VisuallyHidden>
                <Input mt={0} type="text" placeholder="Name" required="true" />
              </Flex>
              <Flex>
                <VisuallyHidden>Email Address</VisuallyHidden>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<MdOutlineMail color="gray.300" />}
                  />
                  <Input type="email" placeholder="Email" />
                </InputGroup>
              </Flex>
              <Flex>
                <VisuallyHidden>Password</VisuallyHidden>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<MdOutlineLock color="gray.300" />}
                  />
                  <Input type="password" placeholder="Password" />
                </InputGroup>
              </Flex>

              <Button colorScheme="brand" w="full" py={2} type="submit">
                Sign up
              </Button>
              <Button variant="link" onClick={()=>navigate("login")}>Already have an account</Button>
            </SimpleGrid>
          </Box>
          <chakra.p fontSize="xs" textAlign="center" color="gray.600">
            By signing up you agree to our{" "}
            <chakra.a color="brand.500">Terms of Service</chakra.a>
          </chakra.p>
        </GridItem>
    )
}

export default Signup
