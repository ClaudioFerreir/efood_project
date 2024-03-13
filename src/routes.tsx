import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Perfil from './Pages/Perfil'
import Checkout from './Pages/Checkout'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil/:id" element={<Perfil />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

export default Rotas
