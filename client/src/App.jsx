import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from "./componets/home/Home";
import Notify from './componets/notify/Notify';
function App() {

  return (
    <>
   
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/notify' element={<Notify/>}></Route>
      </Routes>
    </>
  )
}

export default App
