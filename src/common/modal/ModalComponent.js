import { useCallback } from "react";
import styles from "../../css/modal.module.css";


const ModalCommon = ({
    isModalConfirm,
    modalStyle,
    header, headerStyle,
    body, bodyStyle,
    footer, footerStyle,
    isShow, isHide,
    isShowHeaderCloseButton,
    isAllowClickOutSide = true}) => {

    const hideModal = useCallback((e) => {
        isHide();
        e.stopPropagation();
    }, [isHide]);

    const ignoreOnClick = useCallback((e) => {
        e.stopPropagation();
    }, []);

    const Modal = () => {
        return (
            <div
                className={styles.modalContent}
                style={modalStyle}
                onClick={ignoreOnClick}
            >
                {/* header */}
                {header &&
                    <div
                        className={styles.modalHeader}
                        style={headerStyle}
                        onClick={ignoreOnClick}
                    >
                        {isShowHeaderCloseButton &&
                            <span
                                className={styles.close}
                                onClick={hideModal}
                            >
                                &times;
                            </span>
                        }
                        {header}
                    </div>}

                {/* body */}
                {body && <div
                    className={styles.modalBody}
                    style={bodyStyle}
                    onClick={ignoreOnClick}
                >
                    {body}
                </div>}

                {/* footer */}
                {footer && <div className={styles.modalFooter}
                    style={footerStyle}
                    onClick={ignoreOnClick}
                >
                    {footer}
                </div>}

            </div>
        )
    };

    if (!isShow) {
        return <></>;
    }

    return (
        <>
            {isModalConfirm ?
                <div
                    className={styles.modal}
                    onClick={isAllowClickOutSide ? hideModal : undefined}>
                    <Modal />
                </div>
                : <Modal />
            }
        </>
    )
}
export default ModalCommon;