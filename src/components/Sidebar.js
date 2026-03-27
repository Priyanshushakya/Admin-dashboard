import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="flex h-screen overflow-hidden">
            <div class="w-64 bg-slate-900 text-slate-300 flex-shrink-0 hidden md:block">
                <h2 className="p-6 text-white text-2xl text-center font-bold border-b border-slate-700 italic ">RayOfLight</h2>

                <div className="mt-7 space-y-2 px-4 flex flex-col">
                    <NavLink to="/sales" className={({isActive}) => `shadow p-2 rounded-lg text-xl font-semibold  px-3 ${isActive ? "bg-orange-500" : ""}`}>Sales</NavLink>

                    <NavLink to="/inventory" className={({isActive}) => `shadow p-2 rounded-lg text-xl font-semibold  px-3 ${isActive ? "bg-orange-500" : "" }`}>Inventory</NavLink>

                    <NavLink to="/payments" className={({isActive}) => `shadow p-2 rounded-lg text-xl font-semibold  px-3 ${isActive ? "bg-orange-500" : ""}`}>Payments</NavLink>

                    <NavLink to="/shipments" className={({isActive}) => `shadow p-2 rounded-lg text-xl font-semibold  px-3 ${isActive ? "bg-orange-600" : ""}`}>Shipment</NavLink>
                </div>

            </div>
        </div>
    );
}