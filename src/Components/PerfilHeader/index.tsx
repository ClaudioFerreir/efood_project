import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'

import { RootReducer } from '../../store'

import { FaShoppingCart } from 'react-icons/fa'
import { MdHome } from 'react-icons/md'
import bannerImg from '../../assets/images/Vector.svg'
import logo from '../../assets/images/logo.svg'

import {
  CartButton,
  CartMobile,
  Header,
  HeaderContent,
  HomeLink,
  LinkMobile
} from './styles'

const PerfilHeader = () => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  const { items } = useSelector((state: RootReducer) => state.cart)

  return (
    <Header style={{ backgroundImage: `url(${bannerImg})` }}>
      <HeaderContent className="container">
        <HomeLink title="Ir para a página de restaurantes" to="/">
          Restaurantes
        </HomeLink>
        <LinkMobile title="Ip para a página de restaurantes" to="/">
          <MdHome size={32} />
        </LinkMobile>
        <img src={logo} alt="efood logo" />
        <CartButton title="Ir para o carrinho" onClick={openCart}>
          <span>{items.length}</span>&nbsp; produto(s) no carrinho
        </CartButton>
        <CartMobile title="Ir para o carrinho" onClick={openCart}>
          <span>{items.length}</span>
          <FaShoppingCart size={24} />
        </CartMobile>
      </HeaderContent>
    </Header>
  )
}

export default PerfilHeader
