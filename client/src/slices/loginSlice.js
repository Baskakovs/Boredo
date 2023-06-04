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
        }
    },
    reducers: {
        setLogin: (state) => {
            state.login = !state.login;
            state.signup = !state.signup;
        },
        setSignup: (state, action) => {
            state.signUpForm = action.payload;
        }

    }
});

export const { setLogin, setSignupStage1, setSignup } = loginSlice.actions;
export default loginSlice.reducer;
