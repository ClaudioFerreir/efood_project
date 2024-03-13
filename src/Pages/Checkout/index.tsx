import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { remove } from '../../store/reducers/cart'

import { RootReducer } from '../../store'

import Button from '../../Components/Button'

import Sidebar from '../../Components/Sidebar'

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

import { formataPreco } from '../../Components/FoodCard'

import { usePurchaseMutation } from '../../services/api'

type currentScreenState = 'cart' | 'delivery' | 'payment'

const Cart = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [currentScreen, setCurrrentScreen] =
    useState<currentScreenState>('cart')

  const [purchase, { isLoading, isError, data, isSuccess }] =
    usePurchaseMutation()

  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return items.reduce((acc, item) => {
      return (acc += item.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const form = useFormik({
    initialValues: {
      receiver: '',
      addressDescription: '',
      addressCity: '',
      addressZipCode: '',
      addressNumber: '',
      addressComplement: '',
      paymentCardName: '',
      paymentCardNumber: '',
      paymentCardCode: '',
      paymentCardExpiresMonth: '',
      paymentCardExpiresYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      addressDescription: Yup.string().required('O campo é obrigatório'),
      addressCity: Yup.string().required('O campo é obrigatório'),
      addressZipCode: Yup.string().required('O campo é obrigatório'),
      addressNumber: Yup.string().required('O campo é obrigatório'),
      addressComplement: Yup.string(),
      paymentCardName: Yup.string().required('O campo é obrigatório'),
      paymentCardNumber: Yup.string().required('O campo é obrigatório'),
      paymentCardCode: Yup.string().required('O campo é obrigatório'),
      paymentCardExpiresMonth: Yup.string().required('O campo é obrigatório'),
      paymentCardExpiresYear: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.addressDescription,
            city: values.addressCity,
            zipCode: values.addressZipCode,
            number: Number(values.addressNumber),
            complement: values.addressComplement
          }
        },
        payment: {
          card: {
            name: values.paymentCardName,
            number: values.paymentCardNumber,
            code: Number(values.paymentCardCode),
            expires: {
              month: Number(values.paymentCardExpiresMonth),
              year: Number(values.paymentCardExpiresYear)
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  const FormDeliveryValid = () => {
    return (
      !form.errors.receiver &&
      form.touched.receiver &&
      !form.errors.addressDescription &&
      form.touched.addressDescription &&
      !form.errors.addressCity &&
      form.touched.addressCity &&
      !form.errors.addressZipCode &&
      form.touched.addressZipCode &&
      !form.errors.addressNumber &&
      form.touched.addressNumber
    )
  }

  return (
    <Sidebar>
      <>
        {isSuccess ? (
          <div>
            <CheckoutContainer>
              <h2>Pedido realizado - {data.orderId}</h2>
              <p className="margin-bottom">
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
                <br /> <br />
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras. <br /> <br />
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição. <br /> <br />
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
              <Button title="Conluir">Concluir</Button>
            </CheckoutContainer>
          </div>
        ) : (
          <div>
            <div>
              {currentScreen === 'cart' && (
                <CartContainer
                  style={{
                    display: currentScreen === 'cart' ? 'block' : 'none'
                  }}
                >
                  <ul>
                    {items.map((item) => (
                      <CartItem key={item.id}>
                        <img src={item.foto} />
                        <CartItemContent>
                          <h3>{item.nome}</h3>
                          <p>{formataPreco(item.preco)}</p>
                        </CartItemContent>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                        />
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
            <form onSubmit={form.handleSubmit}>
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
                        <input
                          type="text"
                          id="receiver"
                          name="receiver"
                          value={form.values.receiver}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getErrorMessage('receiver', form.errors.receiver)}
                        </small>
                      </InputGroup>
                    </Row>
                    <Row>
                      <InputGroup>
                        <label htmlFor="addressDescription">Endereço</label>
                        <input
                          type="text"
                          id="addressDescription"
                          name="addressDescription"
                          value={form.values.addressDescription}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getErrorMessage(
                            'addressDescription',
                            form.errors.addressDescription
                          )}
                        </small>
                      </InputGroup>
                    </Row>
                    <Row>
                      <InputGroup>
                        <label htmlFor="addressCity">Cidade</label>
                        <input
                          type="text"
                          id="addressCity"
                          name="addressCity"
                          value={form.values.addressCity}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getErrorMessage(
                            'addressCity',
                            form.errors.addressCity
                          )}
                        </small>
                      </InputGroup>
                    </Row>
                    <Row>
                      <InputGroup>
                        <label htmlFor="addressZipCode">CEP</label>
                        <input
                          type="text"
                          id="addressZipCode"
                          name="addressZipCode"
                          value={form.values.addressZipCode}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getErrorMessage(
                            'addressZipCode',
                            form.errors.addressZipCode
                          )}
                        </small>
                      </InputGroup>
                      <InputGroup>
                        <label htmlFor="addressNumber">Número</label>
                        <input
                          type="text"
                          id="addressNumber"
                          name="addressNumber"
                          value={form.values.addressNumber}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getErrorMessage(
                            'addressNumber',
                            form.errors.addressNumber
                          )}
                        </small>
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
                          value={form.values.addressComplement}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getErrorMessage(
                            'addressComplement',
                            form.errors.addressComplement
                          )}
                        </small>
                      </InputGroup>
                    </Row>
                    <ButtonContainer>
                      <Button
                        title="Continuar com o pagamento"
                        onClick={
                          FormDeliveryValid()
                            ? () => setCurrrentScreen('payment')
                            : undefined
                        }
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
                    <h2>
                      Pagamento - Valor a pagar {formataPreco(getTotalPrice())}
                    </h2>
                    <Row>
                      <InputGroup>
                        <label htmlFor="paymentCardName">Nome no cartão</label>
                        <input
                          type="text"
                          id="paymentCardName"
                          name="paymentCardName"
                          value={form.values.paymentCardName}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getErrorMessage(
                            'paymentCardName',
                            form.errors.paymentCardName
                          )}
                        </small>
                      </InputGroup>
                    </Row>
                    <Row>
                      <InputGroup>
                        <label htmlFor="paymentCardNumber">
                          Número do cartão
                        </label>
                        <input
                          type="text"
                          id="paymentCardNumber"
                          name="paymentCardNumber"
                          value={form.values.paymentCardNumber}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getErrorMessage(
                            'paymentCardNumber',
                            form.errors.paymentCardNumber
                          )}
                        </small>
                      </InputGroup>
                      <InputGroup $maxWidth="87px">
                        <label htmlFor="paymentCardCode">CVV</label>
                        <input
                          type="text"
                          id="paymentCardCode"
                          name="paymentCardCode"
                          value={form.values.paymentCardCode}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getErrorMessage(
                            'paymentCardCode',
                            form.errors.paymentCardCode
                          )}
                        </small>
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
                          value={form.values.paymentCardExpiresMonth}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getErrorMessage(
                            'paymentCardExpiresMonth',
                            form.errors.paymentCardExpiresMonth
                          )}
                        </small>
                      </InputGroup>
                      <InputGroup>
                        <label htmlFor="paymentCardExpiresYear">
                          Ano de vencimento
                        </label>
                        <input
                          type="text"
                          id="paymentCardExpiresYear"
                          name="paymentCardExpiresYear"
                          value={form.values.paymentCardExpiresYear}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getErrorMessage(
                            'paymentCardExpiresYear',
                            form.errors.paymentCardExpiresYear
                          )}
                        </small>
                      </InputGroup>
                    </Row>
                    <ButtonContainer>
                      <Button
                        title="Finalizar o pagamento"
                        onClick={form.handleSubmit}
                      >
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
            </form>
          </div>
        )}
      </>
    </Sidebar>
  )
}

export default Cart
