import RestaurantCard from '../RestaurantCard'

import { ListContainer } from './styles'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <>
    <ListContainer className="container">
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          id={restaurant.id}
          image={restaurant.capa}
          tag={restaurant.tipo}
          favorite={restaurant.destacado}
          title={restaurant.titulo}
          rate={restaurant.avaliacao}
          description={restaurant.descricao}
          to={`/perfil/${restaurant.id}`}
        />
      ))}
    </ListContainer>
  </>
)

export default RestaurantsList
