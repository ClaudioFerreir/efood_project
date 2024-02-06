import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
)

export default Rotas
