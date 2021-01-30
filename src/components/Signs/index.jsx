import React from 'react'
import { Tabs } from 'antd'
import { SignsTable } from '../SignsTable'
import { SignsStyled } from './styled'
const { TabPane } = Tabs

function callback(key) {
  console.log(key)
}

export const Signs = ({ uploading }) => (
  <SignsStyled>
    <Tabs style={{ width: '100%' }} defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Признаки" key="1">
        <SignsTable uploading={uploading} />
      </TabPane>
      <TabPane tab="Подробности" key="2">
        Content of Tab Pane 2
      </TabPane>
    </Tabs>
  </SignsStyled>
)
