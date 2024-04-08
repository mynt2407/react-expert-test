import Button from 'react-bootstrap/Button';
import useBoolean from '../hook/useBoolean';
import ModalCommon from '../common/modal/ModalComponent';
import ConfirmComponent from '../common/modal/ConfirmComponent';
import styles from "../css/modal.module.css";

const Exercise2 = () => {

    const [isShowModal1, showModal1, hideModal1] = useBoolean(false);
    const [isShowModal2, showModal2, hideModal2] = useBoolean(false);

    return (
        <div className={styles.marginModal}>
            <h2 style={{ color: "red" }}>Exercise 2</h2>
            <div style={{marginBottom: "100px"}}>
            <Button variant="outline-success" onClick={showModal1}>
                Modal 1
            </Button>

            <Button variant="outline-warning" className={styles.marginModal} onClick={showModal2}>
                Modal 2
            </Button>
            </div>
            {/* Modal 1 */}
            <ConfirmComponent
                isShow={isShowModal1}
                modalStyle={{ width: "20%",  border: "1px solid darkgray" }}
                isHide={hideModal1}
                message={"Are you sure you want to remove this team?"}
                isModal={true}
            />
            {/* Modal 2 */}
            <ModalCommon
                isShow={isShowModal2}
                isHide={hideModal2}
                isModalConfirm={false}
                modalStyle={{ width: "40%",  border: "1px solid darkgray"}}
                header={
                    <>
                        <h2>Billions</h2>
                        <hr />
                    </>
                }
                headerStyle={{
                    backgroundColor: "white",
                    color: "black"
                }}
                isShowHeaderCloseButton={true}
                body={
                    <div className="text-center">
                        <img
                            src={process.env.PUBLIC_URL + '/img/flower.jpg'}
                            alt="img1"
                            width='60%'
                        />
                    </div>
                }
                // bodyStyle
                footer={
                    <>
                        <hr />
                        <h3> Footer</h3>
                        <hr />
                    </>
                }
                footerStyle={{
                    backgroundColor: "white",
                    color: "black"
                }} />
        </div>
    )
}
export default Exercise2;