import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const TagContainer = styled.div`
  display: inline-block;
  background-color: ${cores.salmon};
  color: ${cores.ligthYellow};
  font-weight: bold;
  font-size: 14px;
  border: none;
  padding: 6px 4px;
`

export const TagLink = styled(Link)`
  display: inline-block;
  background-color: ${cores.salmon};
  color: ${cores.ligthYellow};
  font-weight: bold;
  font-size: 14px;
  border: none;
  padding: 4px 6px;
  text-decoration: none;
`
