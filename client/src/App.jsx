import './App.css'
import { Routes, Route } from 'react-router-dom';
import Lpage from './components/landing/landing';
import Home from './components/home/homepage';
import Detail from './components/detailspage/detailsPokemon';

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Lpage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:name' element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App;
