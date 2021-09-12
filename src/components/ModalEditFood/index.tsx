import { useRef } from "react";
import { FiCheckSquare } from "react-icons/fi";
import Modal from '../Modal';
import Input from "../Input";
import { Form } from "./styles";
import { ModalEditFoodProps } from './types';
import { SubmitHandler } from "@unform/core";
import { Food } from "../../types/Food";

export const ModalEditFood = ({
  isOpen,
  setIsOpen,
  editingFood,
  handleUpdateFood
}: ModalEditFoodProps) => {
  const formRef = useRef(null);

  const handleSubmit: SubmitHandler<Food> = async (data) => {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input icon="" name="image" placeholder="Cole o link aqui" />

        <Input icon="" name="name" placeholder="Ex: Moda Italiana" />
        <Input icon="" name="price" placeholder="Ex: 19.90" />

        <Input icon="" name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

export default ModalEditFood;
