import Link from "next/link";
import { FaHome, FaBed, FaCalendarAlt, FaUser, FaBox, FaFileInvoice, FaUsers, FaUserShield, FaKey, FaSignOutAlt } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-gray-100 flex flex-col fixed left-0 top-0">
      {/* Logo */}
      <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-700">
        <div className="w-8 h-8 bg-purple-600 rounded"></div>
        <span className="text-lg font-bold">Hotel Project</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          <li>
            <Link href="/dashboard" className="flex items-center gap-3 p-2 rounded hover:bg-gray-800">
              <FaHome /> Dashboard
            </Link>
          </li>
          <li>
            <Link href="/rooms" className="flex items-center gap-3 p-2 rounded hover:bg-gray-800">
              <FaBed /> Rooms
            </Link>
          </li>
          <li>
            <Link href="/reservas" className="flex items-center gap-3 p-2 rounded hover:bg-gray-800">
              <FaCalendarAlt /> Reservations
            </Link>
          </li>
          <li>
            <Link href="/clientes" className="flex items-center gap-3 p-2 rounded hover:bg-gray-800">
              <FaUser /> Guests
            </Link>
          </li>
          <li>
            <Link href="/products" className="flex items-center gap-3 p-2 rounded hover:bg-gray-800">
              <FaBox /> Products
            </Link>
          </li>
          <li>
            <Link href="/billing" className="flex items-center gap-3 p-2 rounded hover:bg-gray-800">
              <FaFileInvoice /> Billing
            </Link>
          </li>
          <li>
            <Link href="/users" className="flex items-center gap-3 p-2 rounded hover:bg-gray-800">
              <FaUsers /> Users
            </Link>
          </li>
          <li>
            <Link href="/roles" className="flex items-center gap-3 p-2 rounded hover:bg-gray-800">
              <FaUserShield /> Roles
            </Link>
          </li>
          <li>
            <Link href="/permissions" className="flex items-center gap-3 p-2 rounded hover:bg-gray-800">
              <FaKey /> Permissions
            </Link>
          </li>
        </ul>
      </nav>

      {/* Logout */}
      <div className="px-4 py-4 border-t border-gray-700">
        <Link href="/login" className="flex items-center gap-3 p-2 rounded hover:bg-red-600 hover:text-white">
          <FaSignOutAlt /> Logout
        </Link>
      </div>
    </aside>
  );
}