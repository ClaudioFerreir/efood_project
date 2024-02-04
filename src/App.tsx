import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import HeaderHome from './Components/HeaderHome'
import { GlobalCss } from './styles'
import RestaurantsList from './Components/RestaurantsList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <HeaderHome />
        <RestaurantsList />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
