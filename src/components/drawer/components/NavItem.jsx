import React from 'react'
import {
    Flex,
    Icon,
    useColorModeValue,
 } from "@chakra-ui/react";

function NavItem(props) {
    const { icon, children, ...rest } = props;
    const color = useColorModeValue("gray.600", "gray.300");
    return (
      <Flex
        align="center"
        px="2"
        pl="2"
        py="2"
        mt={4}
        cursor="pointer"
        color={useColorModeValue("inherit", "gray.400")}
        _hover={{
          bg: useColorModeValue("gray.100", "gray.900"),
          color: useColorModeValue("gray.900", "gray.200")
        }}
        role="group"
        transition=".15s ease"
        
        {...rest}
      >
        {icon && (
          <Icon
            mx="2"
            boxSize="6"
            _groupHover={{
              color: color
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
}

export default NavItem
