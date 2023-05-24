import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './componets/Home.jsx';
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </>
  )
}

export default App
