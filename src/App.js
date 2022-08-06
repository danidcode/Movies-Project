import '../src/sass/main.scss';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Details from "./components/Movies/Details"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MovieState from './context/Movies/MovieState';
import Login from './components/Login';
const project_name = "Movies-Project";
function App() {
  return (
    // All the code will be inside the global context
    // this is how the components can communicate with each other
    <MovieState> 
    <Router>
    <div className="container">
      <Navbar/>
      <Routes>
      <Route exact  path='/Movies-Project' element={<Home/>}/>
       {/* Passing the id of the movie as a parameter at url */}
      <Route exact  path='Movies-Project/details/:id' element={<Details/>}/> 
      <Route exact  path='Movies-Project/login' element={<Login/>}/> 
      </Routes>
    </div>
    </Router>
    </MovieState>
  );
}

export default App;
