import { useDispatch, useSelector } from 'react-redux'

import { close } from '../../store/reducers/cart'

import { RootReducer } from '../../store'

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

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
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
          <span>R$ 182,70</span>
        </Price>
        <Button title="siga para a entrega">Continuar com a entrega</Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
