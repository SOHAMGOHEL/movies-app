import './App.css';
import Home from './Home'
import Movie from './Movie'
import { Routes , Route } from 'react-router-dom';
import SingleMovie from './SingleMovie';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Movie/:id/:name' element={<SingleMovie/>}/>
    </Routes>
    </>
  );
}

export default App;
