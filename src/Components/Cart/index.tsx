import pizza from '../../assets/images/image3.png'
import Button from '../Button'
import {
  CartContainer,
  CartItem,
  CartItemContent,
  Overlay,
  Price,
  Sidebar
} from './styles'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
          <img src={pizza} />
          <CartItemContent>
            <h3>Pizza Marguerita</h3>
            <p>R$ 60,90</p>
          </CartItemContent>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={pizza} />
          <CartItemContent>
            <h3>Pizza Marguerita</h3>
            <p>R$ 60,90</p>
          </CartItemContent>
          <button type="button" />
        </CartItem>
      </ul>
      <Price>
        <p>Valor total</p>
        <p>R$ 182,70</p>
      </Price>
      <Button title="siga para a entrega">Continuar com a entrega</Button>
    </Sidebar>
  </CartContainer>
)

export default Cart
