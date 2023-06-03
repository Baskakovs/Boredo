import styled from "styled-components";

//components
import InputBox from "./Input";
import ButtonBlueLarge from "./ButtonBlueLarge";
import NoBorderBlueButton from "./NoBorderBlueButton";
import BoredoTitle from "./BoredoTitle";
const Box = styled.div`
/* Auto layout */

width: 338px;
height: 259px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;
gap: 8px;

`

function LoginForm(){
    return(
        <Box>
            <BoredoTitle>Boredo</BoredoTitle>
            <InputBox/>
            <InputBox/>
            <ButtonBlueLarge>Log In</ButtonBlueLarge>
            <NoBorderBlueButton>Forgot Password?</NoBorderBlueButton>
        </Box>
    )
}
export default LoginForm;