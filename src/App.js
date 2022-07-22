import '../src/sass/main.scss';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Details from "./components/Movies/Details"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MovieState from './context/Movies/MovieState';
function App() {
  return (
    <MovieState>
    <Router>
    <div className="container">
      <Navbar/>
      <Routes>
      <Route exact  path='/' element={<Home/>}/>
      <Route exact  path='/details' element={<Details/>}/>
      </Routes>
    </div>
    </Router>
    </MovieState>
  );
}

export default App;
