import Link from "next/link";
import Navmenu from "./navmenu";
import {
  AcademicCapIcon,
  FaceSmileIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/solid";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-sky-300 text-sky-50 sticky top-0 shadow-md z-50">
      <Link
        href="/"
        className="text-xl font-bold p-4 hover:bg-sky-400 rounded-md transition duration-200 ease-in-out border border-sky-50"
      >
        Cloud Video Converter App
      </Link>
      <div className="md:hidden">
        <Navmenu />
      </div>
      <div className="hidden md:flex flex-row items-center space-x-2 text-lg">
        <Link
          href=""
          className="flex hover:bg-gradient-to-b hover:from-sky-400 hover:to-sky-300 p-4 font-bold rounded-t-md"
        >
          <RectangleGroupIcon className="w-6 h-6 mr-2" />
          Pricing
        </Link>
        <Link
          href=""
          className="flex hover:bg-gradient-to-b hover:from-sky-400 hover:to-sky-300 p-4 font-bold rounded-t-md"
        >
          <FaceSmileIcon className="w-6 h-6 mr-2" />
          About Us
        </Link>
        <Link
          href=""
          className="flex hover:bg-gradient-to-b hover:from-sky-400 hover:to-sky-300 p-4 font-bold rounded-t-md"
          target="_blank"
        >
          <AcademicCapIcon className="w-6 h-6 mr-2" />
          Sign In
        </Link>
      </div>
    </nav>
  );
}
