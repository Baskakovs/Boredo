import styled from "styled-components"

const Box = styled.div`
padding: 8px 16px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
border-top: 1px solid #DDDFE4;
`

const Button = styled.button`
display: flex;
flex-direction: row;
align-items: center;
padding: 3px 8px;


border: none;
background: transparent;

font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 15px;
text-decoration: underline;
display: flex;
align-items: center;

color: #FA6060;
cursor: pointer;
`
function LogoutDeleteButton({onClick}){
    return(
        <Box>
            <Button onClick={onClick}>Logout</Button>
        </Box>
    )
}

export default LogoutDeleteButton