import { PizzaIcon } from "lucide-react";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-orange-500 inline-flex items-center gap-1"
        >
          <PizzaIcon /> Zwiggy
        </NavLink>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium ${isActive ? "text-orange-500" : "text-gray-600"}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `font-medium ${isActive ? "text-orange-500" : "text-gray-600"}`
            }
          >
            Menu
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `font-medium ${isActive ? "text-orange-500" : "text-gray-600"}`
            }
          >
            Cart
          </NavLink>

          {/* <NavLink
            to="/login"
            className="rounded-lg bg-orange-500 px-4 py-2 font-medium text-white hover:bg-orange-600"
          >
            Login
          </NavLink> */}
        </nav>
      </div>
    </header>
  );
}
