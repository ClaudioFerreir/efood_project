import logo from '../../assets/images/logo.svg'
import insta from '../../assets/icons/instagram-round-svgrepo-com (1) 1.png'
import face from '../../assets/icons/Vector.png'
import twit from '../../assets/icons/Group.png'

import * as S from './styles'

const Footer = () => (
  <S.FooterMainContainer>
    <S.FooterContainer className="container">
      <img src={logo} alt="logo efood" />
      <S.Links>
        <S.Link>
          <a href="#">
            <img src={insta} alt="instagram logo" />
          </a>
        </S.Link>
        <S.Link>
          <a href="#">
            <img src={face} alt="facebook logo" />
          </a>
        </S.Link>
        <S.Link>
          <a href="#">
            <img src={twit} alt="twiter logo" />
          </a>
        </S.Link>
      </S.Links>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </S.FooterContainer>
  </S.FooterMainContainer>
)

export default Footer
