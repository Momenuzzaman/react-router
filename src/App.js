import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import FriendDetai from './Components/FriendDetail/FriendDetai';
import Friends from './Components/Friends/Friends';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import PageNotFound from './Components/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/friends" element={<Friends/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<PageNotFound/>}/>
        <Route path='/friend/:id' element={<FriendDetai/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
