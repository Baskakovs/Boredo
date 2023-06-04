import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        login: true,
        signup: false,
        signUpForm: {
            name: "",
            email: "",
            date_of_birth: "dd-mm-yyyy",
            password: "",
            password_confirmation: "",
        },
        user:{}
    },
    reducers: {
        setLogin: (state) => {
            state.login = !state.login;
            state.signup = !state.signup;
        },
        setSignup: (state, action) => {
            state.signUpForm = action.payload;
        },
        setUser: (state, action) =>{
            state.user = action.payload;
        }
    }
});

export const { setLogin, setSignupStage1, setSignup, setUser } = loginSlice.actions;
export default loginSlice.reducer;
