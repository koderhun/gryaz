import React, { useState } from 'react'
import { UploadFile, Signs } from '../../components'
import {
  BanerStyled,
  LeftStyled,
  RightStyled,
  HeadStyled,
  TextStyled
} from './styled'

export const Home = () => {
  const [uploading, setUpload] = useState([])

  return uploading.length > 0 ? (
    <Signs uploading={uploading} />
  ) : (
    <BanerStyled>
      <LeftStyled>
        <HeadStyled>
          Проверь свой файл <br /> на наличие угроз
        </HeadStyled>
        <TextStyled>
          Загрузить файл для анализа угроз <br /> безопасности
        </TextStyled>
        <UploadFile onUpload={setUpload} />
      </LeftStyled>
      <RightStyled />
    </BanerStyled>
  )
}
