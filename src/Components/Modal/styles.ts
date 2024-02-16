import styled from 'styled-components'
import { cores } from '../../styles'

export const FullModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContainer = styled.div`
  background-color: ${cores.salmon};
  height: 344px;
  color: ${cores.ligthYellow};
  display: flex;
  padding: 32px;
  z-index: 1;
  position: relative;
`

export const CloseTag = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
`

export const FoodImg = styled.img`
  margin-right: 24px;
  max-width: 280px;
  object-fit: cover;
`

export const Description = styled.div`
  h4 {
    font-size: 18px;
    font-weight: 800;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }
`
