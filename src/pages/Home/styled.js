import styled from '@emotion/styled'

export const BanerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 150px;
`

export const LeftStyled = styled.div`
  position: relative;
  z-index: 2;
`
export const RightStyled = styled.div`
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    right: -133px;
    top: -420px;
    background: url('/resource/search-vir.png') no-repeat center;
    background-size: 100% 100%;
    width: 1024px;
    height: 1024px;
    z-index: 1;
  }
`
export const HeadStyled = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 59px;
`
export const TextStyled = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
`
export const ButtonStyled = styled.button``
