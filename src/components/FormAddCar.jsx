import PropTypes from "prop-types";
function FormAddCar({ isOpen, setIsOpen }) {
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
        />
        <label htmlFor="price">Price</label>
        <input
          id="price"
          className="p-3 rounded-md"
          type="text"
          placeholder="Price"
        />
        <label htmlFor="discount">Discount</label>
        <input
          id="discount"
          className="p-3 rounded-md"
          type="text"
          placeholder="discount"
        />
        <div className="flex flex-row">
          <button
            className="rounded-md px-3 py-2 text-sm"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
          <button className="bg-primary rounded-md px-3 py-2 text-sm text-white">
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
