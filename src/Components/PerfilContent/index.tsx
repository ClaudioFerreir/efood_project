import { useParams } from 'react-router-dom'

import FoodCard from '../FoodList'
import Loader from '../Loader'

import { useGetRestaurantIdQuery } from '../../services/api'

import * as S from './styles'

type restautantParams = {
  id: string
}

const PerfilContent = () => {
  const { id } = useParams() as restautantParams

  const { data: restaurantInfo } = useGetRestaurantIdQuery(id)

  if (!restaurantInfo) {
    return <Loader />
  }

  return (
    <>
      <S.Banner style={{ backgroundImage: `url(${restaurantInfo.capa})` }}>
        <S.Title className="container">
          <p>
            <span>{restaurantInfo.tipo}</span>
          </p>
          <h2>{restaurantInfo.titulo}</h2>
        </S.Title>
      </S.Banner>
      <FoodCard items={restaurantInfo.cardapio} />
    </>
  )
}

export default PerfilContent
