import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from "./components/Homepage";
import './App.css';

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={{Homepage}}> </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
