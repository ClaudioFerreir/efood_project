import { Header, HeaderContent } from './styles'

import bannerImg from '../../assets/images/Vector.svg'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const PerfilHeader = () => (
  <Header style={{ backgroundImage: `url(${bannerImg})` }}>
    <HeaderContent className="container">
      <Link to="/">Restaurantes</Link>
      <img src={logo} alt="efood logo" />
      <p>
        <span>0</span>&nbsp; produto(s) no carrinho
      </p>
    </HeaderContent>
  </Header>
)

export default PerfilHeader
