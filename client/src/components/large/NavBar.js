import styled from "styled-components";

import WriteIcon from "../../images/WriteIcon.png";
import ProfileIcon from '../../images/ProfileIcon.png';


const Container = styled.div`
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 17px 145px;
gap: 80px;

position: absolute;
width: 100vw;
height: 68px;
left: 0px;
top: 761px;

background: #FFFFFF;
border-top: 1px solid #D1D5DB;
`

const IconContainer = styled.div`
width: 34px;
height: 34px;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`

const Icon = styled.img`
width: 34px;
height: 34px;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`

function NavBar(){
    return(
        <Container>
            <IconContainer>
                <Icon src={ProfileIcon}/>
            </IconContainer>
            <IconContainer>
                <Icon src={WriteIcon}/>
            </IconContainer>
        </Container>
    );
}
export default NavBar;