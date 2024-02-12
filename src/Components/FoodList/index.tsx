import { useParams } from 'react-router-dom'

import FoodCard from '../FoodCard'
import { Banner, ListContainer, Title } from './styles'

import perfilBanner from '../../assets/images/BannerImg.png'

const FoodList = () => {
  const { id } = useParams()

  return (
    <>
      <Banner style={{ backgroundImage: `url(${perfilBanner})` }}>
        <Title className="container">
          <p>
            <span>Italiana</span>
          </p>
          <h2>La Dolce Vita Trattoria {id}</h2>
        </Title>
      </Banner>
      <ListContainer className="container">
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </ListContainer>
    </>
  )
}

export default FoodList
