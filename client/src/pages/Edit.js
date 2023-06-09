import styled from "styled-components";

import Grid from '@mui/material/Grid';

import SmallBlueButton from "../components/small/SmallBlueButton"
import SelectWithSearch from "../components/small/SelectWithSearch"
import ToggleSwitch from "../components/small/toggleSwitch"

//import redux
import { useSelector, useDispatch } from "react-redux"
import { setVisibility, setText, setGeographiesList, setGeographySelected, setCategoriesList, setCategorySelected, setTitlesList, setTitleSelected} from "../slices/writeSlice"

import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { setUserPosts } from "../slices/settingsSlice";

const Box = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  width: 100%;
    height: 100vh;
`;

const Row = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: ${props => props.justifyContent};
padding-bottom: 16px;
`


const InputBox = styled.textarea`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px 0px 0px 6px;
gap: 32px;

width: 100%;

border: none;

font-family: Helvetica Neue;
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

function Edit(){

    const params = useParams()
    const userPosts = useSelector((state)=> state.settings.userPosts)

    const [userPost, setUserPost] = useState({})

    useEffect(() => {
        if (userPosts.length > 0) {
          const filteredPost = userPosts.find((post) => post.id == params.id);
          setUserPost(filteredPost);
        }
      }, [userPosts, params.id]);
      
      useEffect(() => {
        const handleUserPostChange = () => {
          dispatch(setText(userPost.text))
          dispatch(setVisibility(userPost.visibility))
          dispatch(setGeographySelected(userPost.geography))
          dispatch(setCategorySelected(userPost.category))
          dispatch(setTitleSelected(userPost.title))
        };
      
        handleUserPostChange();
      }, [userPost]);

    


    const writeForm = useSelector((state) => state.write.writeForm)

    const dispatch = useDispatch()
    const history = useHistory()

    //handling visibility input
    function handleVisibilityChange(){
        dispatch(setVisibility("true_false"))
    }

    //handling text input
    function handleTextChange(e){
        dispatch(setText(e.target.value))
    }

    //Geography, category and title selection 

    const geographiesList = useSelector((state) => state.write.geographiesList)
    const categoriesList = useSelector((state) => state.write.categoriesList)
    const titlesList = useSelector((state) => state.write.titlesList)
    const geographySelected = useSelector((state) => state.write.geography_selected)
    const categorySelected = useSelector((state) => state.write.category_selected)
    const titleSelected = useSelector((state) => state.write.title_selected)
    const user_id = useSelector((state) => state.login.user.id)

    useEffect(()=>{
        fetch(`/geographies`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res) =>{ if(res.ok){
            res.json().then((geographies) => {
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
                  dispatch(setCategoriesList(categories))
                })
              }
            })
        }
      }, [geographySelected])

      useEffect(() => {
        if(geographySelected && categorySelected) {
fetch(`/geographies/${geographySelected.id}/categories/${categorySelected.id}/titles`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => {
              if (res.ok) {
                res.json().then((titles) => {
                  dispatch(setTitlesList(titles))
                })
              }
            })
        }
      }, [categorySelected, titleSelected])

    function handleSelectChange(e){
        const { name, value } = e.target
        if(name === "geography"){
            let selectedGeography = geographiesList.find((geography) => geography.name == value && geography.id !== undefined)
            dispatch(setGeographySelected(selectedGeography))
            dispatch(setCategorySelected(false))
            dispatch(setTitleSelected(false))
        }
        if(name === "category"){
            let selectedCategory = categoriesList.find((category) => category.name == value && category.id !== undefined)
            dispatch(setCategorySelected(selectedCategory))
            dispatch(setTitleSelected(false))
        }
        if(name === "title"){
            let selectedTitle = titlesList.find((title) => title.name == value && title.id !== undefined)
            dispatch(setTitleSelected(selectedTitle))
        }
    }

    function handleUpdate(){
        fetch(`/posts/${userPost.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                text: writeForm.text,
                published: writeForm.published,
                geography_id: geographySelected.id,
                category_id: categorySelected.id,
                title_id: titleSelected.id,
                user_id: user_id
            })
        })
        .then((res) =>{ if(res.ok){
            res.json().then((post) => {
                let newUserPosts = userPosts.map((userPost) => {
                    if(userPost.id === post.id){
                        return post
                    }else{
                        return userPost
                    }
                })
                dispatch(setUserPosts(newUserPosts))

                history.goBack()
            })
        }
        })
    }


    return(
        <Box container>
        <Grid container xs={12} md={4} sx={{alignItems: "center"}} >
            <Row justifyContent="space-between">
                <ToggleSwitch
                optionsArray={ViewArray}
                handleVisibilityChange={handleVisibilityChange}
                label="Visibility"
                />
                <SmallBlueButton onClick={handleUpdate} text={"Update"}/>
            </Row>
        <InputBox
        placeholder="Write your post here..."
        name="text"
        value={writeForm ? writeForm.text : ""}
        onChange={handleTextChange}
        rows={8}
        autoFocus
        />
        <Row 
        justifyContent="start"
        >
        <SelectWithSearch
        key={1}
        name="geography"
        options={geographiesList}
        placeholder={geographySelected ? geographySelected.name : "Geography"}
        handleSelectChange={handleSelectChange}
        />
        {
            geographySelected !== false ?
            <SelectWithSearch
            key={2}
            name="category"
            options={categoriesList}
            placeholder={categorySelected ? categorySelected.name : "Category"}
            handleSelectChange={handleSelectChange}
            />
            :
            null
        }
        {
            categorySelected !== false ?
            <SelectWithSearch
            key={3}
            name="title"
            options={titlesList}
            placeholder={titleSelected ? titleSelected.name : "Title"}
            handleSelectChange={handleSelectChange}
            />
            :
            null
        }
        </Row>
        </Grid>
        </Box>
    )
}
export default Edit