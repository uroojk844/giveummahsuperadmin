import { INRFormat } from "../utils/rupees_format";
import { IoMdTrendingUp } from "react-icons/io";

const HomePage = () => {
  const stats = [
    {
      title: "Total amount recieved",
      value: Math.random(9999) * 100000,
    },
    {
      title: "Total amount recieved",
      value: Math.random(9999) * 100000,
    },
    {
      title: "Total amount for donation",
      value: Math.random(9999) * 100000,
    },
    {
      title: "Total transaction initiated",
      value: Math.random(9999) * 100000,
    },
    {
      title: "Total successful transaction",
      value: Math.random(9999) * 100000,
    },
    {
      title: "Total unsuccessful transaction",
      value: Math.random(9999) * 100000,
    },
  ];

  return (
    <section className="px-6 py-2 space-y-6">
      <div className="flex items-start gap-4">
        <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-4">
          {stats.map((data, index) => (
            <div className="p-4 bg-white rounded-md" key={index}>
              <div className="text-slate-500">{data.title}</div>
              <div className="font-[600]">{INRFormat(data.value)}</div>
            </div>
          ))}
        </div>
        <aside className="grid gap-4">
          <div className="p-4 bg-white rounded-md">
            <div className="text-slate-500"></div>
            <div className="font-[600]">{INRFormat(7)}</div>
          </div>
          <div className="p-4 bg-white rounded-md">
            <div className="text-slate-500"></div>
            <div className="font-[600]">{INRFormat(7)}</div>
          </div>
        </aside>
      </div>

      <div className="bg-white p-4 rounded-md">
        <div className="flex items-center gap-4 text-xl text-slate-500 font-[600] mb-4">
          <IoMdTrendingUp size={24} /> Trending campaigns
        </div>
        <div className="overflow-auto">
          <table className="w-full">
            <tr className="flex">
              <th className="">S. No.</th>
              <th className="">Fundraisers</th>
              <th className="">Created on</th>
              <th className="">Expired by</th>
              <th className="">Raised amount</th>
              <th className="">Goal amount</th>
              <th className="">Tip amount</th>
            </tr>
            {"jkldfjklddfgdfh".split("").map((data, index) => (
              <tr className="flex">
                <td className="">{index + 1}</td>
                <td className="">
                  <a href="http://giveummah.com/yhdkuysefdsgjh" target="_blank">
                    http://giveummah.com/yhdkuysefdsgjh
                  </a>
                </td>
                <td className="">23-01-2024</td>
                <td className="">23-03-2024</td>
                <td className="">{INRFormat(74377)}</td>
                <td className="">{INRFormat(100000)}</td>
                <td className="">{INRFormat(17000)}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
