import { useParams } from 'react-router-dom'

import { Banner, Title } from './styles'
import { useGetRestaurantIdQuery } from '../../services/api'
import FoodCard from '../FoodList'

const PerfilHero = () => {
  const { id } = useParams()

  const { data: restaurantInfo } = useGetRestaurantIdQuery(id!)

  if (!restaurantInfo) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Banner style={{ backgroundImage: `url(${restaurantInfo.capa})` }}>
        <Title className="container">
          <p>
            <span>{restaurantInfo.tipo}</span>
          </p>
          <h2>{restaurantInfo.titulo}</h2>
        </Title>
      </Banner>
      <FoodCard items={restaurantInfo.cardapio} />
    </>
  )
}

export default PerfilHero
