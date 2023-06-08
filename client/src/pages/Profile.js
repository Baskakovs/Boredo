import styled from "styled-components";

import Grid from '@mui/material/Grid';

import { Link } from "react-router-dom"

//import redux

import { useDispatch } from "react-redux"
import {setUser} from "../slices/loginSlice"

import { useHistory } from "react-router-dom";

//components
import TitleM from "../components/small/TitleM"
import MenuText from "../components/small/MenuText"
import Right  from "../images/Right.svg"
import LogoutDeleteButton from "../components/small/LogoutDeleteButton";

const Box = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;

`

const Footer = styled.div`
position: fixed;
width: 390px;
bottom: 68px;
z-index: 1;
`

const MenuBox = styled(Box)`
align-items: center;
`
const Option = styled(MenuBox)`
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 20px 16px;

width: 390px;
height: 64px;

border-bottom: 1px solid #E8EAED;
`
const Icon = styled.img`
width: 24px;
height: 24px;
`

function Profile(){

    const dispatch = useDispatch()
    const history = useHistory()

    function handleLogout(){
        fetch('/logout',{
            method: 'DELETE',
        })
        .then(res => {
            if(res.status === 204){
                console.log("hi")
                dispatch(setUser(null))
                history.push('/')
            }
        })
    }

    return(
        <>
        <Box>
            <Grid  spacing={2} sm={12} md={4}>
            <TitleM>Account Infomration</TitleM>
            <MenuBox>
                <Link to={'/profile/posts'}>
                <Option>
                    <MenuText>Posts</MenuText>
                    <Icon src={Right} alt="arrow-right"/>
                </Option>
                </Link>
                <Link to={'/profile/comments'}>
                <Option>
                    <MenuText>Comments</MenuText>
                    <Icon src={Right} alt="arrow-right"/>
                </Option>
                </Link>
                <Link to={'/profile/settings'}>
                <Option>
                    <MenuText>Account Settings</MenuText>
                    <Icon src={Right} alt="arrow-right"/>
                </Option>
                </Link>
            </MenuBox>
        <Footer>
        <LogoutDeleteButton onClick={handleLogout}/>
        </Footer>
        </Grid>
        </Box>
        </>
    )
}
export default Profile;