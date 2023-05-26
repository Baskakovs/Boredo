import React from 'react';
import styled from 'styled-components';

import WriteIcon from '../../images/WriteIcon.png';
import ProfileIcon from '../../images/ProfileIcon.png';

const Container = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 17px 145px;
  gap: 80px;

  width: 100vw;
  height: 68px;

  background: #FFFFFF;
  border-top: 1px solid #D1D5DB;

    position: fixed;
    bottom: 0;
    z-index: 1;
    `;

const IconContainer = styled.button`
  width: 34px;
  height: 34px;
  cursor: pointer;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  border: none;
  background-color: transparent;
`;

function NavBar() {
  return (
    <Container>
      <IconContainer>
        <img src={ProfileIcon} alt="Profile Icon" />
      </IconContainer>
      <IconContainer>
        <img src={WriteIcon} alt="Write Icon" />
      </IconContainer>
    </Container>
  );
}

export default NavBar;
