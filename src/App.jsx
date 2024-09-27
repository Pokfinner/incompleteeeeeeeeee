
import './App.css'
import ProductsPage from './pages/ProductsPage'
import TodosPage from './pages/TodosPage'
import TodoPage from './pages/TodoPage'
import AboutPage from './pages/AboutPage'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {



  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<TodosPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/:id' element={<TodoPage />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>

    </>
  )
}

export default App
