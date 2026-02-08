"use client";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Navslide: React.FC<NavProps> = (props: NavProps) => {
const [open, setopen] = React.useState(false);
const spanRef = React.useRef<HTMLSpanElement>(null);
  return (
    <nav className={`${props.bgColor} text-black`}>
        {/* Desktop Style */}
      <div className="hidden md:flex">
        <ul className={`${props.textColor} flex gap-4 p-4`}>
          {props.activeItems.map((item: string, index: number) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
      {/* Mobile Style */}
      <div className="relative flex ">
        <button
          onClick={() => setopen(!open)}
          className={`${props.textColor} p-4 md:hidden flex justify-end`}
          aria-label="open Menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        {open && (
          <ul
            className={`${props.textColor} relative flex flex-col gap-4 p-4 md:hidden`}
          >
            <span></span>
            {props.activeItems.map((item: string, index: number) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        )}
      </div>
    </nav>
  );
};
