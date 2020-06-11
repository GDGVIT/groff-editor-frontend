import React from 'react';
import SplitPane, { Pane } from 'react-split-pane';
import './editor.css';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const Editor = () => {
    let small = 480;
    return(
        <div>
        <h1> This is the editor </h1>

        {window.innerWidth > small ? (
            <SplitPane split="vertical"  defaultSize={600} primary="second" >
                <div initialSize="50%">Groff </div>
                <div initialSize="50%">Preview </div>
            </SplitPane>
        ): (
            <Tabs type="card">
                <TabPane tab="Groff" key="1">
                Content of Tab Pane 1
                </TabPane>
                <TabPane tab="Preview" key="2">
                Content of Tab Pane 2
                </TabPane>
            </Tabs>
        )}



        </div>
    )
}
export default Editor;