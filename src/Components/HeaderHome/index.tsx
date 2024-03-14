import logo from '../../assets/images/logo.svg'
import bannerImg from '../../assets/images/Vector.svg'

import * as S from './styles'

const HeaderHome = () => (
  <S.Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <img src={logo} alt="efood logo" />
    <S.Title>Viva experiências gastronômicas no conforto da sua casa</S.Title>
  </S.Image>
)

export default HeaderHome
