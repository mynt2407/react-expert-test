import { Button } from "react-bootstrap";
import ModalCommon from "./ModalComponent";

const ConfirmComponent = ({
    isShow, isHide,
    modalStyle,
    message
}) => {

    return <>
        <ModalCommon
            isShow={isShow}
            isHide={isHide}
            isModalConfirm={true}
            modalStyle={modalStyle}
            isShowHeaderCloseButton={false}
            body={
                <p>{message}</p>
            }
            bodyStyle={{ color: "gray", margin: "20px", textAlign: "center" }}
            footer={
                <>
                    <Button variant="light" style={{ margin: "0px 10px 0 50px", width: "15%" }}>No</Button>
                    <Button variant="light" style={{width: "15%" }} >Yes</Button>
                </>
            }
            footerStyle={{
                backgroundColor: "white",
                color: "black"
            }} />
    </>
}
export default ConfirmComponent;