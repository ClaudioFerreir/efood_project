import { TagContainer, TagLink } from './styles'

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
      <TagLink to={to as string} title={title} onClick={onClick}>
        {children}
      </TagLink>
    )
  }
  return <TagContainer>{children}</TagContainer>
}

export default Tag
