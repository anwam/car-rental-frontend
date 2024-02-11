import PropTypes from "prop-types";
import { formattedPrice } from "../utils/price";

function CarWidget({ name, price, discount }) {
  return (
    <div className="shadow-md bg-gray-100 rounded-xl p-4 flex flex-row justify-between items-center">
      <div>
        <h2 className="text-xl">{name}</h2>
        {discount > 0 ? (
          <div className="flex flex-row gap-x-3">
            <span className="line-through">{formattedPrice(price)}</span>
            <span className="text-red-600">
              {formattedPrice(price - price / discount)}
            </span>
          </div>
        ) : (
          <p>{formattedPrice(price)}</p>
        )}
      </div>
      <button className="bg-primary px-3 py-1 text-sm text-gray-100 rounded flex-grow-0 flex-shrink">
        <span>edit</span>
      </button>
    </div>
  );
}

CarWidget.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  discount: PropTypes.number,
};

export default CarWidget;
