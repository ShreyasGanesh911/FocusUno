
import './App.css';
import {BrowserRouter, Routes , Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Task from './components/Task';
import NoteState from './context/NoteState';
import Login from './Login';
import Signup from './components/Signup';
function App() {
  return (
    <>
    <NoteState>
    <BrowserRouter>
    <Navbar/>  
      <Routes>
      <Route path='/login' element={<Login/>}></Route>    
      <Route path='/signup' element={<Signup/>}></Route>    
      <Route path='/' element={<Task/>}></Route>
      </Routes>
      </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
 