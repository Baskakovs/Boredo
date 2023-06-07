import React, { useState } from "react"
import styled from "styled-components"


const SelectInput = styled.input`
box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 3px 8px;
gap: 12px;
border: 1px solid #609CFA;
border-radius: 129px;
width: auto;
height: 24px;
padding: 0px 4px 0px 4px;
color: #609CFA;
`;

const OptionList = styled.datalist`
  /* Add styling for the datalist element */
`;

function SelectWithSearch({optionArray, name, value, handleSelectChange, placeholder}) {

  return (
    <div>
      <SelectInput
        type="text"
        name={name}
        value={value}
        onChange={(e)=>handleSelectChange(e)}
        list="options"
        placeholder={placeholder}
      />
      <OptionList id="options">
        {
            Array.isArray(optionArray) && optionArray.map((option) => (
                <option 
                key={option.id}
                id={option.id}
                value={option.name} />
            ))
        }
      </OptionList>
    </div>
  );
}

export default SelectWithSearch;