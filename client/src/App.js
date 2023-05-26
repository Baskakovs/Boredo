import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import SearchAndSort from './components/large/SearchAndSort';
import Post from './components/large/Post';
import NavBar from './components/large/NavBar';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ScrollableContainer = styled(Box)`
  width: 90%
  margin: auto;
  flex-grow: 1;
  overflow-y: auto;
  padding-top: 200px;
  padding-bottom: 100px /* Adjust this value based on the height of the NavBar */
`;

const FixedContainer = styled(Box)`
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #ffffff;
`;

function App() {
  return (
    <>
      <FixedContainer>
        <SearchAndSort />
      </FixedContainer>
      <ScrollableContainer>
        <Grid container spacing={2} sx={{display: 'flex', justifyContent:'center'}}>
          <Grid item xs={12} md={6} lg={4} sx={{display: 'flex', justifyContent:'center'}}>
            <div>
              <Post />
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{display: 'flex', justifyContent:'center'}}>
            <div>
              <Post />
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{display: 'flex', justifyContent:'center'}}>
            <div>
              <Post />
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{display: 'flex', justifyContent:'center'}}>
            <div>
              <Post />
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{display: 'flex', justifyContent:'center'}}>
            <div>
              <Post />
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{display: 'flex', justifyContent:'center'}}>
            <div>
              <Post />
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{display: 'flex', justifyContent:'center'}}>
            <div>
              <Post />
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{display: 'flex', justifyContent:'center'}}>
            <div>
              <Post />
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{display: 'flex', justifyContent:'center'}}>
            <div>
              <Post />
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{display: 'flex', justifyContent:'center'}}>
            <div>
              <Post />
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{display: 'flex', justifyContent:'center'}}>
            <div>
              <Post />
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{display: 'flex', justifyContent:'center'}}>
            <div>
              <Post />
            </div>
          </Grid>
        </Grid>
      </ScrollableContainer>
      <FixedContainer>
        <NavBar />
      </FixedContainer>
    </>
  );
}

export default App;
