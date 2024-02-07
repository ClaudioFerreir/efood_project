import pizza from '../../assets/images/image3.png'
import { Card } from './styles'

const FoodCard = () => (
  <Card>
    <img src={pizza} alt="" />
    <h3>Pizza Marguerita</h3>
    <p>
      A clássica Marguerita: molho de tomate suculento, mussarela derretida,
      manjericão fresco e um toque de azeite. Sabor e simplicidade!
    </p>
    <button>Adicionar ao carrinho</button>
  </Card>
)

export default FoodCard
