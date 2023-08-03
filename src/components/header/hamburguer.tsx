"use client";

import Link from "next/link";
import { useState } from "react";

type HamburguerProps = {
  links: { name: string; href: string }[];
};

export function Hamburguer(props: HamburguerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="relative text-zinc-400 lg:hidden"
        onClick={() => setOpen((v) => !v)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>

        {open && (
          <div className="absolute bottom-0 right-0 translate-y-full rounded-md border bg-white shadow-md">
            <nav>
              <ul className="">
                {props.links.map((link) => (
                  <li
                    key={link.name}
                    className="px-8 py-4 duration-200 hover:bg-gray-200"
                  >
                    <Link
                      href={link.href}
                      className="font-bold text-neutral-500"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </button>
    </>
  );
}
