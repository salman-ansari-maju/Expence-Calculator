// type Display_comp = {
//   income: number;
//   expence: number;
// };

type obj = {
  title: string;
  amount: string;
};

interface IDisplay {
  data: obj[];
}

const Display_comp = ({ data }: IDisplay) => {
  return (
    <>
      <ul>
        {data.map((items, key) => (
          <li className=" flex flex-row gap-10 bg-slate-400 w-55 m-1 p-1 rounded-sm border-x-indigo-500">
            <div key={key} className="text-lg">
              <span>{items.title}</span>
            </div>
            <div>
              <span>{items.amount}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Display_comp;
