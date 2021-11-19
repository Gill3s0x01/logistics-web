import { FC } from 'react'
import { Container } from './styles'

export interface HeaderProps {
  title: string
  description: string
  children?: any
  onPress?: () => void
}

const Header: FC<HeaderProps> = (HeaderProps) => {
  const { title, description, children, ...rest } = HeaderProps

  return (
    <Container>
      <div className="header__inner">
        <div className="header__content">
          <div className="header__content-left">
            <div className="header__title">{title}</div>
            <div className="header__description">{description}</div>
          </div>
          <div className="header__content-right">{children}</div>
        </div>
      </div>
    </Container>
  )
}

export default Header
