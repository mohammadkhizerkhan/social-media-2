import React,{useEffect} from "react";
import { Box,Center } from "@chakra-ui/react";
import { PostCard, ProfileCard } from "../components";
import { useColorModeValue } from "@chakra-ui/react";
import { getUserPost } from "../features/post/PostSlice";
import { useSelector,useDispatch } from "react-redux";
function Profile() {
  const dispatch = useDispatch()
  const {user}=useSelector(store=>store.auth)
  const {userPost,allPost}=useSelector(store=>store.post)
  useEffect(() => {
    dispatch(getUserPost(user.username))
  }, [allPost])
  return (
    <Box as="main" p="4" bg={useColorModeValue("#F9FAFB", "gray.600")}>
      <ProfileCard user={user} userPost={userPost}/>
      {
        userPost.length?
          userPost.map(postItem=>{
            return (
              <PostCard key={postItem.id} post={postItem}/>
            )
          })
        :<Center>Please add some Posts</Center>
      }
    </Box>
  );
}

export default Profile;
