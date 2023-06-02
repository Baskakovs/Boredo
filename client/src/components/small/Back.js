import styled from "styled-components";
import ProfileIcon from '../../images/Back.svg';

const Bar = styled.div`
display: flex;
align-items: flex-start;
padding: 8px 4px;
height: 100%;
gap: 24px;
width: 100%;
`

const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 11px 17px 11px 10px;
gap: 8px;
`

function BackBar(){
    return(
        <Bar>
            <Container>
                <img src={ProfileIcon} alt="back" />
            </Container>
        </Bar>
    )
}
export default BackBar;