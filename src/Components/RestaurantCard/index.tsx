import { Link } from 'react-router-dom'

import Tag from '../Tag'
import {
  Card,
  Rate,
  RestaurantDescription,
  RestaurantHeader,
  RestaurantInfo,
  RestaurantTag
} from './styles'

import starImg from '../../assets/icons/star.png'

type Props = {
  image: string
  infoTags: string[]
  title: string
  rate: number
  description: string
  to: string
}

const RestaurantCard = ({
  image,
  infoTags,
  title,
  rate,
  description,
  to
}: Props) => (
  <div>
    <Card>
      <img src={image} alt="" />
      <RestaurantTag>
        {infoTags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </RestaurantTag>
      <RestaurantInfo>
        <RestaurantHeader>
          <h3>{title}</h3>
          <Rate>
            {rate} <img src={starImg} alt="star rate" />
          </Rate>
        </RestaurantHeader>
        <RestaurantDescription>{description}</RestaurantDescription>
        <Link to={to as string}>Saiba mais</Link>
      </RestaurantInfo>
    </Card>
  </div>
)

export default RestaurantCard
