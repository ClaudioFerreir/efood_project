import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { FaShoppingCart } from 'react-icons/fa'
import { MdHome } from 'react-icons/md'

import {
  CartButton,
  CartMobile,
  Header,
  HeaderContent,
  HomeLink,
  LinkMobile
} from './styles'

import bannerImg from '../../assets/images/Vector.svg'

import { open } from '../../store/reducers/cart'

import logo from '../../assets/images/logo.svg'

const PerfilHeader = () => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  const { items } = useSelector((state: RootReducer) => state.cart)

  return (
    <Header style={{ backgroundImage: `url(${bannerImg})` }}>
      <HeaderContent className="container">
        <HomeLink to="/">Restaurantes</HomeLink>
        <LinkMobile to="/">
          <MdHome size={32} />
        </LinkMobile>
        <img src={logo} alt="efood logo" />
        <CartButton onClick={openCart}>
          <span>{items.length}</span>&nbsp; produto(s) no carrinho
        </CartButton>
        <CartMobile onClick={openCart}>
          <span>{items.length}</span>
          <FaShoppingCart size={24} />
        </CartMobile>
      </HeaderContent>
    </Header>
  )
}

export default PerfilHeader
