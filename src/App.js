import { Route, Routes } from 'react-router-dom';
import './App.css';
import Friends from './Components/Friends/Friends';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/friends" element={<Friends/>}/>
      </Routes>
    </div>
  );
}

export default App;
