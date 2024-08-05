import React, { ReactNode, useEffect, useRef } from "react";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import CloseIcon from "../../assets/svg/Close";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  imageData?: ImageDataLike;
  bgColor?: string;
  children?: ReactNode;
  showCloseBtn?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  closeModal,
  imageData,
  bgColor,
  showCloseBtn,
}) => {
  const modalClass = isOpen ? "modal-overlay" : "hidden";
  const modalRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && modalRef.current === event.target) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeModal]);
  return (
    <div className="modal-container">
      {isOpen && (
        <div ref={modalRef} className={modalClass}>
          <div className="modal" style={{ background: bgColor ?? "" }}>
            {imageData && (
              <div className="image-container">
                <GatsbyImage image={getImage(imageData)} alt="Modal Image" />
              </div>
            )}
            <div className="close-icon-container">
              <CloseIcon
                onClose={closeModal}
                bg="#fff"
                color="#333"
                size={20}
                crossSize={15}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
