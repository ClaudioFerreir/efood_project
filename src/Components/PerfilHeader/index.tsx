import { Header, HeaderContent } from './styles'

import bannerImg from '../../assets/images/Vector.svg'
import logo from '../../assets/images/logo.svg'

const PerfilHeader = () => (
  <Header style={{ backgroundImage: `url(${bannerImg})` }}>
    <HeaderContent className="container">
      <a href="/home">Restaurantes</a>
      <img src={logo} alt="efood logo" />
      <p>
        <span>0 </span> produto(s) no carrinho
      </p>
    </HeaderContent>
  </Header>
)

export default PerfilHeader
