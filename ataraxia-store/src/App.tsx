import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Homepage from './pages/Homepage/Homepage'
import GalleryPage from './pages/GalleryPage/GalleryPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/gallery' element={<GalleryPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
