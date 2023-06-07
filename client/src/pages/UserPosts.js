
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import { useEffect } from 'react'

//redux import
import { useDispatch, useSelector } from "react-redux";
import { setUserPosts } from '../slices/settingsSlice'

import Post from '../components/large/Post'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }))
  
  const ScrollableContainer = styled(Box)`
    width: 90%
    margin: auto;
    flex-grow: 1;
    overflow-y: auto;
    padding-top: 200px;
    padding-bottom: 100px /* Adjust this value based on the height of the NavBar */
  `
  
  const FixedContainer = styled(Box)`
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: #ffffff;
    `

function UserPosts(){

    const dispatch = useDispatch()
    const user_id = useSelector((state) => state.login.user.id)
    const userPosts = useSelector((state) => state.settings.userPosts)

    useEffect(()=>{
        fetch(`/users/${user_id}/posts`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res=>{
            if(res.ok){
                res.json().then((posts)=>{
                    dispatch(setUserPosts(posts))
                })
            }
        })
    },[])

    console.log(userPosts, 'user_posts')

    return(
        <>
        <FixedContainer>
          <h1>Your Posts</h1>
        </FixedContainer>
        <ScrollableContainer>
          <Grid container spacing={2} sx={{display: 'flex', justifyContent:'center'}}>
            {
              Array.isArray(userPosts) ? 
              userPosts.map((post, index) => (
                <Grid item xs={12} md={6} lg={4} sx={{display: 'flex', justifyContent:'center'}} key={index}>
                  <div>
                    <Post post={post} edit/>
                  </div>
                </Grid>
              )) 
              : null
            }
          </Grid>
        </ScrollableContainer>
      </>
    )
}

export default UserPosts