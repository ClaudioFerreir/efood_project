import styled from 'styled-components'

import { ButtonContainer } from '../Button/styles'

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`
export const SidebarContent = styled.aside`
  background-color: #e66767;
  width: 360px;
  z-index: 1;
  padding: 32px 8px 0 8px;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`
