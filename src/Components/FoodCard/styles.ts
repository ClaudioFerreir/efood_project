import styled from 'styled-components'

import { cores } from '../../styles'

export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 32px;
  column-gap: 32px;
  padding-top: 56px;
`

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  height: 338px;
  width: 320px;
  background-color: ${cores.salmon};
  color: ${cores.ligthYellow};
  padding: 8px;
  justify-content: space-between;

  h3 {
    font-size: 16px;
    font-weight: 900;
    margin-bottom: 8px;
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

export const CardCover = styled.div`
  cursor: pointer;
`

export const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 8px;
`

export const ImageThumbNail = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
  cursor: pointer;
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

//Modal

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 1;
  display: none;

  &.visible {
    display: flex;
  }
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

  button {
    margin-top: 16px;
  }
`
