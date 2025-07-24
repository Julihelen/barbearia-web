import React from "react";
import {
  LayoutDashboardIcon,
  ScissorsIcon,
  CalendarIcon,
  UsersIcon,
} from "lucide-react";

function NavItem({ icon, label, active = false }) {
  return (
    <li>
      <a
        href="#"
        className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
          active
            ? "bg-custom-gold text-white"
            : "text-custom-gold hover:bg-custom-gold/20"
        }`}
      >
        <span className="mr-3">{icon}</span>
        <span className="text-sm font-medium">{label}</span>
      </a>
    </li>
  );
}

export function SideBar() {
  return (
    <aside className="w-64 min-h-screen bg-custom-bg bg-opacity-95">
      <div className="py-8 px-4 flex justify-center">
        <h2 className="text-custom-gold text-lg font-light tracking-wider">
          BARBEARIA CHEFE
        </h2>
      </div>
      <nav className="py-4">
        <ul className="space-y-2 px-3">
          <NavItem icon={<LayoutDashboardIcon size={20} />} label="Dashboard" active />
          <NavItem icon={<ScissorsIcon size={20} />} label="Serviços" />
          <NavItem icon={<CalendarIcon size={20} />} label="Agendamentos" />
          <NavItem icon={<UsersIcon size={20} />} label="Barbeiros" />
        </ul>
      </nav>
    </aside>
  );
}
