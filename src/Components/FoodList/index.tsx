import { ListContainer } from './styles'

import { CardapioItem } from '../../Pages/Home'
import FoodCard from '../FoodCard'

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
