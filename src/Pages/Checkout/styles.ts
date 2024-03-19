import styled from 'styled-components'

import { colors } from '../../styles'

import deleteItem from '../../assets/icons/lixeira-de-reciclagem.png'

type InputGroupProps = {
  $maxWidth?: string
}

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`
export const SidebarContent = styled.aside`
  background-color: #e66767;
  width: 360px;
  z-index: 1;
  padding: 32px 8px 0 8px;
  }

  button {
    max-width: 100%;
    width: 100%;
  }
`

export const CartContainer = styled.div`
  overflow-y: auto;
  max-height: calc(100vh - 56px);

  &.is-delivery-open {
    display: none;
  }

  .empty-text {
    text-align: center;
    color: ${colors.ligthYellow};
    line-height: 22px;
    line-weight: 700;
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
    cursor: pointer;
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
    margin-top: 8px;
    padding: 8px;
    background-color: ${colors.ligthYellow};
    border: 1px solid ${colors.ligthYellow};
    font-weight: 700;
    font-size: 14px;

    &.error {
      border: 1px solid ${colors.red};
    }
  }

  small {
    display: block;
    margin-bottom: 8px;
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
