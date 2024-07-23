import React, {
  PropsWithChildren,
  RefObject,
  useImperativeHandle,
  useState,
} from "react";
import { createPortal } from "react-dom";

type Props = PropsWithChildren<{
  modalRef: RefObject<{
    open: () => void;
    close: () => void;
    isOpen: boolean;
  }>;
}>;

export const Modal: React.FC<Props> = ({ children, modalRef }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useImperativeHandle(
    modalRef,
    () => ({
      close: () => setIsModalOpen(false),
      open: () => setIsModalOpen(true),
      isOpen: isModalOpen,
    }),
    [isModalOpen]
  );

  if (!isModalOpen) return null;

  return (
    <div>
      {createPortal(
        <div style={{ position: "absolute", left: "50%", top: "50%" }}>
          {children}
        </div>,
        document.body
      )}
    </div>
  );
};
