import { Action, Card, ImageContainer } from './styles'
import zoom from '../../assets/icons/zoom.png'

type Props = {
  title: string
  children: JSX.Element
  image: string
}

const FoodCard = ({ title, image, children }: Props) => (
  <Card>
    <ImageContainer>
      <div>
        <img src={image} alt="Imagem da comida" />
      </div>
      <Action>
        <img src={zoom} alt="Clique aqui para mais detalhes" />
      </Action>
    </ImageContainer>
    <h3>{title}</h3>
    {children}
    <button>Adicionar ao carrinho</button>
  </Card>
)

export default FoodCard
