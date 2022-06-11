import {
    Box,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    useColorModeValue,
    useDisclosure,
    Button
  } from "@chakra-ui/react";
  
  import { useRef } from "react";
  import SidebarContent from "./SidebarContent";
  
  function DrawerMenu() {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const btnRef = useRef();
    const color = useColorModeValue("gray.600", "gray.300");
    return (
      <>
        <Button
          aria-label="Menu"
          display={{ base: "inline-flex", md: "none" }}
          onClick={onOpen}
          size="sm"
          finalFocusRef={btnRef}
        >
          click
        </Button>
        <SidebarContent display={{ base: "none", md: "unset" }} />
        <Drawer isOpen={isOpen} onClose={onClose} placement="left">
          <DrawerOverlay />
          <DrawerContent>
            <SidebarContent w="full" borderRight="none" />
          </DrawerContent>
        </Drawer>
      </>
    );
  }
  
  export default DrawerMenu;
  