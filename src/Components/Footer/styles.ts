import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const FooterMainContainer = styled.footer`
  background-color: ${colors.ligthYellow};
  height: 298px;
  padding: 40px 0;
  margin-top: 120px;
`

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    text-align: center;
    width: 480px;
    font-size: 10px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    p {
      width: 100%;
    }
  }
`

export const Links = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 32px;
  margin-bottom: 80px;
`

export const Link = styled.li`
  margin-right: 8px;

  & > img {
    width: 125px;
  }
`
