import { useParams } from 'react-router-dom'

import FoodCard from '../FoodList'

import { useGetRestaurantIdQuery } from '../../services/api'

import * as S from './styles'

const PerfilContent = () => {
  const { id } = useParams()

  const { data: restaurantInfo } = useGetRestaurantIdQuery(id!)

  if (!restaurantInfo) {
    return <h3>Carregando...</h3>
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
