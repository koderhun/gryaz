import React from 'react'
import { ContactStyled } from './styled'

export const Contact = () => {
  return (
    <ContactStyled>
      <h1>Контакты</h1>
      <ul>
        <li>
          <a href="tg://resolve?domain=en666ki">@en666ki</a>
        </li>
        <li>
          <a href="tg://resolve?domain=sammeron">@sammeron</a>
        </li>
        <li>
          <a href="tg://resolve?domain=EvilCommunist">@EvilCommunist</a>
        </li>
        <li>
          <a href="tg://resolve?domain=koderhan">@Koderhan</a>
        </li>
      </ul>
    </ContactStyled>
  )
}
