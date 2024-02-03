import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import HeaderHome from './Components/HeaderHome'
import { GlobalCss } from './styles'
import CardList from './Components/CardList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <HeaderHome />
        <CardList />
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
