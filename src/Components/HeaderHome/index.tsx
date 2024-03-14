import logo from '../../assets/images/logo.svg'
import bannerImg from '../../assets/images/Vector.svg'

import { Imagem, Titulo } from './styles'

const HeaderHome = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <img src={logo} alt="efood logo" />
    <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
  </Imagem>
)

export default HeaderHome
