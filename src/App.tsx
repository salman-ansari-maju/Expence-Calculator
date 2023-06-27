import { ChangeEvent, useState } from "react";
import Display_comp from "./components/Income_Expence_Display";

import "./App.css";

type FORMS = {
  title: string;
  amount: string;
};

function App() {
  const [list, setList] = useState<FORMS[]>([]);

  const [form, setForm] = useState<FORMS>({
    title: "",
    amount: "",
  });

  // console.log(array);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const balance = list.reduce((prev, current) => {
    return current.amount === "" || NaN
      ? prev
      : prev + parseInt(current.amount);
  }, 0);

  const submitForm = () => {
    setList([...list, form]);
    // setArray((prev) => [...prev, form]);
  };

  return (
    <div className="flex justify-center p-40 ">
      <div className="flex flex-col justify-center items-center ">
        <span className=" text-3xl "> Expense Calculator</span>
        <div className=" text-2xl">
          Current Balance <br /> {balance} $
        </div>

        <div>
          <Display_comp data={list} />
        </div>
        <div>
          <input
            type="string"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            className="block w-40 p-2 ml-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-500 sm:text-md "
          />
          <br />

          <input
            type="numbar"
            name="amount"
            id="numericInput"
            placeholder="Amount"
            value={form.amount}
            onChange={handleChange}
            className="block w-40 p-2 ml-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-500 sm:text-md "
          />
          <button
            className="block w-40 p-4 m-3 text-gray-900 border border-gray-300 rounded-lg bg-blue-300 sm:text-md"
            onClick={submitForm}
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
