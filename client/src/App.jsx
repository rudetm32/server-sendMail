import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './componets/Home.jsx';
import NavBar from './componets/NavBar';
function App() {

  return (
    <>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </>
  )
}

export default App
