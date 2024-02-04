import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  border: 1px solid ${cores.salmon};
  width: 472px;
  position: relative;
  margin-bottom: 48px;

  img {
    width: 100%;
  }
`

export const RestaurantInfo = styled.div`
  padding: 8px;
`

export const RestaurantTag = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  ${TagContainer} {
    margin-left: 8px;
  }
`

export const RestaurantHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
`

export const Rate = styled.span`
  display: flex;

  img {
    margin-left: 8px;
  }
`

export const RestaurantDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  margin-bottom: 16px;
`
