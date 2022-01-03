import { Modal } from "antd"
import { useState } from "react";
import Uploadimage from "./uploadimage";
import './profile.css'
import { CameraFilled } from '@ant-design/icons';
const Profilephotomodal = () =>{
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return(
        <>
                                        <button  onClick={showModal}> <CameraFilled style={{fontSize:20}}/></button>

                   <Modal
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={[
                ]}
            >
<Uploadimage pic={'profile'} />
</Modal>
        </>
    )
}
export default Profilephotomodal