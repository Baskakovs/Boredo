import styled from "styled-components";

//components

import SearchRow from "./SearchRow";

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
    return(
        <SearchContainer>
            <Row>
                <SearchRow/>
            </Row>
            <Row>
                <SearchRow/>
            </Row>
            <Row>
                <SearchRow/>
            </Row>
        </SearchContainer>
    );
}
export default Search;