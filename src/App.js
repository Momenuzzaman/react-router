import './App.css';
import About from './Components/About/About';
import Friends from './Components/Friends/Friends';
import Home from './Components/Home/Home';
import PageNotFound from './Components/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <Home/>
      <Friends/>
      <About/>
      <PageNotFound/>
    </div>
  );
}

export default App;
