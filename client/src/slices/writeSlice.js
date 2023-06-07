import { createSlice } from '@reduxjs/toolkit'

const writeSlice = createSlice({
    name: 'write',
    initialState: {
        writeForm: {
            user_id: "",
            geography_id: "",
            category_id: "",
            title_id: "",
            text: "",
            published: true
        },
        geography: false,
        category: "",
        title: "",
    },
    reducers: {
        setWriteForm(state, action) {
            state.writeForm = action.payload
        },
        setGeography(state, action){
            state.geography = action.payload
        }
    }
})

export const { setWriteForm, setGeography } = writeSlice.actions
export default writeSlice.reducer