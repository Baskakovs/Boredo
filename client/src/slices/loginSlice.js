import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        login: true,
        signup: false,
        signupStage1: true,
        signUpForm: {
            name: "",
            email: "",
            date_of_birth: "dd-mm-yyyy",
            password: "",
        }
    },
    reducers: {
        setLogin: (state) => {
            state.login = !state.login;
            state.signup = !state.signup;
        },
        setSignupStage1: (state) => {
            state.signupStage1 = !state.signupStage1;
        },
        setSignup: (state, action) => {
            state.signUpForm = action.payload;
          }

    }
});

export const { setLogin, setSignupStage1, setSignup } = loginSlice.actions;
export default loginSlice.reducer;
