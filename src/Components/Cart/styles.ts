import styled from 'styled-components'

import { cores } from '../../styles'

import deleteItem from '../../assets/icons/lixeira-de-reciclagem.png'
import { ButtonContainer } from '../Button/styles'

export const CartContainer = styled.div`
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
export const Sidebar = styled.aside`
  background-color: #e66767;
  width: 360px;
  z-index: 1;
  padding: 32px 8px 0 8px;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`
export const CartItem = styled.li`
  background-color: ${cores.ligthYellow};
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
  color: ${cores.ligthYellow};
`
