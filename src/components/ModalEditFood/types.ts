import { Food } from "../../types/Food";

export type ModalEditFoodProps = {
  isOpen: boolean;
  editingFood: Food;
  setIsOpen: () => void;
  handleUpdateFood: (food: Food) => void;
}