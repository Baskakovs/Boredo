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

function LoginSignupWindow({children}){
    return(
        <Box>
            <LoginForm/>
        </Box>
    )
}

export default LoginSignupWindow