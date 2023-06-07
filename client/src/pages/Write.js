import styled from "styled-components";

import DropDownButton from "../components/small/DropDownButton"
import SmallBlueButton from "../components/small/SmallBlueButton"
import SelectWithSearch from "../components/small/SelectWithSearch"

//import redux
import { useSelector, useDispatch } from "react-redux"
import { setCountries, setCategories, setTitles } from "../slices/searchSlice"
import { setWriteForm, setGeography } from "../slices/writeSlice"

import { useEffect } from "react"

const Box = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Row = styled.div`
width: 375px;
display: flex;
flex-direction: row;
justify-content: space-between;
padding-bottom: 16px;
`

const InputBox = styled.input`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px 0px 0px 6px;
gap: 32px;

width: 365px;

border: none;

font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
/* or 183% */

letter-spacing: 0.04em;

&:focus {
    outline: none;
}
`

const ViewArray = ['Publish', 'Archive']

function Write(){
    const writeForm = useSelector((state) => state.write.writeForm)
    const countries = useSelector((state) => state.search.countries[0])
    const categories = useSelector((state) => state.search.categories)

    const geography = useSelector((state) => state.write.geography)
    console.log(geography, "geography")
    const dispatch = useDispatch()
    useEffect(()=>{
        fetch("/geographies")
        .then((res) => res.json())
        .then((countries) => {
            dispatch(setCountries(countries))
        })
    },[])

    useEffect(()=>{
        fetch("/categories")
        .then((res) => res.json())
        .then((categories) => {
            dispatch(setCategories(categories))
        })
    },[geography])

    function handleChange(e) {
        const { name, value } = e.target;
        let updatedValue = value;
        dispatch(setWriteForm({ 
            ...writeForm,
            [name]: updatedValue,
        }))
    }

    function handleSelectChange(e){
        console.log(e.target, "id")
        dispatch(setGeography({
            name: e.target.value,
            id: e.target.id
        })) 
    }

    return(
        <Box>
            <Row>
            <DropDownButton optionsArray={ViewArray}/>
            <SmallBlueButton/>
            </Row>
        <InputBox
        placeholder="Write your post here..."
        name="text"
        value={writeForm.text}
        onChange={handleChange}
        autoFocus
        />
        <Row>
        <SelectWithSearch
        name="geography"
        value={writeForm.geography}
        optionArray={countries}
        placeholder={"Geography"}
        handleSelectChange={handleSelectChange}
        />
        {
            geography !== false ?
            <SelectWithSearch
            name="category"
            value={writeForm.category}
            optionArray={categories}
            placeholder={"Category"}
            />
            :
            null
        }
        </Row>

        </Box>
    )
}
export default Write