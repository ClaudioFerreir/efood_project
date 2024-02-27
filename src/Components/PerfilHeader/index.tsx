import { CartButton, Header, HeaderContent } from './styles'

import bannerImg from '../../assets/images/Vector.svg'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { open } from '../../store/reducers/cart'

import logo from '../../assets/images/logo.svg'

const PerfilHeader = () => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <Header style={{ backgroundImage: `url(${bannerImg})` }}>
      <HeaderContent className="container">
        <Link to="/">Restaurantes</Link>
        <img src={logo} alt="efood logo" />
        <CartButton onClick={openCart}>
          <span>0</span>&nbsp; produto(s) no carrinho
        </CartButton>
      </HeaderContent>
    </Header>
  )
}

export default PerfilHeader
