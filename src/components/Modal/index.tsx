import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import type { IGatsbyImageData } from 'gatsby-plugin-image';
import React, { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import CloseIcon from '../../assets/svg/Close';

interface ModalProps {
  isOpen: boolean;
  imageData?: IGatsbyImageData | ImageData;
  bgColor?: string;
  children?: ReactNode;
  showCloseBtn?: boolean;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  closeModal,
  imageData,
  bgColor,
}) => {
  const modalClass = isOpen ? 'modal-overlay' : 'hidden';
  const modalRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && modalRef.current === event.target) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closeModal]);
  return (
    <div className="modal-container">
      {isOpen && (
        <div ref={modalRef} className={modalClass}>
          <div className="modal" style={{ background: bgColor ?? '' }}>
            {imageData && (
              <div className="image-container">
                {imageData && 'images' in imageData && getImage(imageData) && (
                  <GatsbyImage image={getImage(imageData)!} alt="Modal Image" />
                )}
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
