import styled from "styled-components";
import LoginForm from "../small/LoginForm"
import SignUpForm from "../small/SignupForm"
import Divider from "../small/Divider";
import AlternativeLogin from "../large/AlternativeLogin";
import NoBorderBlueButton from "../small/NoBorderBlueButton";

//redux imports
import { useSelector, useDispatch } from "react-redux";
import { setLogin } from "../../slices/loginSlice";
const Box = styled.div`
  box-sizing: border-box;
  width: 360px;
  display: flex;
  flex-direction: column; /* Adjusted to column layout */
  justify-content: center;
  align-items: center; /* Adjusted to center alignment */
  padding: 32px;
  gap: 10px;
  background: #FFFFFF;
  border: 1px solid #C2C2C2;
  border-radius: 4px;
  margin: auto;   
`;

const ToSignUp = styled.span`
display: flex;
flex-direction: row;
align-items: center;
padding: 10px;

width: 338px;
height: 48px;
font-style: normal;
font-size: 14px;
line-height: 17px;
`

function LoginSignupWindow({children}){
    const login = useSelector((state) => state.login.login);
    const dispatch = useDispatch();
    function handleActionChange(){
        console.log("clicked")
        dispatch(setLogin(!login))
    }

    return(
        <Box>
            {
                login ? <LoginForm/> : <SignUpForm/>
            }
            {/* <Divider/> */}
            <AlternativeLogin/>
            <ToSignUp>
                <p>Don't have an account?</p>
                <NoBorderBlueButton onClick={handleActionChange}>Sign Up</NoBorderBlueButton>
            </ToSignUp>
        </Box>
    )
}

export default LoginSignupWindow