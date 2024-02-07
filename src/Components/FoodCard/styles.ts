import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 338px;
  width: 320px;
  background-color: ${cores.salmon};
  color: ${cores.ligthYellow};
  padding: 8px;

  img {
    width: 100%;
    magin-bottom: 8px;
  }

  h2 {
    font-size: 16px;
    font-weight: 900;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }

  button {
    background-color: ${cores.ligthYellow};
    color: ${cores.salmon};
    border: none;
    font-size: 14px;
    font-weight: 700;
    padding: 4px 0;
    cursor: pointer;
  }
`
