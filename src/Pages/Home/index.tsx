import { useGetFeaturedRestaurantsQuery } from '../../services/api'

import HeaderHome from '../../Components/HeaderHome'
import RestaurantsList from '../../Components/RestaurantsList'

export type Cardapio = {
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
  cardapios: Cardapio[]
}

const Home = () => {
  const { data: restaurants } = useGetFeaturedRestaurantsQuery()

  if (!restaurants) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderHome />
      <RestaurantsList restaurants={restaurants} />
    </>
  )
}

export default Home
