import Tag from '../Tag'

import starImg from '../../assets/icons/star.png'

import * as S from './styles'

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
    <S.Card>
      <S.ImageContainer>
        <img src={image} alt="imagem do restaurante" />
        <S.RestaurantTag>
          {favorite && <Tag key={id}>Destaque da Semana</Tag>}
          <Tag key={tag}>{tag}</Tag>
        </S.RestaurantTag>
      </S.ImageContainer>
      <S.RestaurantHeader>
        <h3>{title}</h3>
        <S.Rate>
          {rate} <img src={starImg} alt="star rate" />
        </S.Rate>
      </S.RestaurantHeader>
      <S.RestaurantDescription>{description}</S.RestaurantDescription>
      <S.RestaurantLink
        title="Clique para conhecer os pratos do restaurante"
        to={to as string}
      >
        Saiba mais
      </S.RestaurantLink>
    </S.Card>
  </div>
)

export default RestaurantCard
