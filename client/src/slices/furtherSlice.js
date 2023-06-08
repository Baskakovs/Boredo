import { createSlice } from '@reduxjs/toolkit'

const furtherSlice = createSlice({
    name: 'further',
    initialState: {
        post: {
            title: {
                name: "",
                id: ""
            },
            text:"",
            category: {
                name: "",
                id: ""
            },
            geography: {
                name: "",
                id: ""
            },
            comments: [],
            user: {
                name: "",
                id: ""
            },
            created_at: ""
        }
    },
    reducers: {
        setPost(state, action) {
            state.post = action.payload
        }
    }
})
export default furtherSlice.reducer
export const { setPost } = furtherSlice.actions