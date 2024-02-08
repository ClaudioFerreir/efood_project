import styled from 'styled-components'
import { cores } from '../../styles'

export const Header = styled.header`
  height: 186px;
`

export const HeaderContent = styled.div`
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
`
