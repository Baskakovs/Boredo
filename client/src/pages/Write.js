import styled from "styled-components";

import DropDownButton from "../components/small/DropDownButton"
import SmallBlueButton from "../components/small/SmallBlueButton"
import SelectWithSearch from "../components/small/SelectWithSearch"

//import redux
import { useSelector, useDispatch } from "react-redux"
import { setWriteForm, setGeographiesList, setGeographySelected, setCategoriesList } from "../slices/writeSlice"

import { useEffect } from "react"
import { setCategories } from "../slices/searchSlice";

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
    const geographiesList = useSelector((state) => state.write.geographiesList)
    const categoriesList = useSelector((state) => state.write.categoriesList)
    const geographySelected = useSelector((state) => state.write.geography_selected)
    const categorySelected = useSelector((state) => state.write.category_selected)

    console.log(geographySelected)

    const dispatch = useDispatch()

    useEffect(()=>{
        fetch(`/geographies`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res) =>{ if(res.ok){
            res.json().then((geographies) => {
                console.log(geographies, "11")
                dispatch(setGeographiesList(geographies))
            })
        }
        })
    },[])

    useEffect(() => {
        if (geographySelected) {
          fetch(`/geographies/${geographySelected.id}/categories`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => {
              if (res.ok) {
                res.json().then((categories) => {
                    console.log(categories, "categories")
                  dispatch(setCategoriesList(categories))
                })
              }
            })
        }
      }, [geographySelected])

    function handleSelectChange(e){
        const { name, value } = e.target
        let selectedGeography
        if(name === "geography"){
            selectedGeography = geographiesList.find((geography) => geography.name == value && geography.id !== undefined)
            dispatch(setGeographySelected(selectedGeography))
        }
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
        // onChange={handleChange}
        autoFocus
        />
        <Row>
        <SelectWithSearch
        key={1}
        name="geography"
        options={geographiesList}
        placeholder={"Geography"}
        handleSelectChange={handleSelectChange}
        />
        {
            geographySelected !== false ?
            <SelectWithSearch
            key={2}
            name="category"
            // value={categorySelected}
            options={categoriesList}
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