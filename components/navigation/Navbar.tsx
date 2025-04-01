"use client";

import "@/css/navbar.css";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

import { getCookie } from "cookies-next/client";
import { usePathname } from "next/navigation";
import { IconLockSquareRoundedFilled, IconMenu2 } from "@tabler/icons-react";

function Navbar() {
  const token = getCookie("token");
  const pathname = usePathname();

  return (
    <div className="navbar grid">
      <div className={`links flex gap-4`}>
        <Link
          className={`${pathname == "/" ? "font-medium" : "opacity-70"}`}
          href="/"
        >
          Home
        </Link>
        {token ? (
          <>
            <Link
              className={`${
                pathname.startsWith("/saved") ? "font-medium" : "opacity-70"
              }`}
              href="/saved"
            >
              Saved
            </Link>
            <Link
              className={`${
                pathname.startsWith("/hub") ? "font-medium" : "opacity-70"
              }`}
              href="/hub"
            >
              Rent & List Hub
            </Link>
          </>
        ) : (
          <>
            <span
              title="Login to view saved properties"
              className="flex gap-1 items-center relative  justify-center cursor-default"
            >
              <span className="opacity-70"> Saved</span>

              <span className="opacity-50">
                <IconLockSquareRoundedFilled color="#080e1c" />
              </span>
            </span>

            <span
              title="Login to access the Rent & List Hub"
              className="flex gap-1 items-center relative  justify-center cursor-default"
            >
              <span className="opacity-70">Rent & List Hub</span>
              <span className="opacity-50">
                <IconLockSquareRoundedFilled color="#080e1c" />
              </span>
            </span>
          </>
        )}
      </div>

      <Link href="/">
        <Image className="logo" src={logo} alt="ApoRent Logo" />
      </Link>

      <div className="menu flex gap-3 items-center justify-end">
        <span className="menu-btn ml-auto cursor-pointer">
          <IconMenu2 color="#080e1c" />
        </span>

        <Link href="/auth/login" className="cta-2">
          Login
        </Link>
        <Link href="/auth/signup" className="cta">
          Signup
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
