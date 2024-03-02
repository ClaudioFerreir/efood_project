import { useDispatch, useSelector } from 'react-redux'

import { close } from '../../store/reducers/cart'

import { RootReducer } from '../../store'

import { SidebarContainer, Overlay, SidebarContent } from './styles'

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
    <SidebarContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SidebarContent>{children}</SidebarContent>
    </SidebarContainer>
  )
}

export default Sidebar
