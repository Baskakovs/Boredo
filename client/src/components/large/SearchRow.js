import styled from "styled-components"

//redux import
import { useDispatch, useSelector } from "react-redux";
import { setCountrySelected, setCategorySelected, setTitleSelected } from "../../slices/searchSlice";

//components
import SearchButton from "../buttons/SearchButton";

const SearchRowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 8px;
    width: 100%;

    ::-webkit-scrollbar {
        display: none;
      }

    position: absolute;

    overflow-x: auto;
`

function SearchRow({items, type}) {
    const dispatch = useDispatch();
    function handleItemClick(e){
        if(type == "country"){
            dispatch(setCountrySelected(e.target.name));
        }else if(type == "category"){
            dispatch(setCategorySelected(e.target.id));
        }else if(type == "title"){
            dispatch(setTitleSelected(e.target.id));
        }
    }

    const sel = useSelector((state) => state.categorySelected);
    console.log(sel, "sel")
    return (
        <SearchRowContainer>
            {
                Array.isArray(items) ? items.map((item, index) => (
                    <SearchButton key={index} id={item.id} name={item.name} onClick={handleItemClick}>
                        {item.name}
                    </SearchButton>
                ))
                : null
            }
        </SearchRowContainer>
    );
}
export default SearchRow;
