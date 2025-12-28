import React from "react";
interface ModalProps {
  children: React.ReactNode;
}
const Modal = ({ children }: ModalProps) => {
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto 
    md:inset-0 h-modal md:h-full bg-black bg-opacity-50"
    >
      {children}
    </div>
  );
};

export default Modal;
