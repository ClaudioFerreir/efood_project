import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  height: 338px;
  width: 320px;
  background-color: ${cores.salmon};
  color: ${cores.ligthYellow};
  padding: 8px;
  justify-content: space-between;

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

export const ImageContainer = styled.div`
  position: relative;
`

export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.73);
  opacity: 0;
  transition: opacity 0.5s ease;

  &:hover {
    opacity: 1;
  }
`
