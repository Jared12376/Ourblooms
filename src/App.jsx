
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Footer from './components/Footer'


import {BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={ <Gallery /> }> </Route>
        <Route path='/about' element={ <About /> }> </Route>
        </Routes>
        <Footer />
      </BrowserRouter>

      
    
    </>
  )
}


export default App
