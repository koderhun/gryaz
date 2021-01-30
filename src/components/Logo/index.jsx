import React from 'react'
import { Link } from 'react-router-dom'
import { LogoStyled } from './styled'
import { ReactComponent as LogoImg } from './Gryaz.svg'
export const Logo = () => {
  return (
    <LogoStyled>
      <Link to="/">
        <LogoImg />
      </Link>
    </LogoStyled>
  )
}
