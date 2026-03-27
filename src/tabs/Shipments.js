import { useEffect, useState } from "react";
import { getShipments } from "../services/api";

export default function Shipments() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getShipments().then(setData);
  }, []);

  if (!data) return <p>Loading...</p>;
  console.log(data);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Shipments</h1>
      <div className="bg-white p-6 rounded-2xl shadow-sm border">
        <div className="relative pl-8 border-l-2 border-blue-200 space-y-8">
           {data.map((s) => (
          <div className="relative">
           
            <div key={s.orderId} className="absolute -left-[41px] bg-blue-600 w-4 h-4 rounded-full border-4 border-white"></div>
            <p className="font-bold text-sm">{s.orderId}<span className="text-blue-600">{s.status}</span></p>
            <p className="text-xs text-slate-500">{s.city}</p>
           
         </div>
          ))}


        </div>
      </div>

      
    </div>
  );
}