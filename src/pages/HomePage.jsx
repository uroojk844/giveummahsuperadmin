import { INRFormat } from "../utils/rupees_format";
import { IoMdTrendingUp } from "react-icons/io";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import { useState } from "react";

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const HomePage = () => {
  const weeklyData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Weekly data",
        data: [13000, 6000, 9000, 1000, 22000, 1100, 15000],
        backgroundColor: "#3b81f6",
      },
    ],
  };

  const monthlyData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Weekly data",
        data: [
          13000, 6000, 9000, 1000, 22000, 1100, 15000, 6000, 9000, 1000, 22000,
          1100, 15000,
        ],
        backgroundColor: "#3b81f6",
      },
    ],
  };

  const yearlyData = {
    labels: [2024, 2025, 2026, 2027, 2028, 2029, 2030],
    datasets: [
      {
        label: "Weekly data",
        data: [13000, 0, 0, 0, 0, 0, 0],
        backgroundColor: "#3b81f6",
      },
    ],
  };

  const filters = {
    weekly: weeklyData,
    monthly: monthlyData,
    yearly: yearlyData,
  };

  const [dataFilter, setDataFilter] = useState(weeklyData);

  const options = {};

  const amountStats = [
    {
      title: "Total amount recieved",
      value: Math.random(9999) * 100000,
      data: dataFilter,
    },
    {
      title: "Total amount recieved",
      value: Math.random(9999) * 100000,
      data: dataFilter,
    },
    {
      title: "Total amount for donation",
      value: Math.random(9999) * 100000,
      data: dataFilter,
    },
    {
      labels: ["Donation", "Platforn tip"],
      datasets: [
        {
          data: [75, 25],
          backgroundColor: ["#3b81f6", "lightskyblue"],
        },
      ],
    },
  ];

  const transactionStats = [
    {
      title: "Total transaction initiated",
      value: Math.random(9999) * 100000,
      data: dataFilter,
    },
    {
      title: "Total successful transaction",
      value: Math.random(9999) * 100000,
      data: dataFilter,
    },
    {
      title: "Total unsuccessful transaction",
      value: Math.random(9999) * 100000,
      data: dataFilter,
    },
    {
      labels: ["Successful", "Unsuccessful"],
      datasets: [
        {
          data: [90, 10],
          backgroundColor: ["#3b81f6", "lightskyblue"],
        },
      ],
    },
  ];

  return (
    <section className="px-6 py-2 space-y-6">
      <div className={`flex bg-blue-100 p-2 gap-2 rounded-lg`}>
        {Object.keys(filters).map((filter, index) => {
          return (
            <button
              className={`px-4 py-1 rounded capitalize ${
                JSON.stringify(filters[filter]) == JSON.stringify(dataFilter) &&
                "bg-white text-blue-500"
              }`}
              onClick={() => setDataFilter(filters[filter])}
              key={index}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="grid3">
        {amountStats.map((data, index) => {
          if (index > 2)
            return (
              <div className="p-4 bg-white rounded-md">
                <Pie data={data} />
              </div>
            );

          return (
            <div
              className="grid content-between p-4 bg-white rounded-md"
              key={index}
            >
              <div className="space-y-4">
                <div className="text-slate-500">{data.title}</div>
                <div className="font-[600]">{INRFormat(data.value)}</div>
              </div>
              <Bar data={data.data} options={options} />
            </div>
          );
        })}
      </div>
      <div className="grid3">
        {transactionStats.map((data, index) => {
          if (index > 2)
            return (
              <div className="p-4 bg-white rounded-md">
                <Pie data={data} />
              </div>
            );

          return (
            <div
              className="grid content-between p-4 bg-white rounded-md"
              key={index}
            >
              <div className="space-y-4">
                <div className="text-slate-500">{data.title}</div>
                <div className="font-[600]">{INRFormat(data.value)}</div>
              </div>
              <Bar data={data.data} />
            </div>
          );
        })}
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
