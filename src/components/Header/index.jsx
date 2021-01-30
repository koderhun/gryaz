import React from 'react'
import { NavLink } from 'react-router-dom'
import { Layout } from 'antd'
import { css } from '@emotion/css'
import { Container } from '../../utils/styled'
import { Nav, HeaderContainer } from './styled'
import { Logo } from '../Logo'
const { Header } = Layout

const activeStyle = { borderColor: 'rgb(255, 190, 33)' }

export const HeaderComponent = () => {
  return (
    <Header
      className={css`
        background: transparent !important;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100px !important;
        position: relative;
        z-index: 3;
      `}
    >
      <Container>
        <HeaderContainer>
          <Logo />
          <Nav>
            <NavLink exact to="/" activeStyle={activeStyle}>
              Главная
            </NavLink>
            <NavLink to="/about" activeStyle={activeStyle}>
              О нас
            </NavLink>
            <NavLink to="/aboutProject" activeStyle={activeStyle}>
              О проекте
            </NavLink>
            <NavLink to="/contact" activeStyle={activeStyle}>
              Контакты
            </NavLink>
          </Nav>
        </HeaderContainer>
      </Container>
    </Header>
  )
}
