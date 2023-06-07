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
        geographiesList: [],
        categoriesList: [],
        titles_list: [],
        geography_selected: false,
        category_selected: false,
        title_selected: false,
    },
    reducers: {
        setWriteForm(state, action) {
            state.writeForm = action.payload
        },
        setGeographiesList(state, action){
            state.geographiesList = action.payload
        },
        setCategoriesList(state, action){
            state.categoriesList = action.payload
        },
        setTitle(state, action){
            state.titles_list = action.payload
            if(action.payload.lentgth > 0){
                state.title_selected = true
            }else{ state.title_selected = false}
        },
        setGeographySelected(state, action){
            state.geography_selected = action.payload
        }
    }
})

export const { setWriteForm, setGeographiesList, setCategoriesList, setTitle, setGeographySelected } = writeSlice.actions
export default writeSlice.reducer