import { Food } from "../../types/Food"

export type FoodContainerProps = {
  available: boolean;
}

export type FoodProps = {
  food: Food;
  handleEditFood: (food: Food) => void;
  handleDelete: (food: number) => void;
}