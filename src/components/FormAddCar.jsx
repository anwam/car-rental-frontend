import { useState } from "react";
import PropTypes from "prop-types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function FormAddCar({ isOpen, setIsOpen }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newCar) =>
      fetch("http://localhost:1323/cars", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCar),
      }).then((res) => res.json()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["carList"] });
    },
  });

  const handleAddClick = (e) => {
    e.preventDefault();
    const newCar = {
      name: name,
      price: Number(price),
      discount: Number(discount),
    };
    mutation.mutate(newCar);
    setIsOpen(false);
  };

  return (
    <dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="fixed inset-0 w-full max-w-md h-screen bg-gray-400/50 flex flex-col items-center justify-center backdrop-blur-sm"
    >
      <form
        method="dialog"
        className="flex flex-col gap-y-4  max-w-[27rem] w-full mx-auto p-4 border rounded-xl bg-gray-50 border-gray-300"
      >
        <p className="text-xl font-bold">Add Car</p>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          className="p-3 rounded-md"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="price">Price</label>
        <input
          id="price"
          className="p-3 rounded-md"
          type="number"
          placeholder="Price"
          value={Number(price).toString()}
          onChange={(e) => {
            setPrice(Number(e.target.value).toString());
          }}
        />
        <label htmlFor="discount">Discount</label>
        <input
          id="discount"
          className="p-3 rounded-md"
          type="number"
          placeholder="Discount"
          value={Number(discount).toString()}
          onChange={(e) => {
            setDiscount(Number(e.target.value).toString());
          }}
        />
        <div className="flex flex-row">
          <button
            className="rounded-md px-3 py-2 text-sm"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
          <button
            className="bg-primary rounded-md px-3 py-2 text-sm text-white"
            onClick={handleAddClick}
          >
            Add
          </button>
        </div>
      </form>
    </dialog>
  );
}

FormAddCar.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default FormAddCar;
