import { ButtonContainer } from './styles'

type Props = {
  title: string
  onClick?: () => void
  children: string
  disabled?: boolean
}

const Button = ({ title, onClick, children, disabled }: Props) => (
  <ButtonContainer
    type="button"
    title={title}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </ButtonContainer>
)

export default Button
