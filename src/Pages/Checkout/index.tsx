import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { parseToBrl } from '../../utils'

import { remove } from '../../store/reducers/cart'
import { close } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import Button from '../../Components/Button'

import { usePurchaseMutation } from '../../services/api'

import * as S from './styles'

type currentScreenState = 'cart' | 'delivery' | 'payment'

const Checkout = () => {
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart)
  const [currentScreen, setCurrrentScreen] =
    useState<currentScreenState>('cart')

  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acc, item) => {
      if (item.preco) {
        return (acc += item.preco)
      }
      return 0
    }, 0)
  }

  const cartHasItems = () => {
    if (items.length > 0) {
      return setCurrrentScreen('delivery')
    }
    return closeCart()
  }

  const backToShopping = () => {
    if (currentScreen === 'cart') {
      return closeCart()
    }
    return null
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
    const hasError = isTouched && isInvalid

    return [hasError, hasError ? message || '' : '']
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
    <S.SidebarContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={backToShopping} />
      <S.SidebarContent>
        <>
          {isSuccess && data ? (
            <div>
              <S.CheckoutContainer>
                <h2>Pedido realizado - {data.orderId}</h2>
                <p className="margin-bottom">
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço
                  fornecido.
                  <br /> <br />
                  Gostaríamos de ressaltar que nossos entregadores não estão
                  autorizados a realizar cobranças extras. <br /> <br />
                  Lembre-se da importância de higienizar as mãos após o
                  recebimento do pedido, garantindo assim sua segurança e
                  bem-estar durante a refeição. <br /> <br />
                  Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite!
                </p>
                <Button title="Conluir">Concluir</Button>
              </S.CheckoutContainer>
            </div>
          ) : (
            <div>
              <div>
                {currentScreen === 'cart' && (
                  <S.CartContainer
                    style={{
                      display: currentScreen === 'cart' ? 'block' : 'none'
                    }}
                  >
                    {items.length > 0 ? (
                      <>
                        <ul>
                          {items.map((item) => (
                            <S.CartItem key={item.id}>
                              <img src={item.foto} />
                              <S.CartItemContent>
                                <h3>{item.nome}</h3>
                                <p>{parseToBrl(item.preco)}</p>
                              </S.CartItemContent>
                              <button
                                type="button"
                                onClick={() => removeItem(item.id)}
                              />
                            </S.CartItem>
                          ))}
                        </ul>
                        <S.Price>
                          <p>Valor total</p>
                          <span>{parseToBrl(getTotalPrice())}</span>
                        </S.Price>
                        <Button
                          title="siga para a entrega"
                          onClick={cartHasItems}
                        >
                          Continuar com a entrega
                        </Button>
                      </>
                    ) : (
                      <p className="empty-text">
                        O carrinho está vazio, adicione pelo menos um item para
                        continuar a compra
                      </p>
                    )}
                  </S.CartContainer>
                )}
              </div>
              <form onSubmit={form.handleSubmit}>
                <div>
                  {currentScreen === 'delivery' && (
                    <S.CheckoutContainer
                      style={{
                        display: currentScreen === 'delivery' ? 'block' : 'none'
                      }}
                    >
                      <h2>Entrega</h2>
                      <S.Row>
                        <S.InputGroup>
                          <label htmlFor="receiver">Quem irá receber</label>
                          <input
                            type="text"
                            id="receiver"
                            name="receiver"
                            value={form.values.receiver}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              getErrorMessage('receiver')[0] ? 'error' : ''
                            }
                          />
                          <small>
                            {
                              getErrorMessage(
                                'receiver',
                                form.errors.receiver
                              )[1]
                            }
                          </small>
                        </S.InputGroup>
                      </S.Row>
                      <S.Row>
                        <S.InputGroup>
                          <label htmlFor="addressDescription">Endereço</label>
                          <input
                            type="text"
                            id="addressDescription"
                            name="addressDescription"
                            value={form.values.addressDescription}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              getErrorMessage('addressDescription')[0]
                                ? 'error'
                                : ''
                            }
                          />
                          <small>
                            {
                              getErrorMessage(
                                'addressDescription',
                                form.errors.addressDescription
                              )[1]
                            }
                          </small>
                        </S.InputGroup>
                      </S.Row>
                      <S.Row>
                        <S.InputGroup>
                          <label htmlFor="addressCity">Cidade</label>
                          <input
                            type="text"
                            id="addressCity"
                            name="addressCity"
                            value={form.values.addressCity}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              getErrorMessage('addressCity')[0] ? 'error' : ''
                            }
                          />
                          <small>
                            {
                              getErrorMessage(
                                'addressCity',
                                form.errors.addressCity
                              )[1]
                            }
                          </small>
                        </S.InputGroup>
                      </S.Row>
                      <S.Row>
                        <S.InputGroup>
                          <label htmlFor="addressZipCode">CEP</label>
                          <input
                            type="text"
                            id="addressZipCode"
                            name="addressZipCode"
                            value={form.values.addressZipCode}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              getErrorMessage('addressZipCode')[0]
                                ? 'error'
                                : ''
                            }
                          />
                          <small>
                            {
                              getErrorMessage(
                                'addressZipCode',
                                form.errors.addressZipCode
                              )[1]
                            }
                          </small>
                        </S.InputGroup>
                        <S.InputGroup>
                          <label htmlFor="addressNumber">Número</label>
                          <input
                            type="text"
                            id="addressNumber"
                            name="addressNumber"
                            value={form.values.addressNumber}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              getErrorMessage('addressNumber')[0] ? 'error' : ''
                            }
                          />
                          <small>
                            {
                              getErrorMessage(
                                'addressNumber',
                                form.errors.addressNumber
                              )[1]
                            }
                          </small>
                        </S.InputGroup>
                      </S.Row>
                      <S.Row>
                        <S.InputGroup>
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
                            className={
                              getErrorMessage('addressComplement')[0]
                                ? 'error'
                                : ''
                            }
                          />
                          <small>
                            {
                              getErrorMessage(
                                'addressComplement',
                                form.errors.addressComplement
                              )[1]
                            }
                          </small>
                        </S.InputGroup>
                      </S.Row>
                      <S.ButtonContainer>
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
                      </S.ButtonContainer>
                    </S.CheckoutContainer>
                  )}
                </div>
                <div>
                  {currentScreen === 'payment' && (
                    <S.CheckoutContainer>
                      <h2>
                        Pagamento - Valor a pagar {parseToBrl(getTotalPrice())}
                      </h2>
                      <S.Row>
                        <S.InputGroup>
                          <label htmlFor="paymentCardName">
                            Nome no cartão
                          </label>
                          <input
                            type="text"
                            id="paymentCardName"
                            name="paymentCardName"
                            value={form.values.paymentCardName}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              getErrorMessage('paymentCardName')[0]
                                ? 'error'
                                : ''
                            }
                          />
                          <small>
                            {
                              getErrorMessage(
                                'paymentCardName',
                                form.errors.paymentCardName
                              )[1]
                            }
                          </small>
                        </S.InputGroup>
                      </S.Row>
                      <S.Row>
                        <S.InputGroup>
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
                            className={
                              getErrorMessage('paymentCardNumber')[0]
                                ? 'error'
                                : ''
                            }
                          />
                          <small>
                            {
                              getErrorMessage(
                                'paymentCardNumber',
                                form.errors.paymentCardNumber
                              )[1]
                            }
                          </small>
                        </S.InputGroup>
                        <S.InputGroup $maxWidth="87px">
                          <label htmlFor="paymentCardCode">CVV</label>
                          <input
                            type="text"
                            id="paymentCardCode"
                            name="paymentCardCode"
                            value={form.values.paymentCardCode}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              getErrorMessage('paymentCardCode')[0]
                                ? 'error'
                                : ''
                            }
                          />
                          <small>
                            {
                              getErrorMessage(
                                'paymentCardCode',
                                form.errors.paymentCardCode
                              )[1]
                            }
                          </small>
                        </S.InputGroup>
                      </S.Row>
                      <S.Row>
                        <S.InputGroup>
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
                            className={
                              getErrorMessage('paymentCardExpiresMonth')[0]
                                ? 'error'
                                : ''
                            }
                          />
                          <small>
                            {
                              getErrorMessage(
                                'paymentCardExpiresMonth',
                                form.errors.paymentCardExpiresMonth
                              )[1]
                            }
                          </small>
                        </S.InputGroup>
                        <S.InputGroup>
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
                            className={
                              getErrorMessage('paymentCardExpiresYear')[0]
                                ? 'error'
                                : ''
                            }
                          />
                          <small>
                            {
                              getErrorMessage(
                                'paymentCardExpiresYear',
                                form.errors.paymentCardExpiresYear
                              )[1]
                            }
                          </small>
                        </S.InputGroup>
                      </S.Row>
                      <S.ButtonContainer>
                        <Button
                          title="Finalizar o pagamento"
                          onClick={form.handleSubmit}
                          disabled={isLoading}
                        >
                          {isLoading
                            ? 'Finalizando compra...'
                            : 'Finalizar compra'}
                        </Button>
                        <Button
                          title="Voltar para edição de endereço"
                          onClick={() => setCurrrentScreen('delivery')}
                        >
                          Voltar para a edição de endereço
                        </Button>
                      </S.ButtonContainer>
                    </S.CheckoutContainer>
                  )}
                </div>
              </form>
            </div>
          )}
        </>
      </S.SidebarContent>
    </S.SidebarContainer>
  )
}

export default Checkout
