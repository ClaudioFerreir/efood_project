import { useEffect, useState } from 'react'

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
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  })

  return (
    <>
      <HeaderHome />
      <RestaurantsList restaurants={restaurants} />
    </>
  )
}

export default Home
