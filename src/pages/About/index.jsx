import React from 'react'
import { AboutStyled, Img, Content } from './styled'

export const About = () => {
  return (
    <AboutStyled>
      <h1>О нас</h1>

      <ul>
        <li>
          <Img>
            <img src="./resource/ava1.jpg" alt="" />
          </Img>
          <Content>
            <h2>Кирилл. Эникей</h2>
            <p>Вонаби датасаентист, вынужденный бекендер.</p>
          </Content>
        </li>

        <li>
          <Img>
            <img src="/resource/ava2.jpg" alt="" />
          </Img>
          <Content>
            <h2>Andrey Tarasenko</h2>
          </Content>
        </li>

        <li>
          <Img>
            <img src="/resource/ava3.jpg" alt="" />
          </Img>
          <Content>
            <h2>Magnet</h2>
            <p>Дизайнер</p>
          </Content>
        </li>

        <li>
          <Img>
            <img src="/resource/ava4.jpg" alt="" />
          </Img>
          <Content>
            <h2>Ramil Koderhan</h2>
            <p>Верстальщик, Фронтенд разработчик, разнорабочий.</p>
          </Content>
        </li>
      </ul>
    </AboutStyled>
  )
}
