import styled from "styled-components"

//importing redux
import { useSelector, useDispatch } from "react-redux"
import { setUser } from "../slices/loginSlice"

import { useState } from "react"

import TitleM from "../components/small/TitleM"
import SmallBlueButton from "../components/small/SmallBlueButton"
import NoBorderBlueButton from "../components/small/NoBorderBlueButton"
import LogoutDeleteButton from "../components/small/LogoutDeleteButton"

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  align-items: center;
`;


const MethodBox = styled.div`
    display: flex;
    flex-direction: ${prop => prop.flexDirection || "column"};
    align-items: flex-start;
    
    gap: 24px;
    width: 100%;
`
const MethodBoxRow = styled.div`
display: flex;
flex-direction: column;
align-items: ${prop => prop.alignItems || "flex-start"}};
gap: 8px;
height: 42px;
width: 100%;
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
align-self: flex-start;
margin-left: 8px;
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
margin-left: 8px;

color: #9F9F9F;
`

const InformationInput = styled.input`
display: flex;
flex-direction: row;
align-items: center;
padding: 10px;
gap: 10px;

width: 345px;
height: 48px;
margin-right: auto;
margin-left: auto;
background: #FBFBFB;
border: 1px solid #9F9F9F;
border-radius: 4px;

`

const Row = styled.div`
display: flex;
flex-direction: row;
gap: 8px;
margin-right: 8px;
margin-left: 8px;
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
align-items: center;
`

function AccountSettings(){

    const dispatch = useDispatch()

    const [isUpdateMain, setIsUpdateMain] = useState(false)
    const [isUpdatePassword, setIsUpdatePassword] = useState(false)
    const [newPassword, setNewPassword] = useState({
        old_password: "",
        password: "",
        password_confirmation: ""
    })

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

    function handleChangePassword(e){
        setNewPassword({
            ...newPassword,
            [e.target.name]: e.target.value
        })
    }

    function handleUpdatePassword(){
        fetch(`/users/update_password`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPassword),
        })
        .then(res=>{ if(res.ok) {
            res.json().then(user=>{
                setIsUpdatePassword(!isUpdatePassword)
            })
        }})
    }

    function handleDeleteAccount(){
        fetch(`/users/${user.id}`,{
            method: "DELETE",
        })
        .then(res=>{ if(res.status === 204) {
            dispatch(setUser(null))
         }
        })
    }

    return(
        <Container>
        <Box>
            <MethodBoxRow alignItems={"flex-start"}>
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
                    {
                        !isUpdatePassword ?
                        <>
                        <Heading>Password</Heading>
                        <UpdateButton
                        text={"Update"}
                        onClick={()=>setIsUpdatePassword(!isUpdatePassword)}
                        />
                        </>
                        :
                        <>
                        <NoBorderBlueButton 
                        onClick={()=>setIsUpdatePassword(!isUpdatePassword)}
                        >
                        Cancel
                        </NoBorderBlueButton>
                        <UpdateButton
                        text={"Save"}
                        onClick={handleUpdatePassword}
                        />
                        </>
                    }
                </PasswordRow>
                {
                    !isUpdatePassword ?
                    null :
                    <MethodBox>
                        <MethodBoxRow>
                            <Heading>Type Old Password</Heading>
                            <InformationInput
                            type={"password"}
                            name={"old_password"}
                            value={newPassword.old_password}
                            placeholder="••••••••••••"
                            onChange={handleChangePassword}
                            />
                        </MethodBoxRow>
                        <MethodBoxRow>
                            <Heading>Type New Password</Heading>
                            <InformationInput
                            type={"password"}
                            name={"password"}
                            value={newPassword.password}
                            placeholder="••••••••••••"
                            onChange={handleChangePassword}
                            />
                        </MethodBoxRow>
                        <MethodBoxRow>
                            <Heading>Repeat New Password</Heading>
                            <InformationInput
                            type={"password"}
                            name={"password_confirmation"}
                            value={newPassword.password_confirmation}
                            placeholder="••••••••••••"
                            onChange={handleChangePassword}
                            />
                        </MethodBoxRow>
                    </MethodBox>

                }
            </MethodBox>
            <LogoutDeleteButton text={"Delete Account"}
            onClick={handleDeleteAccount}
            />
        </Box>
        </Container>
    )
}
export default AccountSettings