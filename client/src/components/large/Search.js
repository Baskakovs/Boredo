import styled from "styled-components";

//components

import SearchRow from "./SearchRow";

//redux imports
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCountries, setCategories } from '../../slices/searchSlice';

const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 4px;
    gap: 24px;
    width: 100%;
    height: 100%;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    padding: 8px 4px;
    gap: 8px;
    width: 100%;
    overflow-x: auto;
`

function Search(){
//fetching initial countries

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`/geographies`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res=> {
      if(res.ok){
        return res.json()
      }
    })
    .then(data => {
      data.forEach(countries => {
        dispatch(setCountries(countries))
      })
    })
  },[dispatch])

//fetching categories associated with specific country
const countrySelected = useSelector((state) => state.countrySelected);
const categorySelected = useSelector((state) => state.categorySelected);

    useEffect(() => {
        if(countrySelected !== false){
            console.log(countrySelected, "countrySelected")
            fetch(`/geographies/${countrySelected}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(res=> {
                if(res.ok){
                    return res.json()
                }
            })
            .then(categories => {
                dispatch(setCategories(categories))
    
            })
        }
    },[countrySelected])

  
//accessing store
  const countries = useSelector((state) => state.countries);
  const categories = useSelector((state) => state.categories);
  console.log(categories, "categories")
    return(
        <SearchContainer>
            <Row>
                <SearchRow items={countries} type="country"/>
            </Row>
            {
                countrySelected !== false ?
                <Row>
                    <SearchRow items={categories} type="category"/>
                </Row>
                : null
            }
                        {
                countrySelected !== false ?
                <Row>
                    <SearchRow items={categories} type="category"/>
                </Row>
                : null
            }
        </SearchContainer>
    );
}
export default Search;