import type { IGatsbyImageData } from 'gatsby-plugin-image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import type { ReactNode } from 'react';
import React, { useEffect, useRef } from 'react';
import CloseIcon from '../../assets/svg/Close';

interface ModalProps {
  isOpen: boolean;
  closeModal?: () => void;
  imageData?: IGatsbyImageData;
  children?: ReactNode;
  showCloseBtn?: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, imageData }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && modalRef.current === event.target) {
        closeModal?.();
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
        <div ref={modalRef} className="modal-overlay">
          <div className="modal">
            {imageData && (
              <div className="image-container">
                {(() => {
                  const image = getImage(imageData);
                  return image ? (
                    <GatsbyImage image={image} alt="Modal Image" />
                  ) : null;
                })()}
              </div>
            )}
            <div className="close-icon-container">
              <CloseIcon onClose={closeModal} size={26} crossSize={14} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
