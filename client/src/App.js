import './App.css';

//components
import Search from './components/large/Search';
import Post from './components/large/Post';
import NavBar from './components/large/NavBar';
import SortFilter from './components/large/SortFilter';
function App() {
  return (
    <div className="App">
      {/* <Search/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      
      <NavBar/> */}
      <SortFilter/>
    </div>
  );
}

export default App;
