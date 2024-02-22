import Tag from '../Tag'
import {
  Card,
  ImageContainer,
  Rate,
  RestaurantDescription,
  RestaurantHeader,
  RestaurantLink,
  RestaurantTag
} from './styles'

import starImg from '../../assets/icons/star.png'

type Props = {
  id: number
  image: string
  tag: string
  favorite: boolean
  title: string
  rate: number
  description: string
  to: string
}

const RestaurantCard = ({
  id,
  image,
  tag,
  favorite,
  title,
  rate,
  description,
  to
}: Props) => (
  <div>
    <Card>
      <ImageContainer>
        <img src={image} alt="imagem do restaurante" />
        <RestaurantTag>
          {favorite && <Tag key={id}>Destaque da Semana</Tag>}
          <Tag key={tag}>{tag}</Tag>
        </RestaurantTag>
      </ImageContainer>
      <RestaurantHeader>
        <h3>{title}</h3>
        <Rate>
          {rate} <img src={starImg} alt="star rate" />
        </Rate>
      </RestaurantHeader>
      <RestaurantDescription>{description}</RestaurantDescription>
      <RestaurantLink to={to as string}>Saiba mais</RestaurantLink>
    </Card>
  </div>
)

export default RestaurantCard
