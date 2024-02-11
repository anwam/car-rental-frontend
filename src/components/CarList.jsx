import { useQuery } from "@tanstack/react-query";
import CarWidget from "./CarWidget";
function CarList() {
  const { isPending, error, data } = useQuery({
    queryKey: ["carList"],
    queryFn: () =>
      fetch("http://localhost:1323/cars").then((res) => res.json()),
  });

  if (isPending) {
    return <p>Fetching car list...</p>;
  }

  if (error) {
    console.debug(error);
    return <p>Cars list are now unavailable, please try again later.</p>;
  }

  return (
    <div>
      <ul className="flex flex-col gap-y-4">
        {data && data.length > 0 ? (
          data.map((car) => (
            <li id={car.id} key={car.id}>
              <CarWidget
                name={car.name}
                price={car.price}
                discount={car.discount}
              />
            </li>
          ))
        ) : (
          <li className="text-center p-4">
            <p>No Car</p>
          </li>
        )}
      </ul>
    </div>
  );
}

export default CarList;
