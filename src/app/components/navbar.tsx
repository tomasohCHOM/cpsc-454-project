import Link from "next/link";
import Navmenu from "./navmenu";
import { AcademicCapIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-sky-400 text-sky-50 sticky top-0 shadow-md z-50">
      <Link
        href="/"
        className="flex flex-row text-xl font-bold p-4 hover:bg-gradient-to-b hover:from-sky-500 hover:to-sky-400 rounded-md transition duration-200 ease-in-out"
      >
        <AcademicCapIcon className="w-6 h-6 mr-2" />
        Awesome Team
      </Link>
      <div className="md:hidden">
        <Navmenu />
      </div>
      <div className="hidden md:flex flex-row items-center space-x-2 text-lg">
        <Link
          href=""
          className="flex hover:bg-gradient-to-b hover:from-sky-500 hover:to-sky-400 p-4 font-bold rounded-t-md"
        >
          Pricing
        </Link>
        <Link
          href=""
          className="flex hover:bg-gradient-to-b hover:from-sky-500 hover:to-sky-400 p-4 font-bold rounded-t-md"
        >
          About Us
        </Link>
        <Link
          href="/login"
          className="flex hover:bg-gradient-to-b hover:from-sky-500 hover:to-sky-400 p-4 font-bold rounded-t-md"
        >
          Log In
        </Link>
        <Link
          href="/signup"
          className="ml-2 flex hover:bg-gradient-to-b hover:from-sky-500 hover:to-sky-400 p-4 font-bold rounded-md border-1 border-sky-50"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
