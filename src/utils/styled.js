import styled from '@emotion/styled'
import { css } from '@emotion/css'

const colors = {
  primary: '#FFBE21'
}

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
`

export const BtnCss = css`
  color: black;
  &:hover {
    border-color: ${colors.primary};
  }
`

export const AboutStyled = styled.div`
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 59px;
  }
`
