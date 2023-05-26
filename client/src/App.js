import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
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

function App() {
  return (
    <>
    {/* <Box sx={{
      width: '100%',
      overflowX: 'hidden', // Hide horizontal scrollbar
      display: 'flex',
      flexDirection: 'column', // Set container as column layout
      position: 'sticky', top: 0, zIndex: 1,
      backgroundColor: '#FFFFFF',
      marginBottom: '16px',
    }}>
        <Grid item xs={12} sx={{ marginBottom: '32px' }}>
          <div>
            <Search />
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <div>
            <SortFilter />
          </div>
        </Grid>
    </Box> */}
    <SearchAndSort />
    <Box sx={{
      width: '100%',
      overflowX: 'hidden', // Hide horizontal scrollbar
      display: 'flex',
      justifyContent: 'center',
    }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ justifyContent: 'center' }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={6} lg={4}>
              <div>
                <Post />
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <div>
                <Post />
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <div>
                <Post />
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <div>
                <Post />
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <div>
                <Post />
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <div>
                <Post />
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <div>
                <Post />
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <div>
                <Post />
              </div>
            </Grid>
          
          </Grid>
        </Grid>
      </Grid>
    </Box>
    <NavBar/>
    </>
    
  );
}

export default App;
