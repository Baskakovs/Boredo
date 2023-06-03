import styled from "styled-components";

import LoginForm from "../small/LoginForm";
const Box = styled.div`
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 32px;
gap: 10px;

background: #FFFFFF;
border: 1px solid #C2C2C2;
border-radius: 4px;
`

const BoredoTitle = styled.span`
width: 202px;
height: 58px;

font-style: normal;
font-weight: 600;
font-size: 48px;
line-height: 58px;
/* identical to box height */

display: flex;
align-items: center;

color: #D8D8D8;

`

function LoginSignupWindow({children}){
    return(
        <Box>
            <LoginForm/>
        </Box>
    )
}

export default LoginSignupWindow