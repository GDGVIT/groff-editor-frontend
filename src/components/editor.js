import React from 'react';
import SplitPane, { Pane } from 'react-split-pane';
import './editor.css';
import { Tabs } from 'antd';
import Pdf from "react-to-pdf";
import { subscribeToTimer } from '../api';

const { TabPane } = Tabs;
const ref = React.createRef();

class Editor extends React.Component {
    

    constructor(props) {
        super(props);
        subscribeToTimer((err, timestamp) => this.setState({ 
          timestamp 
        }));

      }
      state = {
        timestamp: 'no timestamp yet'
      };
    render(){
    let small = 480;
    return(
        <div>
        <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => <button onClick={toPdf} style={{float:"right"}}>Generate Pdf</button>}
        </Pdf>
        <h1> Online Groff editor </h1>

        {window.innerWidth > small ? (
            <SplitPane split="vertical"  defaultSize={600} primary="second" >
                <div initialSize="50%">Groff </div>
                <div initialSize="50%" ref={ref}>Preview of Groff
                    <p> Timer: {this.state.timestamp}</p>
                </div>
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
}
export default Editor;