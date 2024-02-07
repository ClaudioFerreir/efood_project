import FoodCard from '../FoodCard'
import { Banner, ListContainer, Title } from './styles'

import perfilBanner from '../../assets/images/perfilBanner.png'

const FoodList = () => (
  <>
    <Banner style={{ backgroundImage: `url(${perfilBanner})` }}>
      <Title className="container">
        <p>
          <span>Italiana</span>
        </p>
        <h2>La Dolce Vita Trattoria</h2>
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

export default FoodList
