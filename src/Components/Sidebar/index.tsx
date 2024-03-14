import { useDispatch, useSelector } from 'react-redux'

import { close } from '../../store/reducers/cart'

import { RootReducer } from '../../store'

import * as S from './styles'

type Props = {
  children: JSX.Element
}

const Sidebar = ({ children }: Props) => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <S.SidebarContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SidebarContent>{children}</S.SidebarContent>
    </S.SidebarContainer>
  )
}

export default Sidebar
