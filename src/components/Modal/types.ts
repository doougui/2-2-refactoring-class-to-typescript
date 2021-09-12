import { ReactNode } from "react";

export type ModalProps = {
  isOpen: boolean;
  setIsOpen: () => void;
  children: ReactNode;
}
