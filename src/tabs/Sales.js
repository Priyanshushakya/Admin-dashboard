import { useEffect, useState } from "react";
import { getSalesData } from "../services/api";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);


export default function Sales() {
    const [data, setData] = useState(null);

    useEffect(() => {
        getSalesData().then(setData);
    }, []);

    const chartData = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                label: "Orders",
                data: [12, 19, 10, 15, 22, 30, 18],
                borderColor: "blue",
                backgroundColor: "lightblue",
            },
        ],
    };

    if (!data) return <p>Loading...</p>;
    console.log(data);

    return (
        <div className="m-4">
            <h1 className="text-3xl font-bold mb-6">Sales Summary</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">


                <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-blue-500">
                    <p className="text-gray-500 text-sm font-bold uppercase">Today's Revenue </p>
                    <h3 className="text-2xl font-black">₹{data.todayRevenue}</h3>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-green-500">
                    <p className="text-gray-500 text-sm font-bold uppercase">Orders </p>
                    <h3 className="text-2xl font-black"> {data.todayOrders}</h3>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-red-500">

                    <h2 className="text-gray-500 text-sm font-bold uppercase">Top Products</h2>
                    {data.topProducts?.map((p, i) => (
                        <p key={i}>
                            {p.name} - {p.sold} sold
                        </p>

                    ))}
                </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border">
                <h4 className="font-bold mb-4">Weekly Order Trend</h4>
                <Line data={chartData} />
            </div>
        </div>
    );
}