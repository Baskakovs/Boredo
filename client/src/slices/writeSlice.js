import { createSlice } from '@reduxjs/toolkit'

const writeSlice = createSlice({
    name: 'write',
    geography: false,
    category: false,
    title: false,
    initialState: {
        writeForm: {
            user_id: "",
            geography_id: "",
            category_id: "",
            title_id: "",
            text: "",
            published: true
        }
    },
    reducers: {
        setWriteForm(state, action) {
            state.writeForm = action.payload
        }
    },
    setStateBoolean(state, action) {
        state[action.payload] = !state[action.payload]
    }
})

export const { setWriteForm } = writeSlice.actions
export default writeSlice.reducer