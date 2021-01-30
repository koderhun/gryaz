import styled from '@emotion/styled'

export const SignsStyled = styled.div`
  margin-top: 140px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    background: url('/resource/good.png') no-repeat top center;
    background-size: 100% 100%;
    width: 1200px;
    height: 1200px;
    z-index: 0;
    right: -50px;
    top: -100px;
  }

  .ant-tabs-nav {
    margin-bottom: 50px;
  }
`
