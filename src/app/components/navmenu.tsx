import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  // AcademicCapIcon,
  // FaceSmileIcon,
  // RectangleGroupIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

export default function Navmenu() {
  return (
    <Menu>
      <MenuButton className="p-3 hover:bg-sky-400 text-sky-50 data-[open]:text-sky-50 data-[open]:bg-sky-400 data-[open]:border-sky-50 rounded-md transition duration-200 ease-in-out border border-sky-50">
        <Bars3Icon className="w-8 h-8" />
      </MenuButton>
      <MenuItems
        anchor="bottom end"
        transition={true}
        className="flex flex-col mt-2 p-2 z-50 text-sky-50 transition duration-200 ease-in-out bg-sky-400 shadow-lg rounded-md data-[closed]:-translate-y-1 data-[closed]:opacity-0"
      >
        <MenuItem>
          <Link
            href=""
            className="flex border-b-1 bg-gradient-to-b from-sky-500 border-sky-50 px-4 py-2 font-bold rounded-t-md"
            target="_blank"
          >
            Sign Up
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="" className="flex px-4 py-2 font-semibold  border-b-1 border-sky-50">
            Log In
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="" className="flex px-4 py-2 font-semibold  border-b-1 border-sky-50">
            Pricing
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            href=""
            className="flex px-4 py-2 font-semibold"
          >
            {/* <FaceSmileIcon className="w-6 h-6 mr-2" /> */}
            About Us
          </Link>
        </MenuItem>        
      </MenuItems>
    </Menu>
  );
}
