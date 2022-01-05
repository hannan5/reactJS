import { Tabs, Typography } from "antd"
import Userpostab from "./userpostab";
const { TabPane } = Tabs;
const Usertab = (props) =>{
    const { Title } = Typography;
    return(
        <>
        <div>
        <Tabs id='userTabs' defaultActiveKey="1" centered size='large'>
                <TabPane tab={<Title level={5}>Posts</Title>} key="1">
                    <Userpostab user={props.user}/>
                </TabPane>
                <TabPane tab={<Title level={5}>About</Title>} key="2">
                </TabPane>
                <TabPane tab={<Title level={5}>Photos</Title>} key="3">
                </TabPane>
            </Tabs>        </div>
        </>
    )
}

export default Usertab