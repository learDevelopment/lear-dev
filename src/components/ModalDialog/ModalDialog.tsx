import React, { FC } from "react";
import { ModalDialogProps } from "./ModalDialog.model";
import CloseIcon from '../../assets/close.svg'
import './ModalDialog.css'

const ModalDialog: FC<ModalDialogProps> = ({ onClose, title, isOpen, url }) => {
  return (
    <div className={isOpen ? 'modal open' : 'modal'}>
      <div className="modal_content">
        <p className="modal_content_title">{title}</p>
        {url && (
          <div className="modal_content-img">
            <img src={url} alt={title} />
          </div>
        )}
        <div
          onClick={onClose}
          className="modal_content_button"
        >
          <img src={CloseIcon} />
        </div>
      </div>
    </div>
  )
}

export default ModalDialog
