import { ReactNode } from "react";
import { Modal } from "react-bootstrap";
import _close from "./assets/close.svg";
import "./styles.scss";

type IBaseModal = {
  handleClose: any;
  show: any;
  anchorClass: string;
  btnlabel: string;
  backgroundShade: string;
  children: ReactNode;
  modalTitle: string;
};

const BaseModal = (props: IBaseModal) => {
  const {
    handleClose,
    show,
    anchorClass,
    btnlabel,
    backgroundShade,
    children,
    modalTitle,
  } = props;

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        contentClassName={backgroundShade}
      >
        <Modal.Header>
          <Modal.Title>{modalTitle}</Modal.Title>
          <img src={_close} alt="" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        {/* <Modal.Footer>
          <a
            href="javascript:void(0)"
            className={anchorClass}
            onClick={handleClose}
          >
            {btnlabel}
          </a>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};
export default BaseModal;

/** sample usage
 * <BaseModal
        handleClose={untriggerModal}
        show={show}
        anchorClass="modal__anchor"
        btnlabel="Update"
        backgroundShade="modal-background"
        modalTitle="Title goes here"
      >
        hi
      </BaseModal>
 *
 */
