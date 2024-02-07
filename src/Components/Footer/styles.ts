import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterMainContainer = styled.footer`
  background-color: ${cores.ligthYellow};
  height: 298px;
  padding: 40px 0;
  margin-top: 120px;
`

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > img {
    margin-bottom: 32px;
    width: 125px;
  }

  p {
    text-align: center;
    width: 480px;
    font-size: 10px;
    margin-top: 80px;
  }
`
