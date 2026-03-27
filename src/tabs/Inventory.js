import { useEffect, useState } from "react";
import { getInventory } from "../services/api";

export default function Inventory() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getInventory().then(setItems);
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Products Inventory</h1>
            <div className="bg-white rounded-2xl shadow-sm border-l-4 border-r-4 border-pink-400">
                <table className="w-full text-left">
                    <thead className="bg-gray-100 border-b">
                        <tr>
                            <th class="p-4 font-bold text-sm">Product Name</th>
                            <th class="p-4 font-bold text-sm text-center">In Stock</th>
                            <th class="p-4 font-bold text-sm text-center">Reserved</th>
                            <th class="p-4 font-bold text-sm">Status</th>
                            <th class="p-4 font-bold text-sm text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {items.map((item) => (
                            <tr key={item.id}>
                                <td className="p-4 font-medium">{item.name}</td>
                                <td className="p-4 text-center">{item.stoke}</td>
                                <td className="p-4 text-center">{item.reserved || 0}</td>
                                <td className="p-4">
                                    <span
                                        className={`px-2 py-1 text-xs font-bold rounded ${item.stock > 10
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {item.stock > 10 ? "ACTIVE" : "LOW STOCK"}
                                    </span>
                                </td>
                                <td className="p-4 text-right">
                                    <button className="text-blue-600 font-bold text-sm">
                                        Update Stock
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


         

        </div>
    );
}