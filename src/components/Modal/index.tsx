import type { IGatsbyImageData } from 'gatsby-plugin-image';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import type { ReactNode } from 'react';
import React, { useEffect, useRef } from 'react';
import CloseIcon from '../../assets/svg/Close';

interface ModalProps {
  isOpen: boolean;
  closeModal?: () => void;
  imageData?: IGatsbyImageData;
  bgColor?: string;
  children?: ReactNode;
  showCloseBtn?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  closeModal,
  imageData,
  bgColor,
}) => {
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
          <div className="modal" style={{ background: bgColor ?? '' }}>
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
