import styled from 'styled-components'

import { colors } from '../../styles'

import deleteItem from '../../assets/icons/lixeira-de-reciclagem.png'

type InputGroupProps = {
  $maxWidth?: string
}

export const CartContainer = styled.div`
  &.is-delivery-open {
    display: none;
  }
`

export const CartItem = styled.li`
  background-color: ${colors.ligthYellow};
  margin-bottom: 16px;
  padding: 8px 8px 12px 8px;
  position: relative;
  display: flex;

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  button {
    background-image: url(${deleteItem});
    width: 16px;
    height: 16px;
    background-color: transparent;
    border: none;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`
export const CartItemContent = styled.div`
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
`

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;
  color: ${colors.ligthYellow};
`

export const CheckoutContainer = styled.div`
  color: ${colors.ligthYellow};

  h2 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  .margin-bottom {
    margin-bottom: 24px;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  font-size: 14px;
  font-weight: 700;
  max-width: ${({ $maxWidth }) => ($maxWidth ? $maxWidth : 'auto')};

  label {
    display: block;
  }

  input {
    width: 100%;
    margin: 8px 0;
    padding: 8px;
    background-color: ${colors.ligthYellow};
    border: 1px solid ${colors.ligthYellow};
    font-weight: 700;
    font-size: 14px;
    }
  }

  small {
    display: block;
    margin-bottom: 16px;
  }
`

export const Row = styled.div`
  display: flex;
  gap: 16px 32px;
`

export const ButtonContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`
