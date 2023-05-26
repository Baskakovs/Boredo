import styled from "styled-components";

//components
import SearchButton from "../buttons/SearchButton";

const SearchRowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 8px 4px;
    gap: 8px;
    width: 100%;

    position: absolute;

    overflow-x: auto;
`

function SearchRow() {
    return (
        <SearchRowContainer>
            <SearchButton>China</SearchButton>
            <SearchButton>USA</SearchButton>
            <SearchButton>UK</SearchButton>
            <SearchButton>EU</SearchButton>
            <SearchButton>Germany</SearchButton>
            <SearchButton>France</SearchButton>
            <SearchButton>Poland</SearchButton>
            <SearchButton>South Africa</SearchButton>
            <SearchButton>China</SearchButton>
            <SearchButton>USA</SearchButton>
            <SearchButton>China</SearchButton>
            <SearchButton>USA</SearchButton>
            <SearchButton>UK</SearchButton>
            <SearchButton>EU</SearchButton>
            <SearchButton>Germany</SearchButton>
            <SearchButton>France</SearchButton>
            <SearchButton>Poland</SearchButton>
            <SearchButton>South Africa</SearchButton>
            <SearchButton>China</SearchButton>
            <SearchButton>USA</SearchButton>
            <SearchButton>France</SearchButton>
            <SearchButton>Poland</SearchButton>
            <SearchButton>South Africa</SearchButton>
            <SearchButton>China</SearchButton>
            <SearchButton>USA</SearchButton>
        </SearchRowContainer>
    );
}
export default SearchRow;
