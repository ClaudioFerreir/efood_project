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
  CheckoutContainer,
  InputGroup,
  Price,
  Row
} from './styles'

import { formataPreco } from '../FoodCard'

type currentScreenState = 'cart' | 'delivery' | 'payment'

const Cart = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [currentScreen, setCurrrentScreen] =
    useState<currentScreenState>('cart')

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
        <div>
          {currentScreen === 'cart' && (
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
                onClick={() => setCurrrentScreen('delivery')}
              >
                Continuar com a entrega
              </Button>
            </CartContainer>
          )}
        </div>
        <div>
          {currentScreen === 'delivery' && (
            <CheckoutContainer
              style={{
                display: currentScreen === 'delivery' ? 'block' : 'none'
              }}
            >
              <h2>Entrega</h2>
              <Row>
                <InputGroup>
                  <label htmlFor="receiver">Quem irá receber</label>
                  <input type="text" id="receiver" name="receiver" />
                </InputGroup>
              </Row>
              <Row>
                <InputGroup>
                  <label htmlFor="addressDescription">Endereço</label>
                  <input
                    type="text"
                    id="addressDescription"
                    name="addressDescription"
                  />
                </InputGroup>
              </Row>
              <Row>
                <InputGroup>
                  <label htmlFor="addressCity">Cidade</label>
                  <input type="text" id="addressCity" name="addressCity" />
                </InputGroup>
              </Row>
              <Row>
                <InputGroup>
                  <label htmlFor="addressZipCode">CEP</label>
                  <input
                    type="text"
                    id="addressZipCode"
                    name="addressZipCode"
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="addressNumber">Número</label>
                  <input type="text" id="addressNumber" name="addressNumber" />
                </InputGroup>
              </Row>
              <Row>
                <InputGroup>
                  <label htmlFor="addressComplement">
                    Complemento (opcional)
                  </label>
                  <input
                    type="text"
                    id="addressComplement"
                    name="addressComplement"
                  />
                </InputGroup>
              </Row>
              <ButtonContainer>
                <Button
                  title="Continuar com o pagamento"
                  onClick={() => setCurrrentScreen('payment')}
                >
                  Continuar com o pagamento
                </Button>
                <Button
                  title="Voltar para o carrinho"
                  onClick={() => setCurrrentScreen('cart')}
                >
                  Voltar para o carrinho
                </Button>
              </ButtonContainer>
            </CheckoutContainer>
          )}
        </div>
        <div>
          {currentScreen === 'payment' && (
            <CheckoutContainer>
              <h2>Pagamento - Valor a pagar R$ 190,90</h2>
              <Row>
                <InputGroup>
                  <label htmlFor="paymentCardName">Nome no cartão</label>
                  <input
                    type="text"
                    id="paymentCardName"
                    name="paymentCardName"
                  />
                </InputGroup>
              </Row>
              <Row>
                <InputGroup>
                  <label htmlFor="paymentCardNumber">Número do cartão</label>
                  <input
                    type="text"
                    id="paymentCardNumber"
                    name="paymentCardNumber"
                  />
                </InputGroup>
                <InputGroup $maxWidth="87px">
                  <label htmlFor="paymentCardCode">CVV</label>
                  <input
                    type="text"
                    id="paymentCardCode"
                    name="paymentCardCode"
                  />
                </InputGroup>
              </Row>
              <Row>
                <InputGroup>
                  <label htmlFor="paymentCardExpiresMonth">
                    Mês de vencimento
                  </label>
                  <input
                    type="text"
                    id="paymentCardExpiresMonth"
                    name="paymentCardExpiresMonth"
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="paymentCardExpiresYear">
                    Ano de vencimento
                  </label>
                  <input
                    type="text"
                    id="paymentCardExpiresYear"
                    name="paymentCardExpiresYear"
                  />
                </InputGroup>
              </Row>
              <ButtonContainer>
                <Button title="Finalizar o pagamento">
                  Finalizar pagamento
                </Button>
                <Button
                  title="Voltar para edição de endereço"
                  onClick={() => setCurrrentScreen('delivery')}
                >
                  Voltar para a edição de endereço
                </Button>
              </ButtonContainer>
            </CheckoutContainer>
          )}
        </div>
      </>
    </Sidebar>
  )
}

export default Cart
