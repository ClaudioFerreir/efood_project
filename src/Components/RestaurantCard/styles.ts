import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  border: 1px solid ${colors.salmon};
  position: relative;
  height: 100%;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  a {
    display: inline-block;
    background-color: ${colors.salmon};
    padding: 4px 6px;
    text-decoration: none;
    color: ${colors.ligthYellow};
    font-size: 14px;
    align-self: flex-start;
  }
`

export const ImageContainer = styled.div`
  > img {
    width: 100%;
    height: 270px;
    object-fit: cover;
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
  margin-bottom: 16px;
  padding: 8px;
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
  padding: 8px;
`

export const RestaurantLink = styled(Link)`
  margin-bottom: 8px;
  margin-left: 8px;
`
