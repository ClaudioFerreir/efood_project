import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Header = styled.header`
  height: 186px;
`

export const HeaderContent = styled.nav`
  display: grid;
  align-items: center;
  padding-top: 64px;
  grid-template-columns: 1fr 1fr 1fr;
  font-weight: 900;
  font-size: 18px;

  & > a {
    color: ${cores.salmon};
    text-decoration: none;
  }

  & > p {
    display: flex;
    justify-self: flex-end;
  }

  & > img {
    justify-self: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const CartButton = styled.a`
  display: flex;
  justify-self: flex-end;
`
