import './App.css';
import { NavBar,Footer } from './pages/Layouts';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomeScreen from './pages/Login';
import DynamicInputs from './pages/DynamicInputs';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/login' element={<WelcomeScreen/>} />
        <Route path='/dynamic-input-fields' element={<DynamicInputs />} />
      </Routes>
    <Footer/>  
    </BrowserRouter>
    </>
  );
}

export default App;
