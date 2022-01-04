import { Tabs, Typography } from "antd"
import Postabs from "./postabs/postabs";
import Aboutabs from './aboutTabs/about'
const { TabPane } = Tabs;
const Profiletabs = () =>{
    const { Title } = Typography;
    return(
        <>
        <div>
        <Tabs id='userTabs' defaultActiveKey="1" centered size='large'>
                <TabPane tab={<Title level={5}>Posts</Title>} key="1">
                    <Postabs/>
                </TabPane>
                <TabPane tab={<Title level={5}>About</Title>} key="2">
                    <Aboutabs/>
                </TabPane>
                <TabPane tab={<Title level={5}>Photos</Title>} key="3">
                </TabPane>
            </Tabs>        </div>
        </>
    )
}

export default Profiletabs