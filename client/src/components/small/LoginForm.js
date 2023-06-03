import styled from "styled-components";

//components
import InputBox from "./Input";
import ButtonBlueLarge from "./ButtonBlueLarge";

const Box = styled.div`
/* Auto layout */

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;
gap: 8px;

width: 338px;
height: 259px;
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

function LoginForm(){
    return(
        <Box>
            <BoredoTitle>Boredo</BoredoTitle>
            <InputBox/>
            <InputBox/>
            <ButtonBlueLarge>Log In</ButtonBlueLarge>
        </Box>
    )
}
export default LoginForm;