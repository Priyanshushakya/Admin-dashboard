import { useEffect, useState } from "react";
import { getPayments } from "../services/api";

export default function Payments() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getPayments().then(setData);
    }, []);

    if (!data) return <p>Loading...</p>;
    console.log(data);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Payments</h1>

            <div className="grid grid-cols-1 gap-4">
                 {data.map((p) => (
                <div  key={p.id} className="bg-white p-4 rounded-xl border flex justify-between items-center shadow-sm">
                   
                    <div>
                        <p className="font-bold text-slate-700">{p.id}</p>
                        <p className="font-bold text-slate-400">{p.date}</p>
                    </div>

                    <div className="text-right">
                            <p className="font-black text-green-600">₹{p.amount}</p>
                            <p className="text-xs font-bold text-green-700"><span
                        className={
                            p.status === "CAPTURED"
                                ? "text-green-500"
                                : p.status === "FAILED"
                                    ? "text-red-500"
                                    : "text-yellow-500"
                        }
                    >
                        {p.status}
                    </span></p>
                        </div>
                     
                </div>
                 ))}
            </div>

            
                {/* <div key={p.id}>
                    
                    <p></p>

                    
                </div> */}
          
        </div>
    );
}