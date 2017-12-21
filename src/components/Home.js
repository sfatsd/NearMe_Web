import React from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key);
}



export class Home extends React.Component {
    render() {
        return (
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Posts" key="1">Content of Tab Pane 1</TabPane>
                <TabPane tab="Map" key="2">Content of Tab Pane 2</TabPane>
            </Tabs>
        );
    }
}