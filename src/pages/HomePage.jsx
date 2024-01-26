import { INRFormat } from "../utils/rupees_format";
import { IoMdTrendingUp } from "react-icons/io";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";
import { Bar,Pie } from "react-chartjs-2";

ChartJS.register(ArcElement,BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const HomePage = () => {
  const chartData = {
    labels: ["Mon", "Tue", "Wed","Thu","Fri","Sat","Sun"],
    datasets: [
      {
        label: "Weekly data",
        data: [13, 6, 9,1,2,11,1.5],
        backgroundColor: "#3b81f6"
      },
    ],
  };
  const pieData = {
    labels: ["Data1", "Data2"],
    datasets: [
      {
        label: "Profit data",
        data: [75, 25],
        backgroundColor: "#3b81f6"
      },
    ],
  };
  const options={}
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
              <div>
                <Bar data={chartData} options={options} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-md">
            <div className="text-slate-500"></div>
            <div className="font-[600]">{INRFormat(7)} </div>
            <Pie data={pieData} />
          </div>
          <div className="p-4 bg-white rounded-md">
            <div className="text-slate-500"></div>
            <div className="font-[600]">{INRFormat(7)}</div>
            <Pie data={pieData} />
          </div>
        </div>
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
