import React,{useEffect} from "react";
import { Box,Center } from "@chakra-ui/react";
import { PostCard, ProfileCard } from "../components";
import { useColorModeValue } from "@chakra-ui/react";
import { getUserPost } from "../features/post/PostSlice";
import { useSelector,useDispatch } from "react-redux";
function Profile() {
  const dispatch = useDispatch()
  const {user}=useSelector(store=>store.auth)
  const {userPost}=useSelector(store=>store.post)
  console.log(userPost)
  useEffect(() => {
    dispatch(getUserPost(user.username))
  }, [])
  return (
    <Box as="main" p="4" bg={useColorModeValue("#F9FAFB", "gray.600")}>
      <ProfileCard />
      {
        userPost.length?
          userPost.map(postItem=>{
            return (
              <PostCard key={postItem.id} post={postItem}/>
            )
          })
        :<Center>Please add some Posts</Center>
      }
      {/* <PostCard/> 
      <PostCard/>  */}
    </Box>
  );
}

export default Profile;
