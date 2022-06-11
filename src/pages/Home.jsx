import React from "react";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Navbar,FollowSuggest,DrawerMenu } from "../components";


function Home() {
  return (
    <Box
        as="section"
        minH="100vh"
      >
        <DrawerMenu />
        <Box as="section" mx={{ base: 0, md: 80 }} transition=".3s ease">
          <Navbar/>
          <Outlet/>
        </Box>
        <FollowSuggest/>
      </Box>
  );
}

export default Home;
