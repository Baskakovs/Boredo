import styled from "styled-components";

function Post(){
const PostBox = styled.div`
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: column;
align-items: center;
padding: 0px;

width: 376px;

border-width: 0.2px 0px;
border-style: solid;
border-color: #656565;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`

const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 3px 4px;

    width: 376px;
    height: 26px;

    background: #FBFBFB;
`
const HeaderText = styled.div`
/* Auto layout */

display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 9px;
`

const Author = styled.p`
width: 45px;
height: 12px;
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 12px;
display: flex;
align-items: center;
color: #000000;
`

const Date = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 12px;
display: flex;
align-items: center;
`
const TextBox = styled.div`
/* Auto layout */

display: flex;
flex-direction: row;
align-items: center;
padding: 48px 10px;
gap: 12px;

width: 376px;
height: 217px;

background: #FFFFFF;

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
`

const Text = styled.p`
width: 366px;
height: 132px;

font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 22px;
/* or 183% */

display: flex;
align-items: center;
letter-spacing: 0.04em;
text-align: left;

color: #000000;
`

const Footer = styled.div`
/* Auto layout */

display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
padding: 4px;

width: 376px;
height: 24px;

background: #FBFBFB;

/* Inside auto layout */

flex: none;
order: 2;
flex-grow: 0;
`

const ReadFurther = styled.button`
width: auto;
height: 13px;

font-style: normal;
font-weight: 500;
font-size: 11px;
line-height: 13px;
display: flex;
align-items: center;
text-align: right;
letter-spacing: 0.04em;
border: none;
margin-right: 8px;

color: #000000;
`

    return(
        <PostBox>
            <Header>
                <HeaderText>
                    <Author>Author</Author>
                    <Date>2021-09-01</Date>
                </HeaderText>
            </Header>
            <TextBox>
                <Text>
                    De standaard Lorem Ipsum passage, in gebruik sinds de 16e eeuw. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
            </TextBox>
            <Footer>
                <ReadFurther>Read Further</ReadFurther>
            </Footer>
        </PostBox>
    );
}
export default Post;