import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 186px;
`

export const HeaderContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  font-weight: 900;
  font-size: 18px;

  & > p {
    display: flex;
    justify-self: flex-end;
  }

  & > img {
    justify-self: center;
  }
`
