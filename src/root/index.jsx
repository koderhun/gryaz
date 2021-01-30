import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// import { Navigate } from "./Navigate";
import { css } from '@emotion/css'
import { App } from './App'
import { Provider } from 'react-redux'
import { store } from '../store'
import { Layout } from 'antd'
import { HeaderComponent } from '../components'

const { Content, Footer } = Layout

export const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout
          style={{ minHeight: '100vh' }}
          className={css`
            position: relative;
            overflow: hidden;
            &::before {
              content: '';
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              background: url(/resource/note.png) no-repeat 230px -200px;
              background-size: 100%;
              opacity: 0.18;
              filter: blur(10px);
              transform: matrix(-1, 0, 0, 1, 0, 0);
            }
          `}
        >
          <HeaderComponent />
          <Content
            style={{ padding: '20px 50px', zIndex: 2, position: 'relative' }}
          >
            <App />
          </Content>
          <Footer
            style={{
              textAlign: 'center',
              position: 'relative',
              zIndex: '1',
              background: 'transparent'
            }}
          >
            ©2021 Created by Gryaz comand
          </Footer>
        </Layout>
      </BrowserRouter>
    </Provider>
  )
}
