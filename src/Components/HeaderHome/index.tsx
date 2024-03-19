import logo from '../../assets/images/logo.svg'
import bannerImg from '../../assets/images/Vector.svg'

import * as S from './styles'

const HeaderHome = () => (
  <S.Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <h1>
      <img src={logo} alt="EFOOD" />
    </h1>
    <S.Title>Viva experiências gastronômicas no conforto da sua casa</S.Title>
  </S.Image>
)

export default HeaderHome
