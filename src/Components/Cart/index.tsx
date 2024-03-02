import { useDispatch, useSelector } from 'react-redux'

import { remove } from '../../store/reducers/cart'

import { RootReducer } from '../../store'

import Button from '../Button'

import Sidebar from '../Sidebar'

import { CartItem, CartItemContent, Price } from './styles'

import { formataPreco } from '../FoodCard'

const Cart = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return items.reduce((acc, item) => {
      return (acc += item.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <Sidebar>
      <>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} />
              <CartItemContent>
                <h3>{item.nome}</h3>
                <p>{formataPreco(item.preco)}</p>
              </CartItemContent>
              <button type="button" onClick={() => removeItem(item.id)} />
            </CartItem>
          ))}
        </ul>
        <Price>
          <p>Valor total</p>
          <span>{formataPreco(getTotalPrice())}</span>
        </Price>
        <Button title="siga para a entrega">Continuar com a entrega</Button>
      </>
    </Sidebar>
  )
}

export default Cart
