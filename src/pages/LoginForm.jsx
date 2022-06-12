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
import { loginUser } from "../features/auth/AuthSlice";
import {useDispatch,useSelector} from "react-redux"

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {token}=useSelector(store=>store.auth)
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const loginHandler=()=>{
    const {email, password } = loginForm;
    if (email && password) {
      dispatch(loginUser(loginForm));
    }
    setLoginForm({
      email: "",
      password: "",
    });
  }
  const testLoginHandler=()=>{
    dispatch(loginUser({email:"test@mail.com",password:"test123"}))
  }
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
            LOGIN
          </Center>
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
                value={loginForm.email}
                onChange={(e) => handleChange(e)}
                placeholder="Email"
                required={true}
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
                value={loginForm.password}
                onChange={(e) => handleChange(e)}
                placeholder="Password"
              />
            </InputGroup>
          </Flex>

          <Button colorScheme="brand" w="full" py={2} type="button" onClick={()=>loginHandler()}>
            LOG IN
          </Button>
          <Button variant="link" onClick={() => testLoginHandler()}>
            Login with test credentials
          </Button>
          <Button variant="link" onClick={() => navigate("/")}>
            Create a new account
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

export default LoginForm;
