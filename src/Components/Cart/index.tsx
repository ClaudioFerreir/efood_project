import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { remove } from '../../store/reducers/cart'

import { RootReducer } from '../../store'

import Button from '../Button'

import Sidebar from '../Sidebar'

import {
  ButtonContainer,
  CartContainer,
  CartItem,
  CartItemContent,
  DeliveryContainer,
  InputGroup,
  Price,
  Row
} from './styles'

import { formataPreco } from '../FoodCard'

const Cart = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [currentScreen, setCurrrentScreen] = useState('cart')

  const handleNextScreen = () => {
    switch (currentScreen) {
      case 'cart':
        setCurrrentScreen('delivery')
        break
      case 'delivery':
        setCurrrentScreen('payment')
        break
      case 'payment':
        setCurrrentScreen('confirmation')
        break
    }
  }

  const handlePreviousScreen = () => {
    switch (currentScreen) {
      case 'delivery':
        setCurrrentScreen('cart')
        break
      case 'payment':
        setCurrrentScreen('delivery')
        break
    }
  }

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
        <CartContainer
          style={{ display: currentScreen === 'cart' ? 'block' : 'none' }}
        >
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
          <Button
            title="siga para a entrega"
            onClick={() => handleNextScreen()}
          >
            Continuar com a entrega
          </Button>
        </CartContainer>
        <DeliveryContainer
          style={{ display: currentScreen === 'delivery' ? 'block' : 'none' }}
        >
          <h2>Entrega</h2>
          <InputGroup>
            <label htmlFor="receiver">Quem irá receber</label>
            <input type="text" id="receiver" name="receiver" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="addressDescription">Endereço</label>
            <input
              type="text"
              id="addressDescription"
              name="addressDescription"
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="addressCity">Cidade</label>
            <input type="text" id="addressCity" name="addressCity" />
          </InputGroup>
          <Row>
            <InputGroup>
              <label htmlFor="addressZipCode">CEP</label>
              <input type="text" id="addressZipCode" name="addressZipCode" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="addressNumber">Número</label>
              <input type="text" id="addressNumber" name="addressNumber" />
            </InputGroup>
          </Row>
          <InputGroup>
            <label htmlFor="addressComplement">Complemento (opcional)</label>
            <input
              type="text"
              id="addressComplement"
              name="addressComplement"
            />
          </InputGroup>
          <ButtonContainer>
            <Button
              title="Continuar com o pagamento"
              onClick={() => handleNextScreen()}
            >
              Continuar com o pagamento
            </Button>
            <Button
              title="Voltar para o carrinho"
              onClick={() => handlePreviousScreen()}
            >
              Voltar para o carrinho
            </Button>
          </ButtonContainer>
        </DeliveryContainer>
      </>
    </Sidebar>
  )
}

export default Cart
