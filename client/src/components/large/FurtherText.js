import styled from "styled-components";

const Box = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
padding: 0px;
gap: 24px;

position: absolute;
width: 362px;
height: 217px;
left: 16px;
top: 42px;
`
const HeaderBox = styled.div`
/* Auto layout */

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 362px;
height: 22px;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`

const HeaderText = styled.span`
/* Auto layout */

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 362px;
height: 22px;
`

const TextBox = styled.div`
/* Auto layout */
width: 360px;
height: 132px;

font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 22px;
/* or 183% */

display: flex;
align-items: center;
letter-spacing: 0.04em;

color: #000000;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
`

const Text = styled.span`
/* MainText */


width: 360px;
height: 132px;

font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 22px;
/* or 183% */

display: flex;
align-items: center;
letter-spacing: 0.04em;

color: #000000;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
`

const PublishBox = styled.div`
width: 136px;
height: 15px;


/* Inside auto layout */

flex: none;
order: 2;
flex-grow: 0;
`

const Author = styled.span`
position: absolute;
width: 55px;
height: 15px;
left: 0px;
top: 202px;

font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 15px;
/* identical to box height */

display: flex;
align-items: center;

color: #BFBFBF;
`
const Date = styled.span`
position: absolute;
width: 68px;
height: 15px;
left: 68px;
top: 202px;

font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 15px;
/* identical to box height */

display: flex;
align-items: center;

color: #BFBFBF;
`

function FurtherText(){
    return(
        <Box>
            <HeaderBox>
                <HeaderText>
                China | Politics | 20th National Congress
                </HeaderText>
            </HeaderBox>
            <TextBox>
                <Text>
                De standaard Lorem Ipsum passage, in gebruik sinds de 16e eeuw. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
            </TextBox>
            <PublishBox>
                <Author>
                Author
                </Author>
                <Date>
                20/10/2021
                </Date>
            </PublishBox>
        </Box>
    )
}
export default FurtherText;