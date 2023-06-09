import styled from "styled-components";

const Button = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 3px 6px 3px 6px;
gap: 10px;

color: #FFFFFF;
width: auto;
min-width: 57px;
height: 25px;
min-height: 25px;
text-align: center;

background: #609CFA;
border-radius: 129px;
border: none;
cursor: pointer;
`
function SmallBlueButton({onClick, text}) {
    return (
        <Button onClick={onClick}>{text}</Button>
    )
}
export default SmallBlueButton;