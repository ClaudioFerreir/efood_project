import { useParams } from 'react-router-dom'

import FoodCard from '../FoodCard'
import { Banner, ListContainer, Title } from './styles'

import perfilBanner from '../../assets/images/BannerImg.png'
import Modal from '../Modal'

import pizza from '../../assets/images/image3.png'
import Food from '../../Model/food'

const mock: Food[] = [
  {
    id: 1,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    price: 60.9
  },
  {
    id: 2,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    price: 60.9
  },
  {
    id: 3,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    price: 60.9
  },
  {
    id: 4,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    price: 60.9
  },
  {
    id: 5,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    price: 60.9
  },
  {
    id: 6,
    image: pizza,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    price: 60.9
  }
]

type Props = {
  title: string
  tag: string
}

const FoodList = ({ title, tag }: Props) => {
  const { id } = useParams()

  return (
    <>
      <Banner style={{ backgroundImage: `url(${perfilBanner})` }}>
        <Title className="container">
          <p>
            <span>{tag}</span>
          </p>
          <h2>
            {title} {id}
          </h2>
        </Title>
      </Banner>
      <ListContainer className="container">
        {mock.map((food) => (
          <FoodCard key={food.id} title={food.title} image={food.image}>
            <p>{food.description}</p>
          </FoodCard>
        ))}
      </ListContainer>
      <Modal />
    </>
  )
}

export default FoodList
