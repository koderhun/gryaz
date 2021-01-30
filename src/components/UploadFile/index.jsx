import React from 'react'
import { Upload, message, Button } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { BtnCss } from '../../utils/styled'

export const UploadFile = ({ onUpload }) => {
  return (
    <Upload
      {...{
        multiple: false,
        name: 'file',
        action: 'https://run.mocky.io/v3/a1b4bdac-2953-4cbc-9d8a-b3c76b1904dc',
        headers: {},
        onChange(info) {
          console.log('info', info)

          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList)
          }
          if (info.file.status === 'done') {
            console.info('done', info)
            console.log('ffff', info.file.response.data)
            onUpload(info.file.response.data)
            message.success(`${info.file.name} file uploaded successfully`)
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`)
          }
        }
      }}
    >
      <Button
        shape="round"
        size="large"
        type="primary"
        className={BtnCss}
        style={{ color: 'black', marginTop: '15px' }}
        icon={<UploadOutlined />}
      >
        Загрузить файл
      </Button>
    </Upload>
  )
}
