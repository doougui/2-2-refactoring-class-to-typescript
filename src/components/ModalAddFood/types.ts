import { Food } from "../../types/Food";

export type ModalAddFoodProps = {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (food: Food) => void;
}