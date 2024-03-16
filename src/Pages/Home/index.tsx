import HeaderHome from '../../Components/HeaderHome'
import RestaurantsList from '../../Components/RestaurantsList'
import Footer from '../../Components/Footer'
import Loader from '../../Components/Loader'

import { useGetRestaurantsQuery } from '../../services/api'

export type CardapioItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (!restaurants) {
    return <Loader />
  }

  return (
    <>
      <HeaderHome />
      <RestaurantsList restaurants={restaurants} />
      <Footer />
    </>
  )
}

export default Home
