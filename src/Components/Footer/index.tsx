import { FooterContainer, FooterMainContainer } from './styles'
import logo from '../../assets/images/logo.svg'

import insta from '../../assets/icons/instagram-round-svgrepo-com (1) 1.png'
import face from '../../assets/icons/Vector.png'
import twit from '../../assets/icons/Group.png'

const Footer = () => (
  <FooterMainContainer>
    <FooterContainer className="container">
      <img src={logo} alt="logo efood" />
      <div>
        <img src={insta} alt="instagram logo" />
        <img src={face} alt="facebook logo" />
        <img src={twit} alt="twiter logo" />
      </div>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </FooterContainer>
  </FooterMainContainer>
)

export default Footer
