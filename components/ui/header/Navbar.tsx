import React from "react";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/header/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/header/avatar";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap p-3">
        <div className="flex items-center flex-shrink-0 text-white mr-6">

          <span className="font-semibold text-3xl text-md tracking-tight flex flex-col items-center pl-10">
            Drivoxe
          </span>
        </div>
        <div className="items-center lg:hidden text-black border-grey-400 hover:text-white hover:border-white">
          <button className="flex items-center px-3 py-2 border rounded text-black border-grey-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:justify-center">
          <div className="text-md space-x-10 lg:flex-grow items-center lg:flex lg:justify-center">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4"
            >
              Serviços
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4"
            >
              Carros
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0  hover:text-white"
            >
              Preços
            </a>
          </div>
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>HA</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Pagamento</DropdownMenuItem>
                  <DropdownMenuItem>Time</DropdownMenuItem>
                  <DropdownMenuItem>Inscriçã</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;