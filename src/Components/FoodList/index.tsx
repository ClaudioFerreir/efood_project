import FoodCard from '../FoodCard'

import { ListContainer } from './styles'

type Props = {
  items: CardapioItem[]
}

const FoodList = ({ items }: Props) => {
  return (
    <ListContainer className="container">
      {items.map((food) => (
        <FoodCard item={food} key={food.id} />
      ))}
    </ListContainer>
  )
}

export default FoodList
