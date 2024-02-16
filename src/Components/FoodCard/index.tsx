import pizza from '../../assets/images/image3.png'

import { Action, Card, ImageContainer } from './styles'
import zoom from '../../assets/icons/zoom.png'

const FoodCard = () => (
  <Card>
    <ImageContainer>
      <div>
        <img src={pizza} alt="Imagem da comida" />
      </div>
      <Action>
        <img src={zoom} alt="Clique aqui para mais detalhes" />
      </Action>
    </ImageContainer>
    <h3>Pizza Marguerita</h3>
    <p>
      A clássica Marguerita: molho de tomate suculento, mussarela derretida,
      manjericão fresco e um toque de azeite. Sabor e simplicidade!
    </p>
    <button>Adicionar ao carrinho</button>
  </Card>
)

export default FoodCard
