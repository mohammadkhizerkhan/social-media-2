import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { Box } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { useParams } from 'react-router-dom';
import { ProfileCard } from '../components';
function IndividualProfile() {
    const {userId}=useParams();
    const [user,setUser]=useState([]);
    const [userPost,setUserPost]=useState([]);
    useEffect(() => {
        (async()=>{
            try {
                let respose=await axios.get(`/api/users/${userId}`);
                setUser(respose.data.user)
            } catch (error) {
                console.log(error)
            }
        })();
    }, [userId])
    useEffect(() => {
        (async()=>{
            try {
                let respose=await axios.get(`/api/posts/user/${user.username}`);
                setUserPost(respose.data.posts)
            } catch (error) {
                console.log(error)
            }
        })();
    }, [user.username,userId])
    return (
        <Box as="main" p="4" bg={useColorModeValue("#F9FAFB", "gray.600")}>
            <ProfileCard user={user} userPost={userPost}/>
        </Box>
    )
}

export default IndividualProfile
