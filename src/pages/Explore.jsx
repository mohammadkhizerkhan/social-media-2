import React,{useEffect, useState} from "react";
import { Box,Tabs,TabList,Tab,TabPanels,TabPanel } from "@chakra-ui/react";
import { PostCard } from "../components";
import { useColorModeValue } from "@chakra-ui/react";
import { useSelector } from "react-redux";
function Explore() {
  const { allPost } = useSelector((store) => store.post);
  const [latestPost,setLatestPost]=useState(true);
  const [filteredPosts,setFilteredPosts]=useState({posts:[]})
  useEffect(() => {
    if(!latestPost){
      setFilteredPosts((prev)=>({...prev,posts:[...allPost]?.sort((postA,postB)=>postB.likes.likeCount-postA.likes.likeCount)}))
    }
    else{
      setFilteredPosts(prev=>({...prev,posts:[...allPost]?.sort((postA,postB)=>new Date(postB.createdAt)-new Date(postA.createdAt))}))
    }
  }, [allPost,latestPost])
  
  return (
    <Box
      as="main"
      p="4"
      minH="100vh"
      bg={useColorModeValue("#F9FAFB", "gray.600")}
    >
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab _selected={{ color: 'white', bg: 'brand.500' }} onClick={()=>setLatestPost(true)}>Latest</Tab>
          <Tab _selected={{ color: 'white', bg: 'brand.500' }} onClick={()=>setLatestPost(false)}>Trending</Tab>
        </TabList>
      </Tabs>
      {filteredPosts?.posts?.map((postItem) => {
        return <PostCard key={postItem.id} post={postItem} />;
      })}
    </Box>
  );
}

export default Explore;
