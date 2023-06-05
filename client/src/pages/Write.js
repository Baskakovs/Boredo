import styled from "styled-components";

import DropDownButton from "../components/small/DropDownButton"
import SmallBlueButton from "../components/small/SmallBlueButton"
import SelectWithSearch from "../components/small/SelectWithSearch"

//import redux
import { useSelector, useDispatch } from "react-redux"
import { setCountries, setCategories, setTitles } from "../slices/searchSlice"

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

    const dispatch = useDispatch();
    useEffect(()=>{
        fetch("/geographies")
        .then((res) => res.json())
        .then((countries) => {
            dispatch(setCountries(countries))
        });
    },[])

    const countries = useSelector((state) => state.search.countries);
    return(
        <Box>
            <Row>
            <DropDownButton optionsArray={ViewArray}/>
            <SmallBlueButton/>
            </Row>
        <InputBox
        placeholder="Write your post here..."
        autoFocus
        />
        <Row>
        <SelectWithSearch optionArray={countries}/>
        <SelectWithSearch optionArray={countries}/>
        <SelectWithSearch optionArray={countries}/>
        </Row>

        </Box>
    )
}
export default Write;