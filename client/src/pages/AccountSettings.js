import styled from "styled-components"

//importing redux
import { useSelector, useDispatch } from "react-redux"
import { setUser } from "../slices/loginSlice"

import { useState } from "react"

import TitleM from "../components/small/TitleM"
import SmallBlueButton from "../components/small/SmallBlueButton"
import NoBorderBlueButton from "../components/small/NoBorderBlueButton"

const Box = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: ${props => props.alignItems || "center"}
`

const MethodBox = styled.div`
    display: flex;
    flex-direction: ${prop => prop.flexDirection || "column"};
    align-items: flex-start;
    gap: 24px;
    width: 100vw;
`
const MethodBoxRow = styled.div`
display: flex;
flex-direction: column;
align-items: ${prop => prop.alignItems || "flex-start"}};
gap: 8px;
width: 35vw;
height: 42px;
@media screen and (max-width: 400px) {
    width: 100vw;
}
`

const Heading = styled.span`
font-family: 'Inter' sans-serif;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
/* identical to box height */

display: flex;
align-items: center;
`

const InformationText = styled.span`
font-family: 'Inter' sans-serif;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
/* identical to box height */

display: flex;
align-items: center;

color: #9F9F9F;
`

const InformationInput = styled.input`
display: flex;
flex-direction: row;
align-items: center;
padding: 10px;
gap: 10px;

width: 100%;
height: 48px;

background: #FBFBFB;
border: 1px solid #9F9F9F;
border-radius: 4px;
`

const Row = styled.div`
display: flex;
flex-direction: row;
gap: 8px;
`

const UpdateButton = styled(SmallBlueButton)`
color: #000;
`

const PasswordRow = styled(MethodBoxRow)`
border-top: 1px solid #DDDFE4;
flex-direction: row;
justify-content: space-between;
margin-top: 8px;
padding-top: 8px;
`
function AccountSettings(){

    const dispatch = useDispatch()

    const [isUpdateMain, setIsUpdateMain] = useState(false)

    const user = useSelector(state => state.login.user)

    function handleChange(e){
        const {name, value} = e.target
        dispatch(setUser({
            ...user,
            [name]: value
        }))
    }

    function handleUpdateMainInfo(){
        fetch(`/users/${user.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user),
        })
        .then(res=>{ if(res.ok) {
            res.json().then(user=>{
                dispatch(setUser(user))
                setIsUpdateMain(!isUpdateMain)
            })
        }})
    }

    return(
        <Box
        flexDirection={"column"}
        >
            <MethodBoxRow>
                <TitleM>Account Settings</TitleM>
            </MethodBoxRow>
            <MethodBoxRow
            alignItems={"flex-end"}
            >
                {
                    !isUpdateMain ?
                    <UpdateButton 
                    text={"Update"} 
                    onClick={()=>setIsUpdateMain(!isUpdateMain)}
                    />
                    :
                    <Row>
                    <NoBorderBlueButton 
                    onClick={()=>setIsUpdateMain(!isUpdateMain)}
                    >
                    Cancel
                    </NoBorderBlueButton>
                    <UpdateButton
                    text={"Save"}
                    onClick={handleUpdateMainInfo}
                    />
                    </Row>
                }
            </MethodBoxRow>
            <MethodBox>
                {
                    !isUpdateMain ?
                    <MethodBox>
                        <MethodBoxRow>
                            <Heading>Name</Heading>
                            <InformationText>{user.name}</InformationText>
                        </MethodBoxRow>
                        <MethodBoxRow>
                            <Heading>Date of Birth</Heading>
                            <InformationText>{user.date_of_birth}</InformationText>
                        </MethodBoxRow>
                        <MethodBoxRow>
                            <Heading>Email</Heading>
                            <InformationText>{user.email}</InformationText>
                        </MethodBoxRow>
                    </MethodBox>
                    :
                    <MethodBox>
                        <MethodBoxRow>
                            <Heading>Name</Heading>
                            <InformationInput
                            name={"name"}
                            value={user.name}
                            onChange={handleChange}
                            />
                        </MethodBoxRow>
                        <MethodBoxRow>
                            <Heading>Date of Birth</Heading>
                            <InformationInput
                            type="date"
                            name={"date_of_birth"}
                            value={user.date_of_birth}
                            onChange={handleChange}
                            />
                        </MethodBoxRow>
                        <MethodBoxRow>
                            <Heading>Email</Heading>
                            <InformationInput
                            placeholder={user.email}
                            name={"email"}
                            value={user.email}
                            onChange={handleChange}
                            />
                        </MethodBoxRow>
                    </MethodBox>
                }
                <PasswordRow>
                    <Heading>Password</Heading>
                    <UpdateButton
                    text={"Update"}
                    />
                </PasswordRow>
            </MethodBox>
        
        </Box>
    )
}
export default AccountSettings