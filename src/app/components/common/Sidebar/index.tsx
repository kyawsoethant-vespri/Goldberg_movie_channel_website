"use client";
import React, { useState } from "react";
import { FaAngleLeft, FaForumbee } from "react-icons/fa6";
import Button from "../../utils/Button";
import { menus } from "@/constants";
import Link from "next/link";

const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex relative">
      <div
        className={`bg-dark-purple h-screen ${
          open ? "w-72" : "w-20"
        } p-5 pt-8 duration-700 fixed`}
      >
        <FaAngleLeft
          className={`text-dark-purple bg-white rounded-full text-3xl absolute -right-3 border border-dark-purple cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />

        {/* Sidebar Logo */}
        <Link href={"/"}>
          <div className="flex items-center gap-3">
            {open && (
              <>
                <FaForumbee className="text-amber-300 text-xl block" />
                <h1
                  className={`font-bold text-xs text-rose-50 truncate overflow-hidden`}
                >
                  Goldberg Movie & News
                </h1>
              </>
            )}
          </div>
        </Link>

        {/* Sidebar Menus */}
        <div className="flex flex-col ml-5">
          {menus.map((menu) => {
            if (menu.url) {
              return (
                <div className="mt-9" key={menu.id}>
                  {open && (
                    <Button
                      type={"button"}
                      text={menu.name}
                      alternative={"secondaryBtn"}
                      url={menu.url}
                    />
                  )}
                </div>
              );
            } else {
              return (
                <div
                  className="text-white px-8 py-4 rounded-md pt-12"
                  key={menu.id}
                >
                  {open && <div>hello</div>}
                </div>
              );
            }
          })}
        </div>
      </div>

      <div className="p-7 text-2xl font-semibold ms-20">
        <h1>Home page</h1>
      </div>
    </div>
  );
};

export default SideBar;
