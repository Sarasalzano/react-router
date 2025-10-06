import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from "./pages/Homepage";
import Layout from './components/Layout';
import About from './pages/About';
import Products from './pages/Products';

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        {/* Route nesting: il genitore Layout raggiunge le route figlie */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}/>
          <Route path="about" element={<About />}/>
          <Route path="products" element={<Products />}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
