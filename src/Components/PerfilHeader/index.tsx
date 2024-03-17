import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/cart'

import { RootReducer } from '../../store'

import { FaShoppingCart } from 'react-icons/fa'
import { MdHome } from 'react-icons/md'
import bannerImg from '../../assets/images/Vector.svg'
import logo from '../../assets/images/logo.svg'

import * as S from './styles'

const PerfilHeader = () => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  const { items } = useSelector((state: RootReducer) => state.cart)

  return (
    <S.Header style={{ backgroundImage: `url(${bannerImg})` }}>
      <S.HeaderContent className="container">
        <S.HomeLink title="Ir para a página de restaurantes" to="/">
          Restaurantes
        </S.HomeLink>
        <S.LinkMobile title="Ip para a página de restaurantes" to="/">
          <MdHome size={32} />
        </S.LinkMobile>
        <img src={logo} alt="efood logo" />
        <S.CartButton
          role="button"
          title="Ir para o carrinho"
          onClick={openCart}
        >
          <span>{items.length}</span>&nbsp; produto(s) no carrinho
        </S.CartButton>
        <S.CartMobile
          role="button"
          title="Ir para o carrinho"
          onClick={openCart}
        >
          <span>{items.length}</span>
          <FaShoppingCart size={24} />
        </S.CartMobile>
      </S.HeaderContent>
    </S.Header>
  )
}

export default PerfilHeader
