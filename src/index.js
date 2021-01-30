import React from 'react'
import ReactDOM from 'react-dom'

import { Root } from './root'
import 'antd/dist/antd.css'
import './utils/styles.css'
const rootElement = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  rootElement
)
