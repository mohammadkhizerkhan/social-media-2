import React, { useState,useEffect } from "react";
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
  InputLeftElement,
} from "@chakra-ui/react";
import { MdOutlineLock, MdOutlineMail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { signUpUser } from "../features/auth/AuthSlice";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {token}=useSelector(store=>store.auth)
  const [signUpForm, setSignUpForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignUpForm({ ...signUpForm, [name]: value });
  };

  const signUpHandler = () => {
    const { name, email, password } = signUpForm;
    if (name && email && password) {
      dispatch(signUpUser(signUpForm));
    }
    setSignUpForm({
      name: "",
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    token && navigate("/home") 
  }, [token])
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
          <Center fontSize="2rem" fontWeight="bold">
            SIGN UP
          </Center>
          <Flex>
            <VisuallyHidden>First Name</VisuallyHidden>
            <Input
              mt={0}
              type="text"
              name="name"
              value={signUpForm.name}
              onChange={(e) => handleChange(e)}
              placeholder="Name"
              required="true"
            />
          </Flex>
          <Flex>
            <VisuallyHidden>Email Address</VisuallyHidden>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<MdOutlineMail color="gray.300" />}
              />
              <Input
                type="text"
                name="email"
                value={signUpForm.email}
                onChange={(e) => handleChange(e)}
                placeholder="Email"
              />
            </InputGroup>
          </Flex>
          <Flex>
            <VisuallyHidden>Password</VisuallyHidden>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<MdOutlineLock color="gray.300" />}
              />
              <Input
                type="password"
                name="password"
                value={signUpForm.password}
                onChange={(e) => handleChange(e)}
                placeholder="Password"
              />
            </InputGroup>
          </Flex>

          <Button
            colorScheme="brand"
            w="full"
            py={2}
            type="button"
            onClick={() => signUpHandler()}
          >
            Sign up
          </Button>
          <Button variant="link" onClick={() => navigate("/login")}>
            Already have an account
          </Button>
        </SimpleGrid>
      </Box>
      <chakra.p fontSize="xs" textAlign="center" color="gray.600">
        By signing up you agree to our{" "}
        <chakra.a color="brand.500">Terms of Service</chakra.a>
      </chakra.p>
    </GridItem>
  );
}

export default Signup;
