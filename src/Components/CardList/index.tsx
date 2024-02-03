import Product from '../Product'
import { ListContainer } from './styles'

const CardList = () => (
  <ListContainer className="container">
    <Product />
    <Product />
    <Product />
  </ListContainer>
)

export default CardList
