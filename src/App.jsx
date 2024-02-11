import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CarList from "./components/CarList";
import FormAddCar from "./components/FormAddCar";

const queryClient = new QueryClient();

function App() {
  const [isOpenForm, setIsOpenForm] = useState(false);

  const handleOnAddCarClick = () => {
    setIsOpenForm(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto max-w-md flex flex-col h-screen">
        <nav className="bg-gray-100 sticky shadow p-4">
          <a href="/">DriveHub</a>
        </nav>
        <main className="relative bg-gray-200 flex-grow p-4 flex flex-col gap-y-4">
          <h1 className="text-2xl font-bold my-4">Car</h1>
          <button
            className="bg-primary rounded-lg w-full p-4 text-lg text-gray-100"
            onClick={handleOnAddCarClick}
          >
            Add Car
          </button>
          <CarList />
          {isOpenForm ? (
            <FormAddCar
              isOpen={isOpenForm}
              setIsOpen={(bool) => setIsOpenForm(bool)}
            />
          ) : null}
        </main>
        <footer className="bg-base text-gray-100 px-3 py-6">
          <p>
            <strong>Drivehub Co.,Ltd</strong>
          </p>
          <p className="text-sm">
            193-195 Lake Rajada Office Complex, Ratchadapisek road, Khlong Toei,
            Bangkok
          </p>
          <p>© Drivehub 2024</p>
        </footer>
      </div>
    </QueryClientProvider>
  );
}

export default App;
