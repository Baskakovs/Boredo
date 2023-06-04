import styled from "styled-components";

//components
import TitleM from "../components/small/TitleM"
import MenuText from "../components/small/MenuText";
import Right  from "../images/Right.svg"

const Box = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;
width: 100%;
margin:auto
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
    return(
        <Box>

            <TitleM>Account Infomration</TitleM>
            <MenuBox>
                <Option>
                    <MenuText>Posts</MenuText>
                    <Icon src={Right} alt="arrow-right"/>
                </Option>
                <Option>
                    <MenuText>Comments</MenuText>
                    <Icon src={Right} alt="arrow-right"/>
                </Option>
                <Option>
                    <MenuText>Account Settings</MenuText>
                    <Icon src={Right} alt="arrow-right"/>
                </Option>
            </MenuBox>
        </Box>
    )
}
export default Profile;