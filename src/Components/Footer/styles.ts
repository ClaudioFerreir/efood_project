import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${cores.ligthYellow};
  height: 298px;
  padding: 40px 0;
  margin-top: 120px;

  & > img {
    margin-bottom: 32px;
  }

  p {
    text-align: center;
    width: 480px;
    font-size: 10px;
    margin-top: 80px;
  }
`
