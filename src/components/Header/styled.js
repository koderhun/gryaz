import styled from '@emotion/styled'

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #000;
    margin-left: 20px;
    padding: 5px 0px;
    border-bottom: 2px solid transparent;
    transition: all 0.2s;

    &:focus,
    &:hover {
      color: black;
      text-decoration: none;
      border-color: rgba(255, 190, 33);
    }
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
  z-index: 2;
`
