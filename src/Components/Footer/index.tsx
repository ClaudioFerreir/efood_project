import { FooterContainer, FooterMainContainer, Link, Links } from './styles'
import logo from '../../assets/images/logo.svg'

import insta from '../../assets/icons/instagram-round-svgrepo-com (1) 1.png'
import face from '../../assets/icons/Vector.png'
import twit from '../../assets/icons/Group.png'

const Footer = () => (
  <FooterMainContainer>
    <FooterContainer className="container">
      <img src={logo} alt="logo efood" />
      <Links>
        <Link>
          <a href="#">
            <img src={insta} alt="instagram logo" />
          </a>
        </Link>
        <Link>
          <a href="#">
            <img src={face} alt="facebook logo" />
          </a>
        </Link>
        <Link>
          <a href="#">
            <img src={twit} alt="twiter logo" />
          </a>
        </Link>
      </Links>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </FooterContainer>
  </FooterMainContainer>
)

export default Footer
