import * as S from './styles'

type Props = {
  children: string
  title?: string
  to?: string
  useLink?: boolean
  onClick?: () => void
}

const Tag = ({ children, title, to, useLink, onClick }: Props) => {
  if (useLink) {
    return (
      <S.TagLink to={to as string} title={title} onClick={onClick}>
        {children}
      </S.TagLink>
    )
  }
  return <S.TagContainer>{children}</S.TagContainer>
}

export default Tag
