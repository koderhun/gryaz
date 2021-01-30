import React from 'react'
import { Table, Tag } from 'antd'
import { css } from '@emotion/css'
import { WarningStyled, TextStyled } from './styled'

const columns = [
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <span>{text}</span>
  },
  {
    title: 'Статус',
    key: 'status',
    dataIndex: 'status',
    render: (tags) => {
      if (tags === 'Обноружен') {
        return <WarningStyled>Обноружен</WarningStyled>
      } else {
        return <TextStyled>Не обноружен</TextStyled>
      }
    }
  }
]

export const SignsTable = ({ uploading }) => {
  console.log('uploading', uploading)

  const data = uploading.map((val, k) => {
    return {
      name: val.name,
      status: val.status ? 'Обноружен' : 'Не обноружен',
      key: k
    }
  })
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        hideOnSinglePage: true,
        position: ['topLeft']
      }}
      bordered={false}
      title={() => ''}
      footer={() => ''}
      className={css`
        border-radius: 40px;
        overflow: hidden;

        thead {
          display: none;
        }

        td {
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 22px;
        }

        .ant-table-title {
          height: 50px;
        }
        .ant-table-footer {
          height: 50px;
          background: white;
        }

        .ant-table-tbody tr:nth-child(odd) {
          background: rgba(196, 196, 196, 0.64);
        }

        .ant-table-tbody tr:nth-child(even) {
          background: rgba(255, 190, 33, 0.5);
        }
      `}
    />
  )
}
